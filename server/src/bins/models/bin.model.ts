import { BinType } from './bin-type.model';
import { Point } from 'geojson';

export interface Bin {
  type: BinType;
  location: Point;
}
