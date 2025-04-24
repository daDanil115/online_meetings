document.addEventListener('DOMContentLoaded', function() {
    const createMeetingButton = document.getElementById('createMeetingButton');
    const joinMeetingButton = document.getElementById('joinMeetingButton');
    const meetingCreationSection = document.getElementById('meetingCreation');
    const meetingJoiningSection = document.getElementById('meetingJoining');createMeetingButton.addEventListener('click', function() {
    meetingCreationSection.style.display = 'block';
    meetingJoiningSection.style.display = 'none';
});

joinMeetingButton.addEventListener('click', function() {
    meetingJoiningSection.style.display = 'block';
    meetingCreationSection.style.display = 'none';
});

// TODO: Добавьте логику для обработки отправки форм и создания/присоединения к встречам

            });
