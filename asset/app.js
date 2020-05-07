
$("button").on("click", function () {
    var name = $(this).data("name");
    var queryUrl = "http://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=ckvCPO4jnCg338m2CttOtkDLb1bmZjK0&limit=10";

    $.ajax({
            url: queryUrl,
            method: "GET"
        })
        .done(function (response) {   
            
            for(var i = 0; i < response.data.length; i++) {
                console.log(queryUrl)
                var image = $("<img>");
                image.attr("src",response.data[i].images.downsized_large.url);
                image.attr("height", 100);
                $("#show-giphy-here").prepend(image);
            }
        })

});