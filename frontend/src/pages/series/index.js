import SeriesCard from '@/components/Series/SeriesCard';
import fetcher from '@/utils/fetcher';
import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import Meta from '@/components/Layout/Meta';
import Title from '@/components/Typography/Title';
import Heading2 from '@/components/Typography/Heading-2';
import Fade from 'react-reveal/Fade';
import { TransitionGroup } from 'react-transition-group';

function SeriesIndex({ series, desc: { description }, url }) {
	return (
		<>
			<Meta title='Series' desc={description} url={url} />

			<VStack h={['70vh', '70vh', '91vh']} justify='center' align='center'>
				<Fade duration={2000}>
					<Title fontFamily='black' letterSpacing={2} mb={10}>
						Series.
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
					{description}
				</Heading2>
			</VStack>

			<TransitionGroup>
				<Box>
					{series.map((s, i) => (
						<Fade key={s.id} distance='2em' bottom>
							<SeriesCard idx={i} key={s.id} series={s} />
						</Fade>
					))}
				</Box>
			</TransitionGroup>
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
