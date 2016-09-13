var assert = require('assert');
var chai = require('chai');
var iso8601 = require('../');

describe('iso8601', function() {

  it('should parse this date', function() {
    var date = "2016-09-08T16:03:07.817Z";
    var expected = new Date(date);
	
    assert.deepEqual(iso8601(date), expected);
  });

  it('should parse this date too', function() {
    var date = "2016-09-08T16:03:07.817Z";
    var expected = new Date(date);
	
    assert.deepEqual(iso8601(date), expected);
  });

  it('should not parse this date', function() {
    var date = "2016-tuesday-08T00:00:00.0Z";
    var expected = new Date(date);
	
    //chai.expect(function(){toMongodb(patches)}).to.throw('Unsupported Operation! op = move');
	assert.notStrictEqual(iso8601(date), expected);
  });
});
