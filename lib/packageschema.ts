import { z } from 'zod';

export const packageSchema = z.object({
    packageId: z.string(),
    packageName: z.string().nonempty("Package name is required"),
    description: z.string().min(1, "Please provide details on why you need this package"),
    price: z.coerce.number().min(200, "Price of the package shouldn't be less than 200$"),
    paymentMethod: z.string().nonempty("Payment method is required"),
    attachmentUrl: z.string().nonempty("Attachment is required"),
    pickupAt: z.date(),
    notes: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
});

