import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import styles from './featured-projects.module.css';

function renderTags(tags) {
    return (
        <div className={styles.tagContainer}>
            {tags.map((tag) => (
                <div
                    key={tag}
                    className={`${styles.tag} ${styles[`tag-${tag.toLowerCase()}`]}`}
                >
                    {tag}
                </div>
            ))}
        </div>
    );
}


export default function FeaturedProjects({ projects }) {
    return (
        <div className={styles.featuredProjects}>
            <h1>Featured Projects</h1>
            {projects.map((project) => (
                <div key={project.id} className={styles.project}>
                    <img src={project.image} alt={project.title} />
                    <div className={styles.projectDetails}>
                        <h3>{project.title}
                            {renderTags(project.tags)}</h3>
                        <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
                        <div className={styles.projectLinks}>
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                <FiExternalLink /> Demo
                            </a>
                            {' | '}
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <FaGithub /> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}