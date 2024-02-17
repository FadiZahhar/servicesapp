import { z } from 'zod';

export const taskSchema = z.object({
  packageId: z.string().min(1, "Package id is required"),
  taskName: z.string().min(1, "Task name is required"),
  taskDescription: z.string().min(1, "Please provide details on why you need this package"),
  taskStatus: z.string(),
  timeEstimatedInHours: z.string(),
  timeEstimatedInMinutes: z.string(),
  timeConsumedInHours: z.string(),
  timeConsumedInMinutes: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  taskNotes: z.string().min(1, "Please provide details for the feature specific of the task required"),
});
