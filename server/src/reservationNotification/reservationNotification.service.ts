import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ReservationNotificationServiceBase } from "./base/reservationNotification.service.base";

@Injectable()
export class ReservationNotificationService extends ReservationNotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
