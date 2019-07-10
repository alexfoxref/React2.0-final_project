import React, {Component} from "react";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Formik } from "formik";
import BasicFormSchema from "../basic-form-schema";
import InputMask from 'react-input-mask';
import WithCoffeeService from '../hoc';
import {connect} from 'react-redux';
import {postContacts, toggleSuccess} from '../../actions';

const mask = '+7 (999) 999 99 99';

const PhoneInput = (props) => {  
      return <InputMask style={{padding:'6px 12px'}} {...props} mask={mask} maskChar=" " />;
};

class ContactForm extends Component {
    
    render() {
        const {postContacts, CoffeeService, toggleSuccess} = this.props;
        let hidden = 'none';

        return (
            <Formik
                initialValues={{ 
                    name: '',
                    email: '',
                    phone: '',
                    text: ''    
                }}
                validationSchema={BasicFormSchema} 
                onSubmit={(values, { setSubmitting }) => {
                        postContacts(values, CoffeeService);
                        setSubmitting(false);
                        hidden = 'none';
                        toggleSuccess(true);
                    }
                }>
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleSubmit,
                            handleBlur,
                        } = props;

                        return (
                            <Form   
                                onSubmit={handleSubmit}
                                className="form">

                                    <FormGroup className="form__row">
                                        <Label className="form__label" for="name">
                                            Name<span style={{color:'red'}}>*</span>
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder=""
                                            type="text"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.name && touched.name ? 'text-input text-input__error' : 'text-input'} />
                                        {errors.name && touched.name && (
                                        <div className="input-feedback">{errors.name}</div>
                                        )}
                                    </FormGroup>

                                    <FormGroup className="form__row">
                                        <Label className="form__label" for="email">
                                            Email<span style={{color:'red'}}>*</span>
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            placeholder=""
                                            type="text"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.email && touched.email ? 'text-input text-input__error' : 'text-input'} />
                                        {errors.email && touched.email && (
                                        <div className="input-feedback" style={{color:'red'}}>{errors.email}</div>
                                        )}
                                    </FormGroup>

                                    <FormGroup className="form__row">
                                        <Label className="form__label" for="phone">
                                            Phone
                                        </Label>
                                        <PhoneInput
                                            id="phone"
                                            name="phone"
                                            placeholder="+7 (___) ___ __ __"
                                            type="text"
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.phone && touched.phone ? 'text-input text-input__error' : 'text-input'} />
                                        {errors.phone && touched.phone && (
                                        <div className="input-feedback" style={{color:'red'}}>{errors.phone}</div>
                                        )}
                                    </FormGroup>

                                    <FormGroup className="form__text-block">
                                        <Label className="form__label" for="text">
                                            Your message<span style={{color:'red'}}>*</span>
                                        </Label>
                                        <Input
                                            id="text"
                                            name="text"
                                            placeholder="Tell us..."
                                            type="textarea"
                                            value={values.text}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={errors.text && touched.text ? 'text-input text-input__error' : 'text-input'} />
                                        {errors.text && touched.text && (
                                        <div className="input-feedback" style={{color:'red'}}>{errors.text}</div>
                                        )}
                                    </FormGroup>
                                
                                    <button 
                                        onClick={() => {
                                            const {name, email, text} = touched;
                                            if ((name && errors.name) || (email && errors.email) || (text && errors.text) || !name || !email || !text) {
                                                hidden = 'block';
                                            }
                                        }} 
                                        className="form__btn" 
                                        type="submit" 
                                        disabled={isSubmitting}>
                                            Send us
                                    </button>

                                    <div className="form__error-message" style={{display:`${hidden}`}}>
                                        Please fill in all required fields
                                    </div>
                            </Form>
                        );
                    }}
                </Formik>
        )
    }
}

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = {
    postContacts,
    toggleSuccess
}

export default WithCoffeeService()(connect(mapStateToProps, mapDispatchToProps)(ContactForm));