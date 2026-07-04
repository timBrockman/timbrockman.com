#!/usr/bin/env bash
set -euo pipefail

PORT="${PORT:-8080}"
HOST="${HOST:-0.0.0.0}"

echo "Starting dev server on ${HOST}:${PORT}..."
npm run start -- --host "${HOST}" --port "${PORT}" &
SERVER_PID=$!

cleanup() {
  kill "${SERVER_PID}" 2>/dev/null || true
}
trap cleanup EXIT INT TERM

echo "Waiting for readiness..."
for i in $(seq 1 90); do
  if curl -fsS "http://127.0.0.1:${PORT}/" >/dev/null; then
    echo "READY: http://127.0.0.1:${PORT}"
    wait "${SERVER_PID}"
    exit $?
  fi
  sleep 1
done

echo "Readiness timed out after 90s"
exit 1