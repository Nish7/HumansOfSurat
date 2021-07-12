import { Text } from '@chakra-ui/react';

function Heading1({ children, ...props }) {
	return (
		<div>
			<Text as='h2' textStyle='header-1' {...props}>
				{children}
			</Text>
		</div>
	);
}

export default Heading1;
