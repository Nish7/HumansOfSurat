import { HStack } from '@chakra-ui/react';
import BodyText from '../Typography/BodyText';

function Tags({ tags, ...props }) {
	return (
		<HStack spacing={3} {...props}>
			{tags.split(',').map((tag) => (
				<BodyText color='gray.500' key={tag}>
					#{tag.trim()}
				</BodyText>
			))}
		</HStack>
	);
}

export default Tags;
