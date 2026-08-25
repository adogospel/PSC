from collections.abc import (
    AsyncIterator,
)

from contextlib import (
    asynccontextmanager,
)

from fastapi import FastAPI

from fastapi.middleware.cors import (
    CORSMiddleware,
)

from app.api.v1.router import (
    api_router,
)

from app.core.config import (
    settings,
)

from app.core.exceptions import (
    AppException,
    app_exception_handler,
)

from app.core.logging import (
    configure_logging,
)

from app.core.middleware import (
    RequestContextMiddleware,
    SecurityHeadersMiddleware,
)

from app.database.mongo import (
    close_mongo_connection,
    connect_to_mongo,
)


configure_logging()


@asynccontextmanager
async def lifespan(
    _: FastAPI,
) -> AsyncIterator[None]:
    await connect_to_mongo()

    yield

    await close_mongo_connection()


app = FastAPI(
    title=settings.app_name,

    version="0.1.0",

    description=(
        "API du MVP "
        "Prier sans cesse."
    ),

    docs_url=(
        "/docs"
        if not settings.is_production
        else None
    ),

    redoc_url=(
        "/redoc"
        if not settings.is_production
        else None
    ),

    lifespan=lifespan,
)


app.add_middleware(
    CORSMiddleware,

    allow_origins=(
        settings.cors_origins
    ),

    allow_credentials=True,

    allow_methods=[
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE",
        "OPTIONS",
    ],

    allow_headers=[
        "Content-Type",
        "Authorization",
        "X-Request-ID",
    ],
)


app.add_middleware(
    RequestContextMiddleware
)


app.add_middleware(
    SecurityHeadersMiddleware
)


app.add_exception_handler(
    AppException,
    app_exception_handler,
)


app.include_router(
    api_router,
    prefix=(
        settings.api_v1_prefix
    ),
)


@app.get(
    "/",
    tags=["Root"],
)
async def root() -> dict[str, str]:
    return {
        "name":
            settings.app_name,

        "status":
            "running",

        "environment":
            settings.app_env,

        "docs": (
            "/docs"
            if not settings.is_production
            else "disabled"
        ),
    }