// DTO for the bounding box
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { BinType } from '../models/bin-type.model';

export class BoundingBoxDto {
  @IsNumber()
  minLatitude: number;

  @IsNumber()
  maxLatitude: number;

  @IsNumber()
  minLongitude: number;

  @IsNumber()
  maxLongitude: number;
}

// Main DTO for the GET request payload
export class GetRecycleBinsDto {
  @ValidateNested()
  @Type(() => BoundingBoxDto)
  boundingBox: BoundingBoxDto;

  @IsArray()
  @IsEnum(BinType, { each: true })
  @IsOptional()
  types?: BinType[];
}
