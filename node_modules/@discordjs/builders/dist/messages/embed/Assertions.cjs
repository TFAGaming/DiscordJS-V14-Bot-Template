'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const shapeshift = require('@sapphire/shapeshift');
const validation = require('../../util/validation.cjs');

const fieldNamePredicate = shapeshift.s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(256).setValidationEnabled(validation.isValidationEnabled);
const fieldValuePredicate = shapeshift.s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(1024).setValidationEnabled(validation.isValidationEnabled);
const fieldInlinePredicate = shapeshift.s.boolean.optional;
const embedFieldPredicate = shapeshift.s.object({
  name: fieldNamePredicate,
  value: fieldValuePredicate,
  inline: fieldInlinePredicate
}).setValidationEnabled(validation.isValidationEnabled);
const embedFieldsArrayPredicate = embedFieldPredicate.array.setValidationEnabled(validation.isValidationEnabled);
const fieldLengthPredicate = shapeshift.s.number.lessThanOrEqual(25).setValidationEnabled(validation.isValidationEnabled);
function validateFieldLength(amountAdding, fields) {
  fieldLengthPredicate.parse((fields?.length ?? 0) + amountAdding);
}
const authorNamePredicate = fieldNamePredicate.nullable.setValidationEnabled(validation.isValidationEnabled);
const imageURLPredicate = shapeshift.s.string.url({
  allowedProtocols: ["http:", "https:", "attachment:"]
}).nullish.setValidationEnabled(validation.isValidationEnabled);
const urlPredicate = shapeshift.s.string.url({
  allowedProtocols: ["http:", "https:"]
}).nullish.setValidationEnabled(validation.isValidationEnabled);
const embedAuthorPredicate = shapeshift.s.object({
  name: authorNamePredicate,
  iconURL: imageURLPredicate,
  url: urlPredicate
}).setValidationEnabled(validation.isValidationEnabled);
const RGBPredicate = shapeshift.s.number.int.greaterThanOrEqual(0).lessThanOrEqual(255).setValidationEnabled(validation.isValidationEnabled);
const colorPredicate = shapeshift.s.number.int.greaterThanOrEqual(0).lessThanOrEqual(16777215).or(shapeshift.s.tuple([RGBPredicate, RGBPredicate, RGBPredicate])).nullable.setValidationEnabled(validation.isValidationEnabled);
const descriptionPredicate = shapeshift.s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(4096).nullable.setValidationEnabled(validation.isValidationEnabled);
const footerTextPredicate = shapeshift.s.string.lengthGreaterThanOrEqual(1).lengthLessThanOrEqual(2048).nullable.setValidationEnabled(validation.isValidationEnabled);
const embedFooterPredicate = shapeshift.s.object({
  text: footerTextPredicate,
  iconURL: imageURLPredicate
}).setValidationEnabled(validation.isValidationEnabled);
const timestampPredicate = shapeshift.s.union(shapeshift.s.number, shapeshift.s.date).nullable.setValidationEnabled(validation.isValidationEnabled);
const titlePredicate = fieldNamePredicate.nullable.setValidationEnabled(validation.isValidationEnabled);

exports.RGBPredicate = RGBPredicate;
exports.authorNamePredicate = authorNamePredicate;
exports.colorPredicate = colorPredicate;
exports.descriptionPredicate = descriptionPredicate;
exports.embedAuthorPredicate = embedAuthorPredicate;
exports.embedFieldPredicate = embedFieldPredicate;
exports.embedFieldsArrayPredicate = embedFieldsArrayPredicate;
exports.embedFooterPredicate = embedFooterPredicate;
exports.fieldInlinePredicate = fieldInlinePredicate;
exports.fieldLengthPredicate = fieldLengthPredicate;
exports.fieldNamePredicate = fieldNamePredicate;
exports.fieldValuePredicate = fieldValuePredicate;
exports.footerTextPredicate = footerTextPredicate;
exports.imageURLPredicate = imageURLPredicate;
exports.timestampPredicate = timestampPredicate;
exports.titlePredicate = titlePredicate;
exports.urlPredicate = urlPredicate;
exports.validateFieldLength = validateFieldLength;
//# sourceMappingURL=Assertions.cjs.map
