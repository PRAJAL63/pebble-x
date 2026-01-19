import type { UserLoginInput, UserLoginResponse } from '@/generated';
import api from '@/lib/api';

export interface UserProfile {
  _id?: string;
  id?: string;
  name: string;
  email: string;
  password?: string;
  role: 'SUPPLIER' | 'ADMIN';
  phone?: number;
  address?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  role: string;
  phone: number;
  address: string;
}
export interface RegisterResponse {
  success: boolean;
  user: UserProfile;
  token: string;
  message: string;
}
export interface ProfileResponse {
  success: boolean;
  user: UserProfile;
  message: string;
}

export const authService = {
  login: async (data: UserLoginInput) => {
    const response = await api.post<UserLoginResponse>('/auth/login', data);
    console.log('response', response.data);
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get<ProfileResponse>('/auth/profile');
    console.log(response);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    window.location.href = '/login';
  },
  register: async (data: RegisterInput) => {
    try {
      const response = await api.post<RegisterResponse>('/auth/register', data);
      return response.data;
    } catch (error) {
      const err = error as {
        response?: { data?: { body?: { message?: string }; message?: string } };
      };
      const errorMessage =
        err.response?.data?.body?.message || err.response?.data?.message || 'Failed to fetch clans';
      throw new Error(errorMessage);
    }
  },
};
