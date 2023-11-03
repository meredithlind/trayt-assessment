import type { FormData } from '~/core/form-schema'

export const calculateTotalCompoundInterest = ({
  deposit,
  frequency,
  months,
}: {
  deposit: number
  frequency: FormData['frequency']
  months: number
}) => {
  let totalAmount = 0
  let monthlyInterestRate = 0.05

  const totalMonthlyDeposit =
    frequency === 'Twice per Month' ? deposit * 2 : deposit

  for (let i = 1; i <= months; i++) {
    if (i > 36) {
      monthlyInterestRate = 0.02
    }
    totalAmount += totalMonthlyDeposit // Add monthly contribution
    totalAmount *= 1 + monthlyInterestRate // Apply monthly interest
  }
  const totalContributions = totalMonthlyDeposit * months
  return {
    totalAmount: roundToTwoDecimalPlaces(totalAmount),
    earnedInterest: roundToTwoDecimalPlaces(totalAmount - totalContributions),
    totalContributions,
  }
}

const roundToTwoDecimalPlaces = (num: number): number => {
  return Math.round(num * 100) / 100
}
