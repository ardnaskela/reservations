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
import { CreateCustomerArgs } from "./CreateCustomerArgs";
import { UpdateCustomerArgs } from "./UpdateCustomerArgs";
import { DeleteCustomerArgs } from "./DeleteCustomerArgs";
import { CustomerFindManyArgs } from "./CustomerFindManyArgs";
import { CustomerFindUniqueArgs } from "./CustomerFindUniqueArgs";
import { Customer } from "./Customer";
import { FavoriteCompanyFindManyArgs } from "../../favoriteCompany/base/FavoriteCompanyFindManyArgs";
import { FavoriteCompany } from "../../favoriteCompany/base/FavoriteCompany";
import { CompanyFindManyArgs } from "../../company/base/CompanyFindManyArgs";
import { Company } from "../../company/base/Company";
import { LastSeenCompanyFindManyArgs } from "../../lastSeenCompany/base/LastSeenCompanyFindManyArgs";
import { LastSeenCompany } from "../../lastSeenCompany/base/LastSeenCompany";
import { ReservationFindManyArgs } from "../../reservation/base/ReservationFindManyArgs";
import { Reservation } from "../../reservation/base/Reservation";
import { CustomerService } from "../customer.service";

@graphql.Resolver(() => Customer)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CustomerResolverBase {
  constructor(
    protected readonly service: CustomerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  async _customersMeta(
    @graphql.Args() args: CustomerFindManyArgs
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
  @graphql.Query(() => [Customer])
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  async customers(
    @graphql.Args() args: CustomerFindManyArgs
  ): Promise<Customer[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Customer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "own",
  })
  async customer(
    @graphql.Args() args: CustomerFindUniqueArgs
  ): Promise<Customer | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Customer)
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "create",
    possession: "any",
  })
  async createCustomer(
    @graphql.Args() args: CreateCustomerArgs
  ): Promise<Customer> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Customer)
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "update",
    possession: "any",
  })
  async updateCustomer(
    @graphql.Args() args: UpdateCustomerArgs
  ): Promise<Customer | null> {
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

  @graphql.Mutation(() => Customer)
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "delete",
    possession: "any",
  })
  async deleteCustomer(
    @graphql.Args() args: DeleteCustomerArgs
  ): Promise<Customer | null> {
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
  @graphql.ResolveField(() => [FavoriteCompany])
  @nestAccessControl.UseRoles({
    resource: "FavoriteCompany",
    action: "read",
    possession: "any",
  })
  async favoriteCompanies(
    @graphql.Parent() parent: Customer,
    @graphql.Args() args: FavoriteCompanyFindManyArgs
  ): Promise<FavoriteCompany[]> {
    const results = await this.service.findFavoriteCompanies(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Company])
  @nestAccessControl.UseRoles({
    resource: "Company",
    action: "read",
    possession: "any",
  })
  async handledCompanies(
    @graphql.Parent() parent: Customer,
    @graphql.Args() args: CompanyFindManyArgs
  ): Promise<Company[]> {
    const results = await this.service.findHandledCompanies(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [LastSeenCompany])
  @nestAccessControl.UseRoles({
    resource: "LastSeenCompany",
    action: "read",
    possession: "any",
  })
  async lastSeenCompanies(
    @graphql.Parent() parent: Customer,
    @graphql.Args() args: LastSeenCompanyFindManyArgs
  ): Promise<LastSeenCompany[]> {
    const results = await this.service.findLastSeenCompanies(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Reservation])
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "any",
  })
  async reservations(
    @graphql.Parent() parent: Customer,
    @graphql.Args() args: ReservationFindManyArgs
  ): Promise<Reservation[]> {
    const results = await this.service.findReservations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
