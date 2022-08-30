import { isEmail } from '../src/validations';

describe('validations', () => {
  const validEmails = [
    'email@example.com',
    'firstname.lastname@example.com',
    'email@subdomain.example.com',
    'firstname+lastname@example.com',
    'email@[123.123.123.123]',
    '“email”@example.com',
    '1234567890@example.com',
    'email@example-one.com',
    '_______@example.com',
    'email@example.name',
    'email@example.museum',
    'email@example.co.jp',
    'firstname-lastname@example.com',
  ];

  const invalidEmails = [
    'plainaddress',
    '#@%^%#$@#$@#.com',
    '@example.com',
    'Joe Smith <email@example.com>',
    'email.example.com',
    'email@example@example.com',
    '.email@example.com',
    'email.@example.com',
    'email..email@example.com',
    'email@example.com (Joe Smith)',
    'email@example',
    'email@111.222.333.44444',
    'email@example..com',
    'Abc..123@example.com',
    '“(),:;<>[]@example.com',
    'just"not"right@example.com',
    'this is"really"notallowed@example.com',
  ];

  describe('isEmail', () => {
    it('should return true for valid emails', () => {
      validEmails.forEach(email => {
        expect(isEmail(email)).toBe(true);
      });
    });
    it('should return false for invalid emails', () => {
      invalidEmails.forEach(email => {
        expect(isEmail(email)).toBe(false);
      });
    });
  });
});
