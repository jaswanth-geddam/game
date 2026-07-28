@echo off
cd /d "%~dp0"

echo === Installing ===
call pnpm install

echo.
echo === Starting ===
pnpm start
