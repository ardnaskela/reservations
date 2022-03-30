import { SortOrder } from "../../util/SortOrder";

export type TimeSlotOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  dayOfWeekId?: SortOrder;
  id?: SortOrder;
  maxSeatsAvailable?: SortOrder;
  timeFrom?: SortOrder;
  timeTo?: SortOrder;
  updatedAt?: SortOrder;
};
