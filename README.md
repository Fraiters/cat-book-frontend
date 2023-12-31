# CatBook

Фронтенд для cat_book
(Бэкенд был написан на `django rest framework`)

## Ограничения:
- Нет поддержки загрузки и отображения фото котов;
- Данные `id` для страницы определенного кота `'/api/cats/' + Id` (тоже самое для `upd` и `del`)
передаются через поле в `catsService`, при этом в `localStorage` сохраняется `cat_id` последней загруженной страницы; 
- токен авторизации хранится в `localStorage`.

(возможно есть вариант сделать передачу `id` и токена оптимальней);
- При изменении кота предыдущие данные автоматически не добавляются, при этом есть placeholder;
- Нет css файлов стилей.


## Запуск:
(связан с бэкендом, который настраивается в `src/environments/` 
локальный: `apiUrl: 'http://127.0.0.1:8000',`
сервер: `apiUrl: 'https://catbookbackend-production.up.railway.app',`)

- `docker build -t js .`
- `docker run -p 4200:4200 --name cat_book_frontend js` (Важно указать внешний порт)

## Страницы: 
- `cat-list` - Список всех котов,
- `cat-id` - Страница одного кота,
- `add-cat` - Добавление кота,
- `upd-cat` - Обновление кота,
- `del-cat-page` - Страница подтверждения удаления кота,
- `del-cat` - Удаление кота,
- `registration` - Регистрация,
- `login` - Авторизация,
- `logout` - Выход из аккаунта.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



