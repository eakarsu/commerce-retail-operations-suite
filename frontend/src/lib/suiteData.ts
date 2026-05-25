export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'shopify', ownership: 'Orders source capabilities and workflows', coverage: ['Orders', 'Customers', 'Catalog'] },
  { name: 'ebay', ownership: 'Customers source capabilities and workflows', coverage: ['Inventory', 'Pricing', 'Promotions'] },
  { name: 'AiECommerceAgent', ownership: 'Catalog source capabilities and workflows', coverage: ['Returns', 'Marketplaces', 'Fulfillment'] },
  { name: 'AIPricingOptimizer', ownership: 'Inventory source capabilities and workflows', coverage: ['Reviews', 'Payments', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Orders', value: '84', note: 'Active' },
  { label: 'Customers', value: '61', note: 'Open' },
  { label: 'Catalog', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Orders operating view', 'Customers operating view', 'Catalog operating view', 'Inventory operating view', 'Pricing operating view', 'Promotions operating view', 'Returns operating view', 'Marketplaces operating view'];
export const workflowHighlights = ['Orders workflow with records, approvals, audit, and reporting', 'Customers workflow with records, approvals, audit, and reporting', 'Catalog workflow with records, approvals, audit, and reporting', 'Inventory workflow with records, approvals, audit, and reporting', 'Pricing workflow with records, approvals, audit, and reporting'];
