import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { ReservableSlotCreateNestedManyWithoutTimeSlotsInput } from "./ReservableSlotCreateNestedManyWithoutTimeSlotsInput";

export type TimeSlotCreateInput = {
  company: CompanyWhereUniqueInput;
  dayOfWeek?: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN" | null;
  maxSeatsAvailable: number;
  reservableSlots?: ReservableSlotCreateNestedManyWithoutTimeSlotsInput;
  timeFrom: string;
  timeTo: string;
};
