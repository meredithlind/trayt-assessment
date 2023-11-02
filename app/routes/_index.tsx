import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Bank of Trayt' },
    { name: 'description', content: 'Bank of Trayt' },
  ]
}

export default function Index() {
  return (
    <div className="flex-col justify-center">
      <p className="text-3xl text-blue-700">Welcome to the Bank of Trayt</p>

      <p className="text-xl text-blue-700">
        Initiate a new Direct Deposit to earn 5% for 36 months!
      </p>

      <Link to="/new-deposit">Learn More</Link>
    </div>
  )
}
