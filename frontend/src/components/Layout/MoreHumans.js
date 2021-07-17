import { Box, Flex } from '@chakra-ui/react';
import { format } from 'date-fns';
import React from 'react';
import BodyText from '../Typography/BodyText';
import Heading1 from '../Typography/Heading-1';
import Heading2 from '../Typography/Heading-2';

function MoreHumans({ events, about }) {
	return (
		<Box mt={20}>
			<Heading1 align='center'>More Humans of Surat</Heading1>
			<Flex
				justify='center'
				flexDir={['column', 'column', 'row']}
				align={['center', 'center', 'flex-start']}
				mt={10}
				mx='auto'>
				<Box mx={5} w={{ md: '23%' }}>
					<Heading2 align={['center', 'center', 'left']} mb={5}>
						Upcoming Events
					</Heading2>
					{events.map((event) => (
						<EventCard key={event.id} event={event} />
					))}
				</Box>

				<Box mt={[5, 5, 0]} mx={5} w={{ md: '27%' }}>
					<Heading2 align={['center', 'center', 'left']}>About Us</Heading2>
					<BodyText mt={5} lineHeight={1.4}>
						{about.about}
					</BodyText>
				</Box>
			</Flex>
		</Box>
	);
}

function EventCard({ event }) {
	const { datetime, event: title, venue } = event;

	return (
		<Flex align='center' mb={7}>
			<BodyText fontSize={['xl']} fontWeight='bold' fontFamily='title' mr={5}>
				{format(new Date(datetime), 'do MMM')}
			</BodyText>
			<Box>
				<BodyText
					fontFamily='title'
					fontWeight='semibold'
					fontSize={['xl']}
					mb={1}>
					{title}
				</BodyText>
				<BodyText>{`${format(
					new Date(datetime),
					'h:mm aaa',
				)} @${venue}`}</BodyText>
			</Box>
		</Flex>
	);
}

export default MoreHumans;
