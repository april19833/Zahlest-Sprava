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
// Function to mark a task as complete and unlock the next task
function completeTask(taskNumber) {
    setTaskStatus(taskNumber, 'completed');
    alert(`Task ${taskNumber} completed!`);
    
    // Automatically unlock the next task if it exists
    if (taskNumber < 3) {
        setTaskStatus(taskNumber + 1, 'unlocked');
        alert(`Task ${taskNumber + 1} unlocked!`);
        checkTaskStatus(taskNumber + 1, document.getElementById(`task${taskNumber + 1}`));
    }
}
// Function to validate and complete a task
function completeTask(taskNumber) {
    let isValid = false;

    if (taskNumber === 1) {
        const answer = document.getElementById('puzzle1-answer').value.trim();
        if (answer === '4') {
            isValid = true;
        } else {
            alert('Incorrect answer for Task 1. Please try again.');
        }
    } else if (taskNumber === 2) {
        const answer = document.getElementById('maze1-answer').value.trim();
        if (answer.toLowerCase() === 'a-b') {
            isValid = true;
        } else {
            alert('Incorrect answer for Task 2. Please try again.');
        }
    } else if (taskNumber === 3) {
        const answer = document.getElementById('secret1-answer').value.trim();
        if (
