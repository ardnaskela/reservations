import { TimeSlotUpdateManyWithoutDayOfWeeksInput } from "./TimeSlotUpdateManyWithoutDayOfWeeksInput";

export type DayOfWeekUpdateInput = {
  code?: string;
  description?: string;
  timeSlots?: TimeSlotUpdateManyWithoutDayOfWeeksInput;
};
