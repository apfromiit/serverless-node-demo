'use strict';

module.exports.hello1 = async event => {
  let params = event.queryStringParameters;
  let name = "world";
  if (params != undefined && params.name != undefined)
    name = params.name;
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        "hello": name
      },
      null,
      2
    ),
  };
};

module.exports.hello2 = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        "hello": event.pathParameters.name
      },
      null,
      2
    ),
  };
};

module.exports.hello3 = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        "hello": JSON.parse(event.body).name
      },
      null,
      2
    ),
  };
};
