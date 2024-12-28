import { Module } from '@nestjs/common';
import { LineBotService } from './line-bot.service';
import { LineBotController } from './line-bot.controller';
import { ConfigService } from '@nestjs/config';
import { messagingApi } from '@line/bot-sdk';

@Module({
  controllers: [LineBotController],
  providers: [
    {
    provide: 'LINE_CLIENT',
    useFactory: (configService: ConfigService) => {
      return new messagingApi.MessagingApiClient({
        channelAccessToken: configService.get<string>('CHANNEL_ACCESS_TOKEN'),
      });
    },
    inject: [ConfigService]
  }, LineBotService],
})
export class LineBotModule { }