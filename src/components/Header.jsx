import profile from '../assets/images/image-profile-mobile.webp';
import profileTablet from '../assets/images/image-profile-tablet.webp';
import profileDesktop from '../assets/images/image-profile-desktop.webp';
import styles from './header.module.scss';

const Header = () => {
	return (
		<header className={styles.wrapper}>
			<div className={styles.heading}>
				<p className="h3">mateszucs</p>
				<ul className={styles.heading__icons}>
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

			<picture className={styles.profileContainer}>
				<source media="(min-width:990px)" srcSet={`${profileDesktop} 2x`} />
				<source media="(min-width:600px)" srcSet={`${profileTablet} 2x`} />
				<source srcSet={`${profile} 2x`} />
				<img src={profile} alt="Profile picture " />
			</picture>

			<div className="heading__body">
				<h1>
					Nice to meet you! I&apos;m
					<span className="underline"> Mate Szucs</span>
				</h1>
				<p>
					Based in the UK, I&apos;m a front-end developer passionate about
					building accessible web apps that users love.
				</p>
				<a href="#">Contact me</a>
			</div>
		</header>
	);
};

export default Header;
