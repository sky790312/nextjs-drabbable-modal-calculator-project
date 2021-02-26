import { addCommas, isMobile } from '@/utils'

describe('addCommas spec', () => {
  it('should add commas to integer number or string correctly', () => {
    const num1 = 1111
    expect(addCommas(num1)).toBe('1,111')
    const str1 = '1111'
    expect(addCommas(str1)).toBe('1,111')
    const str2 = '-1111'
    expect(addCommas(str2)).toBe('-1,111')
  })

    it('should add commas to a decimal number or string correctly', () => {
    const num1 = 1111.1111
    expect(addCommas(num1)).toBe('1,111.1111')
    const str1 = '1111.1111'
    expect(addCommas(str1)).toBe('1,111.1111')
    const str2 = '-1111.1111'
    expect(addCommas(str2)).toBe('-1,111.1111')
  })
})

describe('isMobile spec', () => {
  it('should detect userAgent correctly', () => {
    const userAgent1 = 'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Mobile Safari/537.36'
    expect(isMobile(userAgent1)).toBe(true)
    const userAgent2 = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36'
    expect(isMobile(userAgent2)).toBe(false)
  })
})
