export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "drop-shipping-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve the Drop Shipping workflow and produce audit-ready next actions.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "dropShipping"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste Drop Shipping source details, notes, records, or documents.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "dropShipping"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "dropShipping"
    }
  ],
  "virtual-showroom-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve the Virtual Showroom workflow and produce audit-ready next actions.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AIVirtualShowroomBuilder"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste Virtual Showroom source details, notes, records, or documents.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "AIVirtualShowroomBuilder"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "AIVirtualShowroomBuilder"
    }
  ],
  "pawn-shop-secondhand-dealer-copilot": [
    {
      "name": "objective",
      "label": "Objective",
      "type": "textarea",
      "defaultValue": "Improve the Pawn Shop Secondhand Dealer workflow and produce audit-ready next actions.",
      "placeholder": "Describe the goal",
      "options": [],
      "required": true,
      "source": "AIPawnShopSecondhandDealer"
    },
    {
      "name": "source_context",
      "label": "Source Context",
      "type": "textarea",
      "defaultValue": "Paste Pawn Shop Secondhand Dealer source details, notes, records, or documents.",
      "placeholder": "Paste source context",
      "options": [],
      "required": true,
      "source": "AIPawnShopSecondhandDealer"
    },
    {
      "name": "output_format",
      "label": "Output Format",
      "type": "select",
      "defaultValue": "Action plan",
      "placeholder": "Select output format",
      "options": [
        "Action plan",
        "Executive summary",
        "Evidence table",
        "Checklist"
      ],
      "required": true,
      "source": "AIPawnShopSecondhandDealer"
    }
  ],
  "ai-carbon-credit-marketplace-verifier-agentic-verifier-7yfye6-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Verifier source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agenticVerifier.js"
    }
  ],
  "ai-carbon-credit-marketplace-verifier-ai-new-1l6olc-exact-ai": [
    {
      "name": "actual_metrics",
      "label": "Actual Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "baseline_scenario",
      "label": "Baseline Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "certifications",
      "label": "Certifications",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "credit_id",
      "label": "Credit Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "credit_type",
      "label": "Credit Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "credits",
      "label": "Credits",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "historical_prices",
      "label": "Historical Prices",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "portfolio_data",
      "label": "Portfolio Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "project_data",
      "label": "Project Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "promised_outcomes",
      "label": "Promised Outcomes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "reporting_period",
      "label": "Reporting Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "transactions",
      "label": "Transactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "vintage_dates",
      "label": "Vintage Dates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-carbon-credit-marketplace-verifier-gap-ainew-js-scaffold-but-0-mounted-chat-style-ai-endp-b0mpox-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Ainew Js Scaffold But 0 Mounted Chat Style AI Endp source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_ainew_js_scaffold_but_0_mounted_chat_style_ai_endp.js"
    }
  ],
  "ai-carbon-credit-marketplace-verifier-gap-no-ai-price-prediction-for-credit-classes-pwcc17-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Price Prediction For Credit Classes source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_no_ai_price_prediction_for_credit_classes.js"
    }
  ],
  "ai-carbon-credit-marketplace-verifier-gap-no-ai-verification-of-project-additionality-perman-vr40-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Verification Of Project Additionality Perman source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_no_ai_verification_of_project_additionality_perman.js"
    }
  ],
  "ai-carbon-credit-marketplace-verifier-gap-no-on-chain-credit-tokenization-layer-zt7sot-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No On Chain Credit Tokenization Layer source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap_no_on_chain_credit_tokenization_layer.js"
    }
  ],
  "ai-carbon-credit-marketplace-verifier-sustainability-hp0wo-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Sustainability source input context",
      "options": [],
      "required": false,
      "source": "server/routes/sustainability.js"
    }
  ],
  "ai-carbon-credit-marketplace-verifier-ai-hub-v7m8c1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Hub source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIHub.js"
    }
  ],
  "ai-carbon-credit-marketplace-verifier-ai-studio-a3uy72-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Studio source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIStudio.js"
    }
  ],
  "ai-carbon-credit-marketplace-verifier-agentic-verifier-reviewing-project-documents-and-f-page-rby7mw-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Verifier Reviewing Project Documents And F Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AgenticVerifierReviewingProjectDocumentsAndFPage.js"
    }
  ],
  "ai-carbon-credit-marketplace-verifier-ainew-js-scaffold-but0-mounted-chat-style-ai-endp-page-1yr63x-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Ainew Js Scaffold But0 Mounted Chat Style AI Endp Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AinewJsScaffoldBut0MountedChatStyleAiEndpPage.js"
    }
  ],
  "ai-carbon-credit-marketplace-verifier-no-ai-price-prediction-for-credit-classes-page-f1j2q2-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Price Prediction For Credit Classes Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/NoAiPricePredictionForCreditClassesPage.js"
    }
  ],
  "ai-carbon-credit-marketplace-verifier-no-ai-verification-of-project-additionality-perman-page-qcox-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No AI Verification Of Project Additionality Perman Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/NoAiVerificationOfProjectAdditionalityPermanPage.js"
    }
  ],
  "ai-carbon-credit-marketplace-verifier-no-on-chain-credit-tokenization-layer-page-1rpa6w-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the No On Chain Credit Tokenization Layer Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/NoOnChainCreditTokenizationLayerPage.js"
    }
  ],
  "ai-carbon-credit-marketplace-verifier-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Verifier source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agenticVerifier.js"
    },
    {
      "name": "actual_metrics",
      "label": "Actual Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "baseline_scenario",
      "label": "Baseline Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "certifications",
      "label": "Certifications",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "credit_id",
      "label": "Credit Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "credit_type",
      "label": "Credit Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "credits",
      "label": "Credits",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "historical_prices",
      "label": "Historical Prices",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "portfolio_data",
      "label": "Portfolio Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "project_data",
      "label": "Project Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "promised_outcomes",
      "label": "Promised Outcomes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "reporting_period",
      "label": "Reporting Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "transactions",
      "label": "Transactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "vintage_dates",
      "label": "Vintage Dates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-carbon-credit-marketplace-verifier-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Verifier source input context",
      "options": [],
      "required": false,
      "source": "server/routes/agenticVerifier.js"
    },
    {
      "name": "actual_metrics",
      "label": "Actual Metrics",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "baseline_scenario",
      "label": "Baseline Scenario",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "certifications",
      "label": "Certifications",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "credit_id",
      "label": "Credit Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "credit_type",
      "label": "Credit Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "credits",
      "label": "Credits",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "historical_prices",
      "label": "Historical Prices",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "portfolio_data",
      "label": "Portfolio Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "project_data",
      "label": "Project Data",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "promised_outcomes",
      "label": "Promised Outcomes",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "reporting_period",
      "label": "Reporting Period",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "transactions",
      "label": "Transactions",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    },
    {
      "name": "vintage_dates",
      "label": "Vintage Dates",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/aiNew.js"
    }
  ],
  "ai-circular-economy-upcycling-marketplace-agentic-upcycler-that-walks-users-from-waste-photo-page-3ri5rd-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Upcycler That Walks Users From Waste Photo Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgenticUpcyclerThatWalksUsersFromWastePhotoPage.jsx"
    }
  ],
  "ai-circular-economy-upcycling-marketplace-repair-or-resell-1hphmo-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Repair Or Resell source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/RepairOrResell.jsx"
    }
  ],
  "ai-circular-economy-upcycling-marketplace-sustainability-verify-1t0fyi-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Sustainability Verify source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/SustainabilityVerify.jsx"
    }
  ],
  "ai-circular-economy-upcycling-marketplace-ai-5cuwes-exact-ai": [
    {
      "name": "asIsValue",
      "label": "As Is Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "buyerNeed",
      "label": "Buyer Need",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "claim",
      "label": "Claim",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "condition",
      "label": "Condition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "currentCondition",
      "label": "Current Condition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "currentDescription",
      "label": "Current Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "currentTitle",
      "label": "Current Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "displacedProduct",
      "label": "Displaced Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "growthGoal",
      "label": "Growth Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hourlyRate",
      "label": "Hourly Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "item",
      "label": "Item",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "itemDescription",
      "label": "Item Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "laborHours",
      "label": "Labor Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "marketTier",
      "label": "Market Tier",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "materialChain",
      "label": "Material Chain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "materialCost",
      "label": "Material Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "materialDescription",
      "label": "Material Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "materials",
      "label": "Materials",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "materialType",
      "label": "Material Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "monthlyRevenue",
      "label": "Monthly Revenue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "photos",
      "label": "Photos",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "quantity",
      "label": "Quantity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "repairCost",
      "label": "Repair Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "repairedValue",
      "label": "Repaired Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sellerSkills",
      "label": "Seller Skills",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sellerStage",
      "label": "Seller Stage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "supportingEvidence",
      "label": "Supporting Evidence",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sustainabilityGoals",
      "label": "Sustainability Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "targetMarket",
      "label": "Target Market",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "timeframe",
      "label": "Timeframe",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "toolsAvailable",
      "label": "Tools Available",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "topProducts",
      "label": "Top Products",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "weightKg",
      "label": "Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-circular-economy-upcycling-marketplace-gap-no-ai-model-wiring-confirmed-beyond-the-single-ai-11e297-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap No AI Model Wiring Confirmed Beyond The Single AI source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/gap_no_ai_model_wiring_confirmed_beyond_the_single_ai_.js"
    }
  ],
  "ai-circular-economy-upcycling-marketplace-upcycler-agent-1rzhu2-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Upcycler Agent source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/upcyclerAgent.js"
    }
  ],
  "ai-circular-economy-upcycling-marketplace-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Upcycler That Walks Users From Waste Photo Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgenticUpcyclerThatWalksUsersFromWastePhotoPage.jsx"
    },
    {
      "name": "asIsValue",
      "label": "As Is Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "buyerNeed",
      "label": "Buyer Need",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "claim",
      "label": "Claim",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "condition",
      "label": "Condition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "currentCondition",
      "label": "Current Condition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "currentDescription",
      "label": "Current Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "currentTitle",
      "label": "Current Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "displacedProduct",
      "label": "Displaced Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "growthGoal",
      "label": "Growth Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hourlyRate",
      "label": "Hourly Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "item",
      "label": "Item",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "itemDescription",
      "label": "Item Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "laborHours",
      "label": "Labor Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "marketTier",
      "label": "Market Tier",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "materialChain",
      "label": "Material Chain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "materialCost",
      "label": "Material Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "materialDescription",
      "label": "Material Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "materials",
      "label": "Materials",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "materialType",
      "label": "Material Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "monthlyRevenue",
      "label": "Monthly Revenue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "photos",
      "label": "Photos",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "quantity",
      "label": "Quantity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "repairCost",
      "label": "Repair Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "repairedValue",
      "label": "Repaired Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sellerSkills",
      "label": "Seller Skills",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sellerStage",
      "label": "Seller Stage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "supportingEvidence",
      "label": "Supporting Evidence",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sustainabilityGoals",
      "label": "Sustainability Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "targetMarket",
      "label": "Target Market",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "timeframe",
      "label": "Timeframe",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "toolsAvailable",
      "label": "Tools Available",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "topProducts",
      "label": "Top Products",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "weightKg",
      "label": "Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-circular-economy-upcycling-marketplace-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Agentic Upcycler That Walks Users From Waste Photo Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AgenticUpcyclerThatWalksUsersFromWastePhotoPage.jsx"
    },
    {
      "name": "asIsValue",
      "label": "As Is Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "buyerNeed",
      "label": "Buyer Need",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "claim",
      "label": "Claim",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "condition",
      "label": "Condition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "currentCondition",
      "label": "Current Condition",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "currentDescription",
      "label": "Current Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "currentTitle",
      "label": "Current Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "displacedProduct",
      "label": "Displaced Product",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "growthGoal",
      "label": "Growth Goal",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "hourlyRate",
      "label": "Hourly Rate",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "item",
      "label": "Item",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "itemDescription",
      "label": "Item Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "laborHours",
      "label": "Labor Hours",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "location",
      "label": "Location",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "marketTier",
      "label": "Market Tier",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "materialChain",
      "label": "Material Chain",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "materialCost",
      "label": "Material Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "materialDescription",
      "label": "Material Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "materials",
      "label": "Materials",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "materialType",
      "label": "Material Type",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "monthlyRevenue",
      "label": "Monthly Revenue",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "photos",
      "label": "Photos",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "quantity",
      "label": "Quantity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "region",
      "label": "Region",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "repairCost",
      "label": "Repair Cost",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "repairedValue",
      "label": "Repaired Value",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sellerSkills",
      "label": "Seller Skills",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sellerStage",
      "label": "Seller Stage",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "supportingEvidence",
      "label": "Supporting Evidence",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "sustainabilityGoals",
      "label": "Sustainability Goals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "targetMarket",
      "label": "Target Market",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "timeframe",
      "label": "Timeframe",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "toolsAvailable",
      "label": "Tools Available",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "topProducts",
      "label": "Top Products",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    },
    {
      "name": "weightKg",
      "label": "Weight Kg",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/routes/ai.js"
    }
  ],
  "ai-e-commerce-agent-campaigns-ru5op0-exact-ai": [
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Campaigns.jsx"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Campaigns.jsx"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "google",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Campaigns.jsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "draft",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Campaigns.jsx"
    },
    {
      "name": "targetAudience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Campaigns.jsx"
    }
  ],
  "ai-e-commerce-agent-agentic-cs-bot-1jvscb-exact-ai": [
    {
      "name": "allow_actions = false",
      "label": "Allow Actions = False",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticCSBot.js"
    },
    {
      "name": "customer_id",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticCSBot.js"
    },
    {
      "name": "messages = []",
      "label": "Messages = []",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticCSBot.js"
    }
  ],
  "ai-e-commerce-agent-ai-extra-1r47dc-exact-ai": [
    {
      "name": "cart_snapshot",
      "label": "Cart Snapshot",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "current_password",
      "label": "Current Password",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "image_url",
      "label": "Image Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "lead_time_days",
      "label": "Lead Time Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "new_password",
      "label": "New Password",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "productId",
      "label": "Product Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "recommended_action",
      "label": "Recommended Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "variant",
      "label": "Variant",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    }
  ],
  "ai-e-commerce-agent-ai-new-46ven9-exact-ai": [
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "customer_id",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "customer_segment",
      "label": "Customer Segment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "objective",
      "label": "Objective",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "product_ids",
      "label": "Product Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "trigger_event",
      "label": "Trigger Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    }
  ],
  "ai-e-commerce-agent-ai-pass5-1t6fpg-exact-ai": [
    {
      "name": "affiliate_code",
      "label": "Affiliate Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "amount_cents",
      "label": "Amount Cents",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "direction",
      "label": "Direction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "image_description",
      "label": "Image Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "image_url",
      "label": "Image Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "marketplace",
      "label": "Marketplace",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "order_id",
      "label": "Order Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "referred_email",
      "label": "Referred Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "top_k",
      "label": "Top K",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    }
  ],
  "ai-e-commerce-agent-source-workflow": [
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Campaigns.jsx"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Campaigns.jsx"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "google",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Campaigns.jsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "draft",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Campaigns.jsx"
    },
    {
      "name": "targetAudience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Campaigns.jsx"
    },
    {
      "name": "allow_actions = false",
      "label": "Allow Actions = False",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticCSBot.js"
    },
    {
      "name": "customer_id",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticCSBot.js"
    },
    {
      "name": "messages = []",
      "label": "Messages = []",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticCSBot.js"
    },
    {
      "name": "cart_snapshot",
      "label": "Cart Snapshot",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "current_password",
      "label": "Current Password",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "image_url",
      "label": "Image Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "lead_time_days",
      "label": "Lead Time Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "new_password",
      "label": "New Password",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "productId",
      "label": "Product Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "recommended_action",
      "label": "Recommended Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "variant",
      "label": "Variant",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "customer_segment",
      "label": "Customer Segment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "objective",
      "label": "Objective",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "product_ids",
      "label": "Product Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "trigger_event",
      "label": "Trigger Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "affiliate_code",
      "label": "Affiliate Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "amount_cents",
      "label": "Amount Cents",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "direction",
      "label": "Direction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "image_description",
      "label": "Image Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "marketplace",
      "label": "Marketplace",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "order_id",
      "label": "Order Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "referred_email",
      "label": "Referred Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "top_k",
      "label": "Top K",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    }
  ],
  "ai-e-commerce-agent-ai-tools": [
    {
      "name": "budget",
      "label": "Budget",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Campaigns.jsx"
    },
    {
      "name": "name",
      "label": "Name",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Campaigns.jsx"
    },
    {
      "name": "platform",
      "label": "Platform",
      "type": "text",
      "defaultValue": "google",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Campaigns.jsx"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "text",
      "defaultValue": "draft",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Campaigns.jsx"
    },
    {
      "name": "targetAudience",
      "label": "Target Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Campaigns.jsx"
    },
    {
      "name": "allow_actions = false",
      "label": "Allow Actions = False",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticCSBot.js"
    },
    {
      "name": "customer_id",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticCSBot.js"
    },
    {
      "name": "messages = []",
      "label": "Messages = []",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/agenticCSBot.js"
    },
    {
      "name": "cart_snapshot",
      "label": "Cart Snapshot",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "content",
      "label": "Content",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "current_password",
      "label": "Current Password",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "image_url",
      "label": "Image Url",
      "type": "file",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "lead_time_days",
      "label": "Lead Time Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "new_password",
      "label": "New Password",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "productId",
      "label": "Product Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "recommended_action",
      "label": "Recommended Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "variant",
      "label": "Variant",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiExtra.js"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "customer_segment",
      "label": "Customer Segment",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "date_range",
      "label": "Date Range",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "objective",
      "label": "Objective",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "product_ids",
      "label": "Product Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "trigger_event",
      "label": "Trigger Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiNew.js"
    },
    {
      "name": "affiliate_code",
      "label": "Affiliate Code",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "amount_cents",
      "label": "Amount Cents",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "direction",
      "label": "Direction",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "image_description",
      "label": "Image Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "marketplace",
      "label": "Marketplace",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "order_id",
      "label": "Order Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "referred_email",
      "label": "Referred Email",
      "type": "email",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    },
    {
      "name": "top_k",
      "label": "Top K",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "backend/src/routes/aiPass5.js"
    }
  ],
  "ai-marketplace-builder-platform-gap-ai-buyer-intent-3rjxsr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-buyer-intent.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-buyer-intent.js"
    }
  ],
  "ai-marketplace-builder-platform-gap-ai-content-quality-scorer-1y7u2f-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-content-quality-scorer.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-content-quality-scorer.js"
    }
  ],
  "ai-marketplace-builder-platform-gap-ai-template-recommender-1p75mx-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-template-recommender.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-template-recommender.js"
    }
  ],
  "ai-marketplace-builder-platform-gap-ai-version-summarizer-14d0z5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-version-summarizer.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-version-summarizer.js"
    }
  ],
  "ai-marketplace-builder-platform-marketplace-curator-agent-wmliaf-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Marketplace Curator Agent source input context",
      "options": [],
      "required": false,
      "source": "server/routes/marketplace-curator-agent.js"
    }
  ],
  "ai-marketplace-builder-platform-ai-center-6kwsg5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Center source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AICenter.js"
    }
  ],
  "ai-marketplace-builder-platform-ai-tools-page-uo1rbq-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Tools Page source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/AIToolsPage.js"
    }
  ],
  "ai-marketplace-builder-platform-gap-agentic-amr2uz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap Agentic source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAgentic.jsx"
    }
  ],
  "ai-marketplace-builder-platform-gap-ai-buyer-intent-m5bgl1-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Buyer Intent source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiBuyerIntent.jsx"
    }
  ],
  "ai-marketplace-builder-platform-gap-ai-content-quality-scorer-1mhgsx-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Content Quality Scorer source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiContentQualityScorer.jsx"
    }
  ],
  "ai-marketplace-builder-platform-gap-ai-template-recommender-12sw3e-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Template Recommender source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiTemplateRecommender.jsx"
    }
  ],
  "ai-marketplace-builder-platform-gap-ai-version-summarizer-1jo040-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Gap AI Version Summarizer source input context",
      "options": [],
      "required": false,
      "source": "client/src/pages/GapAiVersionSummarizer.jsx"
    }
  ],
  "ai-marketplace-builder-platform-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Marketplace Curator Agent source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-buyer-intent.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-buyer-intent.js"
    }
  ],
  "ai-marketplace-builder-platform-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Marketplace Curator Agent source input context",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-buyer-intent.js"
    },
    {
      "name": "input",
      "label": "Input",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "server/routes/gap-ai-buyer-intent.js"
    }
  ],
  "ai-pricing-optimizer-ai-insights-sjslxo-exact-ai": [
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Pricing",
        "Competitor",
        "Demand",
        "Trend"
      ],
      "required": true,
      "source": "frontend/src/pages/AIInsights.js"
    },
    {
      "name": "content",
      "label": "Related Products",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "New",
        "Reviewed"
      ],
      "required": false,
      "source": "frontend/src/pages/AIInsights.js"
    },
    {
      "name": "insight_type",
      "label": "Title",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Pricing",
        "Competitor",
        "Demand",
        "Trend",
        "High",
        "Medium",
        "Low"
      ],
      "required": false,
      "source": "frontend/src/pages/AIInsights.js"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Pricing",
        "Competitor",
        "Demand",
        "Trend",
        "High",
        "Medium",
        "Low",
        "New",
        "Reviewed"
      ],
      "required": false,
      "source": "frontend/src/pages/AIInsights.js"
    },
    {
      "name": "related_products",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Comma-separated product names",
      "options": [
        "New",
        "Reviewed"
      ],
      "required": false,
      "source": "frontend/src/pages/AIInsights.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "select",
      "defaultValue": "new",
      "placeholder": "",
      "options": [
        "High",
        "Medium",
        "Low",
        "New",
        "Reviewed"
      ],
      "required": false,
      "source": "frontend/src/pages/AIInsights.js"
    }
  ],
  "ai-pricing-optimizer-ai-usage-stats-195fs7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Usage Stats source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIUsageStats.js"
    }
  ],
  "ai-pricing-optimizer-cf-agentic-pricing-optimization-page-1mt6ur-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the CF Agentic Pricing Optimization Page source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/CFAgenticPricingOptimizationPage.js"
    }
  ],
  "ai-pricing-optimizer-email-verifications-46bd9z-exact-ai": [
    {
      "name": "expires_at",
      "label": "Verified",
      "type": "datetime-local",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "False",
        "True"
      ],
      "required": true,
      "source": "frontend/src/pages/EmailVerifications.js"
    },
    {
      "name": "user_id",
      "label": "User ID",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "False",
        "True"
      ],
      "required": true,
      "source": "frontend/src/pages/EmailVerifications.js"
    },
    {
      "name": "token",
      "label": "User ID",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "False",
        "True"
      ],
      "required": false,
      "source": "frontend/src/pages/EmailVerifications.js"
    },
    {
      "name": "verified",
      "label": "Token",
      "type": "select",
      "defaultValue": "false",
      "placeholder": "",
      "options": [
        "False",
        "True"
      ],
      "required": false,
      "source": "frontend/src/pages/EmailVerifications.js"
    }
  ],
  "ai-pricing-optimizer-custom-feat01-agentic-pricing-optimization-1q5imh-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Custom Feat01 Agentic Pricing Optimization source input context",
      "options": [],
      "required": false,
      "source": "backend/routes/customFeat01_AgenticPricingOptimization.js"
    }
  ],
  "ai-pricing-optimizer-source-workflow": [
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Pricing",
        "Competitor",
        "Demand",
        "Trend"
      ],
      "required": true,
      "source": "frontend/src/pages/AIInsights.js"
    },
    {
      "name": "content",
      "label": "Related Products",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "New",
        "Reviewed"
      ],
      "required": false,
      "source": "frontend/src/pages/AIInsights.js"
    },
    {
      "name": "insight_type",
      "label": "Title",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Pricing",
        "Competitor",
        "Demand",
        "Trend",
        "High",
        "Medium",
        "Low"
      ],
      "required": false,
      "source": "frontend/src/pages/AIInsights.js"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Pricing",
        "Competitor",
        "Demand",
        "Trend",
        "High",
        "Medium",
        "Low",
        "New",
        "Reviewed"
      ],
      "required": false,
      "source": "frontend/src/pages/AIInsights.js"
    },
    {
      "name": "related_products",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Comma-separated product names",
      "options": [
        "New",
        "Reviewed"
      ],
      "required": false,
      "source": "frontend/src/pages/AIInsights.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "select",
      "defaultValue": "new",
      "placeholder": "",
      "options": [
        "High",
        "Medium",
        "Low",
        "New",
        "Reviewed"
      ],
      "required": false,
      "source": "frontend/src/pages/AIInsights.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Usage Stats source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIUsageStats.js"
    },
    {
      "name": "expires_at",
      "label": "Verified",
      "type": "datetime-local",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "False",
        "True"
      ],
      "required": true,
      "source": "frontend/src/pages/EmailVerifications.js"
    },
    {
      "name": "user_id",
      "label": "User ID",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "False",
        "True"
      ],
      "required": true,
      "source": "frontend/src/pages/EmailVerifications.js"
    },
    {
      "name": "token",
      "label": "User ID",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "False",
        "True"
      ],
      "required": false,
      "source": "frontend/src/pages/EmailVerifications.js"
    },
    {
      "name": "verified",
      "label": "Token",
      "type": "select",
      "defaultValue": "false",
      "placeholder": "",
      "options": [
        "False",
        "True"
      ],
      "required": false,
      "source": "frontend/src/pages/EmailVerifications.js"
    }
  ],
  "ai-pricing-optimizer-ai-tools": [
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Pricing",
        "Competitor",
        "Demand",
        "Trend"
      ],
      "required": true,
      "source": "frontend/src/pages/AIInsights.js"
    },
    {
      "name": "content",
      "label": "Related Products",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "New",
        "Reviewed"
      ],
      "required": false,
      "source": "frontend/src/pages/AIInsights.js"
    },
    {
      "name": "insight_type",
      "label": "Title",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Pricing",
        "Competitor",
        "Demand",
        "Trend",
        "High",
        "Medium",
        "Low"
      ],
      "required": false,
      "source": "frontend/src/pages/AIInsights.js"
    },
    {
      "name": "priority",
      "label": "Priority",
      "type": "select",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "Pricing",
        "Competitor",
        "Demand",
        "Trend",
        "High",
        "Medium",
        "Low",
        "New",
        "Reviewed"
      ],
      "required": false,
      "source": "frontend/src/pages/AIInsights.js"
    },
    {
      "name": "related_products",
      "label": "Status",
      "type": "text",
      "defaultValue": "",
      "placeholder": "Comma-separated product names",
      "options": [
        "New",
        "Reviewed"
      ],
      "required": false,
      "source": "frontend/src/pages/AIInsights.js"
    },
    {
      "name": "status",
      "label": "Status",
      "type": "select",
      "defaultValue": "new",
      "placeholder": "",
      "options": [
        "High",
        "Medium",
        "Low",
        "New",
        "Reviewed"
      ],
      "required": false,
      "source": "frontend/src/pages/AIInsights.js"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Usage Stats source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIUsageStats.js"
    },
    {
      "name": "expires_at",
      "label": "Verified",
      "type": "datetime-local",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "False",
        "True"
      ],
      "required": true,
      "source": "frontend/src/pages/EmailVerifications.js"
    },
    {
      "name": "user_id",
      "label": "User ID",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "False",
        "True"
      ],
      "required": true,
      "source": "frontend/src/pages/EmailVerifications.js"
    },
    {
      "name": "token",
      "label": "User ID",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [
        "False",
        "True"
      ],
      "required": false,
      "source": "frontend/src/pages/EmailVerifications.js"
    },
    {
      "name": "verified",
      "label": "Token",
      "type": "select",
      "defaultValue": "false",
      "placeholder": "",
      "options": [
        "False",
        "True"
      ],
      "required": false,
      "source": "frontend/src/pages/EmailVerifications.js"
    }
  ],
  "ebay-ai-demand-reputation-1usmmh-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Demand Reputation source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDemandReputation.js"
    }
  ],
  "ebay-ai-features-54hl3y-exact-ai": [
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "condition",
      "label": "Condition",
      "type": "text",
      "defaultValue": "new",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "features",
      "label": "Features",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "images",
      "label": "Images",
      "type": "file",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "price",
      "label": "Price",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "productDescription",
      "label": "Product Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "productTitle",
      "label": "Product Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    }
  ],
  "ebay-daily-deals-10fztp-exact-ai": [
    {
      "name": "page",
      "label": "Page",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DailyDeals.js"
    },
    {
      "name": "pages",
      "label": "Pages",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DailyDeals.js"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DailyDeals.js"
    }
  ],
  "ebay-dispute-detail-36b6q2-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Dispute Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DisputeDetail.js"
    }
  ],
  "ebay-order-detail-1ljtiz-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Order Detail source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/OrderDetail.js"
    }
  ],
  "ebay-product-detail-35pu23-exact-ai": [
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ProductDetail.js"
    },
    {
      "name": "open",
      "label": "Open",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ProductDetail.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "success",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ProductDetail.js"
    }
  ],
  "ebay-ai-demand-prediction-by-skucategory-gap-ai-yrg49d-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Demand Prediction By Skucategory Gap AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Batch09/AiDemandPredictionBySkucategoryGapAi.jsx"
    }
  ],
  "ebay-ai-predictive-logistics-eta-gap-ai-187iet-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Predictive Logistics Eta Gap AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Batch09/AiPredictiveLogisticsEtaGapAi.jsx"
    }
  ],
  "ebay-ai-seller-fraud-reputation-scoring-gap-ai-lak712-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Seller Fraud Reputation Scoring Gap AI source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/Batch09/AiSellerFraudReputationScoringGapAi.jsx"
    }
  ],
  "ebay-ai-1lp99l-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/ai.js"
    }
  ],
  "ebay-batch09-gap-ai-1er5ku-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Batch09 Gap AI source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/batch09GapAi.js"
    }
  ],
  "ebay-batch09-gap-nonai-1ktbm7-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Batch09 Gap Nonai source input context",
      "options": [],
      "required": false,
      "source": "backend/src/routes/batch09GapNonai.js"
    }
  ],
  "ebay-source-workflow": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Demand Reputation source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDemandReputation.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "condition",
      "label": "Condition",
      "type": "text",
      "defaultValue": "new",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "features",
      "label": "Features",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "images",
      "label": "Images",
      "type": "file",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "price",
      "label": "Price",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "productDescription",
      "label": "Product Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "productTitle",
      "label": "Product Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "page",
      "label": "Page",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DailyDeals.js"
    },
    {
      "name": "pages",
      "label": "Pages",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DailyDeals.js"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DailyDeals.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ProductDetail.js"
    },
    {
      "name": "open",
      "label": "Open",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ProductDetail.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "success",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ProductDetail.js"
    }
  ],
  "ebay-ai-tools": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the AI Demand Reputation source input context",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIDemandReputation.js"
    },
    {
      "name": "category",
      "label": "Category",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "condition",
      "label": "Condition",
      "type": "text",
      "defaultValue": "new",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "description",
      "label": "Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "features",
      "label": "Features",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "images",
      "label": "Images",
      "type": "file",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "price",
      "label": "Price",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "productDescription",
      "label": "Product Description",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "productTitle",
      "label": "Product Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "question",
      "label": "Question",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "title",
      "label": "Title",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/AIFeatures.js"
    },
    {
      "name": "page",
      "label": "Page",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DailyDeals.js"
    },
    {
      "name": "pages",
      "label": "Pages",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DailyDeals.js"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/DailyDeals.js"
    },
    {
      "name": "message",
      "label": "Message",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ProductDetail.js"
    },
    {
      "name": "open",
      "label": "Open",
      "type": "text",
      "defaultValue": "false",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ProductDetail.js"
    },
    {
      "name": "severity",
      "label": "Severity",
      "type": "text",
      "defaultValue": "success",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "frontend/src/pages/ProductDetail.js"
    }
  ],
  "shopify-route-cjotr3-exact-ai": [
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    }
  ],
  "shopify-route-12w4e9-exact-ai": [
    {
      "name": "competitorPrices",
      "label": "Competitor Prices",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/surge-pricing/route.ts"
    },
    {
      "name": "demandSignals",
      "label": "Demand Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/surge-pricing/route.ts"
    },
    {
      "name": "productId",
      "label": "Product Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/surge-pricing/route.ts"
    }
  ],
  "shopify-route-1wydkr-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/stats/route.ts"
    }
  ],
  "shopify-route-1yw41o-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/search/route.ts"
    }
  ],
  "shopify-route-1ft1ih-exact-ai": [
    {
      "name": "event",
      "label": "Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/revisions/[revisionId]/track/route.ts"
    }
  ],
  "shopify-route-1uuya0-exact-ai": [
    {
      "name": "productId",
      "label": "Product Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/review-aggregate/route.ts"
    },
    {
      "name": "reviews",
      "label": "Reviews",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/review-aggregate/route.ts"
    }
  ],
  "shopify-route-116iy3-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/results/route.ts"
    }
  ],
  "shopify-route-1jcwl5-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/recommendations/[customerId]/route.ts"
    }
  ],
  "shopify-route-plaafu-exact-ai": [
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/revisions/route.ts"
    },
    {
      "name": "revisionId",
      "label": "Revision Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/revisions/route.ts"
    }
  ],
  "shopify-route-7vsqnu-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/review-sentiment/route.ts"
    }
  ],
  "shopify-route-1jz8xd-exact-ai": [
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/generate-description/route.ts"
    },
    {
      "name": "autoSave",
      "label": "Auto Save",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/generate-description/route.ts"
    },
    {
      "name": "highlights",
      "label": "Highlights",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/generate-description/route.ts"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/generate-description/route.ts"
    }
  ],
  "shopify-route-1ihnxy-exact-ai": [
    {
      "name": "browseHistory",
      "label": "Browse History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/personalized-recs/route.ts"
    },
    {
      "name": "cartProductIds",
      "label": "Cart Product Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/personalized-recs/route.ts"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/personalized-recs/route.ts"
    },
    {
      "name": "placement",
      "label": "Placement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/personalized-recs/route.ts"
    }
  ],
  "shopify-route-eijqrd-exact-ai": [
    {
      "name": "competitor_prices",
      "label": "Competitor Prices",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/dynamic-pricing/route.ts"
    }
  ],
  "shopify-route-1v8m9x-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/demand-forecast/route.ts"
    }
  ],
  "shopify-route-16zgu0-exact-ai": [
    {
      "name": "coverageWeeks",
      "label": "Coverage Weeks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/auto-reorder-supplier/route.ts"
    },
    {
      "name": "lookbackDays",
      "label": "Lookback Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/auto-reorder-supplier/route.ts"
    },
    {
      "name": "productId",
      "label": "Product Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/auto-reorder-supplier/route.ts"
    }
  ],
  "shopify-route-17luiq-exact-ai": [
    {
      "name": "cartId",
      "label": "Cart Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/abandoned-cart-recover/route.ts"
    },
    {
      "name": "hoursSinceAbandon",
      "label": "Hours Since Abandon",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/abandoned-cart-recover/route.ts"
    },
    {
      "name": "itemSummary",
      "label": "Item Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/abandoned-cart-recover/route.ts"
    }
  ],
  "shopify-page-j5d64t-exact-ai": [
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Page source input context",
      "options": [],
      "required": false,
      "source": "src/app/(storefront)/verify-email/page.tsx"
    }
  ],
  "shopify-page-1jt0ec-exact-ai": [
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(admin)/ai-results/page.tsx"
    },
    {
      "name": "totalPages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(admin)/ai-results/page.tsx"
    }
  ],
  "shopify-source-workflow": [
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    },
    {
      "name": "competitorPrices",
      "label": "Competitor Prices",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/surge-pricing/route.ts"
    },
    {
      "name": "demandSignals",
      "label": "Demand Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/surge-pricing/route.ts"
    },
    {
      "name": "productId",
      "label": "Product Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/surge-pricing/route.ts"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/stats/route.ts"
    },
    {
      "name": "event",
      "label": "Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/revisions/[revisionId]/track/route.ts"
    },
    {
      "name": "reviews",
      "label": "Reviews",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/review-aggregate/route.ts"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/revisions/route.ts"
    },
    {
      "name": "revisionId",
      "label": "Revision Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/revisions/route.ts"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/generate-description/route.ts"
    },
    {
      "name": "autoSave",
      "label": "Auto Save",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/generate-description/route.ts"
    },
    {
      "name": "highlights",
      "label": "Highlights",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/generate-description/route.ts"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/generate-description/route.ts"
    },
    {
      "name": "browseHistory",
      "label": "Browse History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/personalized-recs/route.ts"
    },
    {
      "name": "cartProductIds",
      "label": "Cart Product Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/personalized-recs/route.ts"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/personalized-recs/route.ts"
    },
    {
      "name": "placement",
      "label": "Placement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/personalized-recs/route.ts"
    },
    {
      "name": "competitor_prices",
      "label": "Competitor Prices",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/dynamic-pricing/route.ts"
    },
    {
      "name": "coverageWeeks",
      "label": "Coverage Weeks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/auto-reorder-supplier/route.ts"
    },
    {
      "name": "lookbackDays",
      "label": "Lookback Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/auto-reorder-supplier/route.ts"
    },
    {
      "name": "cartId",
      "label": "Cart Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/abandoned-cart-recover/route.ts"
    },
    {
      "name": "hoursSinceAbandon",
      "label": "Hours Since Abandon",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/abandoned-cart-recover/route.ts"
    },
    {
      "name": "itemSummary",
      "label": "Item Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/abandoned-cart-recover/route.ts"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(admin)/ai-results/page.tsx"
    },
    {
      "name": "totalPages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(admin)/ai-results/page.tsx"
    }
  ],
  "shopify-ai-tools": [
    {
      "name": "token",
      "label": "Token",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/auth/verify-email/route.ts"
    },
    {
      "name": "competitorPrices",
      "label": "Competitor Prices",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/surge-pricing/route.ts"
    },
    {
      "name": "demandSignals",
      "label": "Demand Signals",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/surge-pricing/route.ts"
    },
    {
      "name": "productId",
      "label": "Product Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/surge-pricing/route.ts"
    },
    {
      "name": "context",
      "label": "Context",
      "type": "textarea",
      "defaultValue": "",
      "placeholder": "Paste the Route source input context",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/stats/route.ts"
    },
    {
      "name": "event",
      "label": "Event",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/revisions/[revisionId]/track/route.ts"
    },
    {
      "name": "reviews",
      "label": "Reviews",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/review-aggregate/route.ts"
    },
    {
      "name": "action",
      "label": "Action",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/revisions/route.ts"
    },
    {
      "name": "revisionId",
      "label": "Revision Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/revisions/route.ts"
    },
    {
      "name": "audience",
      "label": "Audience",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/generate-description/route.ts"
    },
    {
      "name": "autoSave",
      "label": "Auto Save",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/generate-description/route.ts"
    },
    {
      "name": "highlights",
      "label": "Highlights",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/generate-description/route.ts"
    },
    {
      "name": "tone",
      "label": "Tone",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/products/[id]/generate-description/route.ts"
    },
    {
      "name": "browseHistory",
      "label": "Browse History",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/personalized-recs/route.ts"
    },
    {
      "name": "cartProductIds",
      "label": "Cart Product Ids",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/personalized-recs/route.ts"
    },
    {
      "name": "customerId",
      "label": "Customer Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/personalized-recs/route.ts"
    },
    {
      "name": "placement",
      "label": "Placement",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/personalized-recs/route.ts"
    },
    {
      "name": "competitor_prices",
      "label": "Competitor Prices",
      "type": "number",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/dynamic-pricing/route.ts"
    },
    {
      "name": "coverageWeeks",
      "label": "Coverage Weeks",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/auto-reorder-supplier/route.ts"
    },
    {
      "name": "lookbackDays",
      "label": "Lookback Days",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/auto-reorder-supplier/route.ts"
    },
    {
      "name": "cartId",
      "label": "Cart Id",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/abandoned-cart-recover/route.ts"
    },
    {
      "name": "hoursSinceAbandon",
      "label": "Hours Since Abandon",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/abandoned-cart-recover/route.ts"
    },
    {
      "name": "itemSummary",
      "label": "Item Summary",
      "type": "text",
      "defaultValue": "",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/api/ai/abandoned-cart-recover/route.ts"
    },
    {
      "name": "total",
      "label": "Total",
      "type": "text",
      "defaultValue": "0",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(admin)/ai-results/page.tsx"
    },
    {
      "name": "totalPages",
      "label": "Total Pages",
      "type": "text",
      "defaultValue": "1",
      "placeholder": "",
      "options": [],
      "required": false,
      "source": "src/app/(admin)/ai-results/page.tsx"
    }
  ]
};
