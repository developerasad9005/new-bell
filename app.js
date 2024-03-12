document.getElementById("submit").addEventListener("click", function () {
    let time = document.getElementById("time").value;
    const date = document.getElementById("date").value;
    //   const exDate = document.getElementById("exDate").value;
    function randomNumber(min, max) {
        let minNumber = min; // Minimum number in the range
        let maxNumber = max; // Maximum number in the range
        let randonResult = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        let roundedNumber = parseFloat(randonResult.toFixed(2));
        return roundedNumber;
    }
    let firstPrizeChange = randomNumber(10, 40);
    let secoundPrizeChange = randomNumber(20, 65);
    let thirdPrizeChange = randomNumber(46, 85);
    let fourPrizeChange = randomNumber(55, 86);
    let cashPrize = randomNumber(270, 300);
    var randomOrder = Math.floor(Math.random() * 999999);
    const subtotal = firstPrizeChange + secoundPrizeChange + thirdPrizeChange + fourPrizeChange;
    let subTotalResult = parseFloat(subtotal.toFixed(2));
    const tax = (subtotal * 1.51) / 100;
    let taxresult = parseFloat(tax.toFixed(2));
    const total = subTotalResult + taxresult;
    let totalResult = parseFloat(total.toFixed(2));
    let changePrize = cashPrize - totalResult;
    let ChangePrizeRound = parseFloat(changePrize.toFixed(2));
    // document.getElementById("random14").innerHTML = Math.floor(Math.random() * 9999);
    document.getElementById('secoundPrizeUpdate').innerText = secoundPrizeChange;
    document.getElementById("firstPrizeChange").innerText = firstPrizeChange;
    document.getElementById("thirdPrizeChange").innerText = thirdPrizeChange;
    document.getElementById("fourPrizeChange").innerText = fourPrizeChange;
    document.getElementById("dateChange").innerText = date;
    //   document.getElementById("exDateChange").innerText = exDate;
    document.getElementById("subTotalChange").innerText = subTotalResult;
    document.getElementById("taxChange").innerText = taxresult;
    document.getElementById("totalChange").innerText = totalResult;
    document.getElementById("cashUpdate").innerText = cashPrize;
    document.getElementById("changeUpdate").innerText = ChangePrizeRound;
    document.getElementById("randomOrder").innerText = randomOrder;
    function formatTime(inputTime) {
        // Assuming inputTime is in the format HH:MM (24-hour format)
        let [hours, minutes] = inputTime.split(':').map(Number);
    
        // Check if hours is greater than or equal to 12
        if (hours >= 12) {
            // If hours is 12 or more, it's PM
            if (hours > 12) {
                hours -= 12; // Convert to 12-hour format
            }
            return `${hours}:${minutes} PM`;
        } else {
            // If hours is less than 12, it's AM
            if (hours === 0) {
                hours = 12; // Convert 0 to 12 for 12 AM
            }
            return `${hours}:${minutes} AM`;
        }
    }
    
    // Function to update the time by adding minutes
    function updateByMinutes(inputTime, minutesToAdd) {
        let [hours, minutes] = inputTime.split(':').map(Number);
        minutes += minutesToAdd;
        hours += Math.floor(minutes / 60);
        minutes %= 60;
        hours %= 24; // Handle overflow
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    }
    
    // Example usage
    let inputTime = time; // Example input time in HH:MM format (24-hour format)
    let formattedTime = formatTime(inputTime);
    document.getElementById("timeChange").innerText = formattedTime;
    
    // Event listener for the button click
    document.getElementById('timepress').addEventListener('click', function() {
        // Update the time by adding 1 minute
        inputTime = updateByMinutes(inputTime, 3);
        formattedTime = formatTime(inputTime);
        document.getElementById("timeChange").innerText = formattedTime;
    });
    

});

document.getElementById('nameChanger').addEventListener('click', function () {
    var firstNames = ["John", "Jane", "Michael", "Emily", "David", "Sarah", "James", "Mary", "Robert", "Jennifer", "William", "Susan", "Matthew", "Patricia", "Christopher", "Linda", "Joseph", "Karen", "Daniel", "Lisa", "Richard", "Nancy", "Joshua", "Betty", "Kevin", "Dorothy", "Brian", "Sandra", "George", "Ashley", "Ronald", "Kimberly", "Edward", "Donna", "Jennifer", "Michelle", "Charles", "Carol", "Thomas", "Amanda", "Joseph", "Melissa", "Mark", "Deborah", "Paul", "Stephanie", "Donald", "Rebecca", "Andrew", "Laura", "Kenneth", "Sharon", "Steven", "Cynthia", "Edward", "Kathleen", "Brian", "Amy", "Ronald", "Shirley", "Anthony", "Angela", "Kevin", "Anna", "Jason", "Ruth", "Matthew", "Brenda", "Gary", "Pamela", "Timothy", "Nicole", "Jose", "Victoria", "Larry", "Katherine", "Jeffrey", "Samantha", "Frank", "Christine", "Scott", "Emma", "Eric", "Catherine", "Stephen", "Virginia", "Andrew", "Debra", "Raymond", "Rachel", "Gregory", "Carolyn", "Joshua", "Janet", "Jerry", "Maria", "Dennis", "Heather"];
    var lastNames = ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez", "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington", "Butler", "Simmons", "Foster", "Gonzales", "Bryant", "Alexander", "Russell", "Griffin", "Diaz", "Hayes"];

    // Function to generate a random person's name
    function generatePersonName() {
        var firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        var lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        return firstName + " " + lastName;
    }

    // Generate a random person's name
    var randomName = generatePersonName();
    document.getElementById('nameUpdate').innerText = randomName;
})



    


//     function formatTime(inputTime) {
//         // Assuming inputTime is in the format HH:MM (24-hour format)
//         let [hours, minutes] = inputTime.split(':').map(Number);
       
//         // Check if hours is greater than or equal to 12
//         if (hours >= 12) {
//             // If hours is 12 or more, it's PM
//             if (hours > 12) {
//                 hours -= 12; // Convert to 12-hour format
//             }
//             return `${hours}:${minutes} PM`;
//         } else {
//             // If hours is less than 12, it's AM
//             if (hours === 0) {
//                 hours = 12; // Convert 0 to 12 for 12 AM
//             }
//             return `${hours}:${minutes} AM`;
//         }
//     }

//     // Example usage
//     let inputTime = time; // Example input time in HH:MM format (24-hour format)
//     let formattedTime = formatTime(inputTime);
//     document.getElementById("timeChange").innerText = formattedTime;

// });

// function changeBackground() {
//     // Select the body element
//     const bgChange = document.getElementById('receptBackground');

//     // Array of image URLs
//     var imageUrls = [
//         '1.jpg',
//         '2.jpg',
//         '3.jpg',
//         '4.jpg',
//         '5.jpg',
//         '6.jpg',
//         '7.jpg',
//         '8.jpg',
//     ];

//     // Generate a random index
//     var randomIndex = Math.floor(Math.random() * imageUrls.length);

//     // Set the background image
//     bgChange.style.backgroundImage = 'url(' + imageUrls[randomIndex] + ')';
// }

// // Event listener for the button click
// document.getElementById('changeBackground').addEventListener('click', changeBackground);
