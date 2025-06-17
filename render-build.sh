#!/usr/bin/env bash
set -o errexit

echo "📦 Instalando dependencias..."
npm install

echo "⬇️ Descargando Chromium para Puppeteer en src/.cache..."
PUPPETEER_CACHE_DIR=$(pwd)/src/.cache/puppeteer npx puppeteer browsers install chrome

echo "🏗 Ejecutando build del proyecto..."
npm run build
