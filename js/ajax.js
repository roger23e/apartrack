function call_Ajax(URL, METODO, VALOR, LOADER, ERROR, FN) 
{
    $.ajax
    ({
        type: "POST",
        url: URL,
        data:
        {
            m: METODO,
            v: VALOR
        },
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "JasonpCallback",
        async: true,
        contentType: 'application/json; charset=utf-8',
        statusCode: 
        {
            404: function()
            {
                console.log("NOT FOUND");
            },
            200: function() 
            {
                console.log("SUCCESS");
            }
        },
        beforeSend: function()
        {
            $(LOADER).css("display", "block");
            $(LOADER).css("padding-bottom", "15px");
        },
        complete: function()
        {
            $(LOADER).css("display", "none");
        },
        success: function(data)
        {
            FN(data);
        },
        error: function () 
        {
            $(ERROR).css("display", "block");
            $(ERROR).html("<p style='padding:10px; color:red;'>No se pudo conectar, por favor intente nuevamente.</p>");
        }
    });
}