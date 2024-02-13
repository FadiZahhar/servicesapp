import { z } from 'zod'

export const subTaskSchema = z.object({
    subTaskId: z.string(),
    taskId:z.string(),
    taskName: z.string(),
    taskDescription:z.string().min(1,"Please provide details on why you need this package"),
    taskStatus:z.string(),
    timeEstimated:z.string(),
    timeConsumed:z.string(),
    startDate:z.string(),
    endDate:z.string(),
    taskNotes:z.string(),
    createdAt:z.date(),
    updatedAt:z.date(),
});