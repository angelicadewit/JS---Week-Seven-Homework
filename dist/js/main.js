'use strict';

var validatorFirst = new Validator('[name=first-name]');
var validatorLast = new Validator('[name=last-name]');
var validatorEmail = new EmailValidator('[name=email]');

var validatorNumDD = new NumberRangeValidator('[name=day]', 1, 31);
var validatorNumMM = new NumberRangeValidator('[name=month]', 1, 12);
var validatorNumYY = new NumberRangeValidator('[name=year]', 1900, 1999);

var validatorMatchPassword = new MatchValidator('[name=verify-password', '[name=password]');
var validatorLengthPassword = new LengthRangeValidator('[name=password]', 4, 5);
var validatorMixedCasePassword = new MixedCaseValidator('[name=password]');
var validatorSpecialCharactersPassword = new SpecialCharactersValidator('[name=password]');
//# sourceMappingURL=main.js.map
