import styles from "../styles/Home.module.scss";
import { Link, useParams } from "react-router-dom";
import Post from "./Post/[id]";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { FaUserAlt } from 'react-icons/fa';

export default function Home() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);

			const data = await res.json();

			setPosts(data);
		};
		fetchPosts();
	}, []);

	return (
		<div>
			<ul className={styles.ul}>
				{posts.map((post, index) => (
					<Link to={`Post/${post.id}`} key={index} state={post}>
						<li className={styles.li}>
							<div className={styles.user}><FaUserAlt className={styles.faUser}/></div>
							<p>
							{post.title}
							</p>
							
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
}
