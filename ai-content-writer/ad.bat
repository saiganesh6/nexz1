@echo off
REM === Create AI Content Writing Engine Project Structure ===

REM Create root folder
mkdir ai-content-writing
cd ai-content-writing

REM Create subfolders
mkdir controllers
mkdir models
mkdir routes
mkdir services
mkdir middlewares

REM Create empty files
type nul > controllers\contentController.js
type nul > models\Content.js
type nul > routes\contentRoutes.js
type nul > services\contentService.js
type nul > services\authService.js
type nul > services\tokenService.js
type nul > middlewares\authMiddleware.js
type nul > index.js
type nul > package.json
type nul > README.md

echo AI Content Writing Engine project structure created successfully!
pause
