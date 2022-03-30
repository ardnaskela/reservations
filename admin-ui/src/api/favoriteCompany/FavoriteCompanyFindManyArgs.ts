import { FavoriteCompanyWhereInput } from "./FavoriteCompanyWhereInput";
import { FavoriteCompanyOrderByInput } from "./FavoriteCompanyOrderByInput";

export type FavoriteCompanyFindManyArgs = {
  where?: FavoriteCompanyWhereInput;
  orderBy?: Array<FavoriteCompanyOrderByInput>;
  skip?: number;
  take?: number;
};
