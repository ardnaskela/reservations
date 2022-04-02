import { StringFilter } from "../../util/StringFilter";
import { FavoriteCompanyListRelationFilter } from "../favoriteCompany/FavoriteCompanyListRelationFilter";
import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { LastSeenCompanyListRelationFilter } from "../lastSeenCompany/LastSeenCompanyListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type CustomerWhereInput = {
  email?: StringFilter;
  favoriteCompanies?: FavoriteCompanyListRelationFilter;
  firstName?: StringFilter;
  handledCompanies?: CompanyListRelationFilter;
  id?: StringFilter;
  isVerified?: BooleanNullableFilter;
  lastName?: StringFilter;
  lastSeenCompanies?: LastSeenCompanyListRelationFilter;
  phoneNumber?: StringNullableFilter;
  reservations?: ReservationListRelationFilter;
};
