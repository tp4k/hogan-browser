const exec = require('child_process').exec;

exec('npm publish --access public', (error) => {
    if (error) {
        console.error('Error while publish in npm:', error);
    }
});