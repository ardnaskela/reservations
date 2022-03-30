import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CompanyTypeServiceBase } from "./base/companyType.service.base";

@Injectable()
export class CompanyTypeService extends CompanyTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
