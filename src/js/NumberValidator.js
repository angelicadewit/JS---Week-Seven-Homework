class NumberValidator extends Validator {
        validate(){
            super.validate();

            if (!this.$field.value.match(/^\d+$/)) {
                this.errors.push(`Please use numbers`)
            }
    
            this.showErrors();
        }
    }