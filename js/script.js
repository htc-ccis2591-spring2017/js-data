/*  CCIS2591 - JavaScript
    JS Data assignment
    Cheryl Davis */

$(document).ready(function(){
  $("#featured").children("h2").remove();
  const mainLoc = "Grindania Ave";
  const sisterLoc = "Limsa Lane";
  $("#featured-items").append("<h2 id='month-item'>Monthly Features</h2>");
  $("#featured-items").append("<h2 id='weekly-item'>Weekly Specials</h2>");

addFeature = function (target, itemArray){
        htmlCode = "";
        htmlCode += "<ul>";
        $.each(itemArray, function (index){
            item = itemArray[index].name;
            desc = itemArray[index].description;
            htmlCode += "<li style='font-size:20px'>" + item + "<ul><li style='font-size:15px'>" + desc + "</li></ul></li>";
        });
        htmlCode += "</ul>";
        $(target).append(htmlCode);
    }
addSpecial = function (target, itemArray){
        htmlCode = "";
        htmlCode += "<ul>";
        $.each(itemArray, function (index){
            desc = itemArray[index].description;
            htmlCode += "<li style='font-size:20px'>" + desc + "<ul>";                    
            store = itemArray[index].location;
            let locArray = store.split(",");
            $.each(locArray, function(index){
                if (locArray[index] == "main"){
                    htmlCode += "<li style='font-size:15px'>" + mainLoc + "</li>";
                }
                else if (locArray[index] == "sister"){
                   htmlCode += "<li style='font-size:15px'>" + sisterLoc + "</li>";
                }
            })
            htmlCode += "</ul></li>";
        });
        htmlCode += "</ul>";
        $(target).append(htmlCode);
    }
    $.getJSON("specials.json", function (data){
        addFeature("#month-item", data.features);
        addSpecial("#weekly-item", data.specials);
    });
})//end of program
