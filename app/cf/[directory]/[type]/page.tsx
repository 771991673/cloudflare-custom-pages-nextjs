// app/cf/[directory]/[type]/page.tsx
// NO "use client"

import { PageWrapper } from "@/components/cf/ui/PageWrapper";
import { type PageType, directories } from "@/config/routes";
import { generateStaticParamsForPageType } from "@/lib/cf/pageConfigs";
import { validatePageTypeAndType } from "@/lib/cf/pageConfigs";
import { notFound } from "next/navigation";

interface DynamicPageProps {
  params: {
    directory: PageType;
    type: string;
  };
}

export async function generateStaticParams({
  params,
}: { params: { directory: PageType } }) {
  if (!directories.includes(params.directory)) return [];
  return generateStaticParamsForPageType(params.directory);
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { directory: pageType, type } = await params;

  if (!directories.includes(pageType)) {
    notFound();
  }

  const { isValid, resolvedType, config } = validatePageTypeAndType(
    pageType,
    type,
  );

  // Optional: redirect or notFound on invalid type?
  // For now, we fall back to default (as your original logic did)
  // But if you want strict 404s:
  // if (!isValid) notFound();

  return (
    <PageWrapper pageType={pageType} type={resolvedType} config={config} />
  );
}
