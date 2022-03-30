import { TimeSlot } from "../timeSlot/TimeSlot";

export type DayOfWeek = {
  code: string;
  createdAt: Date;
  description: string;
  id: string;
  timeSlots?: Array<TimeSlot>;
  updatedAt: Date;
};
