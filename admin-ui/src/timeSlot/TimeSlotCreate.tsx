import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { ReservableSlotTitle } from "../reservableSlot/ReservableSlotTitle";
import { CompanySetNotificationTitle } from "../companySetNotification/CompanySetNotificationTitle";

export const TimeSlotCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <SelectInput
          source="dayOfWeek"
          label="dayOfWeek"
          choices={[
            { label: "Monday", value: "MON" },
            { label: "Tuesday", value: "TUE" },
            { label: "Wednesday", value: "WED" },
            { label: "Thursday", value: "THU" },
            { label: "Friday", value: "FRI" },
            { label: "Saturday", value: "SAT" },
            { label: "Sunday", value: "SUN" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput
          step={1}
          label="maxSeatsAvailable"
          source="maxSeatsAvailable"
        />
        <ReferenceArrayInput
          source="reservableSlots"
          reference="ReservableSlot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservableSlotTitle} />
        </ReferenceArrayInput>
        <TextInput label="timeFrom" source="timeFrom" />
        <ReferenceArrayInput
          source="timeSlotNotifications"
          reference="CompanySetNotification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanySetNotificationTitle} />
        </ReferenceArrayInput>
        <TextInput label="timeTo" source="timeTo" />
      </SimpleForm>
    </Create>
  );
};
