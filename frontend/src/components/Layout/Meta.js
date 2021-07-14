import Head from 'next/head';

// TODO Future update to next-seo library

export default function Meta({
	title,
	desc = '',
	image = '',
	url,
	type = 'website',
	article,
}) {
	return (
		<Head>
			{/* <!-- Primary Meta Tags --> */}
			<title>{title} | Humans of Surat</title>
			<meta name='title' content={`${title} | Humans of Surat`} />
			<meta name='description' content={desc} />

			{/* Robots */}
			<meta content='follow, index' name='robots' />

			{/* Theme Colors */}
			<meta
				name='theme-color'
				media='(prefers-color-scheme: light)'
				content='#fff'
			/>
			<meta
				name='theme-color'
				media='(prefers-color-scheme: dark)'
				content='#000'
			/>

			{/* Char-set and IE compatibility*/}
			<meta charSet='utf-8' />
			<meta content='IE=edge' httpEquiv='X-UA-Compatible' />

			{/* Favicons */}
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='favicons/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='favicons/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='favicons/favicon-16x16.png'
			/>
			<link rel='manifest' href='favicons/site.webmanifest' />
			<link
				rel='mask-icon'
				href='favicons/safari-pinned-tab.svg'
				color='#444444'
			/>

			{/* Viewport */}
			<meta content='width=device-width, initial-scale=1' name='viewport' />

			{/* <!--  Open Graph / Facebook --> */}
			<meta property='og:type' content={type} />
			<meta property='og:url' content={url} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={desc} />
			<meta property='og:image' content={image} />

			{/* <!-- Twitter --> */}
			<meta property='twitter:card' content='summary_large_image' />
			<meta property='twitter:url' content={url} />
			<meta property='twitter:title' content={title} />
			<meta property='twitter:description' content={desc} />
			<meta property='twitter:image' content={image} />
			<meta name='twitter:site' content='@humans_of_surat' />

			{/* Article Tags */}
			{article && (
				<>
					<meta
						content={article?.published_time}
						property='article:published_time'
					/>
					<meta content={article?.tags} property='article:tag' />
					<meta content={article?.author} property='article:author' />
					<meta content={article?.section} property='article:section' />
				</>
			)}
		</Head>
	);
}
