/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateCompanyTypeArgs } from "./CreateCompanyTypeArgs";
import { UpdateCompanyTypeArgs } from "./UpdateCompanyTypeArgs";
import { DeleteCompanyTypeArgs } from "./DeleteCompanyTypeArgs";
import { CompanyTypeFindManyArgs } from "./CompanyTypeFindManyArgs";
import { CompanyTypeFindUniqueArgs } from "./CompanyTypeFindUniqueArgs";
import { CompanyType } from "./CompanyType";
import { CompanyFindManyArgs } from "../../company/base/CompanyFindManyArgs";
import { Company } from "../../company/base/Company";
import { CompanyTypeService } from "../companyType.service";

@graphql.Resolver(() => CompanyType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CompanyTypeResolverBase {
  constructor(
    protected readonly service: CompanyTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CompanyType",
    action: "read",
    possession: "any",
  })
  async _companyTypesMeta(
    @graphql.Args() args: CompanyTypeFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CompanyType])
  @nestAccessControl.UseRoles({
    resource: "CompanyType",
    action: "read",
    possession: "any",
  })
  async companyTypes(
    @graphql.Args() args: CompanyTypeFindManyArgs
  ): Promise<CompanyType[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CompanyType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CompanyType",
    action: "read",
    possession: "own",
  })
  async companyType(
    @graphql.Args() args: CompanyTypeFindUniqueArgs
  ): Promise<CompanyType | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CompanyType)
  @nestAccessControl.UseRoles({
    resource: "CompanyType",
    action: "create",
    possession: "any",
  })
  async createCompanyType(
    @graphql.Args() args: CreateCompanyTypeArgs
  ): Promise<CompanyType> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CompanyType)
  @nestAccessControl.UseRoles({
    resource: "CompanyType",
    action: "update",
    possession: "any",
  })
  async updateCompanyType(
    @graphql.Args() args: UpdateCompanyTypeArgs
  ): Promise<CompanyType | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CompanyType)
  @nestAccessControl.UseRoles({
    resource: "CompanyType",
    action: "delete",
    possession: "any",
  })
  async deleteCompanyType(
    @graphql.Args() args: DeleteCompanyTypeArgs
  ): Promise<CompanyType | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Company])
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "read",
    possession: "any",
  })
  async companies(
    @graphql.Parent() parent: CompanyType,
    @graphql.Args() args: CompanyFindManyArgs
  ): Promise<Company[]> {
    const results = await this.service.findCompanies(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
