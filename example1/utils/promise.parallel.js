
Promise.parallel = function(promiseMap) {

    return Promise.all(Object.values(promiseMap)).then(resultsAsArray => {

        var result = {};
        Object.keys(promiseMap).forEach((key, index)=> {

            result[key] = resultsAsArray[index];
        });

        return result;
    });
};