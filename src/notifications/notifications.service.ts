import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  sendNotification(payload: any) {
    console.log('Notification received:', payload);

    return {
      status: 'sent',
      timestamp: new Date(),
    };
  }
}
