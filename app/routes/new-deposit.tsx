import { Link } from '@remix-run/react'

export default function NewDeposit() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>New Direct Deposit Enrollment</h1>

      {/* This should be a submit button that validates, records and routes to the interest page */}
      <Link to="/interest-calculator">Submit</Link>
    </div>
  )
}
