import Project from './Project';
import styles from './projects.module.scss';
import mobilePicture from '../assets/images/thumbnail-project-1-small.webp';
import mobilePicture2 from '../assets/images/thumbnail-project-2-small.webp';
import mobilePicture3 from '../assets/images/thumbnail-project-3-small.webp';
import mobilePicture4 from '../assets/images/thumbnail-project-4-small.webp';
import mobilePicture5 from '../assets/images/thumbnail-project-5-small.webp';
import mobilePicture6 from '../assets/images/thumbnail-project-6-small.webp';
import largePicture from '../assets/images/thumbnail-project-1-large.webp';
import largePicture2 from '../assets/images/thumbnail-project-2-large.webp';
import largePicture3 from '../assets/images/thumbnail-project-3-large.webp';
import largePicture4 from '../assets/images/thumbnail-project-4-large.webp';
import largePicture5 from '../assets/images/thumbnail-project-5-large.webp';
import largePicture6 from '../assets/images/thumbnail-project-6-large.webp';

const Projects = () => {
	return (
		<div className={styles.projects}>
			<Project
				mobilePicture={mobilePicture}
				largePicture={largePicture}
				name={'Design Portfolio'}
			/>
			<Project
				mobilePicture={mobilePicture2}
				largePicture={largePicture2}
				name={'Design Portfolio'}
			/>
			<Project
				mobilePicture={mobilePicture3}
				largePicture={largePicture3}
				name={'Design Portfolio'}
			/>
			<Project
				mobilePicture={mobilePicture4}
				largePicture={largePicture4}
				name={'Design Portfolio'}
			/>
			<Project
				mobilePicture={mobilePicture5}
				largePicture={largePicture5}
				name={'Design Portfolio'}
			/>
			<Project
				mobilePicture={mobilePicture6}
				largePicture={largePicture6}
				name={'Design Portfolio'}
			/>
		</div>
	);
};

export default Projects;
