function getContentTypes(url) {
    if (url.endsWith('.css')) {
        return 'text/css';
    } else if (url.endsWith('.html')) {
        return 'text/html';
    } else if (url.endsWith('.png')) {
        return 'image/png';
    } else if (url.endsWith('.jpg')) {
        return 'image/jpg';
    } else if (url.endsWith('.jpeg')) {
        return 'image/jpeg';
    } else if (url.endsWith('.ico')) {
        return 'image/x-icon';
    } else if (url.endsWith('.js')) {
        return 'text/javascript';
    } else if (url.endsWith('.json')) {
        return 'application/json';
    }
}

module.exports = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    
}
