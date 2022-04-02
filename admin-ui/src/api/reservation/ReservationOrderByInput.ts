import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  isAccepted?: SortOrder;
  reservableSlotId?: SortOrder;
  updatedAt?: SortOrder;
};
