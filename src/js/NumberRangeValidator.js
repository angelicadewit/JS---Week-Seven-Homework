class NumberRangeValidator extends Validator {

    constructor(selector, min, max){
        super(selector);
        this.min = min;
        this.max = max;
    }
    validate(){
        super.validate();

        let numericValue = parseFloat(this.$field.value);
        if (isNaN(numericValue)){
            this.errors.push(`must be a number`);
        } 
        if (numericValue > this.max){
            this.errors.push(`Number must not be greater than ${this.max}`)
        }
        if (numericValue < this.min){
            this.errors.push(`Number must not be greater than ${this.min}`)
        }
    }
}