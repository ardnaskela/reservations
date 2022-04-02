import { Address } from "../address/Address";
import { CompanySetNotification } from "../companySetNotification/CompanySetNotification";
import { CompanyType } from "../companyType/CompanyType";
import { FavoriteCompany } from "../favoriteCompany/FavoriteCompany";
import { LastSeenCompany } from "../lastSeenCompany/LastSeenCompany";
import { Customer } from "../customer/Customer";
import { Reservation } from "../reservation/Reservation";
import { TimeSlot } from "../timeSlot/TimeSlot";

export type Company = {
  address?: Address;
  companySetNotifications?: Array<CompanySetNotification>;
  companyType?: CompanyType | null;
  createdAt: Date;
  favoriteCompanies?: Array<FavoriteCompany>;
  id: string;
  lastSeenCompanies?: Array<LastSeenCompany>;
  logo: string | null;
  name: string;
  owner?: Customer;
  phoneNumber: string;
  reservations?: Array<Reservation>;
  timeSlots?: Array<TimeSlot>;
  updatedAt: Date;
  vatCode: string;
};
