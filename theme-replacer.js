// Массив с новыми темами
const newTopics = ["Тематика 1", "Тематика 2", "Тематика 3", "Тематика 4", "Тематика 5"];

// Находим все элементы на странице, которые нужно обновить
const inputElements = document.getElementsByClassName("el-input__inner");

// Обновляем текст каждого элемента с темами
for (let i = 0; i < newTopics.length; i++) {
    const currentElement = inputElements[i]; // Текущий элемент на странице
    if (currentElement) {
        // Проверяем, что элемент существует
        currentElement.value = newTopics[i]; // Устанавливаем новое значение
        currentElement.dispatchEvent(new InputEvent("input")); // Отправляем событие для обновления
    }
}

alert("При необходимости удали старые тематики, оставшиеся внизу.");
