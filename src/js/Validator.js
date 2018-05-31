class Validator{
    constructor(selector){
        this.$field = document.querySelector(selector);
        if (!this.$field){
            console.warn(`couldn't find selector: `,selector)
            return false;
        }

        //make elements to show errors in
        this.$errorContainer = document.createElement("div");
        this.$errorContainer.classList.add('error-message');
        this.$field.parentElement.appendChild (this.$errorContainer)


        //keep track of the errors
        this.errors = [];

        // add event listener to call this.validate
        // but overrule its _this_ logic, and force its
        // _this_ to be the Validate class instance

        this.$field.addEventListener(`keyup`, this.validate.bind(this))
        this.$field.addEventListener(`blur`, this.validate.bind(this))
    }

    validate(){
       console.log(this.$field.value)

       this.errors = [];

        if (!this.$field.value){
            this.errors.push(`You must fill out ` + this.$field.placeholder.toLowerCase() + ` the field`)
        }

        //this is a hack
        // putting a settimeout will run after everything 
        setTimeout(this.showErrors.bind(this), 0)
    }

    showErrors(){
        if (this.errors.length) {
            this.$field.style.borderColor = `red`;
            this.$errorContainer.innerHTML = "";
            this.errors.forEach((error) => {
                if (!this.$field.parentElement.innerHTML.includes(error)){
                this.$errorContainer.innerHTML += "<p>" + error + "</p>"
                }
            })
       } else {
            this.$field.style.borderColor = `green`;
            this.$errorContainer.innerHTML = "";
       }
    }
}