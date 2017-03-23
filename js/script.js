// Be sure to add an IIFE or jQuery ready to scope your work!
$(function () {

    getFeatureHtml = function (item) {
        html = "";
        html += "<li>" + item.name + " : " + item.description + "</li>";
        return html;
    }

    getSpecialHtml = function (deal) {
        let Local = "";
        if (deal.location == "main") {
            Local = "Available at Gridania Ave location.";
        } else if (deal.location == "sister") {
            Local = "Available at Limsa Lane location.";
        } else {
            Local = "Available at both locations.";
        }
        html = "";
        html += "<li>" + deal.description + " : " + Local + "</li>";
        return html;
    }


    displayFeature = function (target, featureArray) {
        html = "";
        html += "<ul>";

        $.each(featureArray, function (index) {
            item = featureArray[index];
            html += getFeatureHtml(item);
        })
        html += "</ul>";

        $(target).append(html);
    }

    displaySpecial = function (target, specialArray) {
        html = "";
        html += "<ul>";

        $.each(specialArray, function (index) {
            item = specialArray[index];
            html += getSpecialHtml(item);
        })
        html += "</ul>";

        $(target).append(html);
    }


    $.getJSON("specials.json", function (data) {
        console.log(data);
        displayFeature("#month", data.Features);
        displaySpecial("#week", data.Specials);
    });
});