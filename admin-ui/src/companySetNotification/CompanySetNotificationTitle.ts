import { CompanySetNotification as TCompanySetNotification } from "../api/companySetNotification/CompanySetNotification";

export const COMPANYSETNOTIFICATION_TITLE_FIELD = "customText";

export const CompanySetNotificationTitle = (
  record: TCompanySetNotification
): string => {
  return record.customText || record.id;
};
