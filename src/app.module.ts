import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrowserModule } from './browser/browser.module';
import { LineBotModule } from './line-bot/line-bot.module';
import { UsStockInfoModule } from './us-stock-info/us-stock-info.module';
import { TwStockInfoModule } from './tw-stock-info/tw-stock-info.module';
import { TgBotModule } from './tg-bot/tg-bot.module';
import { ImgurModule } from './imgur/imgur.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 全域使用
    }),
    BrowserModule,
    LineBotModule,
    TgBotModule,
    UsStockInfoModule,
    TwStockInfoModule,
    ImgurModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
