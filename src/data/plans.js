/**
 * Single source of truth for plan facts quoted in the docs.
 *
 * Rules — these are house conventions, not preferences:
 *   - `price` is the DALLAS base price, always quoted as a "from" price.
 *     Los Angeles and New York carry a surcharge; never quote a
 *     location-specific total in the docs.
 *   - Never publish upgrade prices. Upgrade pricing lives at checkout.
 *     Describing capability ("add RAM without a restart", "scale to 16 GB")
 *     is correct and encouraged; quoting what it costs is not.
 *
 * Anything rendered by HostingCTA reads from here, so a price can only ever
 * be wrong in one place.
 */
export const plans = {
	'project-zomboid': {
		name: 'Project Zomboid',
		price: 8.99,
		ram: 3,
		vcpu: 2,
		disk: 25,
		maxRam: 16,
		url: 'https://evlbox.com/games/project-zomboid',
	},
};

/** Formats a price as a "from" price — `8.99` becomes `$8.99/mo`. */
export function formatPrice(price) {
	return `$${price.toFixed(2)}/mo`;
}
