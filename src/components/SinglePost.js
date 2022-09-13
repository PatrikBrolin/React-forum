import styles from '../styles/Post.module.scss'

export default function SinglePost({ title, body }) {
	return (
		<div className={styles.post}>
			<h1>{title}</h1>
			<h3>{body}</h3>
		</div>
	);
}
