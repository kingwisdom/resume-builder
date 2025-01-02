import { z } from 'zod'

export const optionalStrring = z.string().trim().optional().or(z.literal(''))

export const generalInfoSchema = z.object({
    title: optionalStrring,
    description: optionalStrring,
})

export type GeneralInfoValues = z.infer<typeof generalInfoSchema>