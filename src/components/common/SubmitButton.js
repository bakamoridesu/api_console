import React from "react";

export default function SubmitButton({onSubmit, loading, value, disabled}) {

  let divs = []
  for (let i = 0; i < 9; i++) divs.push(<div key={i}/>)

  return (
    <div className='form_submit'>
      <button disabled={disabled} className='button_submit' onClick={onSubmit}>
        {loading && (<div className='loader'>
          {divs}
        </div>)}
        {!loading && value}
      </button>
    </div>
  )
}
