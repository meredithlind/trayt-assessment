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
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to the Bank of Trayt</h1>

      <h3>Initiate a new Direct Deposit to earn 5% for 36 months!</h3>
      <Link to="/new-deposit">Learn More</Link>
    </div>
  )
}
