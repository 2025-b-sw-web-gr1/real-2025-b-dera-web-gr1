import { Controller, Get, Query } from '@nestjs/common';
import { I18nLang } from 'nestjs-i18n';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Opción 1: Usando el decorador @I18nLang() para obtener el idioma automáticamente
  @Get()
  async getHello(@I18nLang() lang: string): Promise<string> {
    return await this.appService.getHello(lang);
  }

  // Opción 2: Usando query parameter explícito
  @Get('welcome')
  async getWelcome(@Query('lang') lang: string = 'es'): Promise<string> {
    return await this.appService.getWelcome(lang);
  }

  // Opción 3: Con parámetros dinámicos
  @Get('greeting')
  async getGreeting(
    @Query('name') name: string = 'Usuario',
    @I18nLang() lang: string
  ): Promise<string> {
    return await this.appService.getGreeting(name, lang);
  }
}
