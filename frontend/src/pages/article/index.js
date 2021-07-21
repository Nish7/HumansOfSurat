import Title from '@/components/Typography/Title';
import Meta from '@/components/Layout/Meta';
import fetcher from '@/utils/fetcher';
import Heading2 from '@/components/Typography/Heading-2';
import ArticleList from '@/components/Articles/ArticleList';
import { VStack } from '@chakra-ui/react';

function ArticleIndex({ url, desc, articles }) {
	return (
		<>
			{/* Meta */}
			<Meta title='Articles' desc={desc} url={url} />

			{/* Info */}
			<VStack h='91vh' justify='center' align='center'>
				<Title mb={10}>Articles.</Title>
				<Heading2 maxWidth='900px' align='center'>
					{desc}
				</Heading2>
			</VStack>

			{/* Filter */}

			{/* Article List */}
			<ArticleList articles={articles} />
		</>
	);
}

export async function getStaticProps() {
	// TODO: Move this is in client-side then server
	let url = `${process.env.FRONTEND_URL}/article`;
	const [info, articles] = await fetcher([
		'/articles-page',
		'/articles?_sort=created_at:desc',
	]);

	return {
		props: {
			url,
			desc: info.description,
			articles,
		},
	};
}

export default ArticleIndex;
