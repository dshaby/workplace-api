import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkplaceModule } from './workplace/workplace.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [WorkplaceModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
