const http = require('http')

var server = http.createServer(
    (req,res) => {
        res.end('This is sample content.')
}
)
server.listen(8080)