# 📦 Калькулятор

## 📌 Описание проекта

Этот проект реализует **модальное окно калькулятора** для добавления товаров с динамически создаваемыми полями ввода. Пользователи могут вводить размеры товаров (**длина, ширина, высота**), а общий объем всех товаров вычисляется в реальном времени. Интерфейс и функциональность соответствуют **макету Figma**.

---

## 🛠️ Используемые технологии

- **HTML5** – структура страницы
- **CSS3** – стилизация, соответствие макету Figma
- **jQuery** – динамическое поведение, обработка событий

---

## ✨ Функционал

✔ **Открытие/закрытие модального окна** – Кнопка на странице открывает окно калькулятора.  
✔ **Добавление товаров** – Кнопка "Добавить товар" создает новые поля ввода с авто-нумерацией.  
✔ **Удаление товаров** – Каждый товар имеет кнопку "Удалить", удаление не влияет на нумерацию оставшихся товаров.  
✔ **Динамический расчет объема** – Объем каждого товара рассчитывается по формуле `Длина × Ширина × Высота`.  
✔ **Отображение общего объема** – Автоматическое обновление суммы объемов всех товаров.

---

## 🚀 Установка и запуск

1. **Склонируйте репозиторий:**

   ```sh
   git clone https://github.com/yourusername/product-calculator.git
   cd product-calculator

   ```

2. **Откройте index.html в браузере**

## 📖 Зависимости

. jQuery (должен быть подключен в проекте)
