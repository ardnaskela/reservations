import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { COMPANY_TITLE_FIELD } from "../company/CompanyTitle";
import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { ADDRESS_TITLE_FIELD } from "../address/AddressTitle";
import { COMPANYTYPE_TITLE_FIELD } from "../companyType/CompanyTypeTitle";
import { RESERVABLESLOT_TITLE_FIELD } from "../reservableSlot/ReservableSlotTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="FavoriteCompany"
          target="CustomerId"
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
          reference="Company"
          target="CustomerId"
          label="Companies"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="address"
              source="address.id"
              reference="Address"
            >
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
            <ReferenceField
              label="Owner"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="phoneNumber" source="phoneNumber" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="vatCode" source="vatCode" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LastSeenCompany"
          target="CustomerId"
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
          reference="Reservation"
          target="CustomerId"
          label="Reservations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="isAccepted" source="isAccepted" />
            <ReferenceField
              label="ReservableSlot"
              source="reservableslot.id"
              reference="ReservableSlot"
            >
              <TextField source={RESERVABLESLOT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
