from typing import Any

from fastapi import Request

from fastapi.responses import (
    JSONResponse,
)


class AppException(Exception):
    def __init__(
        self,
        message: str,
        status_code: int = 400,
        code: str = "APP_ERROR",
        details: Any | None = None,
    ) -> None:
        self.message = message

        self.status_code = (
            status_code
        )

        self.code = code

        self.details = details

        super().__init__(message)


async def app_exception_handler(
    _: Request,
    exc: AppException,
) -> JSONResponse:
    return JSONResponse(
        status_code=exc.status_code,
        content={
            "success": False,
            "code": exc.code,
            "message": exc.message,
            "details": exc.details,
        },
    )