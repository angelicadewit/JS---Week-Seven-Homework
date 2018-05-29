class EmailValidator extends Validator {
/*
//   constructor(selector){
//       super(selector); // call constructor in Validator()
//       console.log('constructor from EmailValidator')
// we dont really need the constructor. it doesnt do
//anything different from the parent class. 
//the keynote is to check for SUPER() to bring in

// extends acts like SASS @extend
// need super() so that it still brings the previous class
  */
    validate(){
        super.validate();

        if (!this.$field.value.includes('@')){
            this.errors.push(`You must include an @ sign`)
        }
        if (!this.$field.value.includes('.')){
            this.errors.push(`You must include an . sign`)
        }

        this.showErrors();
    }
}