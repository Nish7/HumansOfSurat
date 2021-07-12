import { Text } from '@chakra-ui/react';

function Heading2({ children, ...props }) {
	return (
		<div>
			<Text as='h3' textStyle='header-2' {...props}>
				{children}
			</Text>
		</div>
	);
}

export default Heading2;
