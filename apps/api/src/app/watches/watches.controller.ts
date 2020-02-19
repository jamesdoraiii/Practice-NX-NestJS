import { Controller, Get, Param } from '@nestjs/common';

import { WatchesService } from './watches.service';
import { Watch } from '@practice/api-interfaces';
import { get } from 'http';

@Controller()
export class WatchesController {
  constructor(private readonly watchesService: WatchesService) {}

  @Get('watches/watchList')
  getWatchList(): Watch[] {
    return this.watchesService.getWatches();
  }

  @Get('watches/:id')
  getWatch(@Param() params): Watch {
    return this.watchesService.getWatch(params.id);
  }
}
