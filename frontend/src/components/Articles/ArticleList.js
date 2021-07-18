import { useCallback, useMemo } from 'react';
import YearSection from '@/components/Articles/YearSection';

function ArticleList({ articles }) {
	const categoriseArticles = useCallback((articles) => {
		return articles.reduce((acc, val) => {
			const year = new Date(val['published_at']).getFullYear().toString();
			acc[year] = acc[year] || [];
			acc[year].push(val);
			return acc;
		}, {});
	}, []);

	const articlesByYear = useMemo(
		() => categoriseArticles(articles),
		[articles, categoriseArticles],
	);

	return (
		<>
			{Object.keys(articlesByYear).map((y) => (
				<YearSection key={y} year={y} articles={articlesByYear[y]} />
			))}
		</>
	);
}

export default ArticleList;
