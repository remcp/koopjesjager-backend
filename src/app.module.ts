import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { StoreModule } from './store/store.module';
import { ProductStoreModule } from './product_store/product_store.module';

@Module({
  imports: [ProductModule, StoreModule, ProductStoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
