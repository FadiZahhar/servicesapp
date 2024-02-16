import { z } from 'zod'

export const taskSchema = z.object({
    taskId: z.string(),
    packageId:z.string(),
    taskName: z.string().nonempty("Task name is required"),
    taskDescription:z.string().min(1,"Please provide details on why you need this package"),
    taskStatus:z.string(),
    timeEstimated:z.string(),
    timeConsumed:z.string(),
    startDate:z.string(),
    endDate:z.string(),
    taskNotes:z.string().nonempty("Please provide details for the feature specific of the task required"),
    createdAt:z.date(),
    updatedAt:z.date(),
});