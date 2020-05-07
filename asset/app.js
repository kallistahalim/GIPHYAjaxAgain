var searchArray = ["puppy", "kitties", "birdie"];

function generateButtons() {
    $("#button-here").empty();
    for (var i = 0; i < searchArray.length; i++) {
        var button = $("<button>");
        button.text(searchArray[i]);
        button.data("name", searchArray[i]);
        button.addClass("search-button");
        $("#button-here").append(button);

    }
}

generateButtons();


$(".search-button").on("click", function () {
    var name = $(this).data("name");
    var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=ckvCPO4jnCg338m2CttOtkDLb1bmZjK0&limit=10";

    $.ajax({
            url: queryUrl,
            method: "GET"
        })
        .done(function (response) {   
            
            for(var i = 0; i < response.data.length; i++) {
                console.log(response.data);
                var imageDiv = $("<div>");
                var image = $("<img>");
                var still = response.data[i].images.fixed_height_small_still.url;
                var animated = response.data[i].images.downsized_large.url;
                image.attr("src",still);
                image.attr("data-still", still);
                image.attr("data-animated", animated);
                image.attr("data-state", "still");
                image.attr("height", 100);
                image.addClass("image-class");
                imageDiv.append(image);
                $("#show-giphy-here").prepend(image);
            }
        })
});


$(document).on("click", ".image-class", function() {
    var state = $(this).data("state");
    if(state == "still") {
        $(this).attr("src", $(this).data("animated"));
        $(this).attr("data-state", "animated");
    }
});

$("#submit-value").on("click", function() {
    var addButton = $("input").eq(0).val();
    searchArray.push(addButton);
    generateButtons();
})

