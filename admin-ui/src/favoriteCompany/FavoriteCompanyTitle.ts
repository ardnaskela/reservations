import { FavoriteCompany as TFavoriteCompany } from "../api/favoriteCompany/FavoriteCompany";

export const FAVORITECOMPANY_TITLE_FIELD = "id";

export const FavoriteCompanyTitle = (record: TFavoriteCompany): string => {
  return record.id || record.id;
};
