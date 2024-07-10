import DropdownMenu from "./DropdownMenu";

export default function Headbar() {
	return (
		<div className="h-full flex flex-row items-center">
			<div className="flex-1 text-center">
				<a href="/">Home</a>
			</div>
			<div className="flex-1 text-center">
				<DropdownMenu
					triggerText="Projects"
					items={[
						{ text: "Research Projects", href: "/project/research" },
						{ text: "Personal Projects", href: "/project/personal" },
					]}
				/>
			</div>
			<div className="flex-1 text-center">
				<a href="/startup">Startups</a>
			</div>
			<div className="flex-1 text-center">
				<a href="/blog">Blogs</a>
			</div>
		</div>
	);
}
