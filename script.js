// Function to store task completion status
function setTaskStatus(taskNumber, status) {
    localStorage.setItem(`task${taskNumber}Status`, status);
}

// Function to get task completion status
function getTaskStatus(taskNumber) {
    return localStorage.getItem(`task${taskNumber}Status`);
}

// Function to check if task is unlocked
function checkTaskStatus(taskNumber, taskElement) {
    if (getTaskStatus(taskNumber) === 'unlocked') {
        taskElement.style.display = 'block';
    } else {
        taskElement.style.display = 'none';
    }
}

// Check the status of each task on page load
document.addEventListener('DOMContentLoaded', function() {
    const task1 = document.getElementById('task1');
    const task2 = document.getElementById('task2');
    const task3 = document.getElementById('task3');

    checkTaskStatus(1, task1);
    checkTaskStatus(2, task2);
    checkTaskStatus(3, task3);
});

// Function to unlock Task 1 after Ethereum donation
function unlockTask1() {
    donateEthereum();
    setTaskStatus(1, 'unlocked');
    alert('Task 1 unlocked!');
}

// Function to unlock Task 2 after completing Task 1
function unlockTask2() {
    if (getTaskStatus(1) === 'unlocked') {
        setTaskStatus(2, 'unlocked');
        alert('Task 2 unlocked!');
    } else {
        alert('Please complete Task 1 first.');
    }
}

// Function to unlock Task 3 after completing Task 2
function unlockTask3() {
    if (getTaskStatus(2) === 'unlocked') {
        setTaskStatus(3, 'unlocked');
        alert('Task 3 unlocked!');
    } else {
        alert('Please complete Task 2 first.');
    }
}
