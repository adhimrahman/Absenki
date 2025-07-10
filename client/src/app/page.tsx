"use client";
import { useEffect, useState } from 'react';

export default function TestPage() {
	type Item = { id: number; name: string };
	const [data, setData] = useState<Item[]>([]);

	useEffect(() => {
		fetch('http://localhost:3001/ping')
			.then((res) => res.json())
			.then((json) => setData(json.data));
	}, []);

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">Test Connection</h1>
			<ul className="list-disc ml-6 text-white">
				{data.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	);
}