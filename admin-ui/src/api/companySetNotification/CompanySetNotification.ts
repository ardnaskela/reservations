import { Company } from "../company/Company";
import { Notification } from "../notification/Notification";

export type CompanySetNotification = {
  company?: Company;
  createdAt: Date;
  customText: string | null;
  id: string;
  notification?: Notification;
  updatedAt: Date;
};
