// const obj = {
//     body: 'content here',
//     res: 250,
// }

function runMe(context) {
    return new Promise((resolve, reject) => {
        const usePromise = context.queryStringParameters.promise || false;
        if (usePromise) {
            resolve({
                message: context.queryStringParameters.promise
            });
        } else {
            reject('no promises');
        }
    });
}

exports.handler = async (event, context, callback) => {
    runMe(context)
        .then(data => {
            callback(null, JSON.stringify(data));
        })
        .reject(callback);
    // return {
    //     statusCode: 200,
    //     body: JSON.stringify(obj),
    //     event: JSON.stringify(event)
    // };
}
