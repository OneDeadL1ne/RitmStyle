import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface IPost {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export default function PostPage() {
	const [posts, setPosts] = useState<IPost[] | []>([]);
	const route = useNavigate();
	useEffect(() => {
		async function GetPosts() {
			const res = await axios.get<IPost[]>(
				"https://jsonplaceholder.typicode.com/posts?userId=1"
			);

			setPosts(res.data);
			return;
		}
		GetPosts();
	}, []);

	return (
		<div className="text-white grid grid-cols-4">
			{posts.map((post) => (
				<div
					key={post.id}
					className="p-4 border-solid border-foreground border-2 m-4 rounded-xl relative"
				>
					<h1 className="text-[20px] font-bold ">{post.title}</h1>
					<p className="text-[17px] font-light mb-10 text-wrap  ">{post.body}</p>

					<Button
						className="bg-[#018ABE] h-[35px] hover:bg-blue-700 absolute right-3 bottom-3 "
						value={post.id}
						onClick={(x) => {
							route(`/post/${x.currentTarget.value}`);
						}}
					>
						Читать статью
					</Button>
				</div>
			))}
		</div>
	);
}
