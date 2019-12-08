import React, { Component } from 'react';
import { Form as AntForm, Icon, Input, Button } from 'antd';
import { FormikErrors, withFormik, FormikProps, Field, Form } from 'formik';
import { userValidationSchema } from '@abb/common';

import { InputField } from '../../shared/InputField';

interface FormValues {
	email: string;
	password: string;
}

interface RegisterViewProps {
	submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

export class RegisterView extends Component<FormikProps<FormValues> & RegisterViewProps> {
	render() {
		return (
			<Form style={{ width: '300px', margin: '15rem auto', textAlign: 'center' }}>
				<Field
					name='email'
					prefix={(<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />) as any}
					placeholder='Email'
					component={InputField}
				/>
				<Field
					name='password'
					type='password'
					prefix={(<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />) as any}
					placeholder='Password'
					component={InputField}
				/>
				<AntForm.Item>
					<div>
						<a className='login-form-forgot' href='#'>
							Forgot password
						</a>
					</div>
					<div>
						<Button type='primary' htmlType='submit' className='login-form-button'>
							Register
						</Button>
					</div>
					<div>
						<p>
							Or <a href='#'>Login now!</a>
						</p>
					</div>
				</AntForm.Item>
			</Form>
		);
	}
}

export default withFormik<RegisterViewProps, FormValues>({
	validationSchema: userValidationSchema,
	mapPropsToValues: () => ({ email: '', password: '' }),
	handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
		const errors = await props.submit(values);

		if (errors) {
			setErrors(errors);
		}
	},
})(RegisterView);
