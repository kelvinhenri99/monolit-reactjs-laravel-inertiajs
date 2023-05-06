## Getting Started

1. Clone the repo

2. Install dependency Laravel
   ```sh
   composer install
   ```
3. Install packages
   ```sh
   npm install --legacy-peer-deps || yarn install --legacy-peer-deps
   npm run dev || yarn dev
   ```
4. Create table corresponds to .env
   ```js
   DB_DATABASE = yourdatabase_name
   DB_USERNAME = your_username
   DB_PASSWORD = your_password
   ```
5. Run migration & Seeder
   ```sh
   php artisan migrate --seed
   ```

## Usage

1. run server-side (Laravel)
   ```sh
   php artisan serve
   ```
2. See webpack.min js
   ```sh
   mix.browserSync('your_url.test'); //if using Laravel Valet
   mix.browserSync('127.0.0.1:8000'); //if using artisan serve
   ```
3. run client-side (ReactJs)
   ```sh
   npm run dev || yarn dev
   ```
