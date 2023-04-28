import * as cdk from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class OrderingAdminStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'OrderingAdminQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    const addNewProductLambda = new NodejsFunction(
      this,
      'AddNewProduct Lambda',
      {
        runtime: lambda.Runtime.NODEJS_18_X,
        handler: 'handler',
        entry: `${__dirname}/lambdas/products/add-new-product.ts`,
        timeout: Duration.seconds(30)
      }
    )

    
  }
}
