import { z } from 'zod'
import { zfd } from 'zod-form-data'

export const DepositEnrollmentSchema = zfd.formData({
  accountNumber: z.string().regex(/^\d{8,17}$/),
  routingNumber: z
    .string()
    .regex(/^(00[0-9]|[0-1][0-9]|2[1-9]|[3][0-2]|[6-7][1-2]|80)[0-9]{7}$/),
  amount: z.string().regex(/[0-9]+(\.[0-9]{2})?$/),
  frequency: z.enum(['Twice per Month', 'Once per Month']),
})
export type FormData = z.infer<typeof DepositEnrollmentSchema>
