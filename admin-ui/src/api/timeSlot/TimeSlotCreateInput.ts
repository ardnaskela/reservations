import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { ReservableSlotCreateNestedManyWithoutTimeSlotsInput } from "./ReservableSlotCreateNestedManyWithoutTimeSlotsInput";
import { CompanySetNotificationCreateNestedManyWithoutTimeSlotsInput } from "./CompanySetNotificationCreateNestedManyWithoutTimeSlotsInput";

export type TimeSlotCreateInput = {
  company: CompanyWhereUniqueInput;
  dayOfWeek?: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN" | null;
  maxSeatsAvailable: number;
  reservableSlots?: ReservableSlotCreateNestedManyWithoutTimeSlotsInput;
  timeFrom: string;
  timeSlotNotifications?: CompanySetNotificationCreateNestedManyWithoutTimeSlotsInput;
  timeTo: string;
};
