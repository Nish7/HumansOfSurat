import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import BodyText from '../Typography/BodyText';
import ArticleBox from './ArticleBox';

function YearSection({ year, articles }) {
	return (
		<YearContainer year={year}>
			<Flex w={['100%', '100%', '80%']} flexWrap='wrap' mx='auto'>
				{articles.map((article) => (
					<ArticleBox key={article.id} article={article} />
				))}
			</Flex>
		</YearContainer>
	);
}

function YearContainer({ year, children }) {
	return (
		<Box position='relative' mb={52}>
			<Box position='absolute' w='100%' top='-200px' opacity='0.08' zIndex='-1'>
				<BodyText
					fontFamily='black'
					letterSpacing={20}
					fontSize={['26rem']}
					fontWeight='bold'
					color='gray.500'
					align='center'>
					{year}
				</BodyText>
			</Box>

			{children}
		</Box>
	);
}

export default YearSection;
