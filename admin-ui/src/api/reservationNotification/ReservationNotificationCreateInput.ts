import { NotificationWhereUniqueInput } from "../notification/NotificationWhereUniqueInput";
import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type ReservationNotificationCreateInput = {
  customText?: string | null;
  notification: NotificationWhereUniqueInput;
  reservation: ReservationWhereUniqueInput;
};
