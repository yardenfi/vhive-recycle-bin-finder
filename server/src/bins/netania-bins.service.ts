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

  binTypeMapping: Record<string, BinType> = {
    'מיכלי זכוכית': BinType.Glass,
    'מיכלי נייר': BinType.Paper,
  };

  // 'מיכלי בקבוקים',
  // 'בריכות ציבוריות',
  // 'תחנת דלק',
  // 'מפעלים מסוכנים',
  // 'מתקנים מבוקרים',
  // ,
  // 'מיכלי טקסטיל',
  // ,
  // 'צוברי גז',
  // 'אתרים עם קרינה',
  // 'טמוני קרקע',
  // 'אתרי דגירת יתושים'
  hebrewTypes = new Set(Object.keys(this.binTypeMapping));

  loadBins(): Bin[] {
    return netaniaBins.features
      .map(({ geometry, properties }) => ({ geometry, properties }))
      .filter(({ properties }) => this.hebrewTypes.has(properties.theme_desc))
      .map((rawBin) => ({
        location: rawBin.geometry as any,
        type: this.binTypeMapping[rawBin.properties.theme_desc],
      }));
  }
}
