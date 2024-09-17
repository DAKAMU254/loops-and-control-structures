// Create a JS code checking whether a person is eligible for voting
function isEligibleToVote(age) {
    if (age >= 18) {
        console.log('You are eligible to vote.');
    } else {
        console.log('You are not eligible to vote.');
    }
}

// Example usage:
isEligibleToVote(20); // You are eligible to vote.
isEligibleToVote(16); // You are not eligible to vote.
