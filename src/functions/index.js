const chalk = require('chalk');

const log = (string, style) => {
    switch (style) {
        case 'info': {
            console.log(chalk.blue('[INFO] ' + string));

            break;
        };

        case 'err': {
            console.error(chalk.red('[ERROR] ' + string));

            break;
        };

        case 'warn': {
            console.warn(chalk.yellow('[WARNING] ' + string));

            break;
        };

        case 'done': {
            console.log(chalk.green('[SUCCESS] ' + string));

            break;
        };

        default: {
            console.log(string);

            break;
        };
    };
};

module.exports = {
    log
};