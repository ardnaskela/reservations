import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  city?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postalCode?: SortOrder;
  province?: SortOrder;
  street?: SortOrder;
  streetNumber?: SortOrder;
  updatedAt?: SortOrder;
};
