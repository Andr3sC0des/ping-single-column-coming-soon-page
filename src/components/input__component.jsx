import React from "react"

class Input extends React.Component {
    constructor() {
        super()
        this.state = {
            emailRegex: /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]+$/gim,
            emailFlag: false
        }
        this.emptyValidation = this.emptyValidation.bind(this)
    }

    emptyValidation(e) {
        const form = document.querySelector(".form")
        const spanError = document.querySelector(".form__error")
        const emailInput = document.querySelector(".form__input")

        if (this.state.emailFlag) {
            form.submit()
        }else{
            spanError.classList.add("form__error--active")
            emailInput.classList.add("form__input--error")
            if (emailInput.value == ""){
                spanError.innerHTML = "This input cannot be empty"   
            }
            
        }
        e.preventDefault()
    }

    componentDidMount() {
        const emailInput = document.querySelector(".form__input")
        const spanError = document.querySelector(".form__error")

        const validationForm = (e) =>{
            if (e.target.value.match(this.state.emailRegex)) {
                emailInput.classList.remove("form__input--error")
                spanError.classList.remove("form__error--active")
                this.setState({ emailFlag: true })
            } else {
                emailInput.classList.add("form__input--error")
                spanError.classList.add("form__error--active")
                spanError.innerHTML = "Please provide a valid email address"
                this.setState({ emailFlag: false })
            }
        }

        emailInput.addEventListener("keyup", validationForm)
    }

    render() {
        return (
            <>
                <form className="form">
                    <input type="text" className="form__input" placeholder="Your email address" />
                    <span className="form__error">Please provide a valid email address</span>
                    <button onClick={this.emptyValidation} className="form__submit" type="submit">Notify Me</button>
                </form>
            </>
        );
    }
}

export default Input