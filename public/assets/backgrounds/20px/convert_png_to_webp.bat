@echo off

REM Get the list of PNG files in the current directory
for %%F in (*.png) do (
    REM Convert PNG to WebP with the same name
    cwebp "%%F" -o "%%~nF.webp"
)
