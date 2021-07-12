import { Text } from '@chakra-ui/react';

function Title({ children, ...props }) {
	return (
		<div>
			<Text as='h1' textStyle='title' {...props}>
				{children}
			</Text>
		</div>
	);
}

export default Title;
