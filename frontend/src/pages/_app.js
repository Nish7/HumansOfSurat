import { Chakra } from '@/components/chakra.js';
import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';
import '@/theme/glob.css';

export default function App({ Component, pageProps }) {
	return (
		<Chakra>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</Chakra>
	);
}

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from '@/components/chakra.js';
