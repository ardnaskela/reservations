import { Module } from "@nestjs/common";
import { ReservationNotificationModuleBase } from "./base/reservationNotification.module.base";
import { ReservationNotificationService } from "./reservationNotification.service";
import { ReservationNotificationController } from "./reservationNotification.controller";
import { ReservationNotificationResolver } from "./reservationNotification.resolver";

@Module({
  imports: [ReservationNotificationModuleBase],
  controllers: [ReservationNotificationController],
  providers: [ReservationNotificationService, ReservationNotificationResolver],
  exports: [ReservationNotificationService],
})
export class ReservationNotificationModule {}
