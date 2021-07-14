import axios from 'axios';

import Meta from '@/components/Layout/Meta';
import BodyText from '@/components/Typography/BodyText';
import Title from '@/components/Typography/Title';
import Landing from '@/components/Layout/Landing';
import LatestStories from '@/components/Stories/LatestStories';
import SeriesCard from '@/components/Series/SeriesCard';
import Heading1 from '@/components/Typography/Heading-1';

export default function Home({
	url,
	initialStories = [],
	homeInfo: { header, subtitle },
	latestSeries,
}) {
	return (
		<>
			{/* Landing Section */}
			<Landing>
				<Meta title='Index' desc='Description is dope' url={url} />

				<BodyText
					fontFamily='HKGrotesk-BoldLegacy'
					align='center'
					color='gray.500'
					mb={[2, 0]}>
					{subtitle}
				</BodyText>

				<Title align='center'>
					Humans of <br /> Surat
				</Title>
			</Landing>

			{/* Latest Stories */}
			<LatestStories initialStories={initialStories} />

			{/* Latest Series */}
			<Heading1 my={12} align='center'>
				Latest Series
			</Heading1>
			<SeriesCard series={latestSeries} />
		</>
	);
}

export async function getStaticProps() {
	let url = process.env.FRONTEND_URL;

	// TODO Prevent Waterfall Effect :: Use promise.all :: How to assign vars.
	let storyReq = await axios.get(
		`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/stories?_sort=created_at:desc&_limit=6`,
	);
	let homeReq = await axios.get(
		`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/home-page`,
	);
	let seriesReq = await axios.get(
		`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/series?_sort=created_at:desc&_limit=1`,
	);

	const initialStories = storyReq.data;
	const homeInfo = homeReq.data;
	const latestSeries = seriesReq.data[0];

	return { props: { url, initialStories, homeInfo, latestSeries } };
}
