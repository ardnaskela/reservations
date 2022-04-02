import { FavoriteCompanyUpdateManyWithoutCustomersInput } from "./FavoriteCompanyUpdateManyWithoutCustomersInput";
import { CompanyUpdateManyWithoutCustomersInput } from "./CompanyUpdateManyWithoutCustomersInput";
import { LastSeenCompanyUpdateManyWithoutCustomersInput } from "./LastSeenCompanyUpdateManyWithoutCustomersInput";
import { ReservationUpdateManyWithoutCustomersInput } from "./ReservationUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string;
  favoriteCompanies?: FavoriteCompanyUpdateManyWithoutCustomersInput;
  firstName?: string;
  handledCompanies?: CompanyUpdateManyWithoutCustomersInput;
  isVerified?: boolean | null;
  lastName?: string;
  lastSeenCompanies?: LastSeenCompanyUpdateManyWithoutCustomersInput;
  phoneNumber?: string | null;
  reservations?: ReservationUpdateManyWithoutCustomersInput;
};
