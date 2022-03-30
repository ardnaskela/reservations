import { ReservationNotificationWhereInput } from "./ReservationNotificationWhereInput";
import { ReservationNotificationOrderByInput } from "./ReservationNotificationOrderByInput";

export type ReservationNotificationFindManyArgs = {
  where?: ReservationNotificationWhereInput;
  orderBy?: Array<ReservationNotificationOrderByInput>;
  skip?: number;
  take?: number;
};
