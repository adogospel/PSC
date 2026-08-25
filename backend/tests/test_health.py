from fastapi.testclient import (
    TestClient,
)

from app.main import app


def test_root_endpoint() -> None:
    with TestClient(
        app
    ) as client:
        response = client.get(
            "/"
        )

        assert (
            response.status_code
            == 200
        )

        payload = (
            response.json()
        )

        assert (
            payload["status"]
            == "running"
        )


def test_health_endpoint(
) -> None:
    with TestClient(
        app
    ) as client:
        response = client.get(
            "/api/v1/health"
        )

        assert (
            response.status_code
            in [200, 503]
        )

        payload = (
            response.json()
        )

        assert (
            payload["status"]
            in [
                "ok",
                "degraded",
            ]
        )

        assert (
            payload["database"]
            in [
                "connected",
                "unavailable",
            ]
        )