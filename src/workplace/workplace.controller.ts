// Controllers in NestJS handle incoming HTTP requests and delegate them to the appropriate service methods.
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { WorkplaceService } from './workplace.service';
import { Prisma } from '@prisma/client';

@Controller('workplace')
export class WorkplaceController {
  //  This provider can then be injected into other classes (such as controllers or other services) via the constructor.
  constructor(private readonly workplaceService: WorkplaceService) {}

  @Get('active')
  async getMostActiveWorkplaces() {
    return this.workplaceService.getMostActiveWorkplaces();
  }

  @Get()
  async findAll() {
    return this.workplaceService.findAll();
  }

  @Get('fetch-external')
  async fetchAndStoreExternalData() {
    await this.workplaceService.fetchAndStoreExternalData();
    return { message: 'Data fetched and stored successfully' };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.workplaceService.findOne(Number(id));
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: Prisma.WorkplaceUpdateInput,
  ) {
    return this.workplaceService.update(Number(id), data);
  }

  @Post('create')
  async createWorkplace(
    @Body('name') name: string,
    @Body('active') active: boolean,
  ) {
    return this.workplaceService.createWorkplace(name, active);
  }

  // preferred approach for larger applications
  @Post()
  async create(@Body() data: Prisma.WorkplaceCreateInput) {
    return this.workplaceService.create(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.workplaceService.delete(Number(id));
  }
}
