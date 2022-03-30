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
import { TimeSlotService } from "../timeSlot.service";
import { TimeSlotCreateInput } from "./TimeSlotCreateInput";
import { TimeSlotWhereInput } from "./TimeSlotWhereInput";
import { TimeSlotWhereUniqueInput } from "./TimeSlotWhereUniqueInput";
import { TimeSlotFindManyArgs } from "./TimeSlotFindManyArgs";
import { TimeSlotUpdateInput } from "./TimeSlotUpdateInput";
import { TimeSlot } from "./TimeSlot";
import { ReservableSlotFindManyArgs } from "../../reservableSlot/base/ReservableSlotFindManyArgs";
import { ReservableSlot } from "../../reservableSlot/base/ReservableSlot";
import { ReservableSlotWhereUniqueInput } from "../../reservableSlot/base/ReservableSlotWhereUniqueInput";
import { CompanySetNotificationFindManyArgs } from "../../companySetNotification/base/CompanySetNotificationFindManyArgs";
import { CompanySetNotification } from "../../companySetNotification/base/CompanySetNotification";
import { CompanySetNotificationWhereUniqueInput } from "../../companySetNotification/base/CompanySetNotificationWhereUniqueInput";
@swagger.ApiBearerAuth()
export class TimeSlotControllerBase {
  constructor(
    protected readonly service: TimeSlotService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: TimeSlot })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: TimeSlotCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<TimeSlot> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "TimeSlot",
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
        `providing the properties: ${properties} on ${"TimeSlot"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        company: {
          connect: data.company,
        },

        dayOfWeek: data.dayOfWeek
          ? {
              connect: data.dayOfWeek,
            }
          : undefined,
      },
      select: {
        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        dayOfWeek: {
          select: {
            id: true,
          },
        },

        id: true,
        maxSeatsAvailable: true,
        timeFrom: true,
        timeTo: true,
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
    resource: "TimeSlot",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [TimeSlot] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(TimeSlotFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<TimeSlot[]> {
    const args = plainToClass(TimeSlotFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "TimeSlot",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        dayOfWeek: {
          select: {
            id: true,
          },
        },

        id: true,
        maxSeatsAvailable: true,
        timeFrom: true,
        timeTo: true,
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
    resource: "TimeSlot",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: TimeSlot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<TimeSlot | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "TimeSlot",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        dayOfWeek: {
          select: {
            id: true,
          },
        },

        id: true,
        maxSeatsAvailable: true,
        timeFrom: true,
        timeTo: true,
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
    resource: "TimeSlot",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: TimeSlot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @common.Body()
    data: TimeSlotUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<TimeSlot | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "TimeSlot",
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
        `providing the properties: ${properties} on ${"TimeSlot"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          company: {
            connect: data.company,
          },

          dayOfWeek: data.dayOfWeek
            ? {
                connect: data.dayOfWeek,
              }
            : undefined,
        },
        select: {
          company: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          dayOfWeek: {
            select: {
              id: true,
            },
          },

          id: true,
          maxSeatsAvailable: true,
          timeFrom: true,
          timeTo: true,
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
    resource: "TimeSlot",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: TimeSlot })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TimeSlotWhereUniqueInput
  ): Promise<TimeSlot | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          company: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          dayOfWeek: {
            select: {
              id: true,
            },
          },

          id: true,
          maxSeatsAvailable: true,
          timeFrom: true,
          timeTo: true,
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
  @common.Get("/:id/availabilities")
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(ReservableSlotFindManyArgs)
  async findManyAvailabilities(
    @common.Req() request: Request,
    @common.Param() params: TimeSlotWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<ReservableSlot[]> {
    const query = plainToClass(ReservableSlotFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "ReservableSlot",
    });
    const results = await this.service.findAvailabilities(params.id, {
      ...query,
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
  @common.Post("/:id/availabilities")
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "update",
    possession: "any",
  })
  async createAvailabilities(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @common.Body() body: TimeSlotWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      availabilities: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "TimeSlot",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"TimeSlot"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/availabilities")
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "update",
    possession: "any",
  })
  async updateAvailabilities(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @common.Body() body: ReservableSlotWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      availabilities: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "TimeSlot",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"TimeSlot"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/availabilities")
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "update",
    possession: "any",
  })
  async deleteAvailabilities(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @common.Body() body: TimeSlotWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      availabilities: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "TimeSlot",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"TimeSlot"} is forbidden for roles: ${roles}`
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
  @common.Get("/:id/timeSlotNotifications")
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(CompanySetNotificationFindManyArgs)
  async findManyTimeSlotNotifications(
    @common.Req() request: Request,
    @common.Param() params: TimeSlotWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<CompanySetNotification[]> {
    const query = plainToClass(
      CompanySetNotificationFindManyArgs,
      request.query
    );
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "CompanySetNotification",
    });
    const results = await this.service.findTimeSlotNotifications(params.id, {
      ...query,
      select: {
        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        notification: {
          select: {
            id: true,
          },
        },

        timeSlot: {
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
  @common.Post("/:id/timeSlotNotifications")
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "update",
    possession: "any",
  })
  async createTimeSlotNotifications(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @common.Body() body: TimeSlotWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      timeSlotNotifications: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "TimeSlot",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"TimeSlot"} is forbidden for roles: ${roles}`
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
  @common.Patch("/:id/timeSlotNotifications")
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "update",
    possession: "any",
  })
  async updateTimeSlotNotifications(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @common.Body() body: CompanySetNotificationWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      timeSlotNotifications: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "TimeSlot",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"TimeSlot"} is forbidden for roles: ${roles}`
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
  @common.Delete("/:id/timeSlotNotifications")
  @nestAccessControl.UseRoles({
    resource: "TimeSlot",
    action: "update",
    possession: "any",
  })
  async deleteTimeSlotNotifications(
    @common.Param() params: TimeSlotWhereUniqueInput,
    @common.Body() body: TimeSlotWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      timeSlotNotifications: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "TimeSlot",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"TimeSlot"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
