import { Text } from '@chakra-ui/react';

function BodyText({ children, ...props }) {
	return (
		<div>
			<Text as='p' textStyle='body' {...props}>
				{children}
			</Text>
		</div>
	);
}

export default BodyText;
