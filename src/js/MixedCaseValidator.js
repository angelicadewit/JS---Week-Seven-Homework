class MixedCaseValidator extends Validator {
    validate(){
        super.createErrorContainer();

        if (!this.$field.value){
            this.errors.push(`Needs to contain one of these characters: !@#$%^&*"`)
            console.log(this.showErrors)
        }

        this.showErrors();
    }
}