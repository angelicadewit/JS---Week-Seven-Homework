class MixedCaseValidator extends Validator {
    validate(){
        super.validate();

        if (this.$field.value.length > this.max){
            this.errors.push(`Your ` + this.$field.placeholder.toLowerCase() + ` cannot have more than ${this.max} characters`)
        }

        if (this.$field.value.length < this.min){
            this.errors.push(`Your ` + this.$field.placeholder.toLowerCase() + ` must have at least ${this.min} characters`)
        }
    }
}