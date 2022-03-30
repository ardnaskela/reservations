import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CompanyTitle } from "../company/CompanyTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { TimeSlotTitle } from "../timeSlot/TimeSlotTitle";

export const CompanySetNotificationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="Company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="notification.id"
          reference="Notification"
          label="Notification"
        >
          <SelectInput optionText={NotificationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="timeslot.id"
          reference="TimeSlot"
          label="TimeSlot"
        >
          <SelectInput optionText={TimeSlotTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
