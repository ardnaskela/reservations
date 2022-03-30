import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CompanySetNotificationResolverBase } from "./base/companySetNotification.resolver.base";
import { CompanySetNotification } from "./base/CompanySetNotification";
import { CompanySetNotificationService } from "./companySetNotification.service";

@graphql.Resolver(() => CompanySetNotification)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CompanySetNotificationResolver extends CompanySetNotificationResolverBase {
  constructor(
    protected readonly service: CompanySetNotificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
