import './NewsElement.css';

const NewsElement = ({ title, description, url, urlToImage }) => {
	return (
		<div className='news'>
			<div className='news-element'>
				<img src={urlToImage} alt={urlToImage} className='news-image' />
				<h3>
					<a href={url}>{title}</a>
				</h3>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default NewsElement;
