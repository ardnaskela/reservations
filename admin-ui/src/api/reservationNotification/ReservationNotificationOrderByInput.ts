import { SortOrder } from "../../util/SortOrder";

export type ReservationNotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  notificationId?: SortOrder;
  reservationId?: SortOrder;
  updatedAt?: SortOrder;
};
