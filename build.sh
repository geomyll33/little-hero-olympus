#!/bin/sh
# Builds two copies from src/: index.html (Claude artifact body) and docs/index.html (standalone page for GitHub Pages).
set -e
cd "$(dirname "$0")"
STAMP=$(date -u +%Y-%m-%d.%H%M)
{ cat src/page.html; echo '<script>'; sed "s/__BUILD__/$STAMP/" src/game.js; echo '</script>'; } > index.html
mkdir -p docs
{
  echo '<!doctype html><html lang="en"><head><meta charset="utf-8">'
  echo '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
  echo '<meta name="apple-mobile-web-app-capable" content="yes"><meta name="mobile-web-app-capable" content="yes">'
  echo '<meta name="theme-color" content="#1f78c8"><link rel="manifest" href="manifest.json"><link rel="apple-touch-icon" href="icon-512.png"><link rel="icon" href="icon-512.png">'
  echo '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>'
  echo '</head><body>'
  cat index.html
  echo '</body></html>'
} > docs/index.html
