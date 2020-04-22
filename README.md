## To create project:
$ aws configure

`aws_access_key_id` = <aws_access_key_id><br>
`aws_secret_access_key` = <aws_secret_access_key><br>
`region` = us-west-2<br>
`output` = json

$ `npm install -g serverless`

$ `sls create --template aws-nodejs --path serverless-node-demo`

## To deploy project:

$ `sls deploy`

## To delete project deployment:

$ `sls remove`

## To run the server in local env:

$ `serverless invoke local --function hello`


