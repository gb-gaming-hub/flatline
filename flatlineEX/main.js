'use strict';

const config = require('./config');
const Flatline = require('./lib/flatline');

new Flatline(config).init();

