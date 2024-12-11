import { Controller, Get, Query } from '@nestjs/common';
import { BinsService } from './bins.service';
import { GetRecycleBinsDto } from './dtos/get-recycle-bins.dto';
import { Bin } from './models/bin.model';

@Controller('recycle-bins')
export class BinsController {
  constructor(private readonly binService: BinsService) {}

  @Get()
  getRecycleBinsByTypeAndBBox(@Query() query: GetRecycleBinsDto): Bin[] {
    return this.binService.getRecycleBinsByTypesAndBBox(
      query.boundingBox,
      query.types,
    );
  }
}
