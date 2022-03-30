import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AddressTitle } from "../address/AddressTitle";
import { CompanySetNotificationTitle } from "../companySetNotification/CompanySetNotificationTitle";
import { CompanyTypeTitle } from "../companyType/CompanyTypeTitle";
import { FavoriteCompanyTitle } from "../favoriteCompany/FavoriteCompanyTitle";
import { LastSeenCompanyTitle } from "../lastSeenCompany/LastSeenCompanyTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { TimeSlotTitle } from "../timeSlot/TimeSlotTitle";

export const CompanyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="address.id" reference="Address" label="address">
          <SelectInput optionText={AddressTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="companysetnotification"
          reference="CompanySetNotification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanySetNotificationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="companytype.id"
          reference="CompanyType"
          label="companyType"
        >
          <SelectInput optionText={CompanyTypeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="favoritecompany"
          reference="FavoriteCompany"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FavoriteCompanyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="lastseencompany"
          reference="LastSeenCompany"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LastSeenCompanyTitle} />
        </ReferenceArrayInput>
        <TextInput label="logo" source="logo" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="customer.id" reference="Customer" label="Owner">
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="phoneNumber" source="phoneNumber" />
        <ReferenceArrayInput
          source="timeslot"
          reference="TimeSlot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TimeSlotTitle} />
        </ReferenceArrayInput>
        <TextInput label="vatCode" source="vatCode" />
      </SimpleForm>
    </Edit>
  );
};
