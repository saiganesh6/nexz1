@echo off
REM === Create Notification Core Project Structure ===

REM Create root folder
mkdir notification-core
cd notification-core

REM Create subfolders
mkdir controllers
mkdir models
mkdir routes
mkdir services
mkdir middlewares

REM Create empty files
type nul > controllers\notificationController.js
type nul > models\Notification.js
type nul > routes\notificationRoutes.js
type nul > services\notificationService.js
type nul > middlewares\authMiddleware.js
type nul > index.js
type nul > package.json
type nul > README.md

echo Notification Core project structure created successfully!
pause
