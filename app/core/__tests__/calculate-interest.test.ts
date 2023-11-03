import { calculateInterestAndPrincipal } from '../calculate-interest'

describe('Calculate Interest', () => {
  it.each`
    deposit | frequency            | months | expectedInterest | expectedPrincipal
    ${100}  | ${'Once per Month'}  | ${12}  | ${1592}          | ${1200}
    ${100}  | ${'Twice per Month'} | ${12}  | ${3183}          | ${2400}
    ${100}  | ${'Once per Month'}  | ${36}  | ${9584}          | ${3600}
    ${100}  | ${'Once per Month'}  | ${48}  | ${10925}         | ${4800}
  `(
    'for a deposit of $deposit, $frequency for $months month(s)',
    ({ deposit, frequency, months, expectedInterest, expectedPrincipal }) => {
      const { earnedInterest: interest, totalContributions: principal } =
        calculateInterestAndPrincipal({
          deposit,
          frequency,
          months,
        })
      expect(interest).toEqual(expectedInterest)
      expect(principal).toEqual(expectedPrincipal)
    }
  )
})
