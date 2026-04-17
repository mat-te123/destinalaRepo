## For Backend

just focusing on backend folder, dont mess up with any docker file. if you want to run laravel just use. 


```jaavscript
php artisan serve
```

move to backend folder and run artisan command.

if you add any new library please add in this file with timestamp


<li> 16 04 26 </li>
backend have it's own branch "Backend"

<li> 17 04 26 </li>
Pada file .env ubah 
```jaavscript
SESSION_DRIVER=file
```

```jaavscript
php artisan storage:link
```

to make public storage linked to storage app public so the web visitor can open the link on the websites

```jaavscript
php artisan migrate:fresh
```

when you want to migrate the database make sure that use migrate:fresh cause laravel has its own default migrations that can cause conflict

i add scribe
```jaavscript
composer require knuckleswtf/scribe
```
after installation update your league/commonnmark to make sure the data is afe 
```jaavscript
composer update league/commonmark
```
after updating league/commonmark, publich the configuration to scribe
```jaavscript
php artisan vendor:publish --tag=scribe-config
```

after updating league/commonmark, publich the configuration to scribe
```jaavscript
php artisan scribe:generate
```

Setelah generate scribe, jalankan
```jaavscript
php artisan serve
```
lalu masuk ke 
```jaavscript
http://127.0.0.1:8000/docs
```
untuk melihat dokumentasi menganai API yang digunakan

### New Library
<li> Scribe </li>


## For Frontend

<li> 27 03 26 </li>
Edit Dashboard done, learing about how to using <a href="https://craft.js.org/"> craft.js </a> for cuntomize web builder



### Library installed
<li> HeroUi </li>
