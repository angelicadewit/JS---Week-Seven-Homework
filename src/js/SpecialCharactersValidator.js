class SpecialCharactersValidator extends Validator {
    validate(){
        super.validate();


    if (!this.$field.value.includes("!") || !this.$field.value.includes("@")|| !this.$field.value.includes("#")|| !this.$field.value.includes("$")|| !this.$field.value.includes("%"
        || !this.$field.value.includes("^")|| !this.$field.value.includes("&") || !this.$field.value.includes("*"))){
            this.errors.push(`Needs to contain a`)
        }

        this.showErrors();
    }
}