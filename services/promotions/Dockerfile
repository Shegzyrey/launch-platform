FROM composer:2 AS build

WORKDIR /app

COPY composer.json composer.lock artisan ./
COPY app ./app
COPY bootstrap ./bootstrap
COPY config ./config
COPY database ./database
COPY public ./public
COPY resources ./resources
COPY routes ./routes
COPY vite.config.js package.json package-lock.json ./

RUN composer install --prefer-dist --no-dev --optimize-autoloader --no-interaction

FROM php:8.3-apache-bookworm AS production

WORKDIR /var/www/html

ENV APP_ENV=production
ENV APP_DEBUG=false

RUN apt-get update \
    && apt-get install -y --no-install-recommends libpq-dev \
    && docker-php-ext-install pdo_pgsql \
    && a2enmod rewrite \
    && rm -rf /var/lib/apt/lists/*

COPY docker/php/conf.d/opcache.ini /usr/local/etc/php/conf.d/opcache.ini
COPY docker/000-default.conf /etc/apache2/sites-available/000-default.conf

COPY --from=build /app /var/www/html
COPY .env.prod /var/www/html/.env

RUN mkdir -p /var/www/html/storage /var/www/html/bootstrap/cache \
    && chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 80

CMD ["apache2-foreground"]
