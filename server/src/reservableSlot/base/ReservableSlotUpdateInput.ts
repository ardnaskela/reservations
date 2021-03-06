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
import {
  IsDate,
  IsOptional,
  IsBoolean,
  ValidateNested,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { ReservationUpdateManyWithoutReservableSlotsInput } from "./ReservationUpdateManyWithoutReservableSlotsInput";
import { TimeSlotWhereUniqueInput } from "../../timeSlot/base/TimeSlotWhereUniqueInput";
@InputType()
class ReservableSlotUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateTimeFrom?: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateTimeTo?: Date;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean;

  @ApiProperty({
    required: false,
    type: () => ReservationUpdateManyWithoutReservableSlotsInput,
  })
  @ValidateNested()
  @Type(() => ReservationUpdateManyWithoutReservableSlotsInput)
  @IsOptional()
  @Field(() => ReservationUpdateManyWithoutReservableSlotsInput, {
    nullable: true,
  })
  reservations?: ReservationUpdateManyWithoutReservableSlotsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  seatsLeft?: number | null;

  @ApiProperty({
    required: false,
    type: () => TimeSlotWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TimeSlotWhereUniqueInput)
  @IsOptional()
  @Field(() => TimeSlotWhereUniqueInput, {
    nullable: true,
  })
  timeSlot?: TimeSlotWhereUniqueInput;
}
export { ReservableSlotUpdateInput };
