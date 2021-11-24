import React, {useState} from 'react';
import FormInput from '../../components/form-input/form-input.component';
import './contact.styles';
import { ContactContainer, ContactForm, FormWrapper, FormTextarea, FormContactButton } from './contact.styles';

const ContactPage = () => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });
    const {email, name} = userCredentials;

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({...userCredentials, [name]: value });
    }

    return (
        <ContactContainer>
            <ContactForm>
                <FormWrapper>
                    <FormInput 
                        name='name' 
                        type="name" 
                        value={name} 
                        handleChange={handleChange}
                        label='Your name'
                        required 
                    />
                    <FormInput 
                        name='email' 
                        type="email" 
                        value={email} 
                        handleChange={handleChange}
                        label='Your email'
                        required 
                    />
                    <FormTextarea placeholder='Your message'></FormTextarea>
                    <FormContactButton>SEND MESSAGE</FormContactButton>
                </FormWrapper>
            </ContactForm>
        </ContactContainer>
    )
}

export default ContactPage
