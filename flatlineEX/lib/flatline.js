'use strict';

const irc = require('irc');
const _ = require('underscore');
const config = require('../config');

class Flatline {
  constructor(client) {
    this._bot = client;
  }
  init() {
    const self = this;
    this._bot.addListener(
      'join',function() { self._onJoin.apply(self, arguments); });
    this._bot.addListener(
      'message', function() { self._onMessage.apply(self, arguments) });
  }
  _onJoin(channel, who) {
    // TODO: Log
  }
  _onMessage(from, to, text, message) {
    if(!/^!/.test(text)) {
      this._bot.say(to, 'Does not compute.');
      return;
    }

    const regex = /^!(.*?)(\ (.*))?$/;
    const matches = regex.exec(text);

    if(matches[1] === 'about') {
      this._bot.say(to, config.plugins.info_string);
    } else if(matches[1] === 'hello') {
      this._bot.say(to, `Sap ${from}.`);
    }
  }
}

module.exports = Flatline;

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

