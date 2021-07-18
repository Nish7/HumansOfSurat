import Meta from '@/components/Layout/Meta';
import BodyText from '@/components/Typography/BodyText';
import Title from '@/components/Typography/Title';
import Landing from '@/components/Layout/Landing';
import LatestStories from '@/components/Stories/LatestStories';
import SeriesCard from '@/components/Series/SeriesCard';
import Heading1 from '@/components/Typography/Heading-1';
import MoreHumans from '@/components/Layout/MoreHumans';
import SocialMedia from '@/components/Layout/SocialMedia';
import fetcher from '@/utils/fetcher';

export default function Home({
	url,
	initialStories = [],
	homeInfo: { header, subtitle },
	latestSeries,
	events,
	about,
	socialMedia,
}) {
	return (
		<>
			{/* Landing Section */}
			<Landing>
				<Meta title='Index' desc='homepage of the humans of surat' url={url} />

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

			{/* More Humans of Surat */}
			<MoreHumans events={events} about={about} />

			{/* Social Media */}
			<SocialMedia social={socialMedia} />
		</>
	);
}

export async function getStaticProps() {
	let url = process.env.FRONTEND_URL;

	const [initialStories, homeInfo, series, about, events, socialMedia] =
		await fetcher([
			'/stories?_sort=created_at:desc&_limit=6',
			'/home-page',
			'/series?_sort=created_at:desc&_limit=1',
			'/about',
			'/events?_sort=datetime:desc&_limit=3',
			'social-media',
		]);

	return {
		props: {
			url,
			initialStories,
			homeInfo,
			latestSeries: series[0],
			about,
			events,
			socialMedia,
		},
	};
}
