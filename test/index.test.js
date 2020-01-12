var assert = require('assert');
var iso8601 = require('../');

describe('iso8601', function() {
  it('Parses ISO8601 string date', function() {
    var date = "2016-09-08T16:03:07.817Z";
    var expected = new Date(date);
    assert.deepEqual(iso8601(date), expected);
  });

  it('Parses another ISO8601 string date', function() {
    var date = "1977-03-01T20:23:00.000Z";
    var expected = new Date(date);
    assert.deepEqual(iso8601(date), expected);
  });

  it('Should not parse this date', function() {
    var date = "2016-tuesday-08T00:00:00.0Z";
    var expected = new Date(date);
    assert.notStrictEqual(iso8601(date), expected);
    assert.strictEqual(iso8601(date), date);
  });
  
  it('Strings should pass through', function() {
    let arg = "bananas";
    let expected = arg;
    assert.equal(iso8601(arg), expected);
  });

  it('Numbers should pass through', function() {
    let arg = 42;
    let expected = arg;
    assert.strictEqual(iso8601(arg), expected);

    arg = 3.146;
    expected = arg;
    assert.strictEqual(iso8601(arg), expected);
  });

  it('Objects should pass through', function() {
    let arg = {who: "you", blue: 42};
    let shallowCopy = {...arg};
    assert.deepEqual(iso8601(arg), shallowCopy);
    assert.strictEqual(iso8601(arg), arg);
  });

  it('Dates should pass through', function() {
    var date = new Date(date);
    assert.deepEqual(iso8601(date), date);
  });
});
