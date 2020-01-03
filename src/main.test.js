import vacillate from './main.js';

beforeEach(() => jest.spyOn(console, 'log'));

afterEach(jest.resetAllMocks);

describe('vacillate', () => {
  it('is a function', () => {
    expect(vacillate).toBeInstanceOf(Function);
  });

  it('returns one of the options', () => {
    const options = ['work out', 'play video games'];
    const result = vacillate(...options);

    expect(options).toContain(result);
  });

  it('logs the process of vacillation', () => {
    jest.spyOn(Math, 'ceil').mockImplementation(() => 5);
    const options = ['work out', 'play video games'];
    const result = vacillate(...options);

    expect(console.log).toHaveBeenCalledTimes(10);
    expect(console.log).toHaveBeenLastCalledWith(`${result}! (vacillated 10 times)`)
  });
});
