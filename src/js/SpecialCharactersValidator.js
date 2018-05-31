class SpecialCharactersValidator extends Validator {
        validate(){
            super.validate();
    
            const characters = /^(?=.*[!@#$%^&*])/
    
            if (!this.$field.value.match(characters)){
            this.errors.push(`Your ` + this.$field.placeholder.toLowerCase() + ` must contain: !@#$%^&*`)
            }
        }
    }
    