import time
import uuid

from fastapi import Request

from starlette.middleware.base import (
    BaseHTTPMiddleware,
)

from starlette.responses import (
    Response,
)

from app.core.config import (
    settings,
)


class RequestContextMiddleware(
    BaseHTTPMiddleware
):
    async def dispatch(
        self,
        request: Request,
        call_next,
    ) -> Response:
        request_id = (
            request.headers.get(
                "X-Request-ID"
            )
            or str(uuid.uuid4())
        )

        request.state.request_id = (
            request_id
        )

        started_at = (
            time.perf_counter()
        )

        response = (
            await call_next(
                request
            )
        )

        duration = (
            time.perf_counter()
            - started_at
        )

        response.headers[
            "X-Request-ID"
        ] = request_id

        response.headers[
            "X-Process-Time"
        ] = f"{duration:.4f}"

        return response


class SecurityHeadersMiddleware(
    BaseHTTPMiddleware
):
    async def dispatch(
        self,
        request: Request,
        call_next,
    ) -> Response:
        response = (
            await call_next(
                request
            )
        )

        response.headers[
            "X-Content-Type-Options"
        ] = "nosniff"

        response.headers[
            "X-Frame-Options"
        ] = "DENY"

        response.headers[
            "Referrer-Policy"
        ] = (
            "strict-origin-when-cross-origin"
        )

        response.headers[
            "Permissions-Policy"
        ] = (
            "camera=(), "
            "microphone=(), "
            "geolocation=()"
        )

        if settings.is_production:
            response.headers[
                "Strict-Transport-Security"
            ] = (
                "max-age=31536000; "
                "includeSubDomains"
            )

        return response