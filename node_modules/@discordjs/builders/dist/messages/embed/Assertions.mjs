import { s } from '@sapphire/shapeshift';
import { isValidationEnabled } from '../../util/validation.mjs';

const fieldNamePredicate = s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(256).setValidationEnabled(isValidationEnabled);
const fieldValuePredicate = s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(1024).setValidationEnabled(isValidationEnabled);
const fieldInlinePredicate = s.boolean.optional;
const embedFieldPredicate = s.object({
  name: fieldNamePredicate,
  value: fieldValuePredicate,
  inline: fieldInlinePredicate
}).setValidationEnabled(isValidationEnabled);
const embedFieldsArrayPredicate = embedFieldPredicate.array.setValidationEnabled(isValidationEnabled);
const fieldLengthPredicate = s.number.lessThanOrEqual(25).setValidationEnabled(isValidationEnabled);
function validateFieldLength(amountAdding, fields) {
  fieldLengthPredicate.parse((fields?.length ?? 0) + amountAdding);
}
const authorNamePredicate = fieldNamePredicate.nullable.setValidationEnabled(isValidationEnabled);
const imageURLPredicate = s.string.url({
  allowedProtocols: ["http:", "https:", "attachment:"]
}).nullish.setValidationEnabled(isValidationEnabled);
const urlPredicate = s.string.url({
  allowedProtocols: ["http:", "https:"]
}).nullish.setValidationEnabled(isValidationEnabled);
const embedAuthorPredicate = s.object({
  name: authorNamePredicate,
  iconURL: imageURLPredicate,
  url: urlPredicate
}).setValidationEnabled(isValidationEnabled);
const RGBPredicate = s.number.int.greaterThanOrEqual(0).lessThanOrEqual(255).setValidationEnabled(isValidationEnabled);
const colorPredicate = s.number.int.greaterThanOrEqual(0).lessThanOrEqual(16777215).or(s.tuple([RGBPredicate, RGBPredicate, RGBPredicate])).nullable.setValidationEnabled(isValidationEnabled);
const descriptionPredicate = s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(4096).nullable.setValidationEnabled(isValidationEnabled);
const footerTextPredicate = s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(2048).nullable.setValidationEnabled(isValidationEnabled);
const embedFooterPredicate = s.object({
  text: footerTextPredicate,
  iconURL: imageURLPredicate
}).setValidationEnabled(isValidationEnabled);
const timestampPredicate = s.union(s.number, s.date).nullable.setValidationEnabled(isValidationEnabled);
const titlePredicate = fieldNamePredicate.nullable.setValidationEnabled(isValidationEnabled);

export { RGBPredicate, authorNamePredicate, colorPredicate, descriptionPredicate, embedAuthorPredicate, embedFieldPredicate, embedFieldsArrayPredicate, embedFooterPredicate, fieldInlinePredicate, fieldLengthPredicate, fieldNamePredicate, fieldValuePredicate, footerTextPredicate, imageURLPredicate, timestampPredicate, titlePredicate, urlPredicate, validateFieldLength };
//# sourceMappingURL=Assertions.mjs.map
