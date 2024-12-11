import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BinsModule } from './bins/bins.module';

@Module({
  imports: [BinsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
