import { Flex, Box } from '@chakra-ui/layout';
import BodyText from '../Typography/BodyText';
import Heading2 from '../Typography/Heading-2';
import { useColorModeValue } from '@chakra-ui/system';
import Link from 'next/link';

function SeriesCard({ series, idx = 0 }) {
	const { title, PreviewImage, slug } = series;

	// TODO image Url will be changes in Prod (as image will be hosted)
	return (
		<Link passHref href={`/series/${slug}`}>
			<Flex
				bgImage={`url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${PreviewImage.url})`}
				backgroundPosition='center'
				backgroundSize='cover'
				w={['100%', '95%', '80%']}
				h={{ base: 56, md: 96 }}
				borderRadius={20}
				mx='auto'
				my={10}
				justify={`flex-${idx % 2 === 0 ? 'start' : 'end'}`}
				align='center'
				_hover={{ cursor: 'pointer' }}>
				<SeriesInfoBox title={title} />
			</Flex>
		</Link>
	);
}

function SeriesInfoBox({ title }) {
	const bgColor = useColorModeValue('white', 'gray.800');

	return (
		<Box
			bg={bgColor}
			d='inline-block'
			mx={8}
			maxWidth={['90%', '90%', '50%']}
			opacity={{ base: '80%', md: '100%' }}
			borderRadius={10}
			p={[6, 7, 10]}>
			<BodyText
				mb={4}
				textDecoration='1.5px underline'
				sx={{ textUnderlinePosition: 'under' }}>
				Humans of Surat
			</BodyText>
			<Heading2
				fontSize={['2xl', '3xl', '5xl']}
				fontFamily='heading'
				letterSpacing='-1.4px'>
				{title}
			</Heading2>
		</Box>
	);
}

export default SeriesCard;
