import { FavoriteCompanyCreateNestedManyWithoutCustomersInput } from "./FavoriteCompanyCreateNestedManyWithoutCustomersInput";
import { CompanyCreateNestedManyWithoutCustomersInput } from "./CompanyCreateNestedManyWithoutCustomersInput";
import { LastSeenCompanyCreateNestedManyWithoutCustomersInput } from "./LastSeenCompanyCreateNestedManyWithoutCustomersInput";
import { ReservationCreateNestedManyWithoutCustomersInput } from "./ReservationCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email: string;
  favoriteCompanies?: FavoriteCompanyCreateNestedManyWithoutCustomersInput;
  firstName: string;
  handledCompanies?: CompanyCreateNestedManyWithoutCustomersInput;
  isVerified?: boolean | null;
  lastName: string;
  lastSeenCompanies?: LastSeenCompanyCreateNestedManyWithoutCustomersInput;
  phoneNumber?: string | null;
  reservations?: ReservationCreateNestedManyWithoutCustomersInput;
};
