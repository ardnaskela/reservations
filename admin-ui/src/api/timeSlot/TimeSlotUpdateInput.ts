import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { ReservableSlotUpdateManyWithoutTimeSlotsInput } from "./ReservableSlotUpdateManyWithoutTimeSlotsInput";

export type TimeSlotUpdateInput = {
  company?: CompanyWhereUniqueInput;
  dayOfWeek?: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN" | null;
  maxSeatsAvailable?: number | null;
  reservableSlots?: ReservableSlotUpdateManyWithoutTimeSlotsInput;
  timeFrom?: string;
  timeTo?: string;
};
