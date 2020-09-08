# Web-Shell
Простое приложение Web-Shell (частичная эмуляция терминала)

## Preview
![Frontend Preview](/preview/preview.png)
![Backend Preview](/preview/swagger.png)

Frontend:
- ReactJs

Backend:
- ASP.NET Core Web API
- MSSQL Server
- EntityFrameworkCore
- Serilog
- Swagger

## Запуск
Frontend:
1. Перейти в папку `frontend`
2. Установить зависимоти - `yarn / npm install`
3. Запуск в режиме development - `yarn start / npm start`
4. Запуск в режиме production - `yarn build / npm build`

Backend (Visual Studio):
1. Окрыть решение `WebShellApi.sln` в Visual Studio
2. Выбрать WebShellApi в качестве Startup Project
3. Собрать решение - вкладка Build -> Build Solution (F6)
4. Запуск - кнопка run в Visual Studio (F5)

Backend (VS Code):
1. Перейти в папку `backend/WebShellApi`
2. Установить зависимоти - `dotnet build`
3. Запуск - `dotnet run`
