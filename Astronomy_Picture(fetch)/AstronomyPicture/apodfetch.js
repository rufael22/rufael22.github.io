/**
 * index.js
 */

$(document).ready(function () {
  $("#view_button").click(function () {

   let date = $("#date").val();
    fetch(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=tfofVD2BzaJDMUT3znaYMv06ec8AN3CR0CuiSQNY`
    )
      .then(response => response.json())
      .then((data) => {
        $("#pic").attr("src", data.url);
        $("#title").text(data.title);
        $("#date1").text(data.date);
        $("#explanation").text(data.explanation);
      })
      .catch(err => console.log(err.message));
  });
});
