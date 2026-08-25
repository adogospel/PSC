from fastapi import (
    APIRouter,
    status,
)

from fastapi.responses import (
    JSONResponse,
)

from app.core.config import (
    settings,
)

from app.database.mongo import (
    ping_database,
)

from app.schemas.common import (
    HealthResponse,
)


router = APIRouter(
    tags=["Health"]
)


@router.get(
    "/health",
    response_model=HealthResponse,
)
async def health():
    database_ok = (
        await ping_database()
    )

    payload = HealthResponse(
        status=(
            "ok"
            if database_ok
            else "degraded"
        ),
        app=settings.app_name,
        environment=(
            settings.app_env
        ),
        database=(
            "connected"
            if database_ok
            else "unavailable"
        ),
    )

    if not database_ok:
        return JSONResponse(
            status_code=(
                status.HTTP_503_SERVICE_UNAVAILABLE
            ),
            content=(
                payload.model_dump()
            ),
        )

    return payload