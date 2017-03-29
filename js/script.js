+/*jslint browser: true*/
 +/*global $, jQuery, alert*/
    
    
$( document ).ready(function() {  
       
        getFeaturedHtml = function (features) {
        html = "";
        html += "<li>" + features.name + features.description + "</li>";
        return html;
    }

    // Build <ul> for all specials in an array
    // Target is used for where to insert 
    //    the data on the page
    displayFood = function (target, foodArray) {
        html = "";
        html += "<ul><h1>Monthly Specials<h1>";

        $.each(foodArray, function (index) {
            //Get pet from array
            console.log(foodArray[index]);
            features = foodArray[index];
            html += getFeaturedHtml(features);
        })
        html += "</ul>";

        $(target).append(html);
    }
    
    
    //SPECIALS
    
    getFeaturedHtmlSpecials = function (specials) {
        
                //location logic
    let streetLocation = "";
    if (specials.location ==="main,sister"){
        streetLocation = "Gridania Ave - Limsa Lane";
    }
    
    else if (specials.location === "main"){
        streetLocation = "Gridania Ave";
    }
    
    else if (specials.location === "sister"){
        streetLocation = "Limsa Lane";
    };
        
        html = "";
        html += "<li>" + "Use Code: " + specials.id + "<br>" + specials.description + "<br>Location: " + streetLocation + "</li>";
        return html;
    }
    
    
        displaySpecials = function (target, foodArray) {
        html = "";
        html += "<ul><h1>Monthly Specials<h1>";

        $.each(foodArray, function (index) {
            //Get food from array
            console.log(foodArray[index]);
            specials = foodArray[index];
            html += getFeaturedHtmlSpecials(specials);
        })
        html += "</ul>";

        $(target).append(html);
    }
        
        //END OF SPECIALS

    // Get the JSON data from the file and display
    $.getJSON("specials.json", function (data) {
    console.log(data);
    displayFood("#featured-items", data.features);
    displaySpecials("#featured-items", data.specials);
     //$(".hide").show();
});
    
    });
