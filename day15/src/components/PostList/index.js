import { useEffect, useState } from 'react'
import { db } from '../../config/firebase';
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import PostCard from '../postCard';
function PostList() {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        // getting all post descinding order according to TimeStamp and seting it to posts
        const q = query(
            collection(db, "posts"),
            orderBy("Time", "desc"),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let posts = [];
            QuerySnapshot.forEach((doc) => {
                posts.push({ ...doc.data(), id: doc.id });
            });
            setPost(posts);
        });
        return () => unsubscribe;
    }, [])

    return (
        <div>
            {
                posts?.map((item) => {
                    return (
                        <PostCard key={item.id} data={item} />
                    )
                })
            }
        </div>
    )
}

export default PostList
