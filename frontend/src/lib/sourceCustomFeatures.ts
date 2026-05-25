import type { FeatureContext, FeatureDefinition, PageDefinition } from '@/lib/unifiedApp';
import type { FeatureEntitySet } from '@/lib/featureEntities';
import type { FeatureSurface } from '@/lib/featureSurfaces';

export const sourceCustomFeatureCatalog: FeatureDefinition[] = [
  {
    "title": "AI Carbon Credit Marketplace Verifier Source Feature",
    "href": "/features/source-ai-carbon-credit-marketplace-verifier",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AICarbonCreditMarketplaceVerifier: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "15 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Circular Economy Upcycling Marketplace Source Feature",
    "href": "/features/source-ai-circular-economy-upcycling-marketplace",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AICircularEconomyUpcyclingMarketplace: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "10 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI E Commerce Agent Source Feature",
    "href": "/features/source-ai-e-commerce-agent",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AiECommerceAgent: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "15 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Marketplace Builder Platform Source Feature",
    "href": "/features/source-ai-marketplace-builder-platform",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIMarketplaceBuilderPlatform: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "15 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "AI Pricing Optimizer Source Feature",
    "href": "/features/source-ai-pricing-optimizer",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIPricingOptimizer: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "5 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "Ebay Source Feature",
    "href": "/features/source-ebay",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in ebay: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "19 AI, prompt, tool, or workflow files captured"
    ]
  },
  {
    "title": "Shopify Source Feature",
    "href": "/features/source-shopify",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in shopify: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "30 AI, prompt, tool, or workflow files captured"
    ]
  }
];

export const sourceCustomFeatureFamilies: Array<{ name: string; features: string[] }> = [
  {
    "name": "Source Project Features",
    "features": [
      "AI Carbon Credit Marketplace Verifier Source Feature",
      "AI Circular Economy Upcycling Marketplace Source Feature",
      "AI E Commerce Agent Source Feature",
      "AI Marketplace Builder Platform Source Feature",
      "AI Pricing Optimizer Source Feature",
      "Ebay Source Feature",
      "Shopify Source Feature"
    ]
  }
];

export const sourceCustomPageRegistry: Record<string, PageDefinition> = {
  "source-ai-carbon-credit-marketplace-verifier": {
    "title": "AI Carbon Credit Marketplace Verifier Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AICarbonCreditMarketplaceVerifier, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AICarbonCreditMarketplaceVerifier: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "15 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "15",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-circular-economy-upcycling-marketplace": {
    "title": "AI Circular Economy Upcycling Marketplace Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AICircularEconomyUpcyclingMarketplace, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AICircularEconomyUpcyclingMarketplace: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "10 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "10",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-e-commerce-agent": {
    "title": "AI E Commerce Agent Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AiECommerceAgent, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AiECommerceAgent: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "15 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "15",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-marketplace-builder-platform": {
    "title": "AI Marketplace Builder Platform Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIMarketplaceBuilderPlatform, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIMarketplaceBuilderPlatform: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "15 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "15",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ai-pricing-optimizer": {
    "title": "AI Pricing Optimizer Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from AIPricingOptimizer, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in AIPricingOptimizer: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "5 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "5",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-ebay": {
    "title": "Ebay Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from ebay, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in ebay: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "19 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "19",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  },
  "source-shopify": {
    "title": "Shopify Source Feature",
    "eyebrow": "Source AI Workflows",
    "subtitle": "Merged custom workflow coverage from shopify, converted into a usable suite feature page.",
    "category": "Source AI Workflows",
    "summary": "This page preserves the custom behavior signals found in shopify: routes, APIs, prompts, tools, and workflow files are represented as editable work items, records, checks, and AI-ready context.",
    "bullets": [
      "0 source pages/routes captured",
      "0 API routes captured",
      "30 AI, prompt, tool, or workflow files captured"
    ],
    "metrics": [
      {
        "label": "Routes",
        "value": "0",
        "note": "Source pages mapped"
      },
      {
        "label": "APIs",
        "value": "0",
        "note": "Source endpoints mapped"
      },
      {
        "label": "AI/Tools",
        "value": "30",
        "note": "Prompt, agent, or tool files mapped"
      }
    ]
  }
};

export const sourceCustomFeatureContexts: Record<string, FeatureContext> = {
  "AI Carbon Credit Marketplace Verifier Source Feature": {
    "sourceOwners": [
      "AICarbonCreditMarketplaceVerifier"
    ],
    "operatingQueues": [
      "Openrouter",
      "Agentic Verifier",
      "AI New",
      "Gap Ainew Js Scaffold But 0 Mounted Chat Style AI Endp"
    ],
    "outputs": [
      "AI Carbon Credit Marketplace Verifier merged workflow register",
      "AI Carbon Credit Marketplace Verifier API and route coverage map",
      "AI Carbon Credit Marketplace Verifier AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Circular Economy Upcycling Marketplace Source Feature": {
    "sourceOwners": [
      "AICircularEconomyUpcyclingMarketplace"
    ],
    "operatingQueues": [
      "AI Tool Page",
      "Main",
      "Tools",
      "Agentic Upcycler That Walks Users From Waste Photo Page"
    ],
    "outputs": [
      "AI Circular Economy Upcycling Marketplace merged workflow register",
      "AI Circular Economy Upcycling Marketplace API and route coverage map",
      "AI Circular Economy Upcycling Marketplace AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI E Commerce Agent Source Feature": {
    "sourceOwners": [
      "AiECommerceAgent"
    ],
    "operatingQueues": [
      "Openrouter",
      "Tailwind.Config",
      "Main",
      "Campaigns"
    ],
    "outputs": [
      "AI E Commerce Agent merged workflow register",
      "AI E Commerce Agent API and route coverage map",
      "AI E Commerce Agent AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Marketplace Builder Platform Source Feature": {
    "sourceOwners": [
      "AIMarketplaceBuilderPlatform"
    ],
    "operatingQueues": [
      "Openrouter",
      "Dispute Service Agent",
      "Gap AI Buyer Intent",
      "Gap AI Content Quality Scorer"
    ],
    "outputs": [
      "AI Marketplace Builder Platform merged workflow register",
      "AI Marketplace Builder Platform API and route coverage map",
      "AI Marketplace Builder Platform AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "AI Pricing Optimizer Source Feature": {
    "sourceOwners": [
      "AIPricingOptimizer"
    ],
    "operatingQueues": [
      "AI Insights",
      "AI Usage Stats",
      "CF Agentic Pricing Optimization Page",
      "Email Verifications"
    ],
    "outputs": [
      "AI Pricing Optimizer merged workflow register",
      "AI Pricing Optimizer API and route coverage map",
      "AI Pricing Optimizer AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "Ebay Source Feature": {
    "sourceOwners": [
      "ebay"
    ],
    "operatingQueues": [
      "AI Demand Reputation",
      "AI Features",
      "Daily Deals",
      "Dispute Detail"
    ],
    "outputs": [
      "Ebay merged workflow register",
      "Ebay API and route coverage map",
      "Ebay AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  },
  "Shopify Source Feature": {
    "sourceOwners": [
      "shopify"
    ],
    "operatingQueues": [
      "Fulfillment",
      "Tool:Tailwind.Config",
      "AI Client",
      "AI Rate Limit"
    ],
    "outputs": [
      "Shopify merged workflow register",
      "Shopify API and route coverage map",
      "Shopify AI/tool implementation queue"
    ],
    "relatedRoutes": [
      {
        "label": "All Features",
        "href": "/features"
      },
      {
        "label": "AI Tools",
        "href": "/features/ai-tools"
      },
      {
        "label": "Dashboard",
        "href": "/dashboard"
      }
    ]
  }
};

export const sourceCustomFeatureSurfaceBySlug: Record<string, FeatureSurface> = {
  "source-ai-carbon-credit-marketplace-verifier": {
    "workItems": [
      {
        "id": "source-ai-carbon-credit-marketplace-verifier-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/services/openrouter.js"
      },
      {
        "id": "source-ai-carbon-credit-marketplace-verifier-work-2",
        "item": "Agentic Verifier",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/agenticVerifier.js"
      },
      {
        "id": "source-ai-carbon-credit-marketplace-verifier-work-3",
        "item": "AI New",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/aiNew.js"
      },
      {
        "id": "source-ai-carbon-credit-marketplace-verifier-work-4",
        "item": "Gap Ainew Js Scaffold But 0 Mounted Chat Style AI Endp",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap_ainew_js_scaffold_but_0_mounted_chat_style_ai_endp.js"
      },
      {
        "id": "source-ai-carbon-credit-marketplace-verifier-work-5",
        "item": "Gap No AI Price Prediction For Credit Classes",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap_no_ai_price_prediction_for_credit_classes.js"
      },
      {
        "id": "source-ai-carbon-credit-marketplace-verifier-work-6",
        "item": "Gap No AI Verification Of Project Additionality Perman",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap_no_ai_verification_of_project_additionality_perman.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-carbon-credit-marketplace-verifier-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-carbon-credit-marketplace-verifier-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-carbon-credit-marketplace-verifier-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-carbon-credit-marketplace-verifier-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-carbon-credit-marketplace-verifier-log-1",
        "message": "Deep-merge feature generated from AICarbonCreditMarketplaceVerifier",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-carbon-credit-marketplace-verifier-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-circular-economy-upcycling-marketplace": {
    "workItems": [
      {
        "id": "source-ai-circular-economy-upcycling-marketplace-work-1",
        "item": "AI Tool Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/AiToolPage.jsx"
      },
      {
        "id": "source-ai-circular-economy-upcycling-marketplace-work-2",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-ai-circular-economy-upcycling-marketplace-work-3",
        "item": "Tools",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/tools.js"
      },
      {
        "id": "source-ai-circular-economy-upcycling-marketplace-work-4",
        "item": "Agentic Upcycler That Walks Users From Waste Photo Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AgenticUpcyclerThatWalksUsersFromWastePhotoPage.jsx"
      },
      {
        "id": "source-ai-circular-economy-upcycling-marketplace-work-5",
        "item": "No AI Model Wiring Confirmed Beyond The Single AI Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/NoAiModelWiringConfirmedBeyondTheSingleAiPage.jsx"
      },
      {
        "id": "source-ai-circular-economy-upcycling-marketplace-work-6",
        "item": "Repair Or Resell",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/RepairOrResell.jsx"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-circular-economy-upcycling-marketplace-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-circular-economy-upcycling-marketplace-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-circular-economy-upcycling-marketplace-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-circular-economy-upcycling-marketplace-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-circular-economy-upcycling-marketplace-log-1",
        "message": "Deep-merge feature generated from AICircularEconomyUpcyclingMarketplace",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-circular-economy-upcycling-marketplace-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-e-commerce-agent": {
    "workItems": [
      {
        "id": "source-ai-e-commerce-agent-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/src/services/openrouter.js"
      },
      {
        "id": "source-ai-e-commerce-agent-work-2",
        "item": "Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/tailwind.config.js"
      },
      {
        "id": "source-ai-e-commerce-agent-work-3",
        "item": "Main",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/main.jsx"
      },
      {
        "id": "source-ai-e-commerce-agent-work-4",
        "item": "Campaigns",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/Campaigns.jsx"
      },
      {
        "id": "source-ai-e-commerce-agent-work-5",
        "item": "Parse AI Json",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/src/utils/parseAIJson.js"
      },
      {
        "id": "source-ai-e-commerce-agent-work-6",
        "item": "Cart Recovery Email",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/src/templates/email/cartRecoveryEmail.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-e-commerce-agent-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-e-commerce-agent-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-e-commerce-agent-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-e-commerce-agent-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-e-commerce-agent-log-1",
        "message": "Deep-merge feature generated from AiECommerceAgent",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-e-commerce-agent-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-marketplace-builder-platform": {
    "workItems": [
      {
        "id": "source-ai-marketplace-builder-platform-work-1",
        "item": "Openrouter",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/openrouter.js"
      },
      {
        "id": "source-ai-marketplace-builder-platform-work-2",
        "item": "Dispute Service Agent",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/dispute-service-agent.js"
      },
      {
        "id": "source-ai-marketplace-builder-platform-work-3",
        "item": "Gap AI Buyer Intent",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap-ai-buyer-intent.js"
      },
      {
        "id": "source-ai-marketplace-builder-platform-work-4",
        "item": "Gap AI Content Quality Scorer",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap-ai-content-quality-scorer.js"
      },
      {
        "id": "source-ai-marketplace-builder-platform-work-5",
        "item": "Gap AI Template Recommender",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap-ai-template-recommender.js"
      },
      {
        "id": "source-ai-marketplace-builder-platform-work-6",
        "item": "Gap AI Version Summarizer",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for server/routes/gap-ai-version-summarizer.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-marketplace-builder-platform-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-marketplace-builder-platform-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-marketplace-builder-platform-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-marketplace-builder-platform-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-marketplace-builder-platform-log-1",
        "message": "Deep-merge feature generated from AIMarketplaceBuilderPlatform",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-marketplace-builder-platform-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ai-pricing-optimizer": {
    "workItems": [
      {
        "id": "source-ai-pricing-optimizer-work-1",
        "item": "AI Insights",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIInsights.js"
      },
      {
        "id": "source-ai-pricing-optimizer-work-2",
        "item": "AI Usage Stats",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIUsageStats.js"
      },
      {
        "id": "source-ai-pricing-optimizer-work-3",
        "item": "CF Agentic Pricing Optimization Page",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/CFAgenticPricingOptimizationPage.js"
      },
      {
        "id": "source-ai-pricing-optimizer-work-4",
        "item": "Email Verifications",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/EmailVerifications.js"
      },
      {
        "id": "source-ai-pricing-optimizer-work-5",
        "item": "Custom Feat01 Agentic Pricing Optimization",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for backend/routes/customFeat01_AgenticPricingOptimization.js"
      },
      {
        "id": "source-ai-pricing-optimizer-work-6",
        "item": "AI Insights",
        "status": "Open",
        "owner": "Feature Owner",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIInsights"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ai-pricing-optimizer-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ai-pricing-optimizer-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ai-pricing-optimizer-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ai-pricing-optimizer-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ai-pricing-optimizer-log-1",
        "message": "Deep-merge feature generated from AIPricingOptimizer",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ai-pricing-optimizer-log-2",
        "message": "10 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-ebay": {
    "workItems": [
      {
        "id": "source-ebay-work-1",
        "item": "AI Demand Reputation",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIDemandReputation.js"
      },
      {
        "id": "source-ebay-work-2",
        "item": "AI Features",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/AIFeatures.js"
      },
      {
        "id": "source-ebay-work-3",
        "item": "Daily Deals",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/DailyDeals.js"
      },
      {
        "id": "source-ebay-work-4",
        "item": "Dispute Detail",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/DisputeDetail.js"
      },
      {
        "id": "source-ebay-work-5",
        "item": "Order Detail",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/OrderDetail.js"
      },
      {
        "id": "source-ebay-work-6",
        "item": "Product Detail",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for frontend/src/pages/ProductDetail.js"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-ebay-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-ebay-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-ebay-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-ebay-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-ebay-log-1",
        "message": "Deep-merge feature generated from ebay",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-ebay-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  },
  "source-shopify": {
    "workItems": [
      {
        "id": "source-shopify-work-1",
        "item": "Fulfillment",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/lib/actions/fulfillment.ts"
      },
      {
        "id": "source-shopify-work-2",
        "item": "Tool:Tailwind.Config",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for tailwind.config.ts"
      },
      {
        "id": "source-shopify-work-3",
        "item": "AI Client",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/lib/ai-client.ts"
      },
      {
        "id": "source-shopify-work-4",
        "item": "AI Rate Limit",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/lib/ai-rate-limit.ts"
      },
      {
        "id": "source-shopify-work-5",
        "item": "Email",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/lib/email.ts"
      },
      {
        "id": "source-shopify-work-6",
        "item": "Parse AI Json",
        "status": "Review",
        "owner": "AI Ops",
        "nextStep": "Validate and run merged coverage for src/lib/parse-ai-json.ts"
      }
    ],
    "quickActions": [
      "Run source AI workflow",
      "Create implementation task",
      "Export source coverage"
    ],
    "controlChecks": [
      {
        "id": "source-shopify-check-routes",
        "label": "Source routes reviewed for donor login leakage",
        "done": false
      },
      {
        "id": "source-shopify-check-api",
        "label": "API behavior mapped to merged suite permissions",
        "done": true
      },
      {
        "id": "source-shopify-check-ai",
        "label": "AI prompts/tools connected to the unified AI workbench",
        "done": true
      },
      {
        "id": "source-shopify-check-ownership",
        "label": "Feature owner and suite destination confirmed",
        "done": true
      }
    ],
    "activityLog": [
      {
        "id": "source-shopify-log-1",
        "message": "Deep-merge feature generated from shopify",
        "at": "2026-05-24 18:45"
      },
      {
        "id": "source-shopify-log-2",
        "message": "12 source signals converted into merged workflow coverage",
        "at": "2026-05-24 18:45"
      }
    ]
  }
};

export const sourceCustomFeatureEntitiesBySlug: Record<string, FeatureEntitySet> = {
  "source-ai-carbon-credit-marketplace-verifier": {
    "title": "AI Carbon Credit Marketplace Verifier Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-carbon-credit-marketplace-verifier-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-carbon-credit-marketplace-verifier-entity-2",
        "name": "Agentic Verifier",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-carbon-credit-marketplace-verifier-entity-3",
        "name": "AI New",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-carbon-credit-marketplace-verifier-entity-4",
        "name": "Gap Ainew Js Scaffold But 0 Mounted Chat Style AI Endp",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-carbon-credit-marketplace-verifier-entity-5",
        "name": "Gap No AI Price Prediction For Credit Classes",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-circular-economy-upcycling-marketplace": {
    "title": "AI Circular Economy Upcycling Marketplace Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-circular-economy-upcycling-marketplace-entity-1",
        "name": "AI Tool Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-circular-economy-upcycling-marketplace-entity-2",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-circular-economy-upcycling-marketplace-entity-3",
        "name": "Tools",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-circular-economy-upcycling-marketplace-entity-4",
        "name": "Agentic Upcycler That Walks Users From Waste Photo Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-circular-economy-upcycling-marketplace-entity-5",
        "name": "No AI Model Wiring Confirmed Beyond The Single AI Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-e-commerce-agent": {
    "title": "AI E Commerce Agent Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-e-commerce-agent-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-e-commerce-agent-entity-2",
        "name": "Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-e-commerce-agent-entity-3",
        "name": "Main",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-e-commerce-agent-entity-4",
        "name": "Campaigns",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-e-commerce-agent-entity-5",
        "name": "Parse AI Json",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-marketplace-builder-platform": {
    "title": "AI Marketplace Builder Platform Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-marketplace-builder-platform-entity-1",
        "name": "Openrouter",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-marketplace-builder-platform-entity-2",
        "name": "Dispute Service Agent",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-marketplace-builder-platform-entity-3",
        "name": "Gap AI Buyer Intent",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-marketplace-builder-platform-entity-4",
        "name": "Gap AI Content Quality Scorer",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-marketplace-builder-platform-entity-5",
        "name": "Gap AI Template Recommender",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ai-pricing-optimizer": {
    "title": "AI Pricing Optimizer Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ai-pricing-optimizer-entity-1",
        "name": "AI Insights",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ai-pricing-optimizer-entity-2",
        "name": "AI Usage Stats",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-pricing-optimizer-entity-3",
        "name": "CF Agentic Pricing Optimization Page",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-pricing-optimizer-entity-4",
        "name": "Email Verifications",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ai-pricing-optimizer-entity-5",
        "name": "Custom Feat01 Agentic Pricing Optimization",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-ebay": {
    "title": "Ebay Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-ebay-entity-1",
        "name": "AI Demand Reputation",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-ebay-entity-2",
        "name": "AI Features",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ebay-entity-3",
        "name": "Daily Deals",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ebay-entity-4",
        "name": "Dispute Detail",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-ebay-entity-5",
        "name": "Order Detail",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  },
  "source-shopify": {
    "title": "Shopify Source Records",
    "columns": [
      "Name",
      "Status",
      "Owner",
      "Amount",
      "Due Date",
      "Priority"
    ],
    "rows": [
      {
        "id": "source-shopify-entity-1",
        "name": "Fulfillment",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "High"
      },
      {
        "id": "source-shopify-entity-2",
        "name": "Tool:Tailwind.Config",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-shopify-entity-3",
        "name": "AI Client",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-shopify-entity-4",
        "name": "AI Rate Limit",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      },
      {
        "id": "source-shopify-entity-5",
        "name": "Email",
        "status": "Workflow mapped",
        "owner": "AI Ops",
        "amount": "$0",
        "dueDate": "2026-05-24",
        "priority": "Medium"
      }
    ]
  }
};

export const sourceCustomFeatureLinksByProject: Record<string, string> = {
  "AICarbonCreditMarketplaceVerifier": "/features/source-ai-carbon-credit-marketplace-verifier",
  "AICircularEconomyUpcyclingMarketplace": "/features/source-ai-circular-economy-upcycling-marketplace",
  "AiECommerceAgent": "/features/source-ai-e-commerce-agent",
  "AIMarketplaceBuilderPlatform": "/features/source-ai-marketplace-builder-platform",
  "AIPricingOptimizer": "/features/source-ai-pricing-optimizer",
  "ebay": "/features/source-ebay",
  "shopify": "/features/source-shopify"
};
