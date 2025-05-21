#!/bin/bash

echo "📂 1. Entrando al directorio del proyecto"
cd /var/www/MiWeb2.0/ || exit 1

echo "🔄 2. Haciendo git pull"
git pull || exit 1

echo "⬆️ 3. Subiendo un nivel para limpiar despliegue anterior"
cd .. || exit 1

echo "🧹 4. Eliminando versión anterior publicada"
rm -rf App/publish/

echo "📁 5. Copiando nueva publicación a carpeta final"
cp -r MiWeb2.0/MIChatBot/bin/Release/net9.0/publish/ /var/www/App

echo "📂 6. Entrando al directorio de despliegue"
cd App/publish/ || exit 1

echo "🔓 7. Dando permisos de ejecución al binario"
chmod +x MIChatBot

echo "🚀 8. Ejecutando la aplicación en entorno Production"
./MIChatBot
