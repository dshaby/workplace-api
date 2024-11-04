// Services in NestJS contain the business logic and interact with the database or other services.
// Services in NestJS are used to encapsulate business logic and can perform a variety of tasks, such as:

// Interacting with databases
// Calling external APIs!!
// Performing calculations
// Managing application state
// Handling complex logic
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import axios from 'axios';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WorkplaceService {
  constructor(private prisma: PrismaService) {}

  // Get all workplaces
  async findAll() {
    return this.prisma.workplace.findMany();
  }

  async getMostActiveWorkplaces() {
    return this.prisma.workplace.findMany({
      where: { active: true },
      orderBy: { name: 'asc' },
    });
  }

  // Get a single workplace by ID
  async findOne(id: number) {
    return this.prisma.workplace.findUnique({ where: { id } });
  }

  async createWorkplace(name: string, active: boolean) {
    return this.prisma.workplace.create({
      data: { name, active },
    });
  }

  // Create a new workplace
  // In many cases, the second approach (create(data: Prisma.WorkplaceCreateInput)) is more scalable and flexible, making it a preferred choice for larger applications. However, for simple use cases, the first approach can be more straightforward and easier to understand.
  async create(data: Prisma.WorkplaceCreateInput) {
    return this.prisma.workplace.create({ data });
  }

  // Update a workplace by ID
  async update(id: number, data: Prisma.WorkplaceUpdateInput) {
    return this.prisma.workplace.update({
      where: { id },
      data,
    });
  }

  // Delete a workplace by ID
  async delete(id: number) {
    return this.prisma.workplace.delete({ where: { id } });
  }

  // Function to fetch and store external data
  async fetchAndStoreExternalData() {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );

      const filteredData = data.filter((post) => post.title.length > 20);

      for (const item of filteredData) {
        await this.prisma.workplace.create({
          data: { name: item.title, active: item.body.length > 175 },
        });
      }
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }
}
