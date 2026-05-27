import {
  Activity,
  BarChart3,
  Bell,
  Blocks,
  Database,
  Bot,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardList,
  FileText,
  Files,
  LayoutDashboard,
  LucideIcon,
  PackageCheck,
  Plug,
  ShieldCheck,
  UserRound,
  Users,
  Workflow,
} from 'lucide-react';

export type NavItem = { label: string; href: string; icon: LucideIcon };
export type FeatureDefinition = { title: string; href: string; category: string; summary: string; bullets: string[] };
export type PageDefinition = {
  title: string;
  eyebrow: string;
  subtitle: string;
  category: string;
  summary: string;
  bullets: string[];
  metrics: Array<{ label: string; value: string; note: string }>;
};
export type FeatureContext = {
  sourceOwners: string[];
  operatingQueues: string[];
  outputs: string[];
  relatedRoutes: Array<{ label: string; href: string }>;
};

const features = [
  {
    slug: 'orders',
    title: 'Orders',
    href: '/orders',
    category: 'Commerce',
    icon: BriefcaseBusiness,
    summary: 'Orders workflow normalized for the Commerce Retail Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Orders queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Orders', value: '24', note: 'Active' }, { label: 'Exceptions', value: '3', note: 'Need review' }, { label: 'Due Soon', value: '5', note: 'Next 14 days' }],
  },
  {
    slug: 'customers',
    title: 'Customers',
    href: '/customers',
    category: 'Commerce',
    icon: Users,
    summary: 'Customers workflow normalized for the Commerce Retail Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Customers queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Customers', value: '35', note: 'Active' }, { label: 'Exceptions', value: '4', note: 'Need review' }, { label: 'Due Soon', value: '6', note: 'Next 14 days' }],
  },
  {
    slug: 'catalog',
    title: 'Catalog',
    href: '/catalog',
    category: 'Commerce',
    icon: ClipboardList,
    summary: 'Catalog workflow normalized for the Commerce Retail Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Catalog queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Catalog', value: '46', note: 'Active' }, { label: 'Exceptions', value: '5', note: 'Need review' }, { label: 'Due Soon', value: '7', note: 'Next 14 days' }],
  },
  {
    slug: 'inventory',
    title: 'Inventory',
    href: '/inventory',
    category: 'Commerce',
    icon: CalendarCheck,
    summary: 'Inventory workflow normalized for the Commerce Retail Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Inventory queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Inventory', value: '57', note: 'Active' }, { label: 'Exceptions', value: '6', note: 'Need review' }, { label: 'Due Soon', value: '8', note: 'Next 14 days' }],
  },
  {
    slug: 'pricing',
    title: 'Pricing',
    href: '/pricing',
    category: 'Operations',
    icon: Activity,
    summary: 'Pricing workflow normalized for the Commerce Retail Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Pricing queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Pricing', value: '68', note: 'Active' }, { label: 'Exceptions', value: '7', note: 'Need review' }, { label: 'Due Soon', value: '9', note: 'Next 14 days' }],
  },
  {
    slug: 'promotions',
    title: 'Promotions',
    href: '/promotions',
    category: 'Operations',
    icon: Workflow,
    summary: 'Promotions workflow normalized for the Commerce Retail Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Promotions queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Promotions', value: '79', note: 'Active' }, { label: 'Exceptions', value: '8', note: 'Need review' }, { label: 'Due Soon', value: '10', note: 'Next 14 days' }],
  },
  {
    slug: 'returns',
    title: 'Returns',
    href: '/returns',
    category: 'Operations',
    icon: FileText,
    summary: 'Returns workflow normalized for the Commerce Retail Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Returns queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Returns', value: '90', note: 'Active' }, { label: 'Exceptions', value: '9', note: 'Need review' }, { label: 'Due Soon', value: '11', note: 'Next 14 days' }],
  },
  {
    slug: 'marketplaces',
    title: 'Marketplaces',
    href: '/marketplaces',
    category: 'Operations',
    icon: ShieldCheck,
    summary: 'Marketplaces workflow normalized for the Commerce Retail Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Marketplaces queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Marketplaces', value: '101', note: 'Active' }, { label: 'Exceptions', value: '10', note: 'Need review' }, { label: 'Due Soon', value: '12', note: 'Next 14 days' }],
  },
  {
    slug: 'fulfillment',
    title: 'Fulfillment',
    href: '/fulfillment',
    category: 'Governance',
    icon: BarChart3,
    summary: 'Fulfillment workflow normalized for the Commerce Retail Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Fulfillment queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Fulfillment', value: '112', note: 'Active' }, { label: 'Exceptions', value: '11', note: 'Need review' }, { label: 'Due Soon', value: '13', note: 'Next 14 days' }],
  },
  {
    slug: 'reviews',
    title: 'Reviews',
    href: '/reviews',
    category: 'Governance',
    icon: PackageCheck,
    summary: 'Reviews workflow normalized for the Commerce Retail Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Reviews queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Reviews', value: '123', note: 'Active' }, { label: 'Exceptions', value: '12', note: 'Need review' }, { label: 'Due Soon', value: '14', note: 'Next 14 days' }],
  },
  {
    slug: 'payments',
    title: 'Payments',
    href: '/payments',
    category: 'Intelligence Layer',
    icon: Bell,
    summary: 'Payments workflow normalized for the Commerce Retail Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Payments queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Payments', value: '134', note: 'Active' }, { label: 'Exceptions', value: '13', note: 'Need review' }, { label: 'Due Soon', value: '15', note: 'Next 14 days' }],
  },
  {
    slug: 'reports',
    title: 'Reports',
    href: '/reports',
    category: 'Intelligence Layer',
    icon: Files,
    summary: 'Reports workflow normalized for the Commerce Retail Operations suite with records, queues, approvals, audit, and reporting.',
    bullets: ['Reports queue', 'Approvals', 'Audit trail'],
    metrics: [{ label: 'Reports', value: '145', note: 'Active' }, { label: 'Exceptions', value: '14', note: 'Need review' }, { label: 'Due Soon', value: '16', note: 'Next 14 days' }],
  },
  {
    slug: "pawn-intake",
    title: "Pawn Intake",
    href: "/pawn-intake",
    category: "Pawn Shop Secondhand Dealer",
    icon: Workflow,
    summary: "Pawn Intake elevated from the Pawn Shop Secondhand Dealer source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Pawn Intake queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Pawn Intake", value: "24", note: 'Active' },
      { label: 'Review', value: "4", note: 'Needs attention' },
      { label: 'Due Soon', value: "3", note: 'Next 14 days' },
    ],
  },
  {
    slug: "secondhand-inventory",
    title: "Secondhand Inventory",
    href: "/secondhand-inventory",
    category: "Pawn Shop Secondhand Dealer",
    icon: Workflow,
    summary: "Secondhand Inventory elevated from the Pawn Shop Secondhand Dealer source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Secondhand Inventory queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Secondhand Inventory", value: "33", note: 'Active' },
      { label: 'Review', value: "5", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "compliance-hold-review",
    title: "Compliance Hold Review",
    href: "/compliance-hold-review",
    category: "Pawn Shop Secondhand Dealer",
    icon: Workflow,
    summary: "Compliance Hold Review elevated from the Pawn Shop Secondhand Dealer source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Compliance Hold Review queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Compliance Hold Review", value: "42", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "virtual-showroom-builder",
    title: "Virtual Showroom Builder",
    href: "/virtual-showroom-builder",
    category: "Virtual Showroom",
    icon: Workflow,
    summary: "Virtual Showroom Builder elevated from the Virtual Showroom source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Virtual Showroom Builder queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Virtual Showroom Builder", value: "24", note: 'Active' },
      { label: 'Review', value: "4", note: 'Needs attention' },
      { label: 'Due Soon', value: "3", note: 'Next 14 days' },
    ],
  },
  {
    slug: "showroom-product-scenes",
    title: "Showroom Product Scenes",
    href: "/showroom-product-scenes",
    category: "Virtual Showroom",
    icon: Workflow,
    summary: "Showroom Product Scenes elevated from the Virtual Showroom source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Showroom Product Scenes queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Showroom Product Scenes", value: "33", note: 'Active' },
      { label: 'Review', value: "5", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "buyer-experience-review",
    title: "Buyer Experience Review",
    href: "/buyer-experience-review",
    category: "Virtual Showroom",
    icon: Workflow,
    summary: "Buyer Experience Review elevated from the Virtual Showroom source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Buyer Experience Review queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Buyer Experience Review", value: "42", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: "dropship-product-research",
    title: "Dropship Product Research",
    href: "/dropship-product-research",
    category: "Drop Shipping",
    icon: Workflow,
    summary: "Dropship Product Research elevated from the Drop Shipping source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Dropship Product Research queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Dropship Product Research", value: "24", note: 'Active' },
      { label: 'Review', value: "4", note: 'Needs attention' },
      { label: 'Due Soon', value: "3", note: 'Next 14 days' },
    ],
  },
  {
    slug: "supplier-fulfillment-risk",
    title: "Supplier Fulfillment Risk",
    href: "/supplier-fulfillment-risk",
    category: "Drop Shipping",
    icon: Workflow,
    summary: "Supplier Fulfillment Risk elevated from the Drop Shipping source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Supplier Fulfillment Risk queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Supplier Fulfillment Risk", value: "33", note: 'Active' },
      { label: 'Review', value: "5", note: 'Needs attention' },
      { label: 'Due Soon', value: "4", note: 'Next 14 days' },
    ],
  },
  {
    slug: "store-margin-review",
    title: "Store Margin Review",
    href: "/store-margin-review",
    category: "Drop Shipping",
    icon: Workflow,
    summary: "Store Margin Review elevated from the Drop Shipping source capability with records, queues, AI assistance, audit, and reporting.",
    bullets: ["Store Margin Review queue","AI assisted review","Audit trail"],
    metrics: [
      { label: "Store Margin Review", value: "42", note: 'Active' },
      { label: 'Review', value: "6", note: 'Needs attention' },
      { label: 'Due Soon', value: "5", note: 'Next 14 days' },
    ],
  },
  {
    slug: 'documents',
    title: 'Documents',
    href: '/documents',
    category: 'Core Platform',
    icon: Files,
    summary: 'Commerce Retail Operations documents, packets, evidence, attachments, and exports.',
    bullets: ['Documents', 'Uploads', 'Exports'],
    metrics: [{ label: 'Documents', value: '640', note: 'Tracked' }, { label: 'In Review', value: '42', note: 'Open' }, { label: 'Uploaded', value: '88', note: 'This month' }],
  },
  {
    slug: 'notifications',
    title: 'Notifications',
    href: '/notifications',
    category: 'Core Platform',
    icon: Bell,
    summary: 'Commerce Retail Operations alerts, reminders, exceptions, and approvals.',
    bullets: ['Alerts', 'Reminders', 'Exceptions'],
    metrics: [{ label: 'Unread', value: '34', note: 'Needs review' }, { label: 'Critical', value: '7', note: 'Escalated' }, { label: 'Resolved', value: '211', note: 'This week' }],
  },
  {
    slug: 'integrations',
    title: 'Integrations',
    href: '/integrations',
    category: 'Core Platform',
    icon: Plug,
    summary: 'Commerce Retail Operations source-system connector health and sync status.',
    bullets: ['Connectors', 'Sync', 'Warnings'],
    metrics: [{ label: 'Connectors', value: '12', note: 'Configured' }, { label: 'Warnings', value: '3', note: 'Need attention' }, { label: 'Last Sync', value: '5m', note: 'Source data' }],
  },
  {
    slug: 'profiles',
    title: 'Profiles',
    href: '/profiles',
    category: 'Core Platform',
    icon: UserRound,
    summary: 'Commerce Retail Operations users, roles, teams, permissions, and ownership settings.',
    bullets: ['Users', 'Roles', 'Teams'],
    metrics: [{ label: 'Users', value: '72', note: 'Active' }, { label: 'Teams', value: '9', note: 'Configured' }, { label: 'Access Reviews', value: '5', note: 'Open' }],
  },
] as const;

const aiFeatures = [
  {
    slug: 'ai-assistant',
    title: 'AI Assistant',
    href: '/features/ai-assistant',
    category: 'Intelligence Layer',
    icon: Bot,
    summary: 'Commerce Retail Operations assistant for triage, summaries, drafting, recommendations, and operational review.',
    bullets: ['Triage support', 'Drafting', 'Review guidance'],
    metrics: [
      { label: 'Sessions', value: '128', note: 'Last 24 hours' },
      { label: 'Drafts', value: '204', note: 'Generated' },
      { label: 'Escalations', value: '14', note: 'Expert review' },
    ],
  },
  {
    slug: 'ai-tools',
    title: 'AI Tools',
    href: '/features/ai-tools',
    category: 'Intelligence Layer',
    icon: Activity,
    summary: 'Targeted AI tools for scoring, classification, extraction, exception review, and reporting.',
    bullets: ['Scoring', 'Classification', 'Exception review'],
    metrics: [
      { label: 'Runs', value: '318', note: 'Last 24 hours' },
      { label: 'Signals', value: '88', note: 'New alerts' },
      { label: 'Accepted', value: '117', note: 'Reviewer accepted' },
    ],
  },
] as const;

const allFeatures = [...features, ...aiFeatures];

export const primaryNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'All Features', href: '/features', icon: Blocks },
  { label: 'Documents', href: '/documents', icon: Files },
  { label: 'Source Tables', href: '/source-tables', icon: Database },
  { label: 'Profiles', href: '/profiles', icon: UserRound },
];

export const featureNav: NavItem[] = allFeatures.map((feature) => ({ label: feature.title, href: feature.href, icon: feature.icon }));
export const featureCatalog: FeatureDefinition[] = allFeatures.map((feature) => ({ title: feature.title, href: feature.href, category: feature.category, summary: feature.summary, bullets: [...feature.bullets] }));

export const featureFamilies = [
  { name: 'Commerce', features: ['Orders', 'Customers', 'Catalog', 'Inventory'] },
  { name: 'Operations', features: ['Pricing', 'Promotions', 'Returns', 'Marketplaces'] },
  { name: 'Governance', features: ['Fulfillment', 'Reviews'] },
  { name: 'Pawn Shop Secondhand Dealer', features: ["Pawn Intake","Secondhand Inventory","Compliance Hold Review"] },
  { name: 'Virtual Showroom', features: ["Virtual Showroom Builder","Showroom Product Scenes","Buyer Experience Review"] },
  { name: 'Drop Shipping', features: ["Dropship Product Research","Supplier Fulfillment Risk","Store Margin Review"] },
  { name: 'Intelligence Layer', features: ['Payments', 'Reports', 'AI Assistant', 'AI Tools'] },
  { name: 'Core Platform', features: ['Documents', 'Notifications', 'Integrations', 'Profiles'] },
];

function toPage(feature: (typeof allFeatures)[number]): PageDefinition {
  return {
    title: feature.title,
    eyebrow: feature.category,
    subtitle: feature.summary,
    category: feature.category,
    summary: `${feature.title} is normalized from source applications into one merged suite workflow.`,
    bullets: [...feature.bullets],
    metrics: [...feature.metrics],
  };
}

export const pageRegistry: Record<string, PageDefinition> = Object.fromEntries(features.map((feature) => [feature.slug, toPage(feature)]));
export const aiFeatureRegistry: Record<string, PageDefinition> = Object.fromEntries(aiFeatures.map((feature) => [feature.slug, toPage(feature)]));
export const featureContexts: Record<string, FeatureContext> = Object.fromEntries(
  allFeatures.map((feature) => [
    feature.title,
    {
      sourceOwners: ['shopify', 'ebay where applicable'],
      operatingQueues: [`${feature.title} records`, `${feature.title} approvals`, `${feature.title} exceptions`],
      outputs: [`${feature.title} dashboard`, `${feature.title} export`, `${feature.title} audit trail`],
      relatedRoutes: [{ label: 'Dashboard', href: '/dashboard' }, { label: 'All Features', href: '/features' }, { label: 'Reports', href: '/reports' }],
    },
  ]),
);
