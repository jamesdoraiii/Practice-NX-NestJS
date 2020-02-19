import { Module } from '@nestjs/common';
import { WatchesModule } from './watches/watches.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [WatchesModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
