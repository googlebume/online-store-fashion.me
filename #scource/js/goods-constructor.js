export function constructorCheckedInputs() {
    //АНІМАЦІЯ ІНПУТІВ  І РАДІО КНОПОК В КОНСТРУКТОРІ
    const constructorBody = document.querySelector('.constructor__body');
    const priceValue = document.querySelector('.price__value');
    const goodsCounter = document.querySelector('#slider__range-counter');
    const goodsCounterInput = document.querySelector(".slider__number-input");

    // Ініціалізуємо значення кількості товару
    goodsCounterInput.value = goodsCounter.value;

    // Оновлюємо значення інпуту при зміні слайдера
    goodsCounter.addEventListener('input', () => {
        goodsCounterInput.value = goodsCounter.value;
        updatePrice();
    });

    // Оновлюємо ціну при зміні кількості в інпуті
    goodsCounterInput.addEventListener('input', () => {
        goodsCounter.value = goodsCounterInput.value;
        updatePrice();
    });

    constructorBody.addEventListener('click', event => {

        // Обробка кліків для виділення активних елементів
        if (event.target.closest('.good-tipe__li')) {
            document.querySelectorAll('.good-tipe__li').forEach(item => {
                item.classList.remove('good-tipe__active');
            });
            event.target.closest('.good-tipe__li').classList.toggle('good-tipe__active');
        }

        if (event.target.closest('.print-position__radio')) {
            document.querySelectorAll('.print-position__radio').forEach(item => {
                item.classList.remove('print-position__radio__active');
            });
            event.target.closest('.print-position__radio').classList.toggle('print-position__radio__active');
        }

        if (event.target.closest('.goods-size__label')) {
            document.querySelectorAll('.goods-size__label').forEach(item => {
                item.classList.remove('goods-size__label__active');
            });
            event.target.closest('.goods-size__label').classList.toggle('goods-size__label__active');
        }

        if (event.target.closest('.radio-color__radio')) {
            document.querySelectorAll('.radio-color__radio').forEach(item => {
                item.classList.remove('radio-color__radio__active');
            });
            event.target.closest('.radio-color__radio').classList.toggle('radio-color__radio__active');
        }

        // Оновлюємо ціну при виборі типу товару
        updatePrice();
    });
    //ПІДРАХУНОК ЦІНИ БАЗУЮЧИСЬ НА КІЛЬКОСТІ ТОВАРУ
    function updatePrice() {
        const activeType = document.querySelector('.good-tipe__li.good-tipe__active');
        if (!activeType) return;

        const typeName = activeType.getAttribute('name');
        const quantity = parseInt(goodsCounterInput.value, 10) || 0;
        let unitPrice = 0;

        switch (typeName) {
            case 'type-tshirt':
                unitPrice = 14.99;
                break;
            case 'type-sweatshirt':
                unitPrice = 24.99;
                break;
            case 'type-hood':
                unitPrice = 29.99;
                break;
        }

        priceValue.textContent = `$${(unitPrice * quantity).toFixed(2)}`;
    }


        //ПЕРЕВІРКА КОРРЕКТНОСТІ ВВЕДЕННЯ ДАННИХ В ІНПУТИ ПОКУПКИ З КОНСТРУКТОРУ
        const purchaseForm = document.querySelector('.constructor__purchase');
        const submitButton = document.querySelector('.submit__button');

        constructorBody.addEventListener('click', event => {
            // Перевірка, чи натиснута кнопка з класом submit__button
            if (event.target.closest('.submit__button')) {
                event.preventDefault(); // Зупиняємо стандартну поведінку форми
                // Додаємо клас після перевірки
                purchaseForm.classList.add('constructor__purchase__active');
        
                // Зчитуємо значення полів всередині обробника подій
                const nameInput = document.querySelector('.name-input').value.trim();
                const emailInput = document.querySelector('.email-input').value.trim();
                const phoneInput = document.querySelector('.phone__input').value.trim();
                const nameError = document.querySelector('.name-error');
                const emailError = document.querySelector('.email-error');
                const phoneError = document.querySelector('.phone-error');
        
                // Регулярні вирази для перевірки
                const phoneRegex = /^\+?[\d\s-()]+$/; ///^\+380\d{9}$/    /^0\d{9}$/
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
                // Очищення попередніх помилок
                nameError.textContent = '';
                emailError.textContent = '';
                phoneError.textContent = '';
        
                // Валідація полів
                let isValid = true; // Створюємо змінну для відстеження статусу валідації
        
                if (nameInput === '') {
                    nameError.textContent = 'Введіть ім\'я';
                    isValid = false;
                }
                if (!emailRegex.test(emailInput)) {
                    emailError.textContent = 'Невірний формат електронної пошти.';
                    isValid = false;
                }
                if (!phoneRegex.test(phoneInput)) {
                    phoneError.textContent = 'Невірний формат номера телефону.';
                    isValid = false;
                }
                if (isValid) {
                    purchaseForm.classList.remove('constructor__purchase__active');
                    submitButton.classList.add('submitCompleate');
                    openConstructorPopup();
                }
            }
        });
}

export function openConstructorPopup() {
        const popup = document.getElementById('popupPurchase');
        const popupBody = document.getElementById('popupBody');
        const body = document.querySelector('body');

        // Відображення модального вікна з анімацією
        popup.classList.add('popup__open');
        setTimeout(() => {
            popupBody.classList.add('popup__body__animate');
            body.classList.add('stop-sctoll');
        }, 10); // Затримка для плавної анімації

        // Закриття модального вікна через 2 секунди
        setTimeout(() => {
            popupBody.classList.remove('popup__body__animate');
            setTimeout(() => {
                popup.classList.remove('popup__open');
                body.classList.remove('stop-sctoll');
            }, 800); // Час для завершення анімації перед закриттям
        }, 2000);
}
//ТЕКСТОВИЙ ПРИНТ
export function addTextPrint() {
    document.addEventListener('DOMContentLoaded', function () {
        const textInput = document.querySelector('.add-text__input input');
        const colorInput = document.querySelector('.params__color');
        const fontSizeInput = document.querySelector('.fs-container__input');
        const textOverlay = document.querySelector('.text-overlay');
        const goodImg = document.querySelector('.constructor__good-img');
      
        // Функция для обновления текста и стилей
        function updateText() {
          const inputText = textInput.value.trim();
          
          if (inputText === '') {
            textOverlay.classList.remove('show');
          } else {
            textOverlay.textContent = inputText;
            textOverlay.style.color = colorInput.value;
            textOverlay.style.fontSize = `${fontSizeInput.value}px` || '16px'; // По умолчанию 16px
            textOverlay.classList.add('show');
          }
        }
      
        // События на изменение текста, цвета и размера шрифта
        textInput.addEventListener('input', updateText);
        colorInput.addEventListener('input', updateText);
        fontSizeInput.addEventListener('input', updateText);
      
        // Переменные для хранения начальных координат
        let shiftX, shiftY;
      
        // Функция для начала перемещения
        function onMouseDown(e) {
          e.preventDefault(); // Предотвращаем выделение текста
      
          // Вычисляем смещение курсора относительно текстового блока
          const rect = textOverlay.getBoundingClientRect();
          shiftX = e.clientX - rect.left;
          shiftY = e.clientY - rect.top;
      
          // Добавляем событие перемещения
          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
        }
      
        // Функция для перемещения текста
        function onMouseMove(event) {
          // Вычисляем новые координаты
          let newLeft = event.clientX - shiftX - goodImg.getBoundingClientRect().left;
          let newTop = event.clientY - shiftY - goodImg.getBoundingClientRect().top;
      
          // Ограничение движения внутри контейнера goodImg
          const rightEdge = goodImg.offsetWidth - textOverlay.offsetWidth;
          const bottomEdge = goodImg.offsetHeight - textOverlay.offsetHeight;
      
          // Не даем тексту выходить за границы
          if (newLeft < 0) newLeft = 0;
          if (newTop < 0) newTop = 0;
          if (newLeft > rightEdge) newLeft = rightEdge;
          if (newTop > bottomEdge) newTop = bottomEdge;
      
          // Применяем новые координаты к блоку
          textOverlay.style.left = newLeft + 'px';
          textOverlay.style.top = newTop + 'px';
        }
      
        // Функция для завершения перемещения
        function onMouseUp() {
          // Убираем событие перемещения
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        }
      
        // Привязываем событие начала перемещения к блоку текста
        textOverlay.addEventListener('mousedown', onMouseDown);
      
        // Отключаем стандартное поведение перетаскивания
        textOverlay.ondragstart = function () {
          return false;
        };
      });
          
}
export function addImgPrint() {
    const priceValue = document.querySelector('.price__value');
    document.getElementById('print-image').addEventListener('change', function (event) {
        const input = event.target;
        const file = input.files[0];
        
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function (e) {
                const imageUrl = e.target.result;
                input.style.backgroundImage = `url(${imageUrl})`;
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Функция для перемещения input по батьківському объекту
    const draggableInput = document.getElementById('print-image');
    let offsetX, offsetY;
    
    draggableInput.addEventListener('mousedown', function (e) {
        e.preventDefault();
        
        // Координаты клика относительно элемента
        offsetX = e.clientX - draggableInput.getBoundingClientRect().left;
        offsetY = e.clientY - draggableInput.getBoundingClientRect().top;
    
        function moveAt(e) {
            draggableInput.style.left = e.clientX - offsetX + 'px';
            draggableInput.style.top = e.clientY - offsetY + 'px';
        }
    
        document.addEventListener('mousemove', moveAt);
    
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', moveAt);
        }, { once: true });
    });
}




export function goGoodsConstructor(){
    document.addEventListener('DOMContentLoaded', function () {
        // Отримуємо всі радіо кнопки
        const colorRadios = document.querySelectorAll('input[name="goodColor"]');
        const typeRadios = document.querySelectorAll('input[name="goodTipe"]');
        const positionRadios = document.querySelectorAll('input[name="printPosition"]');
        const previewImg = document.querySelector('.good-img__previu');
        
        // Функція для оновлення зображення
        function updateImage() {
            // Зчитуємо значення обраних радіо кнопок
            const selectedColor = document.querySelector('input[name="goodColor"]:checked');
            const selectedType = document.querySelector('input[name="goodTipe"]:checked');
            const selectedPosition = document.querySelector('input[name="printPosition"]:checked');

            // Логіка відображення за умовою, якщо вибрано тільки колір
            if (selectedColor && !selectedType && !selectedPosition) {
                const color = selectedColor.id.split('-')[0];
                previewImg.src = `../../imgs/constructor_goods/${color}-font_tshirt.webp`;
                return;
            }

            // Логіка відображення за умовою, якщо вибрана тільки сторона (позиція)
            if (!selectedColor && !selectedType && selectedPosition) {
                let position = '';
                
                if (selectedPosition.id.includes('start')) {
                    position = 'font';
                } else if (selectedPosition.id.includes('back')) {
                    position = 'back';
                } else if (selectedPosition.id.includes('asd')) {
                    position = 'asd';
                }
                
                previewImg.src = `../../imgs/constructor_goods/yellow-${position}_tshirt.webp`;
                return;
            }

            // Стандартна логіка, якщо вибрані всі значення або частково
            const color = selectedColor ? selectedColor.id.split('-')[0] : 'yellow'; // black, white, yellow або за замовчуванням
            const type = selectedType ? selectedType.value : 'tshirt'; // tshirt, sweatshirt, hood або за замовчуванням
            let position = 'font'; // значення за замовчуванням для позиції

            // Встановлюємо значення позиції принта, якщо вибрано
            if (selectedPosition) {
                if (selectedPosition.id.includes('start')) {
                    position = 'font';
                } else if (selectedPosition.id.includes('back')) {
                    position = 'back';
                } else if (selectedPosition.id.includes('asd')) {
                    position = 'asd';
                }
            }
    
            // Формуємо шлях до зображення
            const imagePath = `../../imgs/constructor_goods/${color}-${position}_${type}.webp`;
    
            // Оновлюємо зображення в прев'ю
            previewImg.src = imagePath;
        }
    
        // Додаємо слухачів подій на всі радіо кнопки
        colorRadios.forEach(radio => radio.addEventListener('change', updateImage));
        typeRadios.forEach(radio => radio.addEventListener('change', updateImage));
        positionRadios.forEach(radio => radio.addEventListener('change', updateImage));
    });
}