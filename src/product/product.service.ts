import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {PrismaService} from 'src/prisma.service';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';


@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findproducts(name: string) {
    const products = await this.prisma.product.findMany({
      where: {
        name: {
          contains: name,
        },
      },
      take: 5,
    });
  
    if (products.length === 0) {
      throw new NotFoundException(`No products closely resembling the name ${name} found`);
    }
  
    return products;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
