import startServer from '../../server';
import Api from './Api';

startServer();

describe('API', () => {
  describe('get', () => {
    it('should method return an error ', async () => {
      const result = await Api.get({ url: '/not-found' });
      expect(result.hasError).toBe(true);
    });
  });

  describe('post', () => {
    it('should method return an error ', async () => {
      const result = await Api.post({ url: '/not-found' });
      expect(result.hasError).toBe(true);
    });
  });

  describe('put', () => {
    it('should method return an error ', async () => {
      const result = await Api.put({ url: '/not-found' });
      expect(result.hasError).toBe(true);
    });
  });

  describe('delete', () => {
    it('should method return an error ', async () => {
      const result = await Api.delete({ url: '/not-found' });
      expect(result.hasError).toBe(true);
    });
  });
});
