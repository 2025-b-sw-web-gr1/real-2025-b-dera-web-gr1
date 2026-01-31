import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';

@Injectable()
export class AppService {
  constructor(private readonly i18n: I18nService) {}

  async getHello(lang: string): Promise<string> {
    return await this.i18n.translate('app.HELLO', { lang });
  }

  async getWelcome(lang: string): Promise<string> {
    return await this.i18n.translate('app.WELCOME', { lang });
  }

  async getGreeting(name: string, lang: string): Promise<string> {
    return await this.i18n.translate('app.GREETING', { 
      lang,
      args: { name }
    });
  }
}
