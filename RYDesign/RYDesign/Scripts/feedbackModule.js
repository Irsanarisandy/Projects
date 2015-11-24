﻿var feedbackModule = (function () {
    // Return anything that you want to expose outside the closure
    return {
        getFeedback: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://rydesign.azurewebsites.net/api/Feedback",
                success: function (data) {
                    callback(data);
                }
            });
        }
    };
}());