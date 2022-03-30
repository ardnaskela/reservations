import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReservableSlotService } from "./reservableSlot.service";
import { ReservableSlotControllerBase } from "./base/reservableSlot.controller.base";

@swagger.ApiTags("reservableSlots")
@common.Controller("reservableSlots")
export class ReservableSlotController extends ReservableSlotControllerBase {
  constructor(
    protected readonly service: ReservableSlotService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
