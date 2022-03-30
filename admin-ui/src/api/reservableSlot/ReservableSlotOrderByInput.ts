import { SortOrder } from "../../util/SortOrder";

export type ReservableSlotOrderByInput = {
  createdAt?: SortOrder;
  dateTimeFrom?: SortOrder;
  dateTimeTo?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  seatsLeft?: SortOrder;
  timeSlotId?: SortOrder;
  updatedAt?: SortOrder;
};
