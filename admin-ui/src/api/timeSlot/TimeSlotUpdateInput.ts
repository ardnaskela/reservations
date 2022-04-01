import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { ReservableSlotUpdateManyWithoutTimeSlotsInput } from "./ReservableSlotUpdateManyWithoutTimeSlotsInput";
import { CompanySetNotificationUpdateManyWithoutTimeSlotsInput } from "./CompanySetNotificationUpdateManyWithoutTimeSlotsInput";

export type TimeSlotUpdateInput = {
  company?: CompanyWhereUniqueInput;
  dayOfWeek?: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN" | null;
  maxSeatsAvailable?: number;
  reservableSlots?: ReservableSlotUpdateManyWithoutTimeSlotsInput;
  timeFrom?: string;
  timeSlotNotifications?: CompanySetNotificationUpdateManyWithoutTimeSlotsInput;
  timeTo?: string;
};
