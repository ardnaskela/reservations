import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AddressWhereInput = {
  city?: StringNullableFilter;
  companies?: CompanyListRelationFilter;
  id?: StringFilter;
  postalCode?: StringNullableFilter;
  province?: StringNullableFilter;
  street?: StringNullableFilter;
  streetNumber?: StringNullableFilter;
};
