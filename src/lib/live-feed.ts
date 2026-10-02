import { createServerFn } from "@tanstack/react-start";
import type { FeedPalette } from "./feed";

export type LiveSearchResult = {
  palettes: FeedPalette[];
  fetchedAt: number;
  fresh: boolean;
  added: number;
  error?: string;
};

export const fetchLivePalettes = createServerFn({ method: "POST" })
  .validator((input: { force?: boolean; excludeIds?: string[]; excludeHandles?: string[] } | undefined) => ({
    force: Boolean(input?.force),
    excludeIds: Array.isArray(input?.excludeIds)
      ? input.excludeIds.filter((id) => /^\d{8,25}$/.test(id)).slice(0, 40)
      : [],
    excludeHandles: Array.isArray(input?.excludeHandles)
      ? input.excludeHandles.filter((h) => /^@?[A-Za-z0-9_]{1,15}$/.test(h)).slice(0, 20)
      : [],
  }))
  .handler(async ({ data }): Promise<LiveSearchResult> => {
    const { searchLivePalettes } = await import("./x-search.server");
    return searchLivePalettes(data.force, data.excludeIds, data.excludeHandles);
  });
