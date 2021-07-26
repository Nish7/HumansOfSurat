import Title from '@/components/Typography/Title';
import Meta from '@/components/Layout/Meta';
import fetcher from '@/utils/fetcher';
import Heading2 from '@/components/Typography/Heading-2';
import ArticleList from '@/components/Articles/ArticleList';
import { VStack } from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';
import TransitionGroup from 'react-transition-group/TransitionGroup';

function ArticleIndex({ url, desc, articles }) {
	return (
		<>
			{/* Meta */}
			<Meta title='Articles' desc={desc} url={url} />

			{/* Info */}
			<VStack h={['70vh', '70vh', '91vh']} justify='center' align='center'>
				<Fade duration={2000}>
					<Title fontFamily='black' letterSpacing={2} mb={10}>
						Articles.
					</Title>
				</Fade>

				<Heading2
					w={['90%', '80%', '80%']}
					align='center'
					maxWidth='900px'
					fontFamily='body'
					fontWeight='500'
					fontSize={['md', 'lg', 'xl']}
					mx='auto'
					// py={20}
					lineHeight={1.5}>
					{desc}
				</Heading2>
			</VStack>

			{/* Filter */}

			{/* Article List */}
			<TransitionGroup>
				<ArticleList articles={articles} />
			</TransitionGroup>
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
		revalidate: 1,
	};
}

export default ArticleIndex;
