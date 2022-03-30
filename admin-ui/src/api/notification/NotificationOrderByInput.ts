import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  minutesBefore?: SortOrder;
  updatedAt?: SortOrder;
};
