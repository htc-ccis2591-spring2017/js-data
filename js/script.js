$(function () {
    'use strict';
    console.log("script.js loaded");

    const mainLocation = "Gridania Ave";
    const sisterLocation = "Limsa Lane";

    // Html creation for Featured Items
    getFeatureHtml = function (feature) {
        html = "";
        html += '<li>' + feature.name + "<br>" + feature.description + "</li>";
        return html;
    }

    // Html creation for Specials
    getSpecialHtml = function (special) {
        html = "";
        let location = setLocation(special);
        html += '<li>' + special.description + "<br>" + location + "</li>";
        return html;
    }

    // Set the location based on main or sister site. 
    function setLocation(special) {
        switch (special.location) {
        case "main, sister":
            special = mainLocation + ", " + sisterLocation;
            break;
        case "main":
            special = mainLocation;
            break;
        case "sister":
            special = sisterLocation;
            break;
        }
        return special;
    }

    displayFeature = function (target, featuredArray) {
        html = "<h3>Monthly Featured</h3>";
        html += "<ul>";

        $.each(featuredArray, function (index) {
            //Get featured items from array
            feature = featuredArray[index];
            html += getFeatureHtml(feature);
        })
        html += "</ul>";

        $(target).append(html);
    }

    displaySpecials = function (target, specialsArray) {
        html = "<h3>Weekly Specials</h3>";
        html += "<ul>";

        $.each(specialsArray, function (index) {
            //Get specials from array
            special = specialsArray[index];
            html += getSpecialHtml(special);
        })
        html += "</ul>";

        $(target).append(html);
    }

    // Get the JSON data from the file and display
    $.getJSON("data/specials.json", function (data) {
        displayFeature("#featured-items", data.featured);
        displaySpecials("#featured-items", data.specials);
    });


});