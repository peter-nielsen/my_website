//initialize function called when the script loads
var mydiv = document.getElementById("mydiv");
mydiv.innerHTML = "Hello World";

function initialize() {
    
    cities();
    jqueryajax();
    debugAjax();
};

//function to create a table with cities and their populations
function cities(){
    
	//define two arrays for cities and population
	var cityPop = [
		{
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		},
        {
            city: 'St.Paul',
            population: 300851
        },
        {
            city: 'Minneapolis',
            population: 400070
        },
        {
            city: 'Duluth',
            population: 86265
        },
        {
            city: 'Rochester',
            population: 112255
        }
	];

	//append the table element to the div
	jQuery("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");
	
	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
    //adds the column for city size
    addColumns(cityPop);
    //adds mousover and clickon events
   addEvents();
};

function addColumns(cityPop){
    //creates a loop for each row
    $('tr').each(function(i){
        var citySize;
    	//the first time creates a header
        if (i == 0){

    		$(this).append('<th>City Size</th>');
    	} 
        else {

             //checks the population, designates each city as small medium or large   
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
                
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
                

    		} else {
    			citySize = 'Large';
                
    		};
            

    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};
//creates mousover and click events
function addEvents(){
//function for mouse over
	$('table').mouseover(function(){
		
		var color = "rgb(";
//loop for determining the color
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};
            //displays the random color
		$(this).css('color', color);
	};

	
        
});
    function clickme(){
//on clicking displays the alert
		alert('Hey, you clicked me!');
	};
//activates the function when clicked
	$('table').on('click', clickme);
};
//uses jquery to call the geojson file
function jqueryajax(){
//variable to store data once called   
    var mydata;
//function to access the data   
    $.ajax('data/MegaCities.geojson',{
//sets the data type       
        'dataType': 'json',
//calls the callback function if the data is found        
        'success' : jQueryCallback
    });
//callback function    
    function jQueryCallback(response){
//sets the variable mydata to be the same as the callback response   
        mydata = response;
//logs the array with the data to the console    
    console.log(mydata);
};
//this log statement comes up undefined because mydata is not set outside of the callback    
console.log(mydata);
};




//debug ajax function
function debugAjax(){
//creates a variable to store data
	var mydata;
//access the geojson file
	$.ajax("data/MegaCities.geojson", {
//sets the data tyoe to json		
        'dataType': "json",
//if data is found sends to debug callback
		'success': debugCallback
        });
//debug callback function       
       function debugCallback(response){
//sets mydata to the response given	
           mydata = response;
//log statemnt to confirm the array is filled           
           console.log(mydata);
//appends the div to add the title " GeoJSON data:" and then stringifies the json file to be displayed	
    $(mydiv).append('<br>GeoJSON data:<br/>'  + JSON.stringify(mydata)); 
           
    };	
}
       







//call the initialize function when the document has loaded
$(document).ready(initialize);
