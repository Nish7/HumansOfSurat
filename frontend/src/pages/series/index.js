import SeriesCard from '@/components/Series/SeriesCard';
import fetcher from '@/utils/fetcher';
import { Box } from '@chakra-ui/react';
import React from 'react';

function SeriesIndex({ series }) {
	return (
		<Box>
			{series.map((s, i) => (
				<SeriesCard idx={i} key={s.id} series={s} />
			))}
		</Box>
	);
}

export async function getStaticProps() {
	try {
		const [series] = await fetcher(['/series']);
		return {
			props: { series },
			revalidate: 1,
		};
	} catch (err) {
		return {
			notFound: true,
		};
	}
}

export default SeriesIndex;
