import { slugify } from '../src/formats';

describe('formats', () => {
  it('should slugify text', () => {
    expect(slugify('Hello World')).toBe('hello-world');
    expect(slugify('AAAAAAAAAA bbb CCcCc')).toBe('aaaaaaaaaa-bbb-ccccc');
  });
});
