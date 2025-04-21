@echo off
REM === Create Feedback Engine Project Structure ===

REM Create root folder
mkdir feedback-engine
cd feedback-engine

REM Create subfolders
mkdir controllers
mkdir models
mkdir routes
mkdir services
mkdir middlewares

REM Create empty files
type nul > controllers\feedbackController.js
type nul > controllers\userController.js
type nul > models\Feedback.js
type nul > models\User.js
type nul > routes\feedbackRoutes.js
type nul > routes\userRoutes.js
type nul > services\feedbackService.js
type nul > services\authService.js
type nul > services\tokenService.js
type nul > middlewares\authMiddleware.js
type nul > index.js
type nul > package.json
type nul > README.md

echo Feedback Engine project structure created successfully!
pause
