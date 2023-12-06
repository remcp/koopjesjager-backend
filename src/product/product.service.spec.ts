import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { PrismaService } from '../prisma.service';
import { NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaModule } from '../prisma.module';
import { ProductController } from './product.controller';


describe('ProductService', () => {
  let service: ProductService;
  let controller: ProductController;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers:[ProductController],
      providers: [ProductService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<ProductService>(ProductService);
    controller = module.get<ProductController>(ProductController);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('should create a product',async () => {
  //   // Mock data
  //   const createProductDto: CreateProductDto = {
  //     name: 'Test Product',
  //     price: 10.99,
  //     date: new Date(),
  //   };
  //   const createdProduct = {
  //     id: 1, // Replace with a test ID
  //     name: 'Test Product', // Replace with a test name
  //     price: 10.99, // Replace with a test price
  //     date: new Date(), // Replace with a test date
  //   };

  //   // Mock the Prisma service method
  //   jest.spyOn(prismaService.product, 'create').mockResolvedValue(createdProduct);

  //   expect(service.create(createProductDto)).resolves.toEqual(createdProduct);
  // });

  // it('should find all products', () => {
  //   // Mock data
  //   const products = [
  //     {
  //       id: 1,
  //       name: 'Product 1',
  //       price: 10.99,
  //       date: new Date(),
  //     },
  //     {
  //       id: 2,
  //       name: 'Product 2',
  //       price: 19.99,
  //       date: new Date(),
  //     },
  //   ]

  //   // Mock the Prisma service method
  //   jest.spyOn(prismaService.product, 'findMany').mockResolvedValue(products);

  //   expect(service.findAll()).resolves.toEqual(products);
  // });

describe('findfive', () => {
  it('should find products by name', async () => {
    // Mock data
    const productName = 'melk';
        const mockProducts = [
            { id: 1, name: 'Product 1', price: 20, date: new Date() },
            // Add more mocked products as needed for your test case
        ];


    // Mock the Prisma service method
    jest.spyOn(service, 'findproducts').mockImplementation(async (name: string) => {
      // Simulate the service method behavior by returning the mocked products
      if (name === productName) {
          return mockProducts;
      }
    });
    const result = await controller.findfive(productName);
    expect(result).toEqual(mockProducts);
  });
});

  // it('should throw NotFoundException when no products found by name', async () => {
  //   // Mock data
  //   const productName = 'melk';

  //   // Mock the Prisma service method to return an empty array
  //   jest.spyOn(service, 'findproducts').mockResolvedValue([]);

  //   await expect(controller.findfive(productName)).rejects.toThrow(NotFoundException);
  // });
});