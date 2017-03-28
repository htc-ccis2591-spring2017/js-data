// Be sure to add an IIFE or jQuery ready to scope your work!

$(function () {

    getFeaturesHtml = function (features) {
        
        //Display the features
        html = "";
        html += "<li>" + features.name + " <br> " + features.description +"</li>";
        return html;
    }

        //Display the specials
        getSpecialsHtml = function (specials) {
        
        //Add variable for the location:
        let branch = "";
        if (specials.location === "main, sister") {
            branch = "Gridania Ave, Limsa Lane";
        }    
            else if (specials.location === "main") {
            branch = "Gridania Ave";
        }   
            else if (specials.location === "sister") {
            branch = "Limsa Lane";
        };    
            
        html = "";
        html += "<li>" + specials.description + " <br> " + "Location: " +  branch + "</li>";
        return html;
    }

          
    // Build <ul> for all features/specials in an array
    // Target is used for where to insert 
    // the data on the page
    displayFeatures = function (target, featuresArray) {
        html = "";
        html += "<ul><h2>Weekly Features</h2>";

        $.each(featuresArray, function (index) {
        
            console.log(featuresArray[index]);
            features = featuresArray[index];
            html += getFeaturesHtml(features);
        })
        
        html += "</ul>";
        $(target).append(html);
    }
    

        displaySpecials = function (target, specialsArray) {
        html = "";
        html += "<ul><h2>Monthly Specials</h2>";

        $.each(specialsArray, function (index) {
  
            console.log(specialsArray[index]);
            specials = specialsArray[index];
            html += getSpecialsHtml(specials);
        })
        html += "</ul>";

        $(target).append(html);
    }


    // Get the JSON data from the file and display
    $.getJSON("data/data.json", function (data) {
    console.log(data);
    displayFeatures("#featured-items", data.features);
    displaySpecials("#featured-items", data.specials);
        
});
});


