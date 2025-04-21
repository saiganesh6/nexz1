@echo off
REM === Create Forum Center Project Structure ===

REM Create root folder
mkdir forum-center
cd forum-center

REM Create subfolders
mkdir controllers
mkdir models
mkdir routes
mkdir services
mkdir middlewares

REM Create empty files
type nul > controllers\forumController.js
type nul > controllers\userController.js
type nul > models\Forum.js
type nul > models\User.js
type nul > routes\forumRoutes.js
type nul > routes\userRoutes.js
type nul > services\forumService.js
type nul > services\authService.js
type nul > services\tokenService.js
type nul > middlewares\authMiddleware.js
type nul > index.js
type nul > package.json
type nul > README.md

echo Forum Center project structure created successfully!
pause
