import {Injectable} from '@nestjs/common';
import {NetaniaBinsService} from './netania-bins.service';
import {Bin} from './models/bin.model';
import {BoundingBoxDto} from './dtos/get-recycle-bins.dto';
import {BinType} from './models/bin-type.model';

@Injectable()
export class BinsService {
    bins: Bin[] = [];

    constructor(private readonly netaniaBinsService: NetaniaBinsService) {
        this.bins.push(...this.netaniaBinsService.loadBins());
    }

    getRecycleBinsByTypesAndBBox(boundingBox: BoundingBoxDto, types: BinType[]) {
        const filteredByTypes = types ? this.bins.filter((bin) => types.includes(bin.type)) : this.bins;

        return boundingBox ? filteredByTypes.filter((bin) => {
            return bin.location.coordinates[0] >= boundingBox.minLongitude &&
                bin.location.coordinates[0] <= boundingBox.maxLongitude &&
                bin.location.coordinates[1] >= boundingBox.minLatitude &&
                bin.location.coordinates[1] <= boundingBox.maxLatitude;
        }) : filteredByTypes;
    }
}
