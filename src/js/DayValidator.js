class DayValidator extends Validator {
        validate(){
            super.createErrorContainer();

            if (this.$field.value < 1 || this.$field.value > 31){
                this.errors.push(`Your ` + this.$field.name + ` must be between 1 and 31`)
            }
    
            this.showErrors();
        }
    }