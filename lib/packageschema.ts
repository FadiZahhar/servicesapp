import { z } from 'zod'

export const packageSchema = z.object({
    packageId: z.string(),
    packageName: z.string(),
    description:z.string().min(1,"Please provide details on why you need this package"),
    price:z.number().min(200,"Price of the package shoudn't be less than 200$"),
    paymentMethod:z.string(),
    attachmentUrl:z.string(),
    pickupAt:z.date(),
    notes:z.string(),
    createdAt:z.date(),
    updatedAt:z.date(),
})