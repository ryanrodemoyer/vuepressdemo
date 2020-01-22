const obj = {
    body: 'content here',
    res: 250,
}

const promise = new Promise((resolve, reject) => {

});

exports.handler = async (event, context, callback) => {
    return {
        statusCode: 200,
        body: JSON.stringify(obj),
        event: JSON.stringify(event)
    };
}
