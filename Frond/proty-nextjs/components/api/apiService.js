const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

class ApiService {
  constructor() {
    this.baseURL = NEXT_PUBLIC_API_URL || 'http://localhost:5069/Inmo/api/';
  }

  // Método genérico para hacer peticiones HTTP
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Registro de usuario
  async register(userData) {
    return this.request('Register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  // Login de usuario
  async login(credentials) {
    return this.request('/Login', {
      method: 'GET',
      body: JSON.stringify(credentials),
    });
  }

  // Verificar si el usuario está autenticado
  async verifyToken(token) {
    return this.request('/auth/verify', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  }

  // Cerrar sesión
  async logout() {
    return this.request('/auth/logout', {
      method: 'POST',
    });
  }
}

// Instancia singleton del servicio
const apiService = new ApiService();
export default apiService;

