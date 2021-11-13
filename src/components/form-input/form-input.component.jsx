import React from 'react'
import { FormInputContainer, FormInputInput, FormInputLabel } from './form-input.styles'

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <FormInputContainer>
            <FormInputInput onChange={handleChange} {...otherProps}/>
            {
                label ? 
                (<FormInputLabel>
                    {label}
                </FormInputLabel>)
                :
                null
            }
        </FormInputContainer>
    )
}

export default FormInput
