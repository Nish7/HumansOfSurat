import Meta from '@/components/Layout/Meta';
import BodyText from '@/components/Typography/BodyText';
import Title from '@/components/Typography/Title';
import Landing from '@/components/Layout/Landing';

export default function Home({ url }) {
	return (
		<>
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
		</>
	);
}

export async function getStaticProps() {
	let url = process.env.FRONTEND_URL;
	return { props: { url } };
}
