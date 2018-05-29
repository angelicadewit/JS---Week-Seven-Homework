class YearValidator extends Validator {
    validate(){
        super.validate();

        if (this.$field.value.length != 2){
            this.errors.push(`Please use the YY format`)
        }

        this.showErrors();
    }
}