import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ReservationNotificationResolverBase } from "./base/reservationNotification.resolver.base";
import { ReservationNotification } from "./base/ReservationNotification";
import { ReservationNotificationService } from "./reservationNotification.service";

@graphql.Resolver(() => ReservationNotification)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ReservationNotificationResolver extends ReservationNotificationResolverBase {
  constructor(
    protected readonly service: ReservationNotificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
