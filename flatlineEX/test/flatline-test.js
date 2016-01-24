'use strict';

const _ = require('underscore');
const should = require('should');
const config = require('../config');
const MockClient = require('./mocks/irc-mock');
const Flatline = require('../lib/flatline');

let mockClient = null;
let fl = null;

describe('flatline class', function() {
  beforeEach(function() {
    mockClient = new MockClient();
    fl = new Flatline(mockClient);
  });

  it('should have a client reference after construction', function() {
    should.exist(fl._bot);
  });

  it('should subscribe to expected listeners', function() {
    fl.init();
    const expectedSubs = ['join', 'message'];
    const lm = mockClient.listenerMap;
    _.each(expectedSubs, (event) => {
      lm.should.have.property(event).which.exists;
    });
  });
});

