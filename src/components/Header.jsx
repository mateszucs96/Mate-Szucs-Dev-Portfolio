import profile from '../assets/images/image-profile-mobile.webp';
import profileTablet from '../assets/images/image-profile-tablet.webp';
import profileDesktop from '../assets/images/image-profile-desktop.webp';

const Header = () => {
	return (
		<header className="wrapper">
			<div className="heading">
				<p className="h3">mateszucs</p>
				<ul className="heading__icons">
					<li>
						<a href="#">A</a>
					</li>
					<li>
						<a href="#">B</a>
					</li>
					<li>
						<a href="#">C</a>
					</li>
					<li>
						<a href="#">D</a>
					</li>
					<li>
						<a href="#">E</a>
					</li>
				</ul>
			</div>
			<picture>
				<source media="(min-width:990px)" srcSet={`${profileDesktop} 3x`} />
				<source media="(min-width:600px)" srcSet={`${profileTablet} 2x`} />
				<img src={profile} alt="Profile picture" />
			</picture>
		</header>
	);
};

export default Header;
