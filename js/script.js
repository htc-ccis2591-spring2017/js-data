// Be sure to add an IIFE or jQuery ready to scope your work!
$(function() {

  getHtml = function(data) {
    html = ``;

    // if data has name
    if (data.name) {
      html += `<li><p style="margin-bottom: 0">${data.name}</p><em>${data.description}</em></li>`
      return html;

    // if data has id
    } else if (data.id) {
      let location = ``;

      if (data.location === `main`) {
        location = `at Gridania Ave`;
      } else if (data.location === `sister`) {
        location = `at Limsa Lane`;
      } else {
        location = `Everywhere`
      }

      html += `<li><p style="margin-bottom: 0">${data.description}</p><em>Available ${location}</em></li>`
      return html;
    }
  }

  displayFeatures = function(target, title, dataArr) {
    html = ``;
    html += `<h3>${title}</h3><ul>`

    $.each(dataArr, function(index) {
      data = dataArr[index];
      html += getHtml(data);
    })

    html += `</ul>`;

    $(target).append(html);
  }

  $.getJSON("data/data.json", function(data) {
    displayFeatures(`#featured-items`, `Monthly Features`, data.features);
    displayFeatures(`#featured-items`, `Weekly Specials`, data.specials);
  });
});
