import { ReservableSlotWhereInput } from "./ReservableSlotWhereInput";
import { ReservableSlotOrderByInput } from "./ReservableSlotOrderByInput";

export type ReservableSlotFindManyArgs = {
  where?: ReservableSlotWhereInput;
  orderBy?: Array<ReservableSlotOrderByInput>;
  skip?: number;
  take?: number;
};
