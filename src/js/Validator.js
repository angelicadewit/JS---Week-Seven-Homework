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

       this.$field.classList.toggle("not-valid", true)
        if (!this.$field.value){
            let $p = document.createElement("p")
            this.errors.push(`You must fill out the ` + this.$field.name + ` field`)
        } else {
            this.errors.pop(`You must fill out the ` + this.$field.name + ` field`)
        }

        //this is a hack
        // putting a settimeout will run after everything 
        setTimeout(this.showErrors.bind(this), 0)
    }


    showErrors(){
        if (this.errors.length) {
            this.$errorContainer.innerHTML = "";
            this.errors.forEach((error) => {
                // this.$errorContainer.innerHTML += "<p>" + error + "</p>"
                let $p = document.createElement("p")
                $p.innerHTML +=  error
                this.$errorContainer.appendChild($p)
                this.$field.removeAttribute("style")
                this.$field.style.borderColor = `red`
                setTimeout(this.showErrors.bind(this), 0)
            })
       } else {
            // this.$field.classList.remove("not-valid")
            this.$field.removeAttribute("style")
            this.$field.style.borderColor = `green`
            this.$errorContainer.innerHTML = "";
       }
    }
}