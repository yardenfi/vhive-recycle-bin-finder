import * as netaniaBins from './fixtures/netania.json';
import { Injectable } from '@nestjs/common';
import { Bin } from './models/bin.model';
import { BinType } from './models/bin-type.model';
import { geometry } from '@turf/turf';

@Injectable()
export class NetaniaBinsService {
  constructor() {
    this.loadBins();
  }

  rawBinTypeToBinTypeMapping: Record<string, BinType> = {
    'מיכלי זכוכית': BinType.Glass,
    'מיכלי נייר': BinType.Paper,
  };

  // 'מיכלי בקבוקים',
  // 'מיכלי טקסטיל',

  rawBinTypes = new Set(Object.keys(this.rawBinTypeToBinTypeMapping));

  loadBins(): Bin[] {
    return netaniaBins.features
      .map(({ geometry, properties }) => ({ geometry, properties }))
      .filter(({ properties }) => this.rawBinTypes.has(properties.theme_desc))
      .map((rawBin) => ({
        location: rawBin.geometry as any,
        type: this.rawBinTypeToBinTypeMapping[rawBin.properties.theme_desc],
      }));
  }
}
