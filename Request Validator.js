function requestValidator(request){
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    if(request.method === undefined || !methods.includes(request.method))
    {
        throw new Error('Invalid request header: Invalid Method');
    }

    if(request.uri === undefined || request.uri === '' || (request.uri !== '*' && /[^\w.]/.test(request.uri)))
    {
        throw new Error('Invalid request header: Invalid URI');
    }

    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if(request.version === undefined || !versions.includes(request.version))
    {
        throw new Error('Invalid request header: Invalid Version');
    }

    if(request.message === undefined || /[<>\\&'"]/.test(request.message))
    {
        throw new Error('Invalid request header: Invalid Message');
    }

    console.log(request);
}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
})