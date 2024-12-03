import { isMatch } from "date-fns";
import { z } from "zod";

export const generateAiReportSchema = z.object({
  year: z.string().refine((value) => isMatch(value, "yyyy")),
  month: z.string().refine((value) => isMatch(value, "MM")),
});

export type GenerateAiReportSchema = z.infer<typeof generateAiReportSchema>;
