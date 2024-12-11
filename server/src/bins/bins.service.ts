import { Injectable } from '@nestjs/common';
import { NetaniaBinsService } from './netania-bins.service';
import { Bin } from './models/bin.model';
import { BoundingBoxDto } from './dtos/get-recycle-bins.dto';
import { BinType } from './models/bin-type.model';

@Injectable()
export class BinsService {
  bins: Bin[] = [];
  constructor(private readonly netaniaBinsService: NetaniaBinsService) {
    this.bins.push(...this.netaniaBinsService.loadBins());
  }

  getRecycleBinsByTypesAndBBox(boundingBox: BoundingBoxDto, types: BinType[]) {
    return this.bins;
  }
}
