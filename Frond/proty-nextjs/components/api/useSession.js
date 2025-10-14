"use client";
import { useEffect } from 'react';

// Hook para manejar la limpieza automática del localStorage
export const useSessionCleanup = () => {
  useEffect(() => {
    // Función para limpiar datos de sesión
    const clearSessionData = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('user');
      localStorage.removeItem('loginTime');
    };

    // Limpiar datos cuando se cierra la ventana/pestaña
    const handleBeforeUnload = () => {
      clearSessionData();
    };

    // Limpiar datos cuando se cierra la aplicación (mobile)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Opcional: puedes agregar un delay aquí si quieres
        // setTimeout(() => clearSessionData(), 1000);
      }
    };

    // Agregar event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup al desmontar el componente
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
};

// Función para hacer logout manual
export const logout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('userId');
  localStorage.removeItem('user');
  localStorage.removeItem('loginTime');
  
  // Redirigir a la página principal
  if (typeof window !== 'undefined') {
    window.location.href = '/';
  }
};

// Función para verificar si hay una sesión activa
export const isLoggedIn = () => {
  if (typeof window === 'undefined') return false;
  
  const userId = localStorage.getItem('userId');
  const loginTime = localStorage.getItem('loginTime');
  
  // Verificar si existe el ID y el timestamp
  if (!userId || !loginTime) return false;
  
  // Opcional: verificar si la sesión no ha expirado (ej: 24 horas)
  const sessionDuration = 24 * 60 * 60 * 1000; // 24 horas en ms
  const now = Date.now();
  const loginTimestamp = parseInt(loginTime);
  
  if (now - loginTimestamp > sessionDuration) {
    logout(); // Limpiar sesión expirada
    return false;
  }
  
  return true;
};

// Función para obtener el ID del usuario actual
export const getCurrentUserId = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('userId');
};

export default useSessionCleanup;
