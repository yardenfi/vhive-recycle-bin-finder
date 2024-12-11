import { Controller, Get, Query } from '@nestjs/common';
import { BinsService } from './bins.service';
import { GetRecycleBinsDto } from './dtos/get-recycle-bins.dto';

@Controller('recycle-bins')
export class BinsController {
  constructor(private readonly binService: BinsService) {}

  @Get()
  getRecycleBinsByTypeAndBBox(@Query() query: GetRecycleBinsDto) {}
}
