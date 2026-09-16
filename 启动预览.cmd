@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 正在启动河流治理档案，请打开 http://localhost:4173
node scripts/serve.mjs
pause
