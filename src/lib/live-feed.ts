import { createServerFn } from "@tanstack/react-start";
import type { FeedPalette } from "./feed";

export type LiveSearchResult = {
  palettes: FeedPalette[];
  fetchedAt: number;
  fresh: boolean;
  error?: string;
};

export const fetchLivePalettes = createServerFn({ method: "POST" })
  .validator((input: { force?: boolean } | undefined) => ({
    force: Boolean(input?.force),
  }))
  .handler(async ({ data }): Promise<LiveSearchResult> => {
    const { searchLivePalettes } = await import("./x-search.server");
    return searchLivePalettes(data.force);
  });
