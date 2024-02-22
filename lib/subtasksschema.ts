import { z } from 'zod'

export const subTaskSchema = z.object({
  taskId: z.string().min(1, "Package id is required"),
  subtaskName: z.string().min(1, "Task name is required"),
  subtaskDescription: z.string().min(1, "Please provide details on why you need this package"),
  subtaskStatus: z.string(),
  timeEstimatedInHours: z.string(),
  timeEstimatedInMinutes: z.string(),
  timeConsumedInHours: z.string(),
  timeConsumedInMinutes: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  subtaskNotes: z.string().min(1, "Please provide details for the feature specific of the task required"),
});