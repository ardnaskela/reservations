import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ReservableSlotServiceBase } from "./base/reservableSlot.service.base";

@Injectable()
export class ReservableSlotService extends ReservableSlotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
