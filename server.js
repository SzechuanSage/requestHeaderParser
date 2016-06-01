var express = require('express');

var router = express();

router.enable('trust proxy')

router.use(function(req,res) {
    var ipAddress = req.headers['x-forwarded-for']
    var language = req.headers['accept-language'].match(/^(.*)\,/)[1]
    var start = req.headers['user-agent'].indexOf('(') + 1
    var finish = req.headers['user-agent'].indexOf(')')
    var software = req.headers['user-agent'].substr(start, finish - start)
    var headerInfo = {
        ipaddress: ipAddress,
        language: language,
        software: software
    }
    res.end(JSON.stringify(headerInfo))
})

router.listen(process.env.PORT || 3000);
