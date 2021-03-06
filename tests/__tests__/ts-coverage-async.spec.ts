import runJest from '../__helpers__/runJest';

describe('Typescript async coverage', () => {

  it('Should generate the correct async coverage numbers', () => {
    const result = runJest('../simple-async', ['--no-cache', '--coverage']);

    const output = result.stdout.toString();

    expect(output).toContain('Statements   : 66.67% ( 10/15 )');
    expect(output).toContain('Branches     : 33.33% ( 2/6 )');
    expect(output).toContain('Functions    : 66.67% ( 4/6 )');
    expect(output).toContain('Lines        : 61.54% ( 8/13 )');
  });

});
