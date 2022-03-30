import { SortOrder } from "../../util/SortOrder";

export type DayOfWeekOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
