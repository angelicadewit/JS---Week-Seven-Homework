class MonthValidator extends Validator {
        validate(){
            super.validate();
    
            if (this.$field.value < 1 || this.$field.value > 12){
                this.errors.push(`Your month must be between 1 and 12`)
            }
            if (!this.$field.value.match(/^\d+$/)) {
                this.errors.push(`Please use numbers`)
            }
    
            this.showErrors();
        }
    }