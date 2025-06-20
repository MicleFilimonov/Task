# language:ru

Функция: Задание

Сценарий: Проверка раздела промо неавторизованным игроком

Дано Я открываю "ROX"
  Когда Я навожу на "Пункт Промо" в "Верхнее меню"
  И Я нажимаю на "Статусы" в "Промо"
  Тогда Я "вижу" "Статус Elite" в "Статусы"
  Когда Я навожу на "Пункт Промо" в "Верхнее меню"
  И Я нажимаю на "Турниры" в "Промо"
  # Тогда Я "вижу" "ROX STARS" в "Турниры"
  Тогда Я "вижу" "LUCKY LEAGUE" в "Турниры"
  Когда Я навожу на "Пункт Промо" в "Верхнее меню"
  И Я нажимаю на "Бонусы" в "Промо"
  Тогда Я "вижу" "Подарок ДР" в "Бонусы"
  Когда Я навожу на "Пункт Промо" в "Верхнее меню"
  И Я нажимаю на "Лотереи" в "Промо"
  Тогда Я "вижу" "Узнать больше" в "Лотереи"
  Когда Я навожу на "Пункт Промо" в "Верхнее меню"
  И Я нажимаю на "Кешбэк" в "Промо"
  Тогда Я "вижу" "Название" в "Кешбэк"
  Тогда Я "вижу" "Заголовок блока" в "Кешбэк"
  Тогда Я "вижу" "Подзаголовок блока" в "Кешбэк"
  Когда Я навожу на "Пункт Промо" в "Верхнее меню"
  И Я нажимаю на "Новости" в "Промо"
  Тогда Я "вижу" "Новость 1" в "Новости"
  Тогда Я "вижу" "Новость 2" в "Новости"
  Когда Я навожу на "Пункт Промо" в "Верхнее меню"
  И Я нажимаю на "Акции" в "Промо"
  Тогда Я "вижу" "Акция 1" и "Акция 2" в "Акции"
  Тогда Я "вижу" "Завершенная акция 1" и "Завершенная акция 2" в "Акции"


Сценарий: Проверка статусов почты и профиля у авторизованного пользователя

Дано Я открываю "ROX"
  Когда Я нажимаю на "Вход" в "Хедер"
  И Я ввожу "Почта игрока" в "Поле e-mail" в "Форма авторизации"
  И Я ввожу "Пароль игрока" в "Поле password" в "Форма авторизации"
  И Я нажимаю на "Кнопка Войти" в "Форма авторизации"
  И Я нажимаю на "Профиль" в "Хедер"
  Тогда Я "вижу" "Подтверждена в почте" в "Страница профиля"
  Тогда Я "вижу" "New в статусе" в "Страница профиля"