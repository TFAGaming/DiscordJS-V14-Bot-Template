import { s } from '@sapphire/shapeshift';
import { ActionRowBuilder } from '../../components/ActionRow.mjs';
import { customIdValidator } from '../../components/Assertions.mjs';
import { isValidationEnabled } from '../../util/validation.mjs';

const titleValidator = s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(45).setValidationEnabled(isValidationEnabled);
const componentsValidator = s.instance(ActionRowBuilder).array.lengthGreaterThanOrEqual(1).setValidationEnabled(isValidationEnabled);
function validateRequiredParameters(customId, title, components) {
  customIdValidator.parse(customId);
  titleValidator.parse(title);
  componentsValidator.parse(components);
}

export { componentsValidator, titleValidator, validateRequiredParameters };
//# sourceMappingURL=Assertions.mjs.map
