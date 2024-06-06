require('colors');
const fs = require('fs');

/**
 * @param {string[]} message 
 */
const info = (...message) => {
    const time = new Date().toLocaleTimeString();
    let fileContent = fs.readFileSync('./terminal.log', 'utf-8');

    console.info(`[${time}]`.gray, '[Info]'.blue, message.join(' '));
    fileContent += [`[${time}]`.gray, '[Info]'.blue, message.join(' ')].join(' ') + '\n';

    fs.writeFileSync('./terminal.log', fileContent, 'utf-8');
}

/**
 * @param {string[]} message 
 */
const success = (...message) => {
    const time = new Date().toLocaleTimeString();
    let fileContent = fs.readFileSync('./terminal.log', 'utf-8');

    console.info(`[${time}]`.gray, '[OK]'.green, message.join(' '));
    fileContent += [`[${time}]`.gray, '[OK]'.green, message.join(' ')].join(' ') + '\n';

    fs.writeFileSync('./terminal.log', fileContent, 'utf-8');
}

/**
 * @param {string[]} message 
 */
const error = (...message) => {
    const time = new Date().toLocaleTimeString();
    let fileContent = fs.readFileSync('./terminal.log', 'utf-8');

    console.error(`[${time}]`.gray, '[Error]'.red, message.join(' '));
    fileContent += [`[${time}]`.gray, '[Error]'.red, message.join(' ')].join(' ') + '\n';

    fs.writeFileSync('./terminal.log', fileContent, 'utf-8');
}

/**
 * @param {string[]} message 
 */
const warn = (...message) => {
    const time = new Date().toLocaleTimeString();
    let fileContent = fs.readFileSync('./terminal.log', 'utf-8');

    console.warn(`[${time}]`.gray, '[Warning]'.yellow, message.join(' '));
    fileContent += [`[${time}]`.gray, '[Warning]'.yellow, message.join(' ')].join(' ') + '\n';

    fs.writeFileSync('./terminal.log', fileContent, 'utf-8');
}

module.exports = { info, success, error, warn }