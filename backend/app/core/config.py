from functools import lru_cache

from pydantic_settings import (
    BaseSettings,
    SettingsConfigDict,
)


class Settings(BaseSettings):
    app_name: str = (
        "Prier sans cesse API"
    )

    app_env: str = "development"

    debug: bool = True

    api_v1_prefix: str = (
        "/api/v1"
    )

    frontend_url: str = (
        "http://localhost:5173"
    )

    allowed_origins: str = (
        "http://localhost:5173"
    )

    mongodb_uri: str = (
        "mongodb://localhost:27017"
    )

    mongodb_db_name: str = (
        "prier_sans_cesse"
    )

    log_level: str = "INFO"

    model_config = (
        SettingsConfigDict(
            env_file=".env",
            env_file_encoding="utf-8",
            case_sensitive=False,
            extra="ignore",
        )
    )

    @property
    def cors_origins(
        self,
    ) -> list[str]:
        return [
            origin.strip()
            for origin
            in self.allowed_origins.split(
                ","
            )
            if origin.strip()
        ]

    @property
    def is_production(
        self,
    ) -> bool:
        return (
            self.app_env.lower()
            == "production"
        )


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()