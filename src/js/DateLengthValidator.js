class DateLengthValidator extends Validator {
    validate(){
        super.validate();

        if (this.$field.value.length != 2){
            this.errors.push(`Please use a 2-digit format`)

        }

        this.showErrors();
    }
}