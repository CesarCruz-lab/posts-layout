import './style.css';

export function Notify(props) {
	const {
		img,
		title,
		subtitle,
		message
	} = props.data;
	
	return (
		<div className="notify">
			<header className="notify-header">
				<h2 className="notify-header-title">
					<img src={img || '#'} alt={title} /> {title}
				</h2>
				<h5 className="notify-header-subtitle">{subtitle}</h5>
			</header>
			<article className="notify-message">
				<p className="notify-message-p">{message}</p>
			</article>
		</div>
	);
}
