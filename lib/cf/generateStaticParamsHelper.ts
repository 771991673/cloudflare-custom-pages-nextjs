// lib/cf/generateStaticParamsHelper.ts
import { type PageType } from "@/config/routes";

// This function runs ONLY on the server — no "use client"!
export function generateStaticParamsHelper(directory: PageType) {
    // Your logic here, e.g.:
    if (directory === "docs") {
        return [{ type: "getting-started" }, { type: "api" }];
    }
    if (directory === "blog") {
        return [{ type: "post-1" }, { type: "post-2" }];
    }
    return [];
}