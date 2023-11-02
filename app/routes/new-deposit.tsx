import type { ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData, useNavigate } from '@remix-run/react'
import { z } from 'zod'
import { zfd } from 'zod-form-data'

const schema = zfd.formData({
  accountNumber: z.string().regex(/^\d{8,17}$/),
  routingNumber: z
    .string()
    .regex(/^(00[0-9]|[0-1][0-9]|2[1-9]|[3][0-2]|[6-7][1-2]|80)[0-9]{7}$/),
  amount: z.string().regex(/[0-9]+(\.[0-9]{2})?$/),
  frequency: z.enum(['Twice per Month', 'Once per Month']),
})

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = schema.parse(await request.formData())
    return { formData, error: null }
  } catch (error) {
    return { error: error as z.ZodError }
  }
}

export default function NewDeposit() {
  const navigate = useNavigate()
  const actionData = useActionData<typeof action>()

  const handleSubmit = () => {
    console.log('Submit Called. Navigating to the next screen')
    navigate('/interest-calculator')
  }

  const FormError = (props: { name: string }) => (
    <span className="text-sm text-red-500">
      {
        actionData?.error?.issues.find((issue) =>
          issue.path.includes(props.name)
        )?.message
      }
    </span>
  )

  const labelClasses = 'block text-gray-700 text-sm font-bold mb-2'
  const inputClasses =
    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'

  return (
    <div>
      <p className="text-xl text-blue-800 mb-6">
        New Direct Deposit Enrollment
      </p>

      <div className="w-full max-w-xs container">
        <Form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className={labelClasses} htmlFor="account-number">
              Account Number:
            </label>
            <input
              className={inputClasses}
              name="accountNumber"
              type="number"
            />
            <FormError name="accountNumber" />
          </div>
          <div className="mb-4">
            <label className={labelClasses} htmlFor="routing-number">
              Routing Number:
            </label>
            <input
              className={inputClasses}
              name="routingNumber"
              type="number"
            />
            <FormError name="routingNumber" />
          </div>
          <div className="mb-4">
            <label className={labelClasses} htmlFor="amount">
              Amount (USD):
            </label>
            <input
              name="amount"
              className={inputClasses}
              type="number"
              step=".01"
            />
            <FormError name="amount" />
          </div>
          <div className="mb-4">
            <label className={labelClasses} htmlFor="frequency">
              Frequency:
            </label>
            <select name="frequency" className={inputClasses}>
              <option value="Twice per Month">Twice per Month</option>
              <option value="Once per Month">Once per Month</option>
            </select>
            <FormError name="frequency" />
          </div>

          <button
            className="bg-blue-800 text-white rounded px-6 py-1"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  )
}
