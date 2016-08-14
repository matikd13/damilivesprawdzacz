$(document).ready(function () {
    $("#formButton").click(function () {
        var channel = $("#channelName").val();
        $.getJSON("http://api.hitbox.tv/media/live/dami10526", function (data) {
            var mediaIsLive = data.livestream[0].media_is_live;
            if (mediaIsLive == 1) {
                return $("#liveNotification").text("Tak! Dami jest online! :)");
            }
            return $("#liveNotification").text("Dami nie jest online :(");
        }).error(function () {
            $("#liveNotification").text("I'm not sure :(");
        });
    });
});