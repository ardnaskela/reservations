import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { ReservableSlotTitle } from "../reservableSlot/ReservableSlotTitle";
import { ReservationNotificationTitle } from "../reservationNotification/ReservationNotificationTitle";

export const ReservationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <BooleanInput label="isAccepted" source="isAccepted" />
        <ReferenceInput
          source="reservableslot.id"
          reference="ReservableSlot"
          label="ReservableSlot"
        >
          <SelectInput optionText={ReservableSlotTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="reservationNotifications"
          reference="ReservationNotification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationNotificationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
