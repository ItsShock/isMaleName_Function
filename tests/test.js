const isMaleName = require('..');

describe('Funkcja isMaleName', () => {
  it('powinna zwrócić wartość typu boolean', async () => {
    const result = isMaleName('test');

    expect(typeof result).toBe('boolean');
  });

  it('powinna zwrócić false gdy ostatnia litera imienia to "a"', async () => {
    expect(isMaleName('Aga')).toBe(false);
    expect(isMaleName('AGA')).toBe(false);
    expect(isMaleName('KAtARZYNA')).toBe(false);
    expect(isMaleName('Daria')).toBe(false);
  });

  it('powinna zwrócić true gdy ostatnią literą imienia nie jest "a"', async () => {
    expect(isMaleName('Tomek')).toBe(true);
    expect(isMaleName('Bartosz')).toBe(true);
    expect(isMaleName('JAN')).toBe(true);
    expect(isMaleName('Zbysiu')).toBe(true);
  });

  it('powinna zwrócić true gdy imieniem jest "Bonawentura"', async () => {
    expect(isMaleName('Bonawentura')).toBe(true);
    expect(isMaleName('BONAWENTURA')).toBe(true);
    expect(isMaleName('bonawentura')).toBe(true);
  });
});
