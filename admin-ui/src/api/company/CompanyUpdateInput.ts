import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CompanySetNotificationUpdateManyWithoutCompaniesInput } from "./CompanySetNotificationUpdateManyWithoutCompaniesInput";
import { CompanyTypeWhereUniqueInput } from "../companyType/CompanyTypeWhereUniqueInput";
import { FavoriteCompanyUpdateManyWithoutCompaniesInput } from "./FavoriteCompanyUpdateManyWithoutCompaniesInput";
import { LastSeenCompanyUpdateManyWithoutCompaniesInput } from "./LastSeenCompanyUpdateManyWithoutCompaniesInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ReservationUpdateManyWithoutCompaniesInput } from "./ReservationUpdateManyWithoutCompaniesInput";
import { TimeSlotUpdateManyWithoutCompaniesInput } from "./TimeSlotUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  address?: AddressWhereUniqueInput;
  companySetNotifications?: CompanySetNotificationUpdateManyWithoutCompaniesInput;
  companyType?: CompanyTypeWhereUniqueInput;
  favoriteCompanies?: FavoriteCompanyUpdateManyWithoutCompaniesInput;
  lastSeenCompanies?: LastSeenCompanyUpdateManyWithoutCompaniesInput;
  logo?: string | null;
  name?: string;
  owner?: CustomerWhereUniqueInput;
  phoneNumber?: string;
  reservations?: ReservationUpdateManyWithoutCompaniesInput;
  timeSlots?: TimeSlotUpdateManyWithoutCompaniesInput;
  vatCode?: string;
};
