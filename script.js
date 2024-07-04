// Function to set the status of a task
function setTaskStatus(taskNumber, status) {
    localStorage.setItem(`task${taskNumber}`, status);
}

// Function to check the status of a task
function checkTaskStatus(taskNumber, taskElement) {
    const status = localStorage.getItem(`task${taskNumber}`);
    if (status === 'unlocked') {
        taskElement.classList.remove('task-locked');
        taskElement.classList.add('task-unlocked');
    } else {
        taskElement.classList.add('task-locked');
    }
}

// Function to complete a task
function completeTask(taskNumber) {
    const answer = document.getElementById(`task${taskNumber}-answer`).value;
    if (answer) {
        alert(`Task ${taskNumber} completed!`);
        setTaskStatus(taskNumber, 'completed');
    } else {
        alert('Please provide an answer to complete the task.');
    }
}

// Function to simulate donation and unlock the next task via Ethereum
function donateAndUnlock(taskNumber) {
    alert('Thank you for your donation via Ethereum!');
    setTaskStatus(taskNumber, 'unlocked');
    alert(`Task ${taskNumber} unlocked!`);
    checkTaskStatus(taskNumber, document.getElementById(`task${taskNumber}`));
}

// Function to simulate donation and unlock the next task via Beam Wallet
function donateAndUnlockBeam(taskNumber) {
    alert('Thank you for your donation via Beam Wallet!');
    setTaskStatus(taskNumber, 'unlocked');
    alert(`Task ${taskNumber} unlocked!`);
    checkTaskStatus(taskNumber, document.getElementById(`task${taskNumber}`));
}

// Check the status of all tasks on page load
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 1; i <= 5; i++) {
        checkTaskStatus(i, document.getElementById(`task${i}`));
    }
});
