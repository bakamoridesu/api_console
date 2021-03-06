import React from 'react'
import { connect } from 'react-redux'
import Graphics from "../common/Graphics";
import * as str from '../../utils/strings'
import {_SESSION, handleAuth, handlePong} from "../../utils/api";
import SubmitButton from "../common/SubmitButton";
import Joi from '@hapi/joi'
import Form from "../common/Form";
import SmileIcon from "../common/Icons/SmileIcon";
import {_ACCOUNT, _SUBLOGIN} from "../../actions/session";


class AuthForm extends Form {
  state = {
    info: {
      login: '',
      sublogin: '',
      password: '',
    },
    valErrors: {},
    loading: false,
    validated: false,
  }

  // set rules for full validation
  // login: email OR alphanumeric+spaces
  // password: alphanumeric+spaces
  rules = {
    login: Joi.string()
      .pattern(new RegExp(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*|^[\w_]+$/))
      .required(),
    password: Joi.string()
      .min(8)
      .pattern(new RegExp(/^[\w\s]+$/))
      .required(),
  }

  // set full schema and schema for checking empty fields
  schema = Joi.object({
    login: this.rules.login,
    password: this.rules.password,
  })
  schemaEmpty = Joi.object({
    login: Joi.string().required(),
    password: Joi.string().required(),
  })

  doSubmit = (e) => {
    // set loading state, clear error message
    this.setState((prevState) => {
      return {
        loading: !prevState.loading,
        error: null,
      }
    })
    e.currentTarget.blur()
    // send auth request
    // if succeed, save session to local storage
    // if failed, display error block.

    handleAuth(this.state.info)
      .then(res => {
        sessionStorage.setItem(_SESSION, res.list['about.id'])
        const { state } = this.props.location
        const route = state? (state.from ? state.from: '/') : '/'
        this.props.history.push(route)
      })
      .catch(res => {
        let error
        if (res['id']) error = JSON.stringify({id: res['id'], explain: res['explain']})
        else error = (res.toString())
        this.setState({
          loading: false,
          error,
        })
      })
  }

  errorBlock = () => {
    return (
      <div className='error-block'>
        <div className='error-block__header'>
          <SmileIcon/>
          <span className='error-block__description'>Вход не вышел</span>
        </div>
        <div className='error-block__content'>
          {this.state.error}
        </div>
      </div>
    )
  }

  // input fields are only needed for forms, so they go to form template

  // button and graphics are also needed for main form,
  // so they are made as separate components
  render() {
    const {error, loading} = this.state
    return (
      <div className="auth">
        <Graphics/>
        <form className="auth-form">
          <legend className='auth-form__legend'>{str.legend}</legend>
          {error && this.errorBlock()}
          {this.inputField('login', true)}
          {this.inputField('sublogin', null, str.optional)}
          {this.inputField('password', null, null, 'password')}
          <div className='submit_auth'>
            <SubmitButton disabled={this.validateEmpty()} loading={loading} onSubmit={(e) => this.handleSubmit(e)}
                          value={str.enter}/>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(AuthForm)