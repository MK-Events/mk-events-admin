import { useMemo } from "react";

import login from "@mk/config/pages/loginConfig.json";

const pageConfigs = {
  login,
} as const;

export type PageSlug = keyof typeof pageConfigs;

export function usePageConfig<T extends PageSlug>(
  slug: T,
): (typeof pageConfigs)[T] {
  return useMemo(() => pageConfigs[slug], [slug]);
}
