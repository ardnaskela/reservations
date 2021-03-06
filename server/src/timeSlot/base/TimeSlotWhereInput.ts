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
import { CompanyWhereUniqueInput } from "../../company/base/CompanyWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumTimeSlotDayOfWeek } from "./EnumTimeSlotDayOfWeek";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ReservableSlotListRelationFilter } from "../../reservableSlot/base/ReservableSlotListRelationFilter";
@InputType()
class TimeSlotWhereInput {
  @ApiProperty({
    required: false,
    type: () => CompanyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyWhereUniqueInput)
  @IsOptional()
  @Field(() => CompanyWhereUniqueInput, {
    nullable: true,
  })
  company?: CompanyWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumTimeSlotDayOfWeek,
  })
  @IsEnum(EnumTimeSlotDayOfWeek)
  @IsOptional()
  @Field(() => EnumTimeSlotDayOfWeek, {
    nullable: true,
  })
  dayOfWeek?: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  maxSeatsAvailable?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => ReservableSlotListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReservableSlotListRelationFilter)
  @IsOptional()
  @Field(() => ReservableSlotListRelationFilter, {
    nullable: true,
  })
  reservableSlots?: ReservableSlotListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  timeFrom?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  timeTo?: StringFilter;
}
export { TimeSlotWhereInput };
