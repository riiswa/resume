const yaml = require('js-yaml');
const fs = require('fs');

fs.writeFileSync('data.json',
    JSON.stringify(
        yaml.load(
            fs.readFileSync('data.yml', {encoding: 'utf-8'})),
        null,
        2
    )
)
