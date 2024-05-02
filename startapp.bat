@echo off
start cmd.exe /k "cd /d %~dp0\API & dotnet run"
start cmd.exe /k "cd /d %~dp0\Client & npm i && npm run dev"