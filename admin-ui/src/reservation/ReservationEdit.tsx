import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { ReservableSlotTitle } from "../reservableSlot/ReservableSlotTitle";
import { ReservationNotificationTitle } from "../reservationNotification/ReservationNotificationTitle";

export const ReservationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="reservableslot.id"
          reference="ReservableSlot"
          label="ReservableSlot"
        >
          <SelectInput optionText={ReservableSlotTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="reservationnotification"
          reference="ReservationNotification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationNotificationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};