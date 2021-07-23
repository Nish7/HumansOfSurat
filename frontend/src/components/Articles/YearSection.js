import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import BodyText from '../Typography/BodyText';
import ArticleBox from './ArticleBox';

function YearSection({ year, articles }) {
	return (
		<YearContainer year={year}>
			<Flex w={['70%', '100%', '80%']} flexWrap='wrap' mx={[2, 'auto']}>
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
			<Box
				position={['relative', 'relative', 'absolute']}
				w='100%'
				top={[0, 0, '-200px']}
				opacity={['0.3', '0.3', '0.08']}
				zIndex='-1'
				// display={['none', 'none', 'block']}
			>
				<BodyText
					fontFamily='black'
					letterSpacing={20}
					fontSize={['5xl', '7xl', '26rem']}
					fontWeight='bold'
					mb={[5, 5, 0]}
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
