// Organizes the Workplace feature by grouping related controllers and providers.
import { Module } from '@nestjs/common';
import { WorkplaceService } from './workplace.service';
import { WorkplaceController } from './workplace.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [WorkplaceService],
  controllers: [WorkplaceController],
})
export class WorkplaceModule {}
