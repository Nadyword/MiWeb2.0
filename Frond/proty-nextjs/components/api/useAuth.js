import { useState } from 'react';
import apiService from './apiService';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await apiService.register(userData);
      
      if (response === 0) {
        setError("El usuario ya está registrado.");
        setSuccess(false);
        return 0;
      }

      setSuccess(true);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await apiService.login(credentials);
      setSuccess(true);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const clearMessages = () => {
    setError(null);
    setSuccess(false);
  };

  return {
    loading,
    error,
    success,
    register,
    login,
    clearMessages,
  };
};

