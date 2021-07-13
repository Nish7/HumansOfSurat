import axios from 'axios';

import Meta from '@/components/Layout/Meta';
import BodyText from '@/components/Typography/BodyText';
import Title from '@/components/Typography/Title';
import Landing from '@/components/Layout/Landing';
import LatestStories from '@/components/Stories/LatestStories';

export default function Home({ url, stories }) {
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
					A small town, yet so many stories...
				</BodyText>

				<Title align='center'>
					Humans of <br />
					Surat
				</Title>
			</Landing>

			{/* Latest Stories */}
			<LatestStories stories={stories} />
		</>
	);
}

export async function getStaticProps() {
	let url = process.env.FRONTEND_URL;

	// ?note: Change to the request to 6 stories only
	let res = await axios.get(
		`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/stories`,
	);

	const stories = res.data;
	return { props: { url, stories } };
}
