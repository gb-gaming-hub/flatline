'use strict';
// Mocked out irc client

class MockIrcClient {
  constructor() {
    this.listenerMap = {};
  }
  addListener(event, cb) {
    this.listenerMap[event] = cb;
  }
}

module.exports = MockIrcClient;
