
$(function () {
    setInterval(getErrorResponse,2000);

});

function getErrorResponse() {
    $.ajax({
        method: 'GET',
        url: "login",
        timeout: 2000,
        success: function (response) {
            if(response !== "null"){
                $("#error-name").empty();
                $("#error-name").append(response);
            }

        },
    });
}