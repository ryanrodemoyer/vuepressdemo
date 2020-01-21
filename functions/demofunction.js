exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: {
            "values": [
                "san francisco",
                "kansas city"
            ]
        }
    };
}