/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AddressWhereUniqueInput } from "../../address/base/AddressWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CompanySetNotificationCreateNestedManyWithoutCompaniesInput } from "./CompanySetNotificationCreateNestedManyWithoutCompaniesInput";
import { CompanyTypeWhereUniqueInput } from "../../companyType/base/CompanyTypeWhereUniqueInput";
import { FavoriteCompanyCreateNestedManyWithoutCompaniesInput } from "./FavoriteCompanyCreateNestedManyWithoutCompaniesInput";
import { LastSeenCompanyCreateNestedManyWithoutCompaniesInput } from "./LastSeenCompanyCreateNestedManyWithoutCompaniesInput";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { TimeSlotCreateNestedManyWithoutCompaniesInput } from "./TimeSlotCreateNestedManyWithoutCompaniesInput";
@InputType()
class CompanyCreateInput {
  @ApiProperty({
    required: true,
    type: () => AddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereUniqueInput)
  @Field(() => AddressWhereUniqueInput)
  address!: AddressWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => CompanySetNotificationCreateNestedManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => CompanySetNotificationCreateNestedManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => CompanySetNotificationCreateNestedManyWithoutCompaniesInput, {
    nullable: true,
  })
  companySetNotifications?: CompanySetNotificationCreateNestedManyWithoutCompaniesInput;

  @ApiProperty({
    required: false,
    type: () => CompanyTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => CompanyTypeWhereUniqueInput, {
    nullable: true,
  })
  companyType?: CompanyTypeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => FavoriteCompanyCreateNestedManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => FavoriteCompanyCreateNestedManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => FavoriteCompanyCreateNestedManyWithoutCompaniesInput, {
    nullable: true,
  })
  favoriteCompanies?: FavoriteCompanyCreateNestedManyWithoutCompaniesInput;

  @ApiProperty({
    required: false,
    type: () => LastSeenCompanyCreateNestedManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => LastSeenCompanyCreateNestedManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => LastSeenCompanyCreateNestedManyWithoutCompaniesInput, {
    nullable: true,
  })
  lastSeenCompanies?: LastSeenCompanyCreateNestedManyWithoutCompaniesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  logo?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @Field(() => CustomerWhereUniqueInput)
  owner!: CustomerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  phoneNumber!: string;

  @ApiProperty({
    required: false,
    type: () => TimeSlotCreateNestedManyWithoutCompaniesInput,
  })
  @ValidateNested()
  @Type(() => TimeSlotCreateNestedManyWithoutCompaniesInput)
  @IsOptional()
  @Field(() => TimeSlotCreateNestedManyWithoutCompaniesInput, {
    nullable: true,
  })
  timeSlots?: TimeSlotCreateNestedManyWithoutCompaniesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  vatCode!: string;
}
export { CompanyCreateInput };