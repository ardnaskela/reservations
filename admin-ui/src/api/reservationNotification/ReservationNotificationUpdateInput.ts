import { NotificationWhereUniqueInput } from "../notification/NotificationWhereUniqueInput";
import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type ReservationNotificationUpdateInput = {
  notification?: NotificationWhereUniqueInput;
  reservation?: ReservationWhereUniqueInput;
};
