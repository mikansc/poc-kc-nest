import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { AccountModule } from './account/account.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, AccountModule, PrismaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
