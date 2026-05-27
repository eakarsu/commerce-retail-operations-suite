export type FeatureSurfaceRow = { id: string; item: string; status: string; owner: string; nextStep: string };
export type FeatureSurface = {
  workItems: FeatureSurfaceRow[];
  quickActions: string[];
  controlChecks: Array<{ id: string; label: string; done: boolean }>;
  activityLog: Array<{ id: string; message: string; at: string }>;
};

const featureSeeds = [
  ['orders', 'Orders', 'Orders operating queue', 'Commerce Lead', 'Review and assign next action'],
  ['customers', 'Customers', 'Customers operating queue', 'Commerce Lead', 'Review and assign next action'],
  ['catalog', 'Catalog', 'Catalog operating queue', 'Commerce Lead', 'Review and assign next action'],
  ['inventory', 'Inventory', 'Inventory operating queue', 'Commerce Lead', 'Review and assign next action'],
  ['pricing', 'Pricing', 'Pricing operating queue', 'Operations Lead', 'Review and assign next action'],
  ['promotions', 'Promotions', 'Promotions operating queue', 'Operations Lead', 'Review and assign next action'],
  ['returns', 'Returns', 'Returns operating queue', 'Operations Lead', 'Review and assign next action'],
  ['marketplaces', 'Marketplaces', 'Marketplaces operating queue', 'Operations Lead', 'Review and assign next action'],
  ['fulfillment', 'Fulfillment', 'Fulfillment operating queue', 'Governance Lead', 'Review and assign next action'],
  ['reviews', 'Reviews', 'Reviews operating queue', 'Governance Lead', 'Review and assign next action'],
  ['payments', 'Payments', 'Payments operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ['reports', 'Reports', 'Reports operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ["pawn-intake","Pawn Intake","Pawn Intake review queue","Pawn Shop Secondhand Dealer","Review source context and assign owner"],
  ["secondhand-inventory","Secondhand Inventory","Secondhand Inventory review queue","Pawn Shop Secondhand Dealer","Confirm next action and update evidence"],
  ["compliance-hold-review","Compliance Hold Review","Compliance Hold Review review queue","Pawn Shop Secondhand Dealer","Confirm next action and update evidence"],
  ["virtual-showroom-builder","Virtual Showroom Builder","Virtual Showroom Builder review queue","Virtual Showroom","Review source context and assign owner"],
  ["showroom-product-scenes","Showroom Product Scenes","Showroom Product Scenes review queue","Virtual Showroom","Confirm next action and update evidence"],
  ["buyer-experience-review","Buyer Experience Review","Buyer Experience Review review queue","Virtual Showroom","Confirm next action and update evidence"],
  ["dropship-product-research","Dropship Product Research","Dropship Product Research review queue","Drop Shipping","Review source context and assign owner"],
  ["supplier-fulfillment-risk","Supplier Fulfillment Risk","Supplier Fulfillment Risk review queue","Drop Shipping","Confirm next action and update evidence"],
  ["store-margin-review","Store Margin Review","Store Margin Review review queue","Drop Shipping","Confirm next action and update evidence"],
  ['documents', 'Documents', 'Documents operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['notifications', 'Notifications', 'Notifications operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['integrations', 'Integrations', 'Integrations operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['profiles', 'Profiles', 'Profiles operating queue', 'Core Platform Lead', 'Review and assign next action'],
  ['ai-assistant', 'AI Assistant', 'AI Assistant operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
  ['ai-tools', 'AI Tools', 'AI Tools operating queue', 'Intelligence Layer Lead', 'Review and assign next action'],
] as const;

function buildSurface(slug: string, title: string, item: string, owner: string, nextStep: string): FeatureSurface {
  return {
    workItems: [
      { id: `${slug}-1`, item, status: 'Open', owner, nextStep },
      { id: `${slug}-2`, item: `${title} exception review`, status: 'Review', owner: 'Operations', nextStep: 'Investigate exception and assign owner' },
      { id: `${slug}-3`, item: `${title} weekly operating queue`, status: 'Queued', owner: 'Team Lead', nextStep: 'Prioritize next actions' },
    ],
    quickActions: [`Create ${title} record`, `Export ${title} list`, `Review ${title} exceptions`],
    controlChecks: [
      { id: `${slug}-check-1`, label: `${title} owner assigned`, done: true },
      { id: `${slug}-check-2`, label: `${title} next step documented`, done: false },
      { id: `${slug}-check-3`, label: `${title} audit trail current`, done: true },
    ],
    activityLog: [
      { id: `${slug}-log-1`, message: `${title} queue refreshed`, at: '2026-05-24 09:00' },
      { id: `${slug}-log-2`, message: `${title} exception assigned`, at: '2026-05-24 11:30' },
    ],
  };
}

export const featureSurfaceBySlug: Record<string, FeatureSurface> = Object.fromEntries(featureSeeds.map(([slug, title, item, owner, nextStep]) => [slug, buildSurface(slug, title, item, owner, nextStep)]));
export const featureSurfaces: Record<string, FeatureSurface> = Object.fromEntries(featureSeeds.map(([slug, title]) => [title, featureSurfaceBySlug[slug]]));
