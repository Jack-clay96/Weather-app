var feedURL = "https://www.metaweather.com/api/location/44418/"; //REST API URL

$(document).on('pagecreate', '#feedPage', function(event) { 
	//Code from here is run when page is created
	
	// Use an HTML GET request to obtain data from an API
	var xmlhttp=new XMLHttpRequest();
	//xmlhttp.open("GET", feedURL, false); //Locks app until recieves request back from server
    xhttp.open("GET", feedURL, true); //Allows user to use app while getting request back
	xmlhttp.send();
		
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("demo").innerHTML = this.responseText;
            var weather= JSON.parse(xmlhttp.responseText);
        }
};
		
	// parse the resulting JSON into Javascript Data Object 
	// you can use a live parser to inspect the contents of the JSON
	// http://json.parser.online.fr/ 
	//var weather= JSON.parse(xmlhttp.responseText); //HTTP GET request - using XMLHttpRequest
	
	
	//Define Ractive binding
	var ractive = new Ractive({
    	el: 'container', <!-- where -->
    	template: '#myTemplate', <!-- how -->
    	data: { weather : weather.consolidated_weather } <!-- what - specify the list of weather reports using dot notation-->
	});
	
});