#!/bin/sh
cp .env.example .env
php artisan key:generate
echo "复制.env";
composer install
echo "composer installed";
npm install --save --dev
echo "npm installed";
# eslint resources/assets/js
echo '#!/bin/sh

     hasJS=`git status --porcelain | grep -E -i '\.js$'`
     hasPHP=`git status --porcelain | grep -E -i '\.php' | grep -v -i '\.blade\.php'`

     # Lint JavaScript
     if [ "$hasJS" != "" ]; then
         echo "Starting eslint…"
         npm run eslint || exit 1
     fi

     # Lint PHP
     if [ "$hasPHP" != "" ]; then
     	echo "Starting PHPCS…"
     	vendor/squizlabs/php_codesniffer/bin/phpcs -n --standard=PSR2 ./app/ ./bootstrap/ ./config/ ./resources/ ./tests/ --extensions=php --ignore=cache || exit 1
     fi
'>.git/hooks/pre-commit
chmod 755 .git/hooks/pre-commit
echo "pre-commit success!"
