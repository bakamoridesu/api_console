import React from 'react'
import { connect } from 'react-redux'
import Graphics from "../common/Graphics";
import * as str from '../../utils/strings'
import {handleAuth, handlePong} from "../../utils/api";
import SubmitButton from "../common/SubmitButton";
import Joi from '@hapi/joi'
import Form from "../common/Form";
import Smile from "../common/Icons/Smile";
import {_ACCOUNT, _SESSION, _SUBLOGIN} from "../../actions/session";


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
        handlePong()
          .then(res => {
            sessionStorage.setItem(_ACCOUNT, res['account'])
            if(this.state.info.sublogin !== ''){
              sessionStorage.setItem(_SUBLOGIN, res['sublogin'])
            }
          })
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
      <div className='auth_form_error_block'>
        <div className='auth_form_error_block_header'>
          <Smile/>
          <span>Вход не вышел</span>
        </div>
        <div className='auth_form_error_block_content'>
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
        <form className="auth_form">
          <legend>{str.legend}</legend>
          {error && this.errorBlock()}
          {this.inputField('login', true)}
          {this.inputField('sublogin', null, str.optional)}
          {this.inputField('password', null, null, 'password')}
          <SubmitButton disabled={this.validateEmpty()} loading={loading} onSubmit={(e) => this.handleSubmit(e)}
                        value={str.enter}/>
        </form>
      </div>
    )
  }
}

export default connect()(AuthForm)