import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { FavoriteCompanyTitle } from "../favoriteCompany/FavoriteCompanyTitle";
import { CompanyTitle } from "../company/CompanyTitle";
import { LastSeenCompanyTitle } from "../lastSeenCompany/LastSeenCompanyTitle";
import { ReservationTitle } from "../reservation/ReservationTitle";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <BooleanInput label="isVerified" source="isVerified" />
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
    </Edit>
  );
};
