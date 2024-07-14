import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { AccountModule } from './account/account.module';
import { PrismaModule } from './prisma/prisma.module';
import {
  KeycloakConnectModule,
  ResourceGuard,
  // RoleGuard,
  AuthGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8080',
      realm: 'poc-kc-nest-realm',
      clientId: 'nest-app',
      secret: 'za1ohdzR3fitq2LkkAT7n3vqlPnCuTWq',
    }),
    UserModule,
    AccountModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    // {
    //   provide: APP_GUARD,
    //   useClass: RoleGuard,
    // },
  ],
})
export class AppModule {}
