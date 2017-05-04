// Be sure to add an IIFE or jQuery ready to scope your work!
$(function(){
   
    
    // Build HTML for one item
    // Just create list item
    getfeatHtml = function (feat) {
        let html = "";
        html += "<li>" + "name:" + feat.name  + "<img src = '" + feat.image +"'>" + "description:" + feat.description + "</li>";
        return html;
    }
    
    getspecialHtml = function (specials) {
       let html = "";
        html += "<li>" + "id:" + specials.id  +  "description:" + specials.description + "location" + specials.location + "</li>";
        return html;
    }
    
    // Build <ul> for all features in an array
    // Target is used for where to insert 
    //    the data on the page
    displayFeatures = function (target, featArray) {
      let  html = "";
        html += "<ul>";

        $.each(featArray, function (index) {
            //Get pitem from array
            console.log(featArray[index]);
            feat = featArray[index];
            html += getfeatHtml(feat);
        });
        html += "</ul>";

        $(target).append(html);
        
    }
    
     displaySpecials = function (target, specArray) {
       let html = "";
        html += "<ul>";

        $.each(specArray, function (index) {
            //Get pitem from array
            console.log(specArray[index]);
            specials = specArray[index];
            html += getspecialHtml(specials);
        });
        html += "</ul>";

        $(target).append(html);
    }
     
    
     // Get the JSON data from the file and display
    $.getJSON("js/data/specials.json", function (data) {
    console.log(data);
    displayFeatures("#featured-items", data.features);
    displaySpecials("#featured-items", data.specials);
    });
    
});
