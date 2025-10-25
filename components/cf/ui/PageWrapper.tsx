// components/cf/ui/PageWrapper.tsx
"use client";

import { CFLayout } from "@/components/layout/CFLayout";
import { Providers } from "@/components/providers";
import type { PageType } from "@/config/routes";
import { BlockBox } from "../BlockBox";
import { CaptchaBox } from "../CaptchaBox";
import { ErrorBox } from "../ErrorBox";

// Map components — no data logic here
const ComponentMap = {
  error: ErrorBox,
  block: BlockBox,
  challenge: CaptchaBox,
} as const;

export function PageWrapper({
  pageType,
  type,
  config,
}: {
  pageType: PageType;
  type: string;
  config: any; // or better: infer from route config types
}) {
  const Component = ComponentMap[pageType];

  return (
    <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
      <CFLayout>
        <Component {...config} />
      </CFLayout>
    </Providers>
  );
}
