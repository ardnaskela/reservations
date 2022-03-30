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
import { ValidateNested, IsOptional, IsInt, IsString } from "class-validator";
import { Type } from "class-transformer";
import { DayOfWeekWhereUniqueInput } from "../../dayOfWeek/base/DayOfWeekWhereUniqueInput";
import { ReservableSlotUpdateManyWithoutTimeSlotsInput } from "./ReservableSlotUpdateManyWithoutTimeSlotsInput";
import { CompanySetNotificationUpdateManyWithoutTimeSlotsInput } from "./CompanySetNotificationUpdateManyWithoutTimeSlotsInput";
@InputType()
class TimeSlotUpdateInput {
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
    type: () => DayOfWeekWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DayOfWeekWhereUniqueInput)
  @IsOptional()
  @Field(() => DayOfWeekWhereUniqueInput, {
    nullable: true,
  })
  dayOfWeek?: DayOfWeekWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  maxSeatsAvailable?: number;

  @ApiProperty({
    required: false,
    type: () => ReservableSlotUpdateManyWithoutTimeSlotsInput,
  })
  @ValidateNested()
  @Type(() => ReservableSlotUpdateManyWithoutTimeSlotsInput)
  @IsOptional()
  @Field(() => ReservableSlotUpdateManyWithoutTimeSlotsInput, {
    nullable: true,
  })
  availabilities?: ReservableSlotUpdateManyWithoutTimeSlotsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  timeFrom?: string;

  @ApiProperty({
    required: false,
    type: () => CompanySetNotificationUpdateManyWithoutTimeSlotsInput,
  })
  @ValidateNested()
  @Type(() => CompanySetNotificationUpdateManyWithoutTimeSlotsInput)
  @IsOptional()
  @Field(() => CompanySetNotificationUpdateManyWithoutTimeSlotsInput, {
    nullable: true,
  })
  timeSlotNotifications?: CompanySetNotificationUpdateManyWithoutTimeSlotsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  timeTo?: string;
}
export { TimeSlotUpdateInput };