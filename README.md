This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Тестовое задание [Task #1](https://vk.com/@maxpfrontend-testovoe-zadanie-1)

## Routes

App routes:

- / "Home"
- /news "News Page"
- /profile "Profile page (private)"
- /login "Login page"

## Data

Test data:
```
username: Admin
password: 12345
```

## Use cases:
Страницы содержат произвольный контент.
Страница */profile* недоступна для авторизованных пользователей. При клике авторизованного показывается произвольный текст, при клике неавторизованного происходит редирект на страницу ввода логина */login* и пароля из секции *Data*. Регистр для логина не важен. Далее состояние авторизации после проверки записывается в *localStorage* с именем *auth*. Используется проверка по строке, т.к. localStorage возвращает строки,а не булевые.


## Other:
Используются последние create-react-app, react и react-router.
Для запуска:
```
npm start
```