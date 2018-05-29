"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validator = function () {
    function Validator(selector) {
        _classCallCheck(this, Validator);

        this.$field = document.querySelector(selector);
        if (!this.$field) {
            console.warn("couldn't find selector: ", selector);
            return false;
        }

        //make elements to show errors in
        this.$errorContainer = document.createElement("div");
        this.$errorContainer.classList.add('error-message');
        this.$field.parentElement.appendChild(this.$errorContainer);

        //keep track of the errors
        this.errors = [];

        // add event listener to call this.validate
        // but overrule its _this_ logic, and force its
        // _this_ to be the Validate class instance

        this.$field.addEventListener("keyup", this.validate.bind(this));
        this.$field.addEventListener("blur", this.validate.bind(this));
    }

    _createClass(Validator, [{
        key: "validate",
        value: function validate() {
            console.log(this.$field.value);

            this.errors = [];

            this.$field.classList.toggle("not-valid", true);
            if (!this.$field.value) {
                var $p = document.createElement("p");
                this.errors.push("You must fill out the " + this.$field.name + " field");
            } else {
                this.errors.pop("You must fill out the " + this.$field.name + " field");
            }

            //this is a hack
            // putting a settimeout will run after everything 
            setTimeout(this.showErrors.bind(this), 0);
        }
    }, {
        key: "showErrors",
        value: function showErrors() {
            var _this = this;

            if (this.errors.length) {
                this.$errorContainer.innerHTML = "";
                this.errors.forEach(function (error) {
                    // this.$errorContainer.innerHTML += "<p>" + error + "</p>"
                    var $p = document.createElement("p");
                    $p.innerHTML += error;
                    _this.$errorContainer.appendChild($p);
                    _this.$field.removeAttribute("style");
                    _this.$field.style.borderColor = "red";
                    setTimeout(_this.showErrors.bind(_this), 0);
                });
            } else {
                // this.$field.classList.remove("not-valid")
                this.$field.removeAttribute("style");
                this.$field.style.borderColor = "green";
                this.$errorContainer.innerHTML = "";
            }
        }
    }]);

    return Validator;
}();
//# sourceMappingURL=Validator.js.map
