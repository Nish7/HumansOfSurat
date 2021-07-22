/* eslint-disable react/display-name */
import Meta from '@/components/Layout/Meta';
import BodyText from '@/components/Typography/BodyText';
import Heading1 from '@/components/Typography/Heading-1';
import fetcher from '@/utils/fetcher';
import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import { format } from 'date-fns';
import React from 'react';
import ReactMarkdown from 'react-markdown';

function StoryPost({ story, url }) {
	const { title, published_at, previewQuote, author, body, image } = story;
	const opacity = useColorModeValue(0.7, 0.3);

	// TODO: The host will be changed in prod image

	return (
		<>
			<Meta
				title={title}
				image={image.url}
				desc={previewQuote}
				url={url}
				type='article'
			/>

			<Box mx='auto' w={['90%', '90%', '55%']} my={15}>
				{/* Main */}
				<Image
					src={image.url}
					alt='StoryImage'
					mx='auto'
					boxShadow='2xl'
					borderRadius={10}
					maxHeight='500px'
					pos='relative'
					top={10}
					zIndex={-1}
				/>
				<Heading1
					mb={10}
					p={5}
					borderRadius={10}
					bg={`rgba(240,240,240,${opacity})`}
					d='inline-block'>
					{title}
				</Heading1>
				<ReactMarkdown
					disallowedElements={['h1,h2,h3,h4,h5,h6']}
					components={{
						p: (node) => (
							<BodyText mb={5} fontSize='lg' lineHeight={1.7}>
								{node.children[0]}
							</BodyText>
						),
					}}>
					{body}
				</ReactMarkdown>

				{/* Author and Date */}
				<BodyText
					align='center'
					mx='auto'
					my={10}
					color='gray.500'
					fontWeight='bold'>
					{format(new Date(published_at), 'do MMMM Y')} •{' '}
					{author?.fullName ?? 'Anonymous'}
				</BodyText>
			</Box>
		</>
	);
}

export async function getStaticPaths() {
	const [stories] = await fetcher(['/stories']);
	const slugs = stories.map((s) => ({ params: { post: s.slug } }));

	return {
		paths: slugs,
		fallback: 'blocking',
	};
}

export async function getStaticProps({ params }) {
	const { post: slug } = params;

	const [story] = await fetcher([`/stories?slug_eq=${slug}`]);
	return {
		props: {
			story: story[0],
			url: `${process.env.FRONTEND_URL}/story/${slug}`,
		},
		revalidate: 1,
	};
}

export default StoryPost;
