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
						{ text: "Research Projects", href: "/item2" },
						{ text: "Personal Projects", href: "/item3" },
						{ text: "Startups", href: "/item1" },
					]}
				/>
			</div>
			<div className="flex-1 text-center">
				<a href="/">Blogs</a>
			</div>
		</div>
	);
}
