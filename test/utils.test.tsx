import { isNumberString, showYYMMSS, genRandomNumber } from '@/utils'

describe('isNumberString spec', () => {
  it('should check isNumberString correctly', () => {
    const notOnlyNumberString = '1a321321f'
    expect(isNumberString(notOnlyNumberString)).toBe(false)
    const onlyNumberString = '3212321'
    expect(isNumberString(onlyNumberString)).toBe(true)
  })
})

describe('showYYMMSS spec', () => {
  it('should format seconds string showYYMMSS correctly', () => {
    const time1 = {
      seconds: '59',
      showMMSS: '00:59',
    }
    expect(showYYMMSS(time1.seconds)).toBe(time1.showMMSS)
    const time2 = {
      seconds: '300',
      showMMSS: '05:00',
    }
    expect(showYYMMSS(time2.seconds)).toBe(time2.showMMSS)
    const time3 = {
      seconds: '3601',
      showMMSS: '60:01',
    }
    expect(showYYMMSS(time3.seconds)).toBe(time3.showMMSS)
  })
})

describe('genRandomNumber spec', () => {
  it('should check isNumberString correctly', () => {
    const randomNumberRange = {
      min: 1,
      max: 10,
    }
    expect(
      genRandomNumber(randomNumberRange.min, randomNumberRange.max)
    ).toBeGreaterThanOrEqual(randomNumberRange.min)
    expect(
      genRandomNumber(randomNumberRange.min, randomNumberRange.max)
    ).toBeLessThanOrEqual(randomNumberRange.max)
  })
})
