const fs = require('fs');
const core = require('@actions/core');
const github = require('@actions/github');

try {
    const registryUrl = core.getInput('registry-url');
    const auth = process.env['NODE_AUTH_TOKEN'];
    console.log(`Auth with ${auth} to registry ${registryUrl}`);

    const npmrc = `registry=${registryUrl}\n_auth=${auth}\nalways-auth=true\n`;

    fs.writeFileSync('.npmrc', npmrc);

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error) {
    core.setFailed(error.message);
}
