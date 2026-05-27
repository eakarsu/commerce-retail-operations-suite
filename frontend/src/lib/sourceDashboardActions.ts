export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "drop-shipping",
    "label": "Drop Shipping",
    "description": "Open Drop Shipping workflows elevated from dropShipping.",
    "href": "/dropship-product-research",
    "sourceProjects": [
      "dropShipping"
    ],
    "examples": [
      "Dropship Product Research",
      "Supplier Fulfillment Risk",
      "Store Margin Review"
    ],
    "count": 1
  },
  {
    "id": "virtual-showroom",
    "label": "Virtual Showroom",
    "description": "Open Virtual Showroom workflows elevated from AIVirtualShowroomBuilder.",
    "href": "/virtual-showroom-builder",
    "sourceProjects": [
      "AIVirtualShowroomBuilder"
    ],
    "examples": [
      "Virtual Showroom Builder",
      "Showroom Product Scenes",
      "Buyer Experience Review"
    ],
    "count": 1
  },
  {
    "id": "pawn-shop-secondhand-dealer",
    "label": "Pawn Shop Secondhand Dealer",
    "description": "Open Pawn Shop Secondhand Dealer workflows elevated from AIPawnShopSecondhandDealer.",
    "href": "/pawn-intake",
    "sourceProjects": [
      "AIPawnShopSecondhandDealer"
    ],
    "examples": [
      "Pawn Intake",
      "Secondhand Inventory",
      "Compliance Hold Review"
    ],
    "count": 1
  },
  {
    "id": "ai-assistant",
    "label": "AI Assistant",
    "description": "Run source-derived AI assistant workflows and prompts.",
    "href": "/features/ai-tools",
    "sourceProjects": [
      "AICarbonCreditMarketplaceVerifier",
      "AICircularEconomyUpcyclingMarketplace",
      "AIMarketplaceBuilderPlatform",
      "AIPricingOptimizer",
      "AiECommerceAgent",
      "ebay",
      "shopify"
    ],
    "examples": [
      "backend/routes/ai",
      "backend/routes/customFeat01_AgenticPricingOptimization",
      "backend/routes/gap_no_ai_model_wiring_confirmed_beyond_the_single_ai_",
      "backend/routes/upcyclerAgent",
      "backend/src/controllers/aiController",
      "backend/src/routes/agenticCSBot"
    ],
    "count": 7
  },
  {
    "id": "source-workflows",
    "label": "Source Workflows",
    "description": "Open source-derived workflows and feature actions.",
    "href": "/features",
    "sourceProjects": [
      "AICircularEconomyUpcyclingMarketplace",
      "ebay"
    ],
    "examples": [
      "frontend/src/pages/Batch09/BulkListingImportMigrationToolsGapNon",
      "frontend/src/tools"
    ],
    "count": 2
  },
  {
    "id": "orders",
    "label": "Orders",
    "description": "Open order, fulfillment, delivery, and purchase actions.",
    "href": "/features",
    "sourceProjects": [
      "shopify"
    ],
    "examples": [
      "src/lib/actions/fulfillment"
    ],
    "count": 1
  }
];
