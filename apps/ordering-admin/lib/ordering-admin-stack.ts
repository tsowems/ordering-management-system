import * as cdk from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as path from "path";
export class OrderingAdminStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    this.lambdasSetup()
    this.dynamoDBTableSetup()
   
  }

  lambdasSetup() {
    const manageAdmin = new lambda.Function(this, "manageAdmin", {
      runtime: Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset(path.join(__dirname, 'lambdas/')),
      handler: "handler",
      environment: {
      },
    });
  }

    dynamoDBTableSetup() {
      new cdk.aws_dynamodb.Table(this, "Odering-System", {
        partitionKey: { name: 'PK', type: cdk.aws_dynamodb.AttributeType.STRING},
        sortKey:  { name: 'SK', type: cdk.aws_dynamodb.AttributeType.STRING},
        
      })
    }



  }

