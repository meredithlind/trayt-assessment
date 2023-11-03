import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import { calculateInterestAndPrincipal } from '~/core/calculate-interest'

import type { FormData } from '~/core/form-schema'

export const loader: LoaderFunction = async ({ request }) => {
  const { searchParams } = new URL(request.url)
  const amount = searchParams.get('amount')
  const frequency = searchParams.get('frequency')

  return json({ frequency, amount: amount ? parseInt(amount) : 0 })
}

export default function CompoundInterestCalculator() {
  const { amount: deposit, frequency } = useLoaderData<{
    amount: number
    frequency: FormData['frequency']
  }>()

  const [months, setMonths] = useState<number>()
  const [earnedInterest, setInterest] = useState<number>()
  const [totalContributions, setContributions] = useState<number>()

  const onCalculate = () => {
    if (months) {
      const { earnedInterest, totalContributions } =
        calculateInterestAndPrincipal({
          deposit,
          frequency,
          months,
        })

      setInterest(earnedInterest)
      setContributions(totalContributions)
    }
  }

  return (
    <>
      <p className="text-3xl text-blue-900 mb-8">
        Compound Interest Calculator
      </p>
      <div className="mb-8">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="months"
        >
          Enter number of months you plan to contribute:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={months}
          onChange={(event) => {
            setInterest(undefined)
            setContributions(undefined)
            setMonths(parseInt(event.target.value))
          }}
        />
      </div>

      <button
        disabled={!months}
        className="bg-blue-900 text-white rounded px-6 py-1 mb-16"
        onClick={onCalculate}
      >
        Calculate
      </button>

      {earnedInterest && totalContributions && (
        <>
          <p className="text-2xl mb-6">
            Deposit of ${deposit}, {frequency} for {months} month(s):
          </p>
          <p className="text-xl mb-6">Total interest: ${earnedInterest}</p>
          <p className="text-xl">
            Total in the bank: ${earnedInterest + totalContributions}
          </p>
        </>
      )}
    </>
  )
}
