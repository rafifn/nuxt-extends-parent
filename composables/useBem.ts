/**
 * @summary a helper function to generate BEM-style classname
 * @param {string} block block name to initialize bemify function with
 * @returns closure that's callable with element and/or modifier
 */

export const useBem = (block: string) => {
  return (element = '', modifier = '') => {
    if (!element && !modifier) return block
    if (!modifier) return `${block}__${element}`
    if (!element) return `${block}--${modifier}`
    return `${block}__${element}--${modifier}`
  }
}
