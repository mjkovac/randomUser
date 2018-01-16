function loadtemp()
{
	//creates a mustache template for the button text and then creates the button in the render
	var mustacheButton = { 
		mcontent	: "New User",
	}
	var output = Mustache.render("<button onClick='userapi()'> {{mcontent}} </button>", mustacheButton);
	$("#btn").append(output); //attach the mustache button to the p (will change from p to button)
}

function userapi()
{
	//read the json file from the  webpage and create an object called d
	$.getJSON("https://randomuser.me/api/", function( d ) {
		//jperson is a mustache template using the data collected from the random user
		var jperson = {
			usrname : d.results[0].login.username, //username 
			email : d.results[0].email, //email address
			dob : d.results[0].dob, //date of birth
			profile : d.results[0].picture.large //display picture
		};
		//render the data to create an output of the random user
		var output = Mustache.render(
		"<div><img src={{profile}}><br><p>User : {{usrname}}</p>" +
		"<p>Email : {{email}}<p>Birth Date : {{dob}}</div>", jperson);
		$("#content").html(output); //changes the p to the random user data
	});
}