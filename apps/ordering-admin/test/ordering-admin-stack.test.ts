import {test} from "vitest";
 import * as cdk from 'aws-cdk-lib';
 import { Template } from 'aws-cdk-lib/assertions';
 import * as OrderingAdmin from '../lib/ordering-admin-stack';



 const app = new cdk.App();
 //     // WHEN
    const stack = new OrderingAdmin.OrderingAdminStack(app, 'MyTestStack');
 //     // THEN
    const template = Template.fromStack(stack);

test('lambda has been manage admin creates', () => {
    template.hasResourceProperties("AWS::Lambda::Function", {
        Handler: "handler",
        Runtime: "nodejs18.x", 
    })
});

test("Dynamo table for ordering management has been created", () => {
   template.resourceCountIs('AWS::DynamoDB::Table', 1);
   const tempoutput = template.findResources("AWS::DynamoDB::Table",
   {
      OderingSystem62771F5C: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          KeySchema: [Array],
          AttributeDefinitions: [Array],
          ProvisionedThroughput: [Object]
        },
        UpdateReplacePolicy: 'Retain',
        DeletionPolicy: 'Retain'
      }
    }
   )

   console.log(tempoutput);

});