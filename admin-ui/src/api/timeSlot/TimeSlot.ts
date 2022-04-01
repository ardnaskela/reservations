import { Company } from "../company/Company";
import { ReservableSlot } from "../reservableSlot/ReservableSlot";
import { CompanySetNotification } from "../companySetNotification/CompanySetNotification";

export type TimeSlot = {
  company?: Company;
  createdAt: Date;
  dayOfWeek?: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN" | null;
  id: string;
  maxSeatsAvailable: number;
  reservableSlots?: Array<ReservableSlot>;
  timeFrom: string;
  timeSlotNotifications?: Array<CompanySetNotification>;
  timeTo: string;
  updatedAt: Date;
};
