import { Module } from '@nestjs/common';
import { BinsService } from './bins.service';
import { BinsController } from './bins.controller';
import { NetaniaBinsService } from './netania-bins.service';

@Module({
  providers: [BinsService, NetaniaBinsService],
  controllers: [BinsController],
})
export class BinsModule {}
