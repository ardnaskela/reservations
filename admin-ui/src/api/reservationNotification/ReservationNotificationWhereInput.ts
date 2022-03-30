import { StringFilter } from "../../util/StringFilter";
import { NotificationWhereUniqueInput } from "../notification/NotificationWhereUniqueInput";
import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type ReservationNotificationWhereInput = {
  id?: StringFilter;
  notification?: NotificationWhereUniqueInput;
  reservation?: ReservationWhereUniqueInput;
};
