/* eslint-disable react/display-name */
import React from 'react';
import fetcher from '@/utils/fetcher';
import Meta from '@/components/Layout/Meta';
import Heading1 from '@/components/Typography/Heading-1';
import BodyText from '@/components/Typography/BodyText';
import ReactMarkdown from 'react-markdown';
import { Box, Flex, Image, VStack } from '@chakra-ui/react';
import Heading2 from '@/components/Typography/Heading-2';
import Tags from '@/components/Lib/Tags';
import { format } from 'date-fns';

function ArticlePost({ article, url }) {
	// TODO: Change post param/query to postSlug (or something)

	const { title, published_at, readingTime, previewQuote, tags, author, body } =
		article;

	return (
		<Box w='90%' mx='auto'>
			<Meta
				title={title}
				desc={previewQuote}
				url={url}
				type='article'
				article={article}
			/>

			<Heading1 my={20}>{title}</Heading1>

			<Flex justify='center' alignItems='flex-start' h='auto'>
				<ArticleSidebar
					published_at={published_at}
					author={author.fullName}
					readingTime={readingTime}
					tags={tags}
				/>
				<ArticleBody body={body} />
			</Flex>
		</Box>
	);
}

export async function getStaticPaths() {
	const [articles] = await fetcher(['/articles']);

	const slugs = articles.map((a) => ({
		params: { post: a.slug },
	}));

	return {
		paths: slugs,
		fallback: 'blocking',
	};
}

export async function getStaticProps({ params }) {
	const { post: slug } = params;
	const [article] = await fetcher([`/articles?slug_eq=${slug}`]);

	if (!article || article.length === 0) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			article: article[0],
			url: `${process.env.FRONTEND_URL}/article/${slug}`,
		},
		revalidate: 60,
	};
}

function ArticleBody({ body }) {
	return (
		<Box w='80%' mx='auto'>
			<ReactMarkdown
				disallowedElements={['h1,h2,h3,h4,h5,h6']}
				components={{
					img: (node) => {
						return (
							<Image
								my={10}
								// TODO: The host will be changed in prod
								src={`http://localhost:1337${node.src}`}
								maxWidth={['250px', '250px', '500px']}
								mx='auto'
								alt=''
							/>
						);
					},
					p: (node) => <BodyText lineHeight={1.7}>{node.children[0]}</BodyText>,
				}}>
				{body}
			</ReactMarkdown>
		</Box>
	);
}

function ArticleSidebar({ published_at, author, tags, readingTime }) {
	return (
		<Box
			w='20%'
			pt={5}
			alignSelf='flex-start'
			top={0}
			height='auto'
			position='sticky'>
			<BodyText>Written By:</BodyText>
			<BodyText fontWeight='bold' mt={1}>
				{author ?? 'Anonymous'}
			</BodyText>

			<BodyText mt={4} color='gray.600'>
				{format(new Date(published_at), 'dd MMMM, Y')}
			</BodyText>

			<BodyText mt={4}>{readingTime} Min Read</BodyText>

			<Tags mt={5} tags={tags} />
		</Box>
	);
}

export default ArticlePost;
