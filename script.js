// Задания квеста
const tasks = [
    { id: 1, name: 'Find the Secret Key to Enter', reward: '10 DEV tokens' },
    { id: 2, name: 'Decrypt the Code on the Blockchain Wall', reward: '15 DEV tokens' },
    { id: 3, name: 'Navigate the Crypto Tunnels', reward: '20 DEV tokens' },
    { id: 4, name: 'Solve the Riddle of the Ethereum Labyrinth', reward: '25 DEV tokens' },
    { id: 5, name: 'Master the Bitcoin Puzzle', reward: '30 DEV tokens' }
];

// Функция для отображения заданий на странице tasks.html
function displayTasks() {
    const taskList = document.querySelector('#tasks ul');
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = `${task.name} - Reward: ${task.reward}`;
        taskList.appendChild(taskItem);
    });
}

// Функция для обработки пожертвований
function handleDonation(amount, currency) {
    console.log(`Received ${amount} ${currency} donation.`);
    checkTaskUnlock(amount);
}

// Функция для проверки разблокировки следующего задания
function checkTaskUnlock(amountDonated) {
    const currentTotal = getTotalDonations(); // Получаем общую сумму пожертвований
    const nextTaskCost = 50; // Стоимость разблокировки следующего задания
    if (currentTotal >= nextTaskCost) {
        unlockNextTask();
    }
}

// Функция для разблокировки следующего задания
function unlockNextTask() {
    const nextTaskIndex = tasks.length + 1;
    const newTask = { id: nextTaskIndex, name: `Task ${nextTaskIndex}: New Challenge`, reward: `${nextTaskIndex * 5} DEV tokens` };
    tasks.push(newTask);
    displayTasks(); // Перерисовываем список заданий
}

// Функция для получения общей суммы пожертвований
function getTotalDonations() {
    // Ваш код для получения общей суммы пожертвований
    return 100; // Пример, замените на реальную логику
}

// Обработчик события загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    // Отображаем задания при загрузке страницы tasks.html
    if (document.querySelector('#tasks')) {
        displayTasks();
    }

    // Обработчик события для кнопки "Donate via Beam Wallet" на donate.html
    const beamWalletButton = document.querySelector('#beamWallet');
    if (beamWalletButton) {
        beamWalletButton.addEventListener('click', function(event) {
            event.preventDefault();
            const donationAmount = 50; // Сумма пожертвования для разблокировки задания
            const currency = 'USD'; // Валюта пожертвования
            handleDonation(donationAmount, currency);
        });
    }
});
// Функция для сохранения прогресса в файл JSON
function saveProgress(progressData) {
    fetch('progress.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(progressData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка сохранения данных');
        }
        return response.json();
    })
    .then(data => {
        console.log('Данные успешно сохранены:', data);
    })
    .catch(error => {
        console.error('Ошибка сохранения данных:', error);
    });
}

// Пример использования: сохранение данных о завершении задания
function handleTaskCompletion(taskId) {
    // Предположим, что taskId - это id завершенного задания
    let progressData = {
        [`task${taskId}`]: true // Устанавливаем значение завершенного задания в true
    };
    saveProgress(progressData); // Вызываем функцию сохранения прогресса
}
