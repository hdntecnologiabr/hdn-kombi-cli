import Common from './common';

describe('common', () => {
  describe('camelCase function', () => {
    it('should return string in camelCase', () => {
      const camelCaseReturn = Common.camelCase('Camel case');

      expect(camelCaseReturn).toBe('camelCase');
    });
  });
});
