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
    <>
      <p className="text-3xl text-blue-700 mb-16">
        Welcome to the Bank of Trayt
      </p>

      <p className="text-xl text-blue-700 mb-16">
        Initiate a new Direct Deposit to earn 5% for 36 months!
      </p>

      <div>
        <Link
          to="/new-deposit"
          className="bg-blue-800 text-white rounded px-6 py-2"
        >
          Learn More
        </Link>
      </div>
    </>
  )
}
