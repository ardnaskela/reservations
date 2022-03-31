import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  isAccepted?: SortOrder;
  reservableSlotId?: SortOrder;
  updatedAt?: SortOrder;
};
