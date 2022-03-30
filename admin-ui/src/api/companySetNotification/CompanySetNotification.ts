import { Company } from "../company/Company";
import { Notification } from "../notification/Notification";
import { TimeSlot } from "../timeSlot/TimeSlot";

export type CompanySetNotification = {
  company?: Company;
  createdAt: Date;
  id: string;
  notification?: Notification;
  timeSlot?: TimeSlot | null;
  updatedAt: Date;
};
