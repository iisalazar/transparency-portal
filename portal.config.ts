/**
 * This portal's configuration: the only file a fork needs to edit.
 * What each field means: src/config.ts. Check it against the live API with
 * `npm run check` (add `-- --verbose` to review lines found by name).
 *
 * The Municipality of Bay, Laguna (Region IV-A, Laguna's 2nd legislative
 * district). A municipality has no DPWH office of its own, so the scope is the
 * place name: every 2027 line in the four programs (DPWH, farm-to-market roads,
 * health facilities, irrigation) and every 2020–2026 program whose title names
 * Bay, Laguna.
 *
 * "Bay" alone is a common word ("Manila Bay", "Laguna de Bay", "bayan"), so the
 * search needs both words, "Bay" and "Laguna", and stays in Region IV-A. That
 * still catches projects on Laguna de Bay (the lake) in other towns: review
 * them with `npm run check -- --verbose` and add each namesake to `exclude`
 * with a reason. Titles that name Bay without "Laguna" are missed this way.
 *
 * The Laguna DPWH district engineering office that covers Bay is left out on
 * purpose: its ledger covers several towns, and every line would show here.
 * To add it, find its exact name with `npm run setup -- --list-offices` and
 * put it under `offices`.
 */
import { defineConfig } from './src/config';

export default defineConfig({
  id: 'bay-laguna',
  kind: 'municipality',
  name: 'Municipality of Bay, Laguna',
  shortName: 'Bay',
  operator: { name: 'Your organisation' },
  // Set siteUrl to where this portal is deployed, for link previews.
  scope: {
    places: [{ label: 'Bay', q: 'Bay Laguna', region: 'IV-A' }],
    districts: ['leg:laguna:2nd'],
    exclude: [],
  },
  reporting: { enabled: false },
});
