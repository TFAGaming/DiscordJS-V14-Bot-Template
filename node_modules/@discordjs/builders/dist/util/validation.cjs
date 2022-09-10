'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

let validate = true;
const enableValidators = () => validate = true;
const disableValidators = () => validate = false;
const isValidationEnabled = () => validate;

exports.disableValidators = disableValidators;
exports.enableValidators = enableValidators;
exports.isValidationEnabled = isValidationEnabled;
//# sourceMappingURL=validation.cjs.map
