// lib/cf/getStaticPropsHelper.ts
import { type PageType } from "@/config/routes";

export async function getStaticPropsHelper(directory: PageType, { type }: { type: string }) {
    // Simulate data fetching or validation
    const validTypes = /* ... */;
    if (!validTypes.includes(type)) {
        return { notFound: true };
    }
    return { notFound: false, props: {} };
}