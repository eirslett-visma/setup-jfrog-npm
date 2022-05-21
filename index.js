const fs = require('fs');
const core = require('@actions/core');

try {
    const registryUrl = core.getInput('registry-url');
    const auth = process.env['NODE_AUTH_TOKEN'];
    console.log(`Setup auth with registry ${registryUrl}`);
    const npmrc = `registry=${registryUrl}\n_auth=${auth}\nalways-auth=true\n`;
    fs.writeFileSync('.npmrc', npmrc);
} catch (error) {
    core.setFailed(error.message);
}
