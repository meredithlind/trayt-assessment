import { useNavigation } from '@remix-run/react'

export default function CompoundInterestCalculator() {
  const interest = 0
  const navigation = useNavigation()

  console.log(navigation)

  return (
    <div>
      <p className="text-xl text-blue-800 mb-6">Compound Interest Calculator</p>

      <button className="bg-blue-800 text-white rounded px-6 py-1">
        Calculate
      </button>

      <p>${interest}</p>
    </div>
  )
}
