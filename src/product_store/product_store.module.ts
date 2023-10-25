import { Module } from '@nestjs/common';
import { ProductStoreService } from './product_store.service';
import { ProductStoreController } from './product_store.controller';

@Module({
  controllers: [ProductStoreController],
  providers: [ProductStoreService],
})
export class ProductStoreModule {}
