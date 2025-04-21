@echo off
REM === Create AI Engine Project Structure ===

REM Create root folder
mkdir ai-engine
cd ai-engine

REM Create subfolders
mkdir controllers
mkdir models
mkdir routes
mkdir services
mkdir middlewares

REM Create empty files
type nul > controllers\aiController.js
type nul > models\User.js
type nul > routes\aiRoutes.js
type nul > services\aiService.js
type nul > services\authService.js
type nul > services\tokenService.js
type nul > middlewares\authMiddleware.js
type nul > index.js
type nul > package.json
type nul > README.md

echo AI Engine project structure created successfully!
pause
