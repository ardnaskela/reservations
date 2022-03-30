import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  reservableSlotId?: SortOrder;
  updatedAt?: SortOrder;
};
