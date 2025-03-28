import DropdownMenu from "./DropdownMenu";

export default function Headbar() {
	return (
		<div className="h-full flex flex-row items-center">
			<div className="flex-1 text-center">
				<a className="p-2 hover:bg-neutral-900 hover:text-white" href="/">
					Home
				</a>
			</div>
			<div className="flex-1 text-center">
				<a
					className="p-2 hover:bg-neutral-900 hover:text-white"
					href="https://blog.dahaotang.com"
				>
					Blogs
				</a>
			</div>
			<div className="flex-1 text-center">
				<DropdownMenu
					triggerText="Projects"
					items={[
						{ text: "Research", href: "/project/research" },
						{ text: "Collaborated", href: "/project/collaborated" },
						{ text: "Personal", href: "/project/personal" },
						{ text: "Startup", href: "/project/startup" },
					]}
				/>
			</div>
			<div className="flex-1 text-center">
				<a
					className="p-2 hover:bg-neutral-900 hover:text-white"
					href="/contact"
				>
					Contact
				</a>
			</div>
		</div>
	);
}
