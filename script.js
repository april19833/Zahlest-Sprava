// script.js

// Function to complete a task
function completeTask(taskNumber) {
    let answer;
    switch (taskNumber) {
        case 1:
            answer = document.getElementById('puzzle1-answer').value;
            if (answer.trim() === '4') {
                alert('Task 1 completed successfully!');
            } else {
                alert('Incorrect answer. Try again!');
            }
            break;
        case 2:
            answer = document.getElementById('maze1-answer').value;
            if (answer.trim().toLowerCase() === 'right') {
                alert('Task 2 completed successfully!');
            } else {
                alert('Incorrect answer. Try again!');
            }
            break;
        case 3:
            answer = document.getElementById('secret1-answer').value;
            if (window.atob(answer.trim()) === 'Hello world') {
                alert('Task 3 completed successfully!');
            } else {
                alert('Incorrect answer. Try again!');
            }
            break;
        case 4:
            answer = document.getElementById('riddle1-answer').value;
            if (answer.trim().toLowerCase() === 'keyboard') {
                alert('Task 4 completed successfully!');
            } else {
                alert('Incorrect answer. Try again!');
            }
            break;
        case 5:
            answer = document.getElementById('code1-answer').value;
            if (answer.trim().split(' ').map(num => String.fromCharCode(parseInt(num))).join('') === 'Red!!') {
                alert('Task 5 completed successfully!');
            } else {
                alert('Incorrect answer. Try again!');
            }
            break;
        default:
            alert('Invalid task number.');
            break;
    }
}

// Function to donate and unlock tasks
function donateAndUnlock(taskNumber) {
    // Implement donation logic here, e.g., redirect to donation page or handle payment
    alert(`Donate $50 to unlock Task ${taskNumber}.`);
}
