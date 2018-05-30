class MatchValidator extends Validator {

    // constructor(selector, verifySelector){
    //     super(selector);
    //     this.$field.value = verifySelector;
    // }
    validate(){
        super.validate();


        // if (this.$field.value === verifySelector.value){
        //     this.errors.push(`Number must not be greater than ${this.max}`)
        // }

        this.showErrors();
    }
}