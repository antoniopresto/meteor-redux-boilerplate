// Add two middleware calls. The first attempting to parse the request body as
// JSON data and the second as URL encoded data.
/*
Picker.middleware(BodyParser.json());
Picker.middleware(BodyParser.urlencoded({
    extended: false
}));
*/

//postRoutes é um filtro para aceitar apenas POST data
//var POSTRoutes = Picker.filter(function (req, res) {
//    return req.method == "POST";
//});

/*
Picker.route('/retornopagamento', (params, req, res, next) => {
    res.setHeader('access-control-allow-origin', "https://sandbox.pagseguro.uol.com.br");
    //Lojinha.pagseguroNotificationReceiver(req);
    res.end('ok');
});
*/
