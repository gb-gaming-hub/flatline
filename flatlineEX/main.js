'use strict'

const irc = require('irc');
const _ = require('underscore');

const config = require('./config');

console.log('got config: ', config);
const bot = new irc.Client(config.server, config.botName, {
  userName: config.userName,
  channels: config.channels
});

bot.addListener('join', function(channel, who){
  console.log('DEBUG:: got join');
});

bot.addListener('message', function(from, to, text, message){
  if(!/^!/.test(text)) {
    bot.say(to, 'Does not compute.');
    return;
  }

  const regex = /^!(.*?)(\ (.*))?$/;
  const matches = regex.exec(text);

  if(matches[1] === 'about') {
    bot.say(to, `ABOUT_ROUTINE::flatlineEX.0.1.0+vbomb::For glorious make benefit of IRC and global real cash economy.`);
  } else if(matches[1] === 'hello') {
    bot.say(to, `Sap ${from}.`);
  }
});

//bot.addListener('ping', (server) => {
  //console.log('DEBUG:: Got ping..');
//});

//bot.addListener('raw', (msg) => {
  //console.log('DEBUG:: raw message');
  //console.log(msg);
//});

//bot.addListener('error', (msg) => {
  //console.log('DEBUG:: error message');
  //console.log(msg);
//});
