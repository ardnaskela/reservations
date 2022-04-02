import { NotificationWhereUniqueInput } from "../notification/NotificationWhereUniqueInput";
import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type ReservationNotificationUpdateInput = {
  customText?: string | null;
  notification?: NotificationWhereUniqueInput;
  reservation?: ReservationWhereUniqueInput;
};
