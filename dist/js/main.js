'use strict';

var validatorFirst = new Validator('[name=first-name]');
var validatorLast = new Validator('[name=last-name]');
var validatorEmail = new EmailValidator('[name=email]');
var validatorDay = new DayValidator('[name=day]');
var validatorLength = new DateLengthValidator('[name=day]');
var validatorNumber = new NumberValidator('[name=day]');
var validatorMonth = new MonthValidator('[name=month]');
var validatorMonthLength = new DateLengthValidator('[name=month]');
var validatorMonthNumber = new NumberValidator('[name=month]');
var validatorYearLength = new DateLengthValidator('[name=year]');
var validatorYearNumber = new NumberValidator('[name=year]');
var validatorPasswordSpecial = new SpecialCharactersValidator('[name=password]');
// let validatorPasswordMixedCase = new MixedCaseValidator('[name=password]')
//# sourceMappingURL=main.js.map
