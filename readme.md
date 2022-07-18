# node-webhooks-challenge-serverless-function

This sample repo will show you how to easily deplay a serverless function endpoint to Vercel to work with Nylas webhooks using Node.js.

## Setup

### System dependencies

- N/A (serverless function to be deployed)

### Gather environment variables

- N/A

### Install dependencies

- N/A

## Usage

The endpoints available are 

### GET: {{serverless_function_callback_url}}/api/webhooks/nylas

The GET endpoint method is required to handle the challenge parmeter to enable a webhook. So anytime we create a Nylas webhook, the `callback_url` that you deploy will be called before a webhook can be enabled. 

Ensure the serverless function is deployed before creating a webhook. You can easily create a webhook for your app on the Nylas dashboard.

### POST: {{serverless_function_callback_url}}/api/webhooks/nylas

The POST endpoint method is where all delta messages will be sent when a webhook is triggered, such as a message being updated (i.e. when a `message.update` webhook triggered exists)

Run the serverless function as follows:

1. fork this repository
2. goto https://vercel.com/new
3. `Import` repository
4. (optional) update project name
5. press `Deploy` and make note of the deployed url (this will be the `callback_url`)
6. create webhook via Nylas Dashboard, say `message.updated`, ensure to add the deployed url (`callback_url`)
7. trigger webhook by starring a message ([here is a list](https://developer.nylas.com/docs/developer-tools/webhooks/available-webhooks/#message-updated-events) of `message.updated` triggers)

## Learn more

Visit our [Nylas documentation](https://developer.nylas.com/docs/developer-tools/webhooks/) to learn more.
