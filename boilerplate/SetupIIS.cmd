:: Setup Shop at :17000 and Manager on :17001 on local IIS
@echo off
set appcmd=%systemroot%\system32\inetsrv\appcmd
set shop=SwapShop

:: Shop site
set folder=%~dp0Sources\
%appcmd% list site %shop% && if %errorlevel% equ 0 %appcmd% delete site %shop%
%appcmd% add site /name:%shop% /physicalPath:%folder% /bindings:http/*:15001:

:: Shop app pool
%appcmd% delete apppool %shop%
%appcmd% add apppool /name:%shop%
%appcmd% set app "%shop%/" /applicationPool:%shop%

%appcmd% start site %shop%
