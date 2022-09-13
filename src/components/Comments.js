import styles from '../styles/Post.module.scss'

export default function Comments({name, email, body}){
  
return(
  <li className={styles.comments}>
    <p>{name}</p>
    <p>{email}</p>
    <p>{body}</p>
  </li>
);
}