import { NotificationWhereUniqueInput } from "../notification/NotificationWhereUniqueInput";
import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type ReservationNotificationCreateInput = {
  notification: NotificationWhereUniqueInput;
  reservation: ReservationWhereUniqueInput;
};
