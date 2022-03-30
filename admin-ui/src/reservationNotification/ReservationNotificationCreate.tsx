import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { NotificationTitle } from "../notification/NotificationTitle";
import { ReservationTitle } from "../reservation/ReservationTitle";

export const ReservationNotificationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="notification.id"
          reference="Notification"
          label="Notification"
        >
          <SelectInput optionText={NotificationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="reservation.id"
          reference="Reservation"
          label="Reservation"
        >
          <SelectInput optionText={ReservationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
