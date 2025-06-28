#!/bin/sh

echo "Injecting runtime config..."
echo "Using API_URL=$API_URL"

# Replace placeholder in config-template.js with actual value
API_URL="${API_URL:-http://localhost:3000}"
echo "window.VUE_APP_API_URL=\"$API_URL\"" > /app/config.js

echo "Resulting config.js:"
cat /app/config.js

# Start the static server
exec serve -s /app

