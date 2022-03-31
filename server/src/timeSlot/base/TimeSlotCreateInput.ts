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
import { ReservableSlotCreateNestedManyWithoutTimeSlotsInput } from "./ReservableSlotCreateNestedManyWithoutTimeSlotsInput";
import { CompanySetNotificationCreateNestedManyWithoutTimeSlotsInput } from "./CompanySetNotificationCreateNestedManyWithoutTimeSlotsInput";
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
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  maxSeatsAvailable!: number;

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
    required: false,
    type: () => CompanySetNotificationCreateNestedManyWithoutTimeSlotsInput,
  })
  @ValidateNested()
  @Type(() => CompanySetNotificationCreateNestedManyWithoutTimeSlotsInput)
  @IsOptional()
  @Field(() => CompanySetNotificationCreateNestedManyWithoutTimeSlotsInput, {
    nullable: true,
  })
  timeSlotNotifications?: CompanySetNotificationCreateNestedManyWithoutTimeSlotsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  timeTo!: string;
}
export { TimeSlotCreateInput };
