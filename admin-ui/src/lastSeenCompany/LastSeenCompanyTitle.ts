import { LastSeenCompany as TLastSeenCompany } from "../api/lastSeenCompany/LastSeenCompany";

export const LASTSEENCOMPANY_TITLE_FIELD = "id";

export const LastSeenCompanyTitle = (record: TLastSeenCompany): string => {
  return record.id || record.id;
};
