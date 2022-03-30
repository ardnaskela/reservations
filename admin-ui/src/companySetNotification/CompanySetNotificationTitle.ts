import { CompanySetNotification as TCompanySetNotification } from "../api/companySetNotification/CompanySetNotification";

export const COMPANYSETNOTIFICATION_TITLE_FIELD = "id";

export const CompanySetNotificationTitle = (
  record: TCompanySetNotification
): string => {
  return record.id || record.id;
};
