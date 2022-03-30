import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FavoriteCompanyResolverBase } from "./base/favoriteCompany.resolver.base";
import { FavoriteCompany } from "./base/FavoriteCompany";
import { FavoriteCompanyService } from "./favoriteCompany.service";

@graphql.Resolver(() => FavoriteCompany)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FavoriteCompanyResolver extends FavoriteCompanyResolverBase {
  constructor(
    protected readonly service: FavoriteCompanyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
