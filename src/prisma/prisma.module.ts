// This file defines a NestJS module that provides the PrismaService to the rest of your application. The purpose of this module is to encapsulate the Prisma-related functionality and make it available for dependency injection throughout your NestJS application.
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
