@echo off
REM === Create Matchmaking System Project Structure ===

REM Create root folder
mkdir matchmaking-system
cd matchmaking-system

REM Create subfolders
mkdir controllers
mkdir models
mkdir routes
mkdir services
mkdir middlewares

REM Create empty files
type nul > controllers\matchmakingController.js
type nul > controllers\userController.js
type nul > models\Match.js
type nul > models\User.js
type nul > routes\matchmakingRoutes.js
type nul > routes\userRoutes.js
type nul > services\matchmakingService.js
type nul > services\authService.js
type nul > services\tokenService.js
type nul > middlewares\authMiddleware.js
type nul > index.js
type nul > package.json
type nul > README.md

echo Matchmaking System project structure created successfully!
pause
