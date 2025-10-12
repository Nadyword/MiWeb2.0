# API de Autenticación

Este directorio contiene los servicios y hooks para manejar la autenticación en la aplicación.

## Archivos

- `apiService.js` - Servicio principal para las llamadas a la API
- `useAuth.js` - Hook personalizado para manejar el estado de autenticación

## Configuración

### Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con la siguiente configuración:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### Endpoints esperados

La API debe tener los siguientes endpoints:

- `POST /api/auth/register` - Registro de usuarios
- `POST /api/auth/login` - Inicio de sesión
- `GET /api/auth/verify` - Verificación de token
- `POST /api/auth/logout` - Cerrar sesión

### Estructura de datos

#### Registro
```json
{
  "email": "usuario@ejemplo.com",
  "password": "contraseña123"
}
```

#### Respuesta exitosa
```json
{
  "success": true,
  "message": "Usuario registrado exitosamente",
  "user": {
    "id": 1,
    "email": "usuario@ejemplo.com"
  }
}
```

#### Respuesta de error
```json
{
  "success": false,
  "message": "El email ya está registrado"
}
```

## Uso

```jsx
import { useAuth } from '../api/useAuth';

function MyComponent() {
  const { loading, error, success, register, login } = useAuth();

  const handleRegister = async (userData) => {
    try {
      const response = await register(userData);
      console.log('Registro exitoso:', response);
    } catch (err) {
      console.error('Error:', err.message);
    }
  };

  return (
    // Tu componente aquí
  );
}
```

