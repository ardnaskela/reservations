import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { CompanySetNotificationListRelationFilter } from "../companySetNotification/CompanySetNotificationListRelationFilter";
import { CompanyTypeWhereUniqueInput } from "../companyType/CompanyTypeWhereUniqueInput";
import { FavoriteCompanyListRelationFilter } from "../favoriteCompany/FavoriteCompanyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LastSeenCompanyListRelationFilter } from "../lastSeenCompany/LastSeenCompanyListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";
import { TimeSlotListRelationFilter } from "../timeSlot/TimeSlotListRelationFilter";

export type CompanyWhereInput = {
  address?: AddressWhereUniqueInput;
  companySetNotifications?: CompanySetNotificationListRelationFilter;
  companyType?: CompanyTypeWhereUniqueInput;
  favoriteCompanies?: FavoriteCompanyListRelationFilter;
  id?: StringFilter;
  lastSeenCompanies?: LastSeenCompanyListRelationFilter;
  logo?: StringNullableFilter;
  name?: StringFilter;
  owner?: CustomerWhereUniqueInput;
  phoneNumber?: StringFilter;
  reservations?: ReservationListRelationFilter;
  timeSlots?: TimeSlotListRelationFilter;
  vatCode?: StringFilter;
};
