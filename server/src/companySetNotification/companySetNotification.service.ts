import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CompanySetNotificationServiceBase } from "./base/companySetNotification.service.base";

@Injectable()
export class CompanySetNotificationService extends CompanySetNotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
