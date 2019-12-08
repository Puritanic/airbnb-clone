import React, { FC } from 'react';
import { RegisterController } from '@abb/controller';

import RegisterView from './view/RegisterView';

// container -> view
// container -> connector -> view
// controller -> connector -> view

export interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
	return (
		<section>
			<RegisterController>
				{({ submit }) => <RegisterView submit={submit} />}
			</RegisterController>
		</section>
	);
};

export default Register;
