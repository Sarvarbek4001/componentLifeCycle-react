import React from 'react';
import { Context } from '../Context/Theme';

function useTheme() {
	const ctx = React.useContext(Context);

	return [ctx.state, ctx.setState];
}

export default useTheme;
