"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonthValidator = function (_Validator) {
    _inherits(MonthValidator, _Validator);

    function MonthValidator() {
        _classCallCheck(this, MonthValidator);

        return _possibleConstructorReturn(this, (MonthValidator.__proto__ || Object.getPrototypeOf(MonthValidator)).apply(this, arguments));
    }

    _createClass(MonthValidator, [{
        key: "validate",
        value: function validate() {
            _get(MonthValidator.prototype.__proto__ || Object.getPrototypeOf(MonthValidator.prototype), "createErrorContainer", this).call(this);

            if (this.$field.value < 1 || this.$field.value > 12) {
                this.errors.push("Your " + this.$field.name + " must be between 1 and 12");
            }

            this.showErrors();
        }
    }]);

    return MonthValidator;
}(Validator);
//# sourceMappingURL=MonthValidator.js.map
