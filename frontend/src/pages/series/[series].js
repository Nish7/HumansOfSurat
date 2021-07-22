import Meta from '@/components/Layout/Meta';
import SeriesCard from '@/components/Series/SeriesCard';
import BodyText from '@/components/Typography/BodyText';
import Heading2 from '@/components/Typography/Heading-2';
import fetcher from '@/utils/fetcher';
import { Box, Flex, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Masonry from 'react-masonry-css';

function Series({ series, url }) {
	const { title, description, PreviewImage, stories } = series;
	return (
		<>
			<Meta title={title} desc={description} image={PreviewImage.url} />
			<Box mx='auto' w='95%'>
				<SeriesCard series={series} />
				<Heading2
					w={['90%', '80%', '50%']}
					align='center'
					fontFamily='body'
					fontWeight='500'
					fontSize={['lg', 'xl', 'xl']}
					mx='auto'
					py={20}
					lineHeight={1.5}>
					{description}
				</Heading2>
				<Box w={['full', 'full', '80%']} mx='auto'>
					<Masonry
						breakpointCols={{
							default: 3,
							1100: 3,
							700: 2,
							500: 1,
						}}
						className='my-masonry-grid'
						columnClassName='my-masonry-grid_column'>
						{stories.map((s) => (
							<MiniStoryCard
								key={s.id}
								title={s.title}
								image={s.image}
								slug={s.slug}
							/>
						))}
					</Masonry>
				</Box>

				{/* <small>
					<pre>{JSON.stringify(series, null, 2)}</pre>
				</small> */}
			</Box>
		</>
	);
}

function MiniStoryCard({ title, image, slug = '' }) {
	return (
		<Link passHref href={`/story/${slug}`}>
			<Box flexBasis='30%' m={5} _hover={{ cursor: 'pointer' }}>
				<Image
					src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${image.url}`}
					alt='StoryImage'
					width='100%'
					borderRadius={5}
					maxHeight={96}
					mb={3}
				/>
				<Heading2>{title}</Heading2>
			</Box>
		</Link>
	);
}

export async function getStaticPaths() {
	const [series] = await fetcher(['/series']);

	const slugs = series.map((s) => ({
		params: { series: s.slug },
	}));

	return {
		paths: slugs,
		fallback: 'blocking',
	};
}
export async function getStaticProps({ params }) {
	try {
		const { series: slug } = params;
		const [series] = await fetcher([`/series?slug_eq=${slug}`]);

		if (!series || series.length === 0) {
			return {
				notFound: true,
			};
		}

		return {
			props: { series: series[0] },
			revalidate: 1,
		};
	} catch (err) {
		console.log(err);
	}
}

export default Series;
