$(document).ready(function () {
    $("#loader").hide();
    $(document).ajaxStart(function () { $("#loader").show(); })
        .ajaxStop(function () { $("#loader").hide(); });
    $("#lookup").click(function () {
        $w = $("#word").val();
        $.ajax("/lookup", {
            type: 'POST',
            data: { word: $w }
        })
            .done(successFunction);
    });
    function successFunction(data) {
        $("ul").children().remove();
        parsedData = JSON.parse(data);
        console.log(parsedData);
        $("h2").replaceWith(`<h2>(${parsedData[0].word})</h2>`);
        for (var i = 0; i < parsedData.length; i++) {
            $("ul").append(`<li>${i + 1} (${parsedData[i].wordtype}) :: ${parsedData[i].definition}</li>`)
        }
    }
});