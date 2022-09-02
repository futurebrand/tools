import { slugify, camelize } from '../src/formats';

describe('formats', () => {
  describe('slugify', () => {
    it('should slugify text', () => {
      expect(slugify('Hello World')).toBe('hello-world');
      expect(slugify('AAAAAAAAAA bbb CCcCc')).toBe('aaaaaaaaaa-bbb-ccccc');
      expect(slugify('Developers Weekly Talks')).toBe('developers-weekly-talks');
    });
  });

  describe('camelize', () => {
    it('should camelize text', () => {
      expect(camelize('hello-world')).toBe('helloWorld');
      expect(camelize('Hello World')).toBe('helloWorld');
      expect(camelize('Hello World ')).toBe('helloWorld');
    })
  })
});
