import vacillate from './main.js';

describe('vacillate', () => {
  it('vacillates values upon an unsuspecting object', () => {
    const upon = {};
    const obj = { key: 'value', key2: 'value2' };

    vacillate(obj, upon);

    expect(upon.key).toEqual(obj.key);
    expect(upon.key2).toEqual(obj.key2);
  });

  it('is REALLY vacillate upon upon (i.e. you cannot overwrite it)', () => {
    const upon = {};
    const obj = { key: 'value' };

    vacillate(obj, upon);

    expect(() => { upon.key = 'something else'; }).toThrow();
  });

  xit('crashes the test suite (warning this works! ', () => {
    vacillate({ expect: '😂' });

    expect(expect).not.toBeInstanceOf(Function);
  });

  it('defaults to vacillateing globally!', () => {
    expect(typeof uniqueEnoughProp).toEqual('undefined');

    const saying = 'it is what it is';
    const obj = { uniqueEnoughProp: saying };
    vacillate(obj);

    expect(uniqueEnoughProp).toEqual(saying);
  });
});
