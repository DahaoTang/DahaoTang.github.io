"use client";

import { useState } from "react";

interface PaginatedListProps {
	items: { [key: string]: string }[];
	itemsPerPage: number;
	columnNames: string[];
}

const PaginatedList: React.FC<PaginatedListProps> = ({
	items,
	itemsPerPage,
	columnNames,
}) => {
	const [currentPage, setCurrentPage] = useState<number>(1);

	const pageCount = Math.ceil(items.length / itemsPerPage);
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	const handleRowClick = (url: string) => {
		if (url) window.open(url, "_blank");
	};

	return (
		<div>
			<table className="min-w-full leading-normal table-fixed">
				<thead>
					<tr>
						{columnNames.map((name, index) => (
							<th
								key={index}
								className={`px-5 py-3 border-b-2 border-neutral-300 text-left text-md tracking-wider ${
									index === columnNames.length - 1
										? "hidden"
										: index >= 2
										? "hidden sm:table-cell"
										: ""
								}`}
							>
								{name}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{currentItems.map((item, idx) => (
						<tr
							key={idx}
							className="hover:bg-neutral-900 hover:text-white cursor-pointer"
							onClick={() =>
								handleRowClick(item[columnNames[columnNames.length - 1]])
							}
						>
							{columnNames.map((col, index) => (
								<td
									key={index}
									className={`px-5 py-2 border-b border-neutral-300 ${
										index === columnNames.length - 1
											? "hidden"
											: index >= 2
											? "hidden sm:table-cell"
											: ""
									}`}
								>
									{item[col]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<div className="flex justify-between mt-5">
				<button
					className={`px-4 py-2 w-24 ${
						currentPage <= 1
							? "text-neutral-100 cursor-not-allowed"
							: "hover:bg-neutral-900 hover:text-white"
					}`}
					onClick={() => paginate(currentPage - 1)}
					disabled={currentPage <= 1}
				>
					Previous
				</button>
				<span className="py-2">
					{currentPage} / {pageCount}
				</span>
				<button
					className={`px-4 py-2 w-24 ${
						currentPage >= pageCount
							? "text-neutral-100 cursor-not-allowed"
							: "hover:bg-neutral-900 hover:text-white"
					}`}
					onClick={() => paginate(currentPage + 1)}
					disabled={currentPage >= pageCount}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default PaginatedList;
