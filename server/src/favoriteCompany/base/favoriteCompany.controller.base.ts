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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FavoriteCompanyService } from "../favoriteCompany.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FavoriteCompanyCreateInput } from "./FavoriteCompanyCreateInput";
import { FavoriteCompanyWhereInput } from "./FavoriteCompanyWhereInput";
import { FavoriteCompanyWhereUniqueInput } from "./FavoriteCompanyWhereUniqueInput";
import { FavoriteCompanyFindManyArgs } from "./FavoriteCompanyFindManyArgs";
import { FavoriteCompanyUpdateInput } from "./FavoriteCompanyUpdateInput";
import { FavoriteCompany } from "./FavoriteCompany";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FavoriteCompanyControllerBase {
  constructor(
    protected readonly service: FavoriteCompanyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FavoriteCompany",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FavoriteCompany })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: FavoriteCompanyCreateInput
  ): Promise<FavoriteCompany> {
    return await this.service.create({
      data: {
        ...data,

        company: data.company
          ? {
              connect: data.company,
            }
          : undefined,

        customer: {
          connect: data.customer,
        },
      },
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
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FavoriteCompany",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [FavoriteCompany] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(FavoriteCompanyFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<FavoriteCompany[]> {
    const args = plainToClass(FavoriteCompanyFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
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
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FavoriteCompany",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FavoriteCompany })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: FavoriteCompanyWhereUniqueInput
  ): Promise<FavoriteCompany | null> {
    const result = await this.service.findOne({
      where: params,
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
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "FavoriteCompany",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FavoriteCompany })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: FavoriteCompanyWhereUniqueInput,
    @common.Body() data: FavoriteCompanyUpdateInput
  ): Promise<FavoriteCompany | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          company: data.company
            ? {
                connect: data.company,
              }
            : undefined,

          customer: {
            connect: data.customer,
          },
        },
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

  @nestAccessControl.UseRoles({
    resource: "FavoriteCompany",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FavoriteCompany })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: FavoriteCompanyWhereUniqueInput
  ): Promise<FavoriteCompany | null> {
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

          customer: {
            select: {
              id: true,
            },
          },

          id: true,
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
