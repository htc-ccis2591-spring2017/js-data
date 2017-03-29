$(document).ready(function () {
    $("#featured").children("h2").remove();
    const mainLoc = "Gridania Ave";
    const sisterLoc = "Limsa Lane";
    $("#featured-items").append("<h2 id='month-item'>Monthly Features</h2>");
    $("#featured-items").append("<h2 id='weekly-item'>Weekly Specials</h2>");

    addFeature = function (target, itemArray) {
        htmlCode = "";
        htmlCode += "<ul>";
        $.each(itemArray, function (index) {
            item = itemArray[index].name;
            desc = itemArray[index].description;
            htmlCode += "<li>" + item + "<ul><li>" + desc + "</li></ul></li>";
        });
        htmlCode += "</ul>";
        $(target).append(htmlCode);
    }

    addSpecial = function (target, itemArray) {
        htmlCode = "";
        htmlCode += "<ul>";
        $.each(itemArray, function (index) {
            desc = itemArray[index].description;
            htmlCode += "<li>" + desc + "<ul>";
            store = itemArray[index].location;
            let locArray = store.split(",");
            $.each(locArray, function (index) {
                if (locArray[index] == "main") {
                    htmlCode += "<li>" + mainLoc + "</li>";
                } else if (locArray[index] == "sister") {
                    htmlCode += "<li>" + sisterLoc + "</li>";
                }
            })
            htmlCode += "</ul></li>";
        });
        htmlCode += "</ul>";
        $(target).append(htmlCode);
    }

    $.getJSON("data/specials.json", function (data) {
        addFeature("#month-item", data.Features);
        addSpecial("#weekly-item", data.Specials);

    });
})
