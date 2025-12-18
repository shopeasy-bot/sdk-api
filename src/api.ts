export interface ApiClientOptions {
  baseUrl?: string;
  token?: string;
}

export class ApiClient {
  private baseUrl: string;
  
  constructor(private options: ApiClientOptions = {}) {
      this.baseUrl = options.baseUrl?.trim() ? options.baseUrl : "https://api.shopeasy.site";
  }

  private get headers() {
    return {
      "Content-Type": "application/json",
      ...(this.options.token && {
        Authorization: `Bearer ${this.options.token}`,
      }),
    };
  }

  async request<T>(path: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      ...options,
      headers: {
        ...this.headers,
        ...options?.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => null);
      throw new Error(error?.error ?? response.statusText);
    }

    // Tratamento especial para NO_CONTENT (204)
    if (response.status === 204) {
      return undefined as T;
    }

    return response.json();
  }

  get<T>(path: string) {
    return this.request<T>(path);
  }

  post<T>(path: string, body?: unknown) {
    return this.request<T>(path, {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  patch<T>(path: string, body?: unknown) {
    return this.request<T>(path, {
      method: "PATCH",
      body: JSON.stringify(body),
    });
  }

  delete<T>(path: string, body?: unknown) {
    const options: RequestInit = { method: "DELETE" };
    
    if (body !== undefined) {
      options.body = JSON.stringify(body);
    }
    
    return this.request<T>(path, options);
  }
}