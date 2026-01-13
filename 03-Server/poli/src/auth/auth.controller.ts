import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Post,
    Session,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  // Credenciales hardcodeadas
  private readonly ADMIN_USER = 'admin';
  private readonly ADMIN_PASSWORD = '12345678';

  @Post('login')
  login(
    @Body() credentials: { username: string; password: string },
    @Session() session: Record<string, any>,
  ) {
    // Verificar si ya existe una sesión activa
    if (session.username) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message:
            'Ya existe una sesión activa. Por favor, cierra sesión primero.',
          error: 'Session Already Active',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    // Validar credenciales
    if (
      credentials.username !== this.ADMIN_USER ||
      credentials.password !== this.ADMIN_PASSWORD
    ) {
      throw new HttpException(
        {
          statusCode: HttpStatus.UNAUTHORIZED,
          message: 'Usuario o contraseña incorrectos',
          error: 'Unauthorized',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }

    // Guardar sesión
    session.username = this.ADMIN_USER;

    return {
      statusCode: HttpStatus.OK,
      message: 'Login exitoso',
      data: {
        username: session.username,
      },
    };
  }

  @Post('logout')
  logout(@Session() session: Record<string, any>) {
    if (!session.username) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'No hay sesión activa',
          error: 'No Active Session',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const username = session.username;

    // Destruir la sesión
    session.destroy((err: any) => {
      if (err) {
        throw new HttpException(
          {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Error al cerrar sesión',
            error: 'Session Destruction Failed',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    });

    return {
      statusCode: HttpStatus.OK,
      message: 'Logout exitoso',
      data: {
        username: username,
      },
    };
  }

  @Get('status')
  getStatus(@Session() session: Record<string, any>) {
    if (!session.username) {
      return {
        statusCode: HttpStatus.OK,
        message: 'No hay sesión activa',
        data: {
          authenticated: false,
        },
      };
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'Sesión activa',
      data: {
        authenticated: true,
        username: session.username,
      },
    };
  }
}
