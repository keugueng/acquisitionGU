export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
}

export interface LoginResponse {
  user: {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    role: string;
  };
  token: string;
  token_type: string;
}

export interface RegisterResponse {
  user: {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    role: string;
  };
  token: string;
  token_type: string;
}
