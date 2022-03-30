import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { NotificationTitle } from "../notification/NotificationTitle";
import { ReservationTitle } from "../reservation/ReservationTitle";

export const ReservationNotificationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
