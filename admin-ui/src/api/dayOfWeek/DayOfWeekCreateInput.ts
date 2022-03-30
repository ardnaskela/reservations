import { TimeSlotCreateNestedManyWithoutDayOfWeeksInput } from "./TimeSlotCreateNestedManyWithoutDayOfWeeksInput";

export type DayOfWeekCreateInput = {
  code: string;
  description: string;
  timeSlots?: TimeSlotCreateNestedManyWithoutDayOfWeeksInput;
};
