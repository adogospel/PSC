const API_URL =
  import.meta.env
    .VITE_API_URL ??
  "http://localhost:8000/api/v1";

export class ApiError
  extends Error {
  constructor(
    message: string,

    public status: number,

    public details?: unknown,
  ) {
    super(message);

    this.name = "ApiError";
  }
}

export async function apiFetch<T>(
  path: string,

  init?: RequestInit,
): Promise<T> {
  const response =
    await fetch(
      `${API_URL}${path}`,

      {
        ...init,

        headers: {
          "Content-Type":
            "application/json",

          ...init?.headers,
        },

        /*
         * Nécessaire plus tard
         * pour le refresh token
         * HttpOnly.
         */
        credentials: "include",
      },
    );

  const contentType =
    response.headers.get(
      "content-type",
    ) ?? "";

  const payload =
    contentType.includes(
      "application/json",
    )
      ? await response.json()
      : null;

  if (!response.ok) {
    throw new ApiError(
      payload?.message ??
        "Une erreur est survenue.",

      response.status,

      payload,
    );
  }

  return payload as T;
}

export type HealthResponse = {
  status: string;

  app: string;

  environment: string;

  database: string;
};

export function getHealth() {
  return apiFetch<HealthResponse>(
    "/health",
  );
}