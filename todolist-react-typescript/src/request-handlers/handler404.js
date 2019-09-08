
module.exports = function handler404(req, res) {
    res.writeHead(404);
    res.end('error : handler404');
    return;
}