import { StringFilter } from "../../util/StringFilter";
import { CompanyListRelationFilter } from "../company/CompanyListRelationFilter";

export type CompanyTypeWhereInput = {
  code?: StringFilter;
  companies?: CompanyListRelationFilter;
  description?: StringFilter;
  id?: StringFilter;
};
