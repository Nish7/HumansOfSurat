/* eslint-disable react/display-name */
import { Box, Image } from '@chakra-ui/react';
import BodyText from '../Typography/BodyText';
import ReactMarkdown from 'react-markdown';

export default function ArticleBody({ body }) {
	return (
		<Box w={['full', '100%', '75%']} mx='auto'>
			<ReactMarkdown
				disallowedElements={['h1,h2,h3,h4,h5,h6']}
				components={{
					img: (node) => (
						<Image
							my={10}
							// TODO: The host will be changed in prod
							src={node.src}
							maxWidth={['250px', '250px', '500px']}
							mx='auto'
							alt=''
						/>
					),

					p: (node) => (
						<BodyText mb={5} lineHeight={1.7}>
							{node.children[0]}
						</BodyText>
					),
				}}>
				{body}
			</ReactMarkdown>
		</Box>
	);
}
