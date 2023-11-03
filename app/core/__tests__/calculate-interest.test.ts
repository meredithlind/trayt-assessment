import { calculateTotalCompoundInterest } from '../calculate-interest'

describe('Calculate Interest', () => {
  it.each`
    deposit | frequency            | months | expectedInterest | expectedTotal
    ${50}   | ${'Once per Month'}  | ${1}   | ${2.5}           | ${50 + 2.5}
    ${100}  | ${'Twice per Month'} | ${1}   | ${10}            | ${200 + 10}
    ${100}  | ${'Once per Month'}  | ${12}  | ${471.3}         | ${1200 + 471.3}
    ${100}  | ${'Twice per Month'} | ${12}  | ${942.6}         | ${2400 + 942.6}
    ${100}  | ${'Once per Month'}  | ${36}  | ${6462.81}       | ${10062.81}
    ${100}  | ${'Once per Month'}  | ${48}  | ${9330.11}       | ${4800 + 9330.11}
  `(
    'for a deposit of $deposit, $frequency for $months month(s)',
    ({ deposit, frequency, months, expectedInterest, expectedTotal }) => {
      const { earnedInterest, totalAmount } = calculateTotalCompoundInterest({
        deposit,
        frequency,
        months,
      })
      expect(earnedInterest).toEqual(expectedInterest)
      expect(totalAmount).toEqual(expectedTotal)
    }
  )
})
