import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as lambda from '../lib/ordering-admin-stack';
import {handler} from '../lib/lambdas/products/add-new-product';
import {beforeAll, test, expect} from "vitest";
import { BUNDLING_STACKS } from 'aws-cdk-lib/cx-api';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/ordering_admin-stack.ts

let template: cdk.assertions.Template
beforeAll(() => {
    const app = new cdk.App({
        context: {
            [BUNDLING_STACKS]: [],
        }
    })
    const stack = new lambda.OrderingAdminStack(app, "test");
    template = Template.fromStack(stack);
})

test('Lambda exports handler', () => {
    
    expect(lambda.OrderingAdminStack);
})

function getDeadLetterQueueArn() {
    const deadLetterQueues = template.findResources("AWS::SQS::Queue");
    const [queueId] = Object.keys(deadLetterQueues);
    return queueId;
}

function lambdaConfiguration() {
    return {
        Timeout: 600,
        DeadLetterConfig: {
            TArgetArn: { "Fn::GetAtt": [getDeadLetterQueueArn(), "Arn"]},
        },
    }
}