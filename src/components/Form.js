import React from 'react'; 

const Form = props => (
    <div>
        <form className='form-block' onSubmit={props.countryMethod}>
            <input className='form-input' type='text' name='city'/>
            <button className='form-button'>Ввести страну</button>
        </form>
        <p className='error-text'>{props.error}</p>
    </div>
    
)

export default Form;