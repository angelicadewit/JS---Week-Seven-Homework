
let validatorFirst = new Validator('[name=first-name]')
let validatorLast = new Validator('[name=last-name]')
let validatorEmail = new EmailValidator('[name=email]')

let validatorNumDD = new NumberRangeValidator('[name=day]', 1, 31)
let validatorNumMM = new NumberRangeValidator('[name=month]', 1, 12)
let validatorNumYY = new NumberRangeValidator('[name=year]', 1900, 1999)

let validatorMatchPassword = new MatchValidator('[name=verify-password','[name=password]')
let validatorLengthPassword = new LengthRangeValidator('[name=password]', 4, 5)