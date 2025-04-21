@echo off
REM Creating folder structure for auth module

REM Top-level folder
mkdir auth

REM Subfolders
mkdir auth\controllers
mkdir auth\middleware
mkdir auth\models
mkdir auth\routes
mkdir auth\services
mkdir auth\validations

REM Files in controllers
type nul > auth\controllers\authController.js
type nul > auth\controllers\userController.js

REM Files in middleware
type nul > auth\middleware\auth.js
type nul > auth\middleware\roles.js

REM File in models
type nul > auth\models\User.js

REM File in routes
type nul > auth\routes\authRoutes.js

REM Files in services
type nul > auth\services\authService.js
type nul > auth\services\emailService.js
type nul > auth\services\tokenService.js

REM File in validations
type nul > auth\validations\authValidation.js

echo Folder structure created successfully! You're all set 🚀
pause
