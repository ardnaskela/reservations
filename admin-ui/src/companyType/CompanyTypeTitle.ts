import { CompanyType as TCompanyType } from "../api/companyType/CompanyType";

export const COMPANYTYPE_TITLE_FIELD = "code";

export const CompanyTypeTitle = (record: TCompanyType): string => {
  return record.code || record.id;
};
