import { useState, useEffect } from 'react';
import NewsElement from './NewsElement';
import axios from 'axios';

const NewsCatalogue = () => {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		// to fetch articles from newsapi
		const getArticles = async () => {
			const response = await axios.get(
				'https://newsapi.org/v2/everything?q=Apple&from=2024-03-08&sortBy=popularity&apiKey=f7451f30e4d44db38689cac7a419fc78'
			);
			setArticles(response.data.articles);
			// print the data
			console.log(response);
		};
		getArticles();
	}, []);
	return (
		<div>
			{articles.map(article => {
				return <NewsElement></NewsElement>;
			})}
		</div>
	);
};

export default NewsCatalogue;
