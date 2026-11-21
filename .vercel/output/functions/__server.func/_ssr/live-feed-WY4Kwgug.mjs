import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/live-feed-WY4Kwgug.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var fetchLivePalettes_createServerFn_handler = createServerRpc({
	id: "2a7ae2fdadec1b910390de42d0e98e35eb3d279766ef6fe860d6b5308dc404a0",
	name: "fetchLivePalettes",
	filename: "src/lib/live-feed.ts"
}, (opts) => fetchLivePalettes.__executeServer(opts));
var fetchLivePalettes = createServerFn({ method: "POST" }).validator((input) => ({
	force: Boolean(input?.force),
	excludeIds: Array.isArray(input?.excludeIds) ? input.excludeIds.filter((id) => /^\d{8,25}$/.test(id)).slice(0, 40) : [],
	excludeHandles: Array.isArray(input?.excludeHandles) ? input.excludeHandles.filter((h) => /^@?[A-Za-z0-9_]{1,15}$/.test(h)).slice(0, 20) : []
})).handler(fetchLivePalettes_createServerFn_handler, async ({ data }) => {
	const { searchLivePalettes } = await import("./x-search.server-Botfnmis.mjs");
	return searchLivePalettes(data.force, data.excludeIds, data.excludeHandles);
});
//#endregion
export { fetchLivePalettes_createServerFn_handler };
