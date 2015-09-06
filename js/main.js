
function askQuestions () {

var firstName=prompt('What is your first name?');
var lastName = prompt('what is your last name?')

var fullName=firstName+" "+lastName;

console.log ("user is called" + " "+ fullName)

$('h2').text('Hello' +' '+ fullName);

if( firstName == "General" && lastName !== "Assembly") {

alert (" Welcome General" + " "+ lastName)

	console.log ("Greetings General" + " " + lastName)
}




var userAge;

function checkAge() {

	var userAge=promt ('How old are you?');
	userAge = parseInt(userAge);
	if (isNaN(userAge) === true) {
		alert (' please use numbers only')
		checkAge();
	}
}

var userAge = prompt ('How old are you?');
userAge = parseInt(userAge);

if (userAge >=18) {

	console.log ('User is an adult');
}
	else if (userAge >=13) {

		console.log ('User is a teenager')
	} 
	else  

	{
		alert ('Go away child');
	}

}
/* 
block comments 
*/
//Everything on the line is a comment

//when the page loads


$ (function() {

	$('img').on ('click',askQuestions);

	//hide all the sections
	$('h3').next().hide();



       //when the user clicks a h3 element
       $('h3').on('click',function(){


        //hide the next element
        $(this).next().slideToggle(2000); 









});




});