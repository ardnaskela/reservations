import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FavoriteCompanyTitle } from "../favoriteCompany/FavoriteCompanyTitle";
import { CompanyTitle } from "../company/CompanyTitle";
import { LastSeenCompanyTitle } from "../lastSeenCompany/LastSeenCompanyTitle";
import { ReservationTitle } from "../reservation/ReservationTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput
          source="favoriteCompanies"
          reference="FavoriteCompany"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FavoriteCompanyTitle} />
        </ReferenceArrayInput>
        <TextInput label="firstName" source="firstName" />
        <ReferenceArrayInput
          source="handledCompanies"
          reference="Company"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanyTitle} />
        </ReferenceArrayInput>
        <TextInput label="lastName" source="lastName" />
        <ReferenceArrayInput
          source="lastSeenCompanies"
          reference="LastSeenCompany"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LastSeenCompanyTitle} />
        </ReferenceArrayInput>
        <TextInput label="phoneNumber" source="phoneNumber" />
        <ReferenceArrayInput
          source="reservations"
          reference="Reservation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
