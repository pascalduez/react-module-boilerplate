import path from 'path';
import slug from 'unique-slug';

export function namer(file, selector) {
  let name = path.basename(file, '.css');
  let hash = slug(path.relative(process.cwd(), file));

  return `${name}-${selector}__${hash}`;
}
