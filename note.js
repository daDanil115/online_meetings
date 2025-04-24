const express = require('express');
const { v4: uuidv4 } = require('uuid');  // Для генерации уникальных ID
const app = express();
const port = 3000;

app.use(express.json()); // Middleware для обработки JSON-тел запросов

// Простое хранилище встреч в памяти (для примера)
const meetings = {};

app.post('/createMeeting', (req, res) => {
  const meetingName = req.body.meetingName;
  const userName = req.body.userName;

  // Генерируем уникальный ID для встречи
  const meetingId = uuidv4();
  const meetingUrl = `/meeting/${meetingId}`;

  // Сохраняем информацию о встрече
  meetings[meetingId] = {
    name: meetingName,
    participants: [userName]
  };

  console.log(`Создана встреча: ${meetingName} (ID: ${meetingId})`);

  // Возвращаем URL для подключения к встрече
  res.json({ meetingUrl: meetingUrl });
});

app.post('/joinMeeting', (req, res) => {
  const meetingCode = req.body.meetingCode;
  const userName = req.body.userNameJoin;

  // Проверяем, существует ли встреча с таким кодом
  if (!meetings[meetingCode]) {
    return res.status(404).json({ error: 'Встреча не найдена' });
  }

  // Добавляем пользователя в список участников
  meetings[meetingCode].participants.push(userName);
  console.log(`Пользователь ${userName} присоединился к встрече ${meetings[meetingCode].name}`);

  // Возвращаем URL для подключения к встрече
  res.json({ meetingUrl: `/meeting/${meetingCode}` });
});

// (В примере отсутствует реальная реализация страницы встречи /meeting/:id)

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
