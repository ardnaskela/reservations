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
import {
  ValidateNested,
  IsEnum,
  IsOptional,
  IsInt,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumTimeSlotDayOfWeek } from "./EnumTimeSlotDayOfWeek";
import { ReservableSlotCreateNestedManyWithoutTimeSlotsInput } from "./ReservableSlotCreateNestedManyWithoutTimeSlotsInput";
@InputType()
class TimeSlotCreateInput {
  @ApiProperty({
    required: true,
    type: () => CompanyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CompanyWhereUniqueInput)
  @Field(() => CompanyWhereUniqueInput)
  company!: CompanyWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumTimeSlotDayOfWeek,
  })
  @IsEnum(EnumTimeSlotDayOfWeek)
  @IsOptional()
  @Field(() => EnumTimeSlotDayOfWeek, {
    nullable: true,
  })
  dayOfWeek?: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  maxSeatsAvailable?: number | null;

  @ApiProperty({
    required: false,
    type: () => ReservableSlotCreateNestedManyWithoutTimeSlotsInput,
  })
  @ValidateNested()
  @Type(() => ReservableSlotCreateNestedManyWithoutTimeSlotsInput)
  @IsOptional()
  @Field(() => ReservableSlotCreateNestedManyWithoutTimeSlotsInput, {
    nullable: true,
  })
  reservableSlots?: ReservableSlotCreateNestedManyWithoutTimeSlotsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  timeFrom!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  timeTo!: string;
}
export { TimeSlotCreateInput };
