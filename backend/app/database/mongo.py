import logging
from typing import Any

from pymongo import AsyncMongoClient

from pymongo.server_api import (
    ServerApi,
)

from app.core.config import (
    settings,
)


logger = logging.getLogger(
    __name__
)


_client: AsyncMongoClient | None = (
    None
)

_database: Any | None = None


async def connect_to_mongo(
) -> None:
    global _client
    global _database

    _client = AsyncMongoClient(
        settings.mongodb_uri,
        server_api=ServerApi(
            "1"
        ),
        serverSelectionTimeoutMS=3000,
    )

    _database = _client[
        settings.mongodb_db_name
    ]

    try:
        await _client.admin.command(
            "ping"
        )

        logger.info(
            "Connected to MongoDB database '%s'",
            settings.mongodb_db_name,
        )

    except Exception:
        logger.exception(
            "MongoDB connection failed"
        )

        if settings.is_production:
            raise


async def close_mongo_connection(
) -> None:
    global _client
    global _database

    if _client is not None:
        await _client.close()

        logger.info(
            "MongoDB connection closed"
        )

    _client = None

    _database = None


def get_database():
    if _database is None:
        raise RuntimeError(
            "MongoDB is not initialized"
        )

    return _database


async def ping_database() -> bool:
    if _client is None:
        return False

    try:
        await _client.admin.command(
            "ping"
        )

        return True

    except Exception:
        logger.warning(
            "MongoDB ping failed"
        )

        return False