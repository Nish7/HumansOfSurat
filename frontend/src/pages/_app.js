import { Chakra } from '@/components/chakra.js';
import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';
import Fonts from '@/theme/Fonts';

export default function App({ Component, pageProps }) {
	return (
		<Chakra>
			<Fonts />
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</Chakra>
	);
}

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from '@/components/chakra.js';
