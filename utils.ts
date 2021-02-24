/**
 *
 * @param numStr string
 *
 * add a number string with every 3 digit commas.
 */
export const addCommasString = (numStr: string) => {
  return numStr.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}