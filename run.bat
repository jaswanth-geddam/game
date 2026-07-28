@echo off
cd /d "%~dp0"

echo === Installing ===
call npm install

echo.
echo === Starting ===
npm start
