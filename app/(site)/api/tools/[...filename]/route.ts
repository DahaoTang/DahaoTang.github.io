// app/api/tools/[...filename]/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
	request: Request,
	{ params }: { params: { filename: string[] } }
) {
	const fullFilename = params.filename.join(".");
	const filePath = path.join(process.cwd(), "public/tools", fullFilename);

	if (!fs.existsSync(filePath)) {
		return NextResponse.json({ error: "File not found" }, { status: 404 });
	}

	const content = fs.readFileSync(filePath, "utf8");
	return NextResponse.json({ content, filename: fullFilename });
}
