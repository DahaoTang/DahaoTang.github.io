"use client";

import Image from "next/image";
import Header from "@/app/(site)/components/header/Header";
import { Heading1 } from "@/app/(site)/components/Heading";

export default function Poem20230930_1() {
	return (
		<div>
			<Header title="Poem" subtitle="2023.09.30" subsubtitle="" />
			<Heading1 content="不是写给高小姐的写给高小姐" />
			<div className="flex flex-row">
				<div className="w-[32%]">
					<div className="pb-3">
						<p>从图书馆负一楼</p>
						<p>光线沉默的褐色长桌旁</p>
						<p>的单人沙发座位上</p>
						<p>凝结而出的一位长相清秀的女生</p>
					</div>
					<div className="pb-3">
						<p>她的目光如此清澈</p>
						<p>她的笑声如此清脆</p>
						<p>一切像未经深思的玻璃</p>
						<p>介于完整与被击破之间的一厘米</p>
					</div>
					<div className="pb-3">
						<p>她的出现</p>
						<p>源自一个女生必须出现</p>
						<p>源自单人沙发座位不是褐色长桌</p>
						<p>源自不可见的空气</p>
						<p>在光线的沉默里</p>
						<p>在桌旁两位男生的注视与期待中</p>
						<p>不再是均质的了</p>
					</div>
					<div className="pb-3">
						<p>她的一颦一笑</p>
						<p>是千万次的一颦一笑的前夕</p>
						<p>是被看见的</p>
						<p>唯一的一颦一笑</p>
					</div>
					<div className="pb-3">
						<p>问题是：</p>
						<p className="pl-4">作为两位男生中的一员</p>
						<p className="pl-4">我该如何将她视作</p>
						<p className="pl-4">和自己一样的</p>
						<p className="pl-4">人？</p>
					</div>
					<div className="pt-3">
						<p>二〇二三年九月三十日 作于Sydney Tina&apos;s</p>
					</div>
				</div>
				<div>
					<Image
						className="rounded"
						src={"/images/poems/20230930_1/original.PNG"}
						alt=""
						width={800}
						height={300}
					/>
				</div>
			</div>
		</div>
	);
}
