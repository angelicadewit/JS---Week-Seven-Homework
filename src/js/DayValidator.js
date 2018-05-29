class DayValidator extends Validator {
        validate(){
            super.validate();

            if (this.$field.value.length != 2){
                this.errors.push(`Please use the DD format`)
            }

            if (this.$field.value < 1 || this.$field.value > 31){
                this.errors.push(`Your day must be between 1 and 31`)
            }
            if (!this.$field.value.match(/^\d+$/)) {
                this.errors.push(`Please use numbers`)
            }
    
            this.showErrors();
        }
    }