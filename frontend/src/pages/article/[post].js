import React from 'react';
import fetcher from '@/utils/fetcher';
import Meta from '@/components/Layout/Meta';
import Heading1 from '@/components/Typography/Heading-1';
import { Box, Flex } from '@chakra-ui/react';
import ArticleSidebar from '@/components/Articles/ArticleSidebar';
import ArticleBody from '@/components/Articles/ArticleBody';

function ArticlePost({ article, url }) {
	// TODO: Change post param/query to postSlug (or something)

	const {
		title,
		published_at,
		readingTime,
		previewQuote,
		tags,
		author,
		body,
		previewImage,
	} = article;

	return (
		<>
			<Meta
				title={title}
				desc={previewQuote}
				image={previewImage?.url}
				url={url}
				type='article'
				article={article}
			/>
			<Box w='90%' mx='auto'>
				<Heading1 my={20}>{title}</Heading1>

				<Flex
					justify='space-between'
					flexDir={['column', 'column', 'row']}
					alignItems='flex-start'
					h='auto'>
					<ArticleSidebar
						published_at={published_at}
						author={author?.fullName}
						readingTime={readingTime}
						tags={tags}
					/>
					<ArticleBody body={body} />
				</Flex>
			</Box>
		</>
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
	try {
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
			revalidate: 1,
		};
	} catch (err) {
		return {
			notFound: true,
		};
	}
}

export default ArticlePost;
