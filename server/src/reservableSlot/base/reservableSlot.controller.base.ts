/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ReservableSlotService } from "../reservableSlot.service";
import { ReservableSlotCreateInput } from "./ReservableSlotCreateInput";
import { ReservableSlotWhereInput } from "./ReservableSlotWhereInput";
import { ReservableSlotWhereUniqueInput } from "./ReservableSlotWhereUniqueInput";
import { ReservableSlotFindManyArgs } from "./ReservableSlotFindManyArgs";
import { ReservableSlotUpdateInput } from "./ReservableSlotUpdateInput";
import { ReservableSlot } from "./ReservableSlot";
import { ReservationFindManyArgs } from "../../reservation/base/ReservationFindManyArgs";
import { Reservation } from "../../reservation/base/Reservation";
import { ReservationWhereUniqueInput } from "../../reservation/base/ReservationWhereUniqueInput";
@swagger.ApiBearerAuth()
export class ReservableSlotControllerBase {
  constructor(
    protected readonly service: ReservableSlotService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "ReservableSlot",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: ReservableSlot })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ReservableSlotCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ReservableSlot> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "ReservableSlot",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"ReservableSlot"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        timeSlot: {
          connect: data.timeSlot,
        },
      },
      select: {
        createdAt: true,
        dateTimeFrom: true,
        dateTimeTo: true,
        id: true,
        isActive: true,
        seatsLeft: true,

        timeSlot: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "ReservableSlot",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [ReservableSlot] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ReservableSlotFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ReservableSlot[]> {
    const args = plainToClass(ReservableSlotFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ReservableSlot",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        dateTimeFrom: true,
        dateTimeTo: true,
        id: true,
        isActive: true,
        seatsLeft: true,

        timeSlot: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "ReservableSlot",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: ReservableSlot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ReservableSlotWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ReservableSlot | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "ReservableSlot",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        dateTimeFrom: true,
        dateTimeTo: true,
        id: true,
        isActive: true,
        seatsLeft: true,

        timeSlot: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "ReservableSlot",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: ReservableSlot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ReservableSlotWhereUniqueInput,
    @common.Body()
    data: ReservableSlotUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ReservableSlot | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ReservableSlot",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"ReservableSlot"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          timeSlot: {
            connect: data.timeSlot,
          },
        },
        select: {
          createdAt: true,
          dateTimeFrom: true,
          dateTimeTo: true,
          id: true,
          isActive: true,
          seatsLeft: true,

          timeSlot: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "ReservableSlot",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: ReservableSlot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ReservableSlotWhereUniqueInput
  ): Promise<ReservableSlot | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          dateTimeFrom: true,
          dateTimeTo: true,
          id: true,
          isActive: true,
          seatsLeft: true,

          timeSlot: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/reservations")
  @nestAccessControl.UseRoles({
    resource: "ReservableSlot",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(ReservationFindManyArgs)
  async findManyReservations(
    @common.Req() request: Request,
    @common.Param() params: ReservableSlotWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Reservation[]> {
    const query = plainToClass(ReservationFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Reservation",
    });
    const results = await this.service.findReservations(params.id, {
      ...query,
      select: {
        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,
        isAccepted: true,

        reservableSlot: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/reservations")
  @nestAccessControl.UseRoles({
    resource: "ReservableSlot",
    action: "update",
    possession: "any",
  })
  async createReservations(
    @common.Param() params: ReservableSlotWhereUniqueInput,
    @common.Body() body: ReservableSlotWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      reservations: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ReservableSlot",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"ReservableSlot"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/reservations")
  @nestAccessControl.UseRoles({
    resource: "ReservableSlot",
    action: "update",
    possession: "any",
  })
  async updateReservations(
    @common.Param() params: ReservableSlotWhereUniqueInput,
    @common.Body() body: ReservationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      reservations: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ReservableSlot",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"ReservableSlot"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/reservations")
  @nestAccessControl.UseRoles({
    resource: "ReservableSlot",
    action: "update",
    possession: "any",
  })
  async deleteReservations(
    @common.Param() params: ReservableSlotWhereUniqueInput,
    @common.Body() body: ReservableSlotWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      reservations: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "ReservableSlot",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"ReservableSlot"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
