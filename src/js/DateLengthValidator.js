class DateLengthValidator extends Validator {
    validate(){
        super.createErrorContainer();

        if (this.$field.value.length != 2){
            this.errors.push(`Please use a 2-digit format`)
            console.log(this.showErrors)
        }

        this.showErrors();
    }
}