document.addEventListener('DOMContentLoaded', function() {
    // ... (существующий код) ...const startMeetingButton = document.getElementById('startMeeting');
const joinExistingMeetingButton = document.getElementById('joinExistingMeeting');

startMeetingButton.addEventListener('click', function() {
    const meetingName = document.getElementById('meetingName').value;
    const userName = document.getElementById('userName').value;

    // TODO: Валидация данных (проверка, что поля не пустые)

    // Отправка данных на сервер для создания встречи
    // Например, с помощью fetch API
    fetch('/createMeeting', {  // Замените '/createMeeting' на фактический URL вашего серверного API
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ meetingName: meetingName, userName: userName })
    })
    .then(response => response.json())
    .then(data => {
        // Обработка ответа от сервера (например, получение URL для подключения к встрече)
        console.log('Успешно создана встреча:', data);
        // TODO: Перенаправление пользователя на страницу встречи
        // window.location.href = data.meetingUrl;
    })
    .catch(error => {
        console.error('Ошибка при создании встречи:', error);
        // TODO: Отображение сообщения об ошибке пользователю
    });
});

joinExistingMeetingButton.addEventListener('click', function() {
    const meetingCode = document.getElementById('meetingCode').value;
    const userNameJoin = document.getElementById('userNameJoin').value;

    // TODO: Валидация данных

    // Отправка данных на сервер для присоединения к встрече
    fetch('/joinMeeting', {  // Замените '/joinMeeting' на фактический URL вашего серверного API
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ meetingCode: meetingCode, userName: userNameJoin })
    })
    .then(response => response.json())
    .then(data => {
        // Обработка ответа от сервера (например, получение URL для подключения к встрече)
        console.log('Успешно присоединились к встрече:', data);
        // TODO: Перенаправление пользователя на страницу встречи
        // window.location.href = data.meetingUrl;
    })
    .catch(error => {
        console.error('Ошибка при присоединении к встрече:', error);
        // TODO: Отображение сообщения об ошибке пользователю
    });
});

            });
