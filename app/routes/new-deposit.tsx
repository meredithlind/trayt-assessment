import { redirect, type ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import type { z } from 'zod'
import { DepositEnrollmentSchema } from '~/core/form-schema'

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = DepositEnrollmentSchema.parse(await request.formData())

    // return { formData, error: null }
    return redirect(`/interest-calculator`)
  } catch (error) {
    return { error: error as z.ZodError }
  }
}

export default function NewDeposit() {
  const actionData = useActionData<typeof action>()

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
    <>
      <p className="text-3xl text-blue-800 mb-6">
        New Direct Deposit Enrollment
      </p>

      <div className="w-full container">
        <Form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          method="post"
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
    </>
  )
}
