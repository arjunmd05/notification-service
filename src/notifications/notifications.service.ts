import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  async sendReport(email: string, fileBuffer: Buffer) {
    console.log('Sending report to:', email);
    console.log('File size:', fileBuffer.length);

    return {
      message: 'Report received and email triggered',
    };
  }
}
