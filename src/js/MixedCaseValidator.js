class MixedCaseValidator extends Validator {
    validate(){
        super.validate();

        const letters = /^(?=.*[a-z])(?=.*[A-Z])/;

        if (!this.$field.value.match(letters)){
            this.errors.push(`Your ` + this.$field.placeholder.toLowerCase() + ` must contain both upper and lower case`)
        }
    }
}

