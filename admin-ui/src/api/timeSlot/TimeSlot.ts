import { Company } from "../company/Company";
import { ReservableSlot } from "../reservableSlot/ReservableSlot";

export type TimeSlot = {
  company?: Company;
  createdAt: Date;
  dayOfWeek?: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN" | null;
  id: string;
  maxSeatsAvailable: number;
  reservableSlots?: Array<ReservableSlot>;
  timeFrom: string;
  timeTo: string;
  updatedAt: Date;
};
