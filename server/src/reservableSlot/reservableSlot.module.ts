import { Module } from "@nestjs/common";
import { ReservableSlotModuleBase } from "./base/reservableSlot.module.base";
import { ReservableSlotService } from "./reservableSlot.service";
import { ReservableSlotController } from "./reservableSlot.controller";
import { ReservableSlotResolver } from "./reservableSlot.resolver";

@Module({
  imports: [ReservableSlotModuleBase],
  controllers: [ReservableSlotController],
  providers: [ReservableSlotService, ReservableSlotResolver],
  exports: [ReservableSlotService],
})
export class ReservableSlotModule {}
