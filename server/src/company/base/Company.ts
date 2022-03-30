/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Address } from "../../address/base/Address";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CompanySetNotification } from "../../companySetNotification/base/CompanySetNotification";
import { CompanyType } from "../../companyType/base/CompanyType";
import { FavoriteCompany } from "../../favoriteCompany/base/FavoriteCompany";
import { LastSeenCompany } from "../../lastSeenCompany/base/LastSeenCompany";
import { Customer } from "../../customer/base/Customer";
import { TimeSlot } from "../../timeSlot/base/TimeSlot";
@ObjectType()
class Company {
  @ApiProperty({
    required: true,
    type: () => Address,
  })
  @ValidateNested()
  @Type(() => Address)
  address?: Address;

  @ApiProperty({
    required: false,
    type: () => [CompanySetNotification],
  })
  @ValidateNested()
  @Type(() => CompanySetNotification)
  @IsOptional()
  companySetNotifications?: Array<CompanySetNotification>;

  @ApiProperty({
    required: false,
    type: () => CompanyType,
  })
  @ValidateNested()
  @Type(() => CompanyType)
  @IsOptional()
  companyType?: CompanyType | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [FavoriteCompany],
  })
  @ValidateNested()
  @Type(() => FavoriteCompany)
  @IsOptional()
  favoriteCompanies?: Array<FavoriteCompany>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [LastSeenCompany],
  })
  @ValidateNested()
  @Type(() => LastSeenCompany)
  @IsOptional()
  lastSeenCompanies?: Array<LastSeenCompany>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  logo!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: () => Customer,
  })
  @ValidateNested()
  @Type(() => Customer)
  owner?: Customer;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  phoneNumber!: string;

  @ApiProperty({
    required: false,
    type: () => [TimeSlot],
  })
  @ValidateNested()
  @Type(() => TimeSlot)
  @IsOptional()
  timeSlots?: Array<TimeSlot>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  vatCode!: string;
}
export { Company };