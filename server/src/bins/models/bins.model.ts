import { BinType } from './bin-type.model';
import { Point } from 'geojson';

export interface Pin {
  type: BinType;
  location: Point;
}
