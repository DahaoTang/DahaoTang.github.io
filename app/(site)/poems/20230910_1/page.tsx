"use client";

import Image from "next/image";
import Header from "@/app/(site)/components/header/Header";
import { Heading1 } from "@/app/(site)/components/Heading";

export default function Poem20230910_1() {
	return (
		<div>
			<Header title="Poem" subtitle="2023.09.10" subsubtitle="" />
			<Heading1 content="【无题】" />
			<div className="flex flex-row">
				<div className="w-[37%]">
					<div className="pb-3">
						<p>她莞尔一笑</p>
						<p>如六十七年前他们所期许的</p>
					</div>
					<div className="pb-3">
						<p>整齐的鹅卵石路</p>
						<p>中绽放的一朵</p>
						<p>无人知晓其中的奥秘</p>
						<p>沁人心脾的花香</p>
						<p>击穿了绵延万里的藤蔓</p>
					</div>
					<div className="pb-3">
						<p>攀登山峰</p>
						<p>所用的钢索</p>
						<p>就是山峰本身</p>
					</div>
					<div className="pb-3">
						<p>我默默地流泪</p>
					</div>
					<div className="pt-3">
						<p>二〇二三年九月十日 作于Sydney Tina&apos;s</p>
					</div>
				</div>
				<div>
					<Image
						className="rounded"
						src={"/images/poems/20230910_1/elf.PNG"}
						alt=""
						width={500}
						height={300}
					/>
				</div>
			</div>
		</div>
	);
}
