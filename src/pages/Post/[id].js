import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../../styles/Post.module.scss";
import SinglePost from "../../components/SinglePost";
import Comments from "../../components/Comments";

import { useLocation } from "react-router-dom";

export default function Post() {
	const { id } = useParams();
	const [commentId, setCommentId] = useState();
	const [post, setPost] = useState(false);
	const location = useLocation();

	const fetchPost = async () => {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);
		const data = await res.json();
		setPost(data);
	};

	const fetchComments = async () => {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}/comments`
		);
		const data = await res.json();
		setCommentId(data);
	};

	useEffect(() => {
		if (!location.state) {
			fetchPost();
		} else {
			setPost(location.state);
		}
		fetchComments();
	}, []);

	return (
		<div className={styles.container}>
			<Link to="/">
				<button className={styles.button}>Go Back</button>
			</Link>
			{post ? (
				<div>
					{post && <SinglePost {...post} />}
					{commentId && (
						<ul>
							{commentId.map((comment, index) => (
								<Comments key={index} {...comment} />
							))}
						</ul>
					)}
				</div>
			) : (
				<p>...loading </p>
			)}
		</div>
	);
}
