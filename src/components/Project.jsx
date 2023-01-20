const Project = ({ mobilePicture, largePicture, name }) => {
	return (
		<div>
			<picture>
				<source media="(min-width:990px)" srcSet={`${largePicture} 2x`} />
				<source srcSet={`${mobilePicture} 2x`} />
				<img src={mobilePicture} alt="Portfolio project" />
			</picture>
			<h3>{name}</h3>
		</div>
	);
};

export default Project;
