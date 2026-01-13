import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const session = request.session;

    // Verificar si existe sesión y si el usuario es admin
    if (!session || !session.username) {
      throw new UnauthorizedException({
        statusCode: 401,
        message: 'No estás autenticado. Por favor inicia sesión.',
        error: 'Unauthorized',
      });
    }

    // Verificar que el usuario sea admin
    if (session.username !== 'admin') {
      throw new UnauthorizedException({
        statusCode: 401,
        message: 'No tienes permisos de administrador.',
        error: 'Forbidden',
      });
    }

    // Agregar el usuario al request para usarlo en los controladores
    request.user = {
      username: session.username,
    };

    return true;
  }
}
