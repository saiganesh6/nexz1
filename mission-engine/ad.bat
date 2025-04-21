@echo off
REM === Create Mission Engine Project Structure ===

REM Create root folder
mkdir mission-engine
cd mission-engine

REM Create subfolders
mkdir controllers
mkdir models
mkdir routes
mkdir services
mkdir middlewares

REM Create empty files
type nul > controllers\missionController.js
type nul > controllers\userController.js
type nul > models\Mission.js
type nul > models\User.js
type nul > routes\missionRoutes.js
type nul > routes\userRoutes.js
type nul > services\missionService.js
type nul > services\authService.js
type nul > services\tokenService.js
type nul > middlewares\authMiddleware.js
type nul > index.js
type nul > package.json
type nul > README.md

echo Mission Engine project structure created successfully!
pause
