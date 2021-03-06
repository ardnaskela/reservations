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
import { CompanySetNotificationService } from "../companySetNotification.service";
import { CompanySetNotificationCreateInput } from "./CompanySetNotificationCreateInput";
import { CompanySetNotificationWhereInput } from "./CompanySetNotificationWhereInput";
import { CompanySetNotificationWhereUniqueInput } from "./CompanySetNotificationWhereUniqueInput";
import { CompanySetNotificationFindManyArgs } from "./CompanySetNotificationFindManyArgs";
import { CompanySetNotificationUpdateInput } from "./CompanySetNotificationUpdateInput";
import { CompanySetNotification } from "./CompanySetNotification";
@swagger.ApiBearerAuth()
export class CompanySetNotificationControllerBase {
  constructor(
    protected readonly service: CompanySetNotificationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "CompanySetNotification",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: CompanySetNotification })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: CompanySetNotificationCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<CompanySetNotification> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "CompanySetNotification",
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
        `providing the properties: ${properties} on ${"CompanySetNotification"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        company: {
          connect: data.company,
        },

        notification: {
          connect: data.notification,
        },
      },
      select: {
        company: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        customText: true,
        id: true,

        notification: {
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
    resource: "CompanySetNotification",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [CompanySetNotification] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(CompanySetNotificationFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<CompanySetNotification[]> {
    const args = plainToClass(
      CompanySetNotificationFindManyArgs,
      request.query
    );

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "CompanySetNotification",
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
        customText: true,
        id: true,

        notification: {
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
    resource: "CompanySetNotification",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: CompanySetNotification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: CompanySetNotificationWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<CompanySetNotification | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "CompanySetNotification",
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
        customText: true,
        id: true,

        notification: {
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
    resource: "CompanySetNotification",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: CompanySetNotification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: CompanySetNotificationWhereUniqueInput,
    @common.Body()
    data: CompanySetNotificationUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<CompanySetNotification | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "CompanySetNotification",
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
        `providing the properties: ${properties} on ${"CompanySetNotification"} update is forbidden for roles: ${roles}`
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

          notification: {
            connect: data.notification,
          },
        },
        select: {
          company: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          customText: true,
          id: true,

          notification: {
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
    resource: "CompanySetNotification",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: CompanySetNotification })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: CompanySetNotificationWhereUniqueInput
  ): Promise<CompanySetNotification | null> {
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
          customText: true,
          id: true,

          notification: {
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
}
