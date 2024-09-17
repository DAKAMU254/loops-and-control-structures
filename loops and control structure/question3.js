// Write a JavaScript program that takes a grade (A, B, C, D, E) as input and displays a
// message based on the grade using the switch statement
function getGradeMessage(grade) {
    switch (grade) {
        case 'A':
            console.log('Excellent!');
            break;
        case 'B':
            console.log('Good job!');
            break;
        case 'C':
            console.log('Fair.');
            break;
        case 'D':
            console.log('Needs improvement.');
            break;
        case 'E':
            console.log('Failed.');
            break;
        default:
            console.log('Invalid grade.');
    }
}

// Example usage:
getGradeMessage('A'); // Excellent!
getGradeMessage('C'); // Fair.
