import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COMPANY_TITLE_FIELD } from "./CompanyTitle";
import { NOTIFICATION_TITLE_FIELD } from "../notification/NotificationTitle";
import { TIMESLOT_TITLE_FIELD } from "../timeSlot/TimeSlotTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { DAYOFWEEK_TITLE_FIELD } from "../dayOfWeek/DayOfWeekTitle";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { COMPANYTYPE_TITLE_FIELD } from "../companyType/CompanyTypeTitle";

export const CompanyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="address" source="address.id" reference="Address">
          <TextField source={ADDRESS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="companyType"
          source="companytype.id"
          reference="CompanyType"
        >
          <TextField source={COMPANYTYPE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="logo" source="logo" />
        <TextField label="name" source="name" />
        <ReferenceField label="Owner" source="customer.id" reference="Customer">
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="phoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vatCode" source="vatCode" />
        <ReferenceManyField
          reference="CompanySetNotification"
          target="CompanyId"
          label="CompanySetNotifications"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Notification"
              source="notification.id"
              reference="Notification"
            >
              <TextField source={NOTIFICATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="TimeSlot"
              source="timeslot.id"
              reference="TimeSlot"
            >
              <TextField source={TIMESLOT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FavoriteCompany"
          target="CompanyId"
          label="FavoriteCompanies"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LastSeenCompany"
          target="CompanyId"
          label="LastSeenCompanies"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TimeSlot"
          target="CompanyId"
          label="TimeSlots"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="company"
              source="company.id"
              reference="Company"
            >
              <TextField source={COMPANY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="dayOfWeek"
              source="dayofweek.id"
              reference="DayOfWeek"
            >
              <TextField source={DAYOFWEEK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="maxSeatsAvailable" source="maxSeatsAvailable" />
            <TextField label="timeFrom" source="timeFrom" />
            <TextField label="timeTo" source="timeTo" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
