import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { LastSeenCompanyResolverBase } from "./base/lastSeenCompany.resolver.base";
import { LastSeenCompany } from "./base/LastSeenCompany";
import { LastSeenCompanyService } from "./lastSeenCompany.service";

@graphql.Resolver(() => LastSeenCompany)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LastSeenCompanyResolver extends LastSeenCompanyResolverBase {
  constructor(
    protected readonly service: LastSeenCompanyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
