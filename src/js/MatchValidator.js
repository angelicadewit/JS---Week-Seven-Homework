class MatchValidator extends Validator {

    constructor(selector, verifySelector){
        super(selector);
        this.$verifySelector = document.querySelector(verifySelector);
    }
    validate(){
        super.validate();

        if (this.$field.value !== this.$verifySelector.value){
            this.errors.push(`Your Passwords Does Not Match`)
            // console.log(this.showErrors)
            console.log(this.$verifySelector.value)
        }
    }
}