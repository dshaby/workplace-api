// This service will act as our interface to the database.
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// Decorator: This decorator marks the class as a provider that can be injected into other classes.
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  // async enableShutdownHooks(app: INestApplication) {
  //   process.on('beforeExit', async () => {
  //     await app.close();
  //     process.exit(0);
  //   });
  // }
}
