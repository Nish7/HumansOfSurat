import { Chakra } from '@/components/chakra.js';
import Footer from '@/components/Layout/Footer';

export default function App({ Component, pageProps }) {
	return (
		<Chakra>
			<Component {...pageProps} />
			<Footer />
		</Chakra>
	);
}

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from '@/components/chakra.js';
