import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { CompanyTitle } from "../company/CompanyTitle";
import { ReservableSlotTitle } from "../reservableSlot/ReservableSlotTitle";

export const TimeSlotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <TextInput label="timeTo" source="timeTo" />
      </SimpleForm>
    </Edit>
  );
};
