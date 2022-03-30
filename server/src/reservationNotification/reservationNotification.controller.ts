import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReservationNotificationService } from "./reservationNotification.service";
import { ReservationNotificationControllerBase } from "./base/reservationNotification.controller.base";

@swagger.ApiTags("reservationNotifications")
@common.Controller("reservationNotifications")
export class ReservationNotificationController extends ReservationNotificationControllerBase {
  constructor(
    protected readonly service: ReservationNotificationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
