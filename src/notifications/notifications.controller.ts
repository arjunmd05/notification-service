import { Body, Controller, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('send-report')
  sendReport(@Body() body: { email: string; file: string }) {
    const buffer = Buffer.from(body.file, 'base64');
    return this.notificationsService.sendReport(body.email, buffer);
  }
}
