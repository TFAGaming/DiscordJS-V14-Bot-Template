import { s } from '@sapphire/shapeshift';
import { TextInputStyle } from 'discord-api-types/v10';
import { isValidationEnabled } from '../../util/validation.mjs';
import { customIdValidator } from '../Assertions.mjs';

const textInputStyleValidator = s.nativeEnum(TextInputStyle);
const minLengthValidator = s.number.int.greaterThanOrEqual(0).lessThanOrEqual(4e3).setValidationEnabled(isValidationEnabled);
const maxLengthValidator = s.number.int.greaterThanOrEqual(1).lessThanOrEqual(4e3).setValidationEnabled(isValidationEnabled);
const requiredValidator = s.boolean;
const valueValidator = s.string.lengthLessThanOrEqual(4e3).setValidationEnabled(isValidationEnabled);
const placeholderValidator = s.string.lengthLessThanOrEqual(100).setValidationEnabled(isValidationEnabled);
const labelValidator = s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(45).setValidationEnabled(isValidationEnabled);
function validateRequiredParameters(customId, style, label) {
  customIdValidator.parse(customId);
  textInputStyleValidator.parse(style);
  labelValidator.parse(label);
}

export { labelValidator, maxLengthValidator, minLengthValidator, placeholderValidator, requiredValidator, textInputStyleValidator, validateRequiredParameters, valueValidator };
//# sourceMappingURL=Assertions.mjs.map
