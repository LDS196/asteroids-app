## :seedling: <a href="https://asteroids-app-eta.vercel.app/" target="_blank">Asteroids App</a>

в этом проекте реализован онлайн-сервис по мониторингу и уничтожению опасных астероидов на основе данных API NASA.

## Технологии

![NextJS](https://img.shields.io/badge/-NextJS-61daf8?logo=NextJS&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-blue)
![React-infinite-scroll](https://img.shields.io/badge/-React-infinite-scroll-pink)
![React testing library](https://img.shields.io/badge/-React testing library-pink)

![HTML5](https://img.shields.io/badge/-HTML5-e34f26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572b6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-f7df1e?logo=javaScript&logoColor=black)

![Webpack](https://img.shields.io/badge/-Webpack-99d6f8?logo=webpack&logoColor=black)
![Figma](https://img.shields.io/badge/-Figma-pink)

Clone repositories:

```
https://github.com/LDS196/asteroids-app.git
```

Install dependencies:

```
npm install
```

Start project:

```
npm start
```

Test project:

```
npm test
```

![image](https://github.com/LDS196/asteroids-app/assets/105713345/c8664b47-d448-4bb1-9cd2-b6ec54a7b5df)


Описание Тестового задания

Тестовое задание — Квартирка
Нужно сверстать онлайн-сервис по мониторингу и уничтожению опасных астероидов на основе данных API NASA. 
АПИ: https://api.nasa.gov Asteroids - NeoWs
На главной список подлетов астероидов к Земле от текущей даты в бесконечность. Подгрузка при скролле порциями. По каждому астероиду: название, размер, оценка опасности, как близко будет к Земле, точная дата максимального подлёта. Иконка астероида в зависимости от размера (критерий малый-большой выбрать самостоятельно). И опция вывода расстояний: в километрах или расстояниях до Луны.
Адаптивная вёрстка.
Кнопка заказа отправляет заказ в корзину. Корзина — это плашка на странице списка. По нажатию на кнопку отправки открывается страница успешного заказа, где перечислены заказанные сближения.
У астероида есть своя страница. Там указаны данные астероида и список всех его сближений. По каждому сближению: скорость относительно Земли, время максимального сближения с Землей, расстояние до Земли, по орбите вокруг чего летит. Дизайн страницы астероида кандидат делает на своё усмотрение. 
https://www.figma.com/file/N9aUcWK3o189lZcwQyzU79/Armaggedon-V3?type=design&node-id=0%3A1&mode=design&t=nb1Hyl3qNhdm2c4a-1 
Использовать Next.js (также принимаются решения на React, если будет реализован SSR);
Использование redux нежелательно;
Стилизация с помощью CSS модулей;
Решение предоставить в виде git репозитория (github/bitbucket/gitlab по выбору);
Корректное отображение в последних версиях браузеров (chrome, firefox, safari, edge);
Будет плюсом:
использование TypeScript;
тесты;
если вы задеплоите ваш проект на любой удобный для вас хостинг;
документация/инструкция по сборке проекта (README);
