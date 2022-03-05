import React from 'react';
import { Context } from '../Context/Language';

function useLanguage() {
	const ctx = React.useContext(Context);
	return [ctx.state, ctx.setState];
}

export default useLanguage;
