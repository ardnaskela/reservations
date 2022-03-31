import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { CompanySetNotificationTitle } from "../companySetNotification/CompanySetNotificationTitle";
import { ReservationNotificationTitle } from "../reservationNotification/ReservationNotificationTitle";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="companySetNotifications"
          reference="CompanySetNotification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanySetNotificationTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="minutesBefore" source="minutesBefore" />
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
