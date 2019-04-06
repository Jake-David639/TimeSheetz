// Initialize Firebase
var config = {
    apiKey: "AIzaSyBJxqjP1ozV7Rdxi3KCbiI5WNkymJXqt5Y",
    authDomain: "super-rad-project-alpha.firebaseapp.com",
    databaseURL: "https://super-rad-project-alpha.firebaseio.com",
    projectId: "super-rad-project-alpha",
    storageBucket: "super-rad-project-alpha.appspot.com",
    messagingSenderId: "906425428681"
};
firebase.initializeApp(config);
var database = firebase.database();

// Initial Values
var name = "";
var title = "";
var startDate = 0;
var monthlyRate = 0;
var monthsWorking = 0;
var totalBilled = 0;

// Capture Button Click
$("#submit-btn").on("click", function (event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#name-input").val().trim();
    title = $("#title-input").val().trim();
    monthlyRate = $("#month-rate-input").val().trim();
    startDate = $("#start-date-input").val().trim();

    let employeeDataRow = $('<tr>');
    

    // Code for handling the push
    database.ref().push({
        name: name,
        role: title,
        startDate: startDate,
        mothlyRate: month,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

});

let calcualteMonthsWorked = function(startDate) {

}

// All things below need to be changed to match our implamentation, copied form a class activity
// to serve as a reference
// Firebase watcher .on("child_added" 
database.ref().on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var employee = snapshot.val();

    // Console.loging the last user's data
    console.log(employee.name);
    console.log(employee.email);
    console.log(employee.age);
    console.log(employee.comment);

    // Change the HTML to reflect
    $("#name-display").text(employee.name);
    $("#email-display").text(employee.email);
    $("#age-display").text(employee.age);
    $("#comment-display").text(employee.comment);

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });