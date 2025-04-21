@echo off
REM === Create Dauth Project Structure ===

REM Create root folder
mkdir dauth
cd dauth

REM Create subfolders
mkdir controllers
mkdir models
mkdir routes
mkdir services
mkdir middlewares

REM Create empty files
type nul > controllers\authController.js
type nul > controllers\userController.js
type nul > models\User.js
type nul > routes\authRoutes.js
type nul > services\authService.js
type nul > services\tokenService.js
type nul > middlewares\authMiddleware.js
type nul > index.js
type nul > package.json
type nul > README.md

echo Dauth project structure created successfully!
pause
