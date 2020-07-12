import React, { Component } from 'react'
import * as str from "../../utils/strings";
import Joi from '@hapi/joi'

// reusable form component (in order we'll need other forms)
class Form extends Component {

  state = {
    info: {},
    valErrors: {},
    loading: false,
    error: false,
    validated: false,
  }

  // high-level initial validation
  validateEmpty = () => {
    const options = {abortEarly: false}
    const info = {}
    Object.keys(this.rules).map((rule) => info[rule] = this.state.info[rule])
    const {error} = this.schemaEmpty.validate(info, options)
    if (!error) return null
    const errors = {}
    error.details.map((item) => errors[item.path[0]] = item.type)
    return Object.keys(errors).length === 0 ? null : errors
  }

  // full validation on submit button
  validateForm = () => {
    const options = {abortEarly: false}
    const info = {}
    Object.keys(this.rules).map((rule) => info[rule] = this.state.info[rule])
    const {error} = this.schema.validate(info, options)
    if (!error) return {}
    const errors = {}
    error.details.map((item) => errors[item.path[0]] = item.type)
    return errors
  }

  // get validation error based on Joi message and input type
  getValidationErrorMessage = (msg, type) => {
    return str.getValidationErrorMsg[type] ? str.getValidationErrorMsg[type][msg] : null
  }

  // real-time input validation
  validateInput = ({name, value}) => {
    if (this.rules[name]) {
      const obj = {[name]: value}
      const schema = Joi.object({[name]: this.rules[name]})
      const result = schema.validate(obj)
      if (result.error)
        return result.error.details[0].type
    }
    return null
  }

  handleChange = ({currentTarget: input}) => {
    // if form is validated on submit, start validating on change
    const valErrors = {...this.state.valErrors}
    if(this.state.validated){
      const error = this.validateInput(input)
      if (error) valErrors[input.name] = error
      else delete valErrors[input.name]
    }
    // update state with new input
    const info = this.state.info
    info[input.name] = input.value
    this.setState({
      info,
      valErrors,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    // form validation before sending request
    const valErrors = this.validateForm()
    this.setState({
      valErrors,
      validated: true,
    })
    if (Object.keys(valErrors).length !== 0) return
    // do some other stuff specific to a particular form
    this.doSubmit(e)
  }

  inputField = (name, autofocus=null, optional=null, type='text') => {
    const error = this.getValidationErrorMessage(this.state.valErrors[name], name)
    return (
      <div className="auth_form_group">
        {optional
          ? (
            <div className="auth_form_group_optional">
              <label className='auth_form_label_correct' htmlFor={name}>{str[name]}</label>
              <span className="auth_form_group_optional_label">{optional}</span>
            </div>
          )
          : (
            <label className={error? 'auth_form_label_error' : 'auth_form_label_correct'}   htmlFor={name}>{str[name]}</label>)
        }
        <input className={error? 'auth_form_input_error' : 'auth_form_input'}
               type={type}
               id={name}
               name={name}
               value={this.state.info[name]}
               onChange={this.handleChange}
               autoFocus = {!!autofocus}
        />
        {error && <div className="auth_form_error">{error}</div>}
      </div>
    )
  }
}

export default Form