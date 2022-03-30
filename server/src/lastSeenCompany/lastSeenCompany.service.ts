import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LastSeenCompanyServiceBase } from "./base/lastSeenCompany.service.base";

@Injectable()
export class LastSeenCompanyService extends LastSeenCompanyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
