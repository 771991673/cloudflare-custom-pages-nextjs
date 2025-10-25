// lib/cf/pageConfigs.ts
import { blockPages, challengePages, errorPages } from "@/config/routes";
import type {
    BlockPageConfig,
    ChallengePageConfig,
    ErrorPageConfig,
    PageType,
} from "@/config/routes";

// Same structure, but in a server-safe file (NO "use client")
const pageConfigs = {
    error: {
        pages: errorPages,
        defaultType: "500s" as const,
    },
    block: {
        pages: blockPages,
        defaultType: "ip" as const,
    },
    challenge: {
        pages: challengePages,
        defaultType: "interactive" as const,
    },
} satisfies Record<PageType, { pages: any; defaultType: string }>;

export function generateStaticParamsForPageType(pageType: PageType) {
    const { pages } = pageConfigs[pageType];
    return Object.keys(pages).map((type) => ({ type }));
}

export function validatePageTypeAndType(pageType: PageType, type: string) {
    const { pages, defaultType } = pageConfigs[pageType];
    if (type in pages) {
        return { isValid: true, resolvedType: type, config: pages[type] };
    } else {
        return {
            isValid: false,
            resolvedType: defaultType,
            config: pages[defaultType],
        };
    }
}

// Optional: export for type safety or reuse
export { pageConfigs };