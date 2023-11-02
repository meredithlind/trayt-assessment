export default function NewDeposit() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <p className="text-lg text-blue-700">New Direct Deposit Enrollment</p>
      <EnrollmentForm />
    </div>
  )
}

const EnrollmentForm = () => {
  const fields = ['Account Number', 'Routing Number', 'Amount', 'Frequency']
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {fields.map((field) => {
          return (
            <div key={field} className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                id={field}
              >
                {field}:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={field}
                type="text"
              />
            </div>
          )
        })}

        {/* This should be a submit button that validates, records and routes to the interest page */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
