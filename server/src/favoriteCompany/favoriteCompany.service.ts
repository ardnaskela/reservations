import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FavoriteCompanyServiceBase } from "./base/favoriteCompany.service.base";

@Injectable()
export class FavoriteCompanyService extends FavoriteCompanyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
