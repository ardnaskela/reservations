import { Company } from "../company/Company";
import { DayOfWeek } from "../dayOfWeek/DayOfWeek";
import { ReservableSlot } from "../reservableSlot/ReservableSlot";
import { CompanySetNotification } from "../companySetNotification/CompanySetNotification";

export type TimeSlot = {
  company?: Company;
  createdAt: Date;
  dayOfWeek?: DayOfWeek | null;
  id: string;
  maxSeatsAvailable: number;
  reservableSlots?: Array<ReservableSlot>;
  timeFrom: string;
  timeSlotNotifications?: Array<CompanySetNotification>;
  timeTo: string;
  updatedAt: Date;
};
