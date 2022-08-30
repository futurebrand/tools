export const camelize = (string: string) => {
  return string
    .replace(/-/gi, ' ')
    .replace(/^\w|[A-Z]|\b\w/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};

export const slugify = (text: string = '') => {
  return text
    .toString()
    .normalize('NFKD')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};
