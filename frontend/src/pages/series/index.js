import SeriesCard from '@/components/Series/SeriesCard';
import fetcher from '@/utils/fetcher';
import { Box } from '@chakra-ui/react';
import React from 'react';
import Meta from '@/components/Layout/Meta';

function SeriesIndex({ series, desc: { description }, url }) {
	return (
		<>
			<Meta title='Series' desc={description} url={url} />

			<Box>
				{series.map((s, i) => (
					<SeriesCard idx={i} key={s.id} series={s} />
				))}
			</Box>
		</>
	);
}

export async function getStaticProps() {
	try {
		const [series, seriesPage] = await fetcher(['/series', '/series-page']);
		return {
			props: {
				series,
				desc: seriesPage,
				url: `${process.env.FRONTEND_URL}/series`,
			},
			revalidate: 1,
		};
	} catch (err) {
		return {
			notFound: true,
		};
	}
}

export default SeriesIndex;
