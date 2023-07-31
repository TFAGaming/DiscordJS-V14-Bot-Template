const chalk = require('chalk');

/**
 * 
 * @param {string} string 
 * @param {'info' | 'err' | 'warn' | 'done' | undefined} style 
 */
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

/**
 * 
 * @param {number} time 
 * @param {import('discord.js').TimestampStylesString} style
 * @returns {`<t:${string}>`}
 */
const time = (time, style) => {
    return `<t:${Math.floor(time / 1000)}${style ? `:${style}` : ''}>`;
};

module.exports = {
    log,
    time
};