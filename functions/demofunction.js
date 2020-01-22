const obj = {
    body: 'content here',
    res: 250,
}
exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: obj
    };
}
