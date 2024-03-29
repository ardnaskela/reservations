import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { CustomerModule } from "./customer/customer.module";
import { CompanyModule } from "./company/company.module";
import { AddressModule } from "./address/address.module";
import { CompanyTypeModule } from "./companyType/companyType.module";
import { TimeSlotModule } from "./timeSlot/timeSlot.module";
import { FavoriteCompanyModule } from "./favoriteCompany/favoriteCompany.module";
import { LastSeenCompanyModule } from "./lastSeenCompany/lastSeenCompany.module";
import { ReservationModule } from "./reservation/reservation.module";
import { ReservableSlotModule } from "./reservableSlot/reservableSlot.module";
import { NotificationModule } from "./notification/notification.module";
import { CompanySetNotificationModule } from "./companySetNotification/companySetNotification.module";
import { ReservationNotificationModule } from "./reservationNotification/reservationNotification.module";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { HealthModule } from "./health/health.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  controllers: [],
  imports: [
    UserModule,
    CustomerModule,
    CompanyModule,
    AddressModule,
    CompanyTypeModule,
    TimeSlotModule,
    FavoriteCompanyModule,
    LastSeenCompanyModule,
    ReservationModule,
    ReservableSlotModule,
    NotificationModule,
    CompanySetNotificationModule,
    ReservationNotificationModule,
    ACLModule,
    AuthModule,
    HealthModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
