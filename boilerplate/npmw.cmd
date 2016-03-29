@echo off
for /f "delims=" %%A in ('dir "%~dp0\*.sln" /b') do set "slnPath=%~dp0%%A"
"%~dp0\.nuget\NuGet.exe" "restore" "%slnPath%" -Config "%~dp0\NuGet.config"

for /f "delims=" %%A in ('dir "%~dp0packages\Node.js.*" /b') do set "nodePath=%~dp0\packages\%%A\"
echo %PATH%|C:\Windows\System32\find.exe "%nodePath%" >nul
if %errorlevel% NEQ 0 set PATH=%nodePath%;%PATH%

for /f "delims=" %%A in ('dir "%~dp0packages\Npm.js.*" /b') do set "npmPath=%~dp0\packages\%%A\tools\"
echo %PATH%|C:\Windows\System32\find.exe "%npmPath%" >nul
if %errorlevel% NEQ 0 set PATH=%npmPath%;%PATH%

"%npmPath%npm.cmd" install && "%npmPath%npm.cmd" %*
