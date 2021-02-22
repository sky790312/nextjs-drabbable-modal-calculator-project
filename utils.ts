/**
 *
 * @param value string
 *
 * check if a string is contain number only.
 */
export const isNumberString = (value: string) => {
  const regexNumberOnly = /^[0-9\b]+$/
  return regexNumberOnly.test(value)
}
/**
 *
 * @param time string
 *
 * format a second time string to YY:MM:SS ex: showYYMMSS(61) => 00:01:01 (give 3661 seond will show 01:01:01)
 */
export const showYYMMSS = (time: number) => {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time - hours * 3600) / 60)
  const seconds = time - hours * 3600 - minutes * 60
  const showHours = hours < 10 ? '0' + hours : hours.toString()
  const showMinute = minutes < 10 ? '0' + minutes : minutes.toString()
  const showSecond = seconds < 10 ? '0' + seconds : seconds.toString()
  return `${showHours} : ${showMinute} : ${showSecond}`
}
/**
 *
 * @param min number
 * @param max number
 *
 * generate a ranom number by givin range. ex: genRandomNumber(1, 10) => 1 <= random number <= 10
 */
export const genRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
