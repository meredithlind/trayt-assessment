import type { FormData } from '~/core/form-schema'

export function calculateInterestAndPrincipal({
  deposit,
  frequency,
  months,
}: {
  deposit: number
  frequency: FormData['frequency']
  months: number
}): { earnedInterest: number; totalContributions: number } {
  const monthlyInterestRate = 0.05
  const reducedInterestRate = 0.02

  let totalInterest = 0
  const totalMonthlyDeposit =
    frequency === 'Twice per Month' ? deposit * 2 : deposit

  if (months > 36) {
    const totalAmountFor36Months = calculateCompoundInterest({
      totalMonthlyDeposit,
      interestRate: monthlyInterestRate,
      months: 36,
    })

    const totalAmountAfter36Months = calculateCompoundInterest({
      totalMonthlyDeposit,
      interestRate: reducedInterestRate,
      months: months - 36,
    })

    totalInterest = totalAmountFor36Months + totalAmountAfter36Months
  } else {
    totalInterest = calculateCompoundInterest({
      totalMonthlyDeposit,
      interestRate: monthlyInterestRate,
      months,
    })
  }

  return {
    earnedInterest: Math.round(totalInterest),
    totalContributions: Math.round(totalMonthlyDeposit * months),
  }
}

const calculateCompoundInterest = ({
  totalMonthlyDeposit,
  months,
  interestRate,
}: {
  totalMonthlyDeposit: number
  months: number
  interestRate: number
}) => {
  return (
    totalMonthlyDeposit *
    ((Math.pow(1 + interestRate, months) - 1) / interestRate)
  )
}
