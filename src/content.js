// Site copy for Bidnora. A proposed startup concept: fictional team, illustrative pricing.
const site = {
  "name": "Bidnora",
  "tagline": "Procurement documents, checked before decisions.",
  "categories": [
    "AI",
    "Procurement",
    "Compliance"
  ],
  "about": "Bidnora helps procurement teams organise and check complex submissions. Its AI connects requirements to supporting documents so reviewers can investigate gaps consistently.",
  "logoSvg": "<rect width=\"32\" height=\"32\" rx=\"9\" fill=\"#1b1847\"/><path d=\"M10 7h9l4 4v14H10z\" fill=\"none\" stroke=\"#c7cbff\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/><path d=\"m13 18 2.5 2.5L20 15\" fill=\"none\" stroke=\"#ffcf5c\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
  "words": {
    "records": "findings",
    "decider": "procurement officials",
    "sources": "tender documents, certificates and pricing schedules",
    "model": "Document AI extracts requirements and evidence, maps each submission to the checklist, and scores missing, conflicting or unusually similar content with page-level references.",
    "store": "Amazon OpenSearch Service"
  },
  "hero": {
    "eyebrow": "Tender review, evidenced",
    "before": "Review every bid ",
    "em": "against the evidence",
    "after": ".",
    "points": [
      "Requirements extracted into a checklist",
      "Every finding linked to the page it came from",
      "Officials decide eligibility and award"
    ],
    "floatTitle": "Tax certificate expired",
    "floatText": "Bid B-07 · page 14 · dated Jan 2025"
  },
  "problem": {
    "title": "Hundreds of pages per bid, and one missing certificate can matter.",
    "text": "Tender submissions arrive as stacks of certificates, technical schedules and pricing documents. Reviewers check them by hand against long requirement lists, under time pressure, and inconsistencies slip through.",
    "fragments": [
      "A certificate expired before the closing date",
      "Experience claimed in the form but not in the references",
      "Two bids sharing identical pricing errors",
      "A checklist kept in a personal spreadsheet"
    ]
  },
  "solution": {
    "title": "A review workspace that shows its working.",
    "text": "Bidnora extracts the requirements from the tender document, maps every submission against them, and flags what is missing, conflicting or unusually similar, always with the page reference.",
    "capabilities": [
      {
        "title": "Requirement extraction",
        "text": "Turns tender documents into a structured checklist reviewers can confirm and edit.",
        "demoLabel": "Requirements found",
        "demoValue": "64 · 12 mandatory"
      },
      {
        "title": "Evidence mapping",
        "text": "Links each requirement to the certificate, schedule or page that supports it.",
        "demoLabel": "Bid B-07",
        "demoValue": "61 of 64 evidenced"
      },
      {
        "title": "Consistency checks",
        "text": "Flags missing items, conflicting details and unusual similarities between bids.",
        "demoLabel": "Similarity",
        "demoValue": "B-03 ↔ B-11 · 91%"
      }
    ]
  },
  "stepsTitle": "From document stacks to a defensible review.",
  "steps": [
    [
      "Set up",
      "Upload the tender document; Bidnora drafts the evaluation checklist for officials to confirm."
    ],
    [
      "Ingest",
      "Submissions are read, split into documents and indexed page by page."
    ],
    [
      "Check",
      "Each requirement is matched to evidence; gaps, conflicts and similarities are flagged."
    ],
    [
      "Review",
      "Evaluators examine findings, record outcomes with reasons, and the review trail builds itself."
    ]
  ],
  "audiencesTitle": "For teams that evaluate complex tenders.",
  "audiences": [
    {
      "title": "State public procurement agencies",
      "text": "Apply consistent checks across ministries and large tenders.",
      "outcome": "Consistent evaluations"
    },
    {
      "title": "Federal university procurement units",
      "text": "Review works, equipment and services tenders with small teams.",
      "outcome": "Faster, thorough reviews"
    },
    {
      "title": "Electricity distribution companies",
      "text": "Check technical compliance on equipment and contractor bids.",
      "outcome": "Fewer compliance gaps"
    },
    {
      "title": "Construction procurement departments",
      "text": "Verify certificates, experience and pricing across contractors.",
      "outcome": "Evidence on every claim"
    }
  ],
  "publicSector": {
    "title": "A documented review trail, with decisions left to officials.",
    "text": "Bidnora creates a consistent, evidenced record of how each submission was checked, while eligibility and award decisions remain with procurement officials and the law.",
    "points": [
      "Page-level references for every finding",
      "The same checks applied to every bidder",
      "Exportable evaluation records for audit and review",
      "No automated eligibility, scoring or award decisions"
    ]
  },
  "ai": {
    "title": "The model reads the documents. Officials make the decisions.",
    "intro": "Procurement decisions are legal decisions. Bidnora makes the evidence easier to examine and never decides the outcome.",
    "does": [
      "Extracts requirements from tender documents",
      "Maps each submission’s evidence to requirements",
      "Flags missing, expired or conflicting documents",
      "Highlights unusual similarities between bids for review"
    ],
    "never": [
      "Disqualifies a bidder or decides eligibility",
      "Scores bids or recommends an award",
      "Concludes that bidders colluded",
      "Changes submitted documents"
    ]
  },
  "pricing": {
    "model": "Annual licence by procurement team size and tender volume.",
    "tiers": [
      {
        "name": "Team",
        "summary": "For a procurement unit.",
        "price": "₦12m",
        "unit": "/ year",
        "features": [
          "Up to 40 tenders a year",
          "Requirement extraction",
          "Evidence mapping",
          "8 reviewer seats"
        ],
        "cta": "Request a pilot"
      },
      {
        "name": "Agency",
        "summary": "For agencies and large organisations.",
        "price": "₦38m",
        "unit": "/ year",
        "features": [
          "Up to 200 tenders a year",
          "Everything in Team",
          "Cross-bid similarity checks",
          "Unlimited seats",
          "Audit exports"
        ],
        "cta": "Request a pilot",
        "featured": true
      },
      {
        "name": "Enterprise",
        "summary": "For state-wide or group procurement.",
        "price": "Custom",
        "unit": "",
        "features": [
          "Unlimited tenders",
          "e-procurement integration",
          "Custom checklists and templates",
          "Dedicated hosting options"
        ],
        "cta": "Talk to us"
      }
    ]
  },
  "team": [
    {
      "name": "Ngozi Udeh",
      "role": "Founder/CEO",
      "initials": "NU",
      "bio": "Procurement professional with infrastructure tender experience.",
      "focus": [
        "Public procurement",
        "Infrastructure tenders",
        "Partnerships"
      ]
    },
    {
      "name": "Kabiru Sani",
      "role": "Co-founder",
      "initials": "KS",
      "bio": "Commercial contracts specialist.",
      "focus": [
        "Contracts",
        "Compliance",
        "Commercial"
      ]
    },
    {
      "name": "Temilade Ogunleye",
      "role": "CTO",
      "initials": "TO",
      "bio": "NLP engineer focused on document extraction and evidence retrieval.",
      "focus": [
        "Document AI",
        "Evidence retrieval",
        "Platform"
      ]
    }
  ],
  "faq": [
    [
      "Does Bidnora score or rank bids?",
      "No. It checks documents against requirements and flags issues with references. Scoring, eligibility and award decisions stay with the evaluation committee."
    ],
    [
      "Can it read scanned documents?",
      "Yes. Scanned PDFs are processed with OCR; findings from low-quality scans carry lower confidence and are marked for manual checking."
    ],
    [
      "What does a similarity flag mean?",
      "That two submissions share unusual content, such as identical errors or phrasing. It is a prompt to look closer, not evidence of collusion."
    ],
    [
      "Is Bidnora a live product?",
      "Not yet. Bidnora is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype runs on fictional data in your browser."
    ],
    [
      "Does the AI make decisions?",
      "No. Bidnora flags, ranks and explains. Procurement officials review the evidence and record every decision with a reason."
    ],
    [
      "How would our data be protected?",
      "In production, data would be encrypted, isolated per customer, access-controlled by role and never used to train models for other customers. Data-sharing terms are agreed before any pilot."
    ]
  ],
  "purpose": {
    "eyebrow": "Why Bidnora exists",
    "manifesto": "Every tender is a promise that public money will buy the best value, fairly. Keeping that promise means checking every claim in every bid. We want to make thorough checks the easy option, not the heroic one.",
    "purpose": "Make thorough, consistent and documented bid review achievable for every procurement team.",
    "why": "Procurement is one of the largest uses of public money. When checks are rushed or inconsistent, good bidders lose out, poor ones slip through and decisions become hard to defend.",
    "stakesTitle": "How much depends on procurement.",
    "stats": [
      {
        "value": 13,
        "prefix": "$",
        "suffix": "trn",
        "label": "Estimated amount governments spend each year on public contracts.",
        "source": "World Bank blog",
        "url": "https://blogs.worldbank.org/voices/hidden-1-trillion-halting-waste-public-procurement"
      },
      {
        "value": 12,
        "prefix": "~",
        "suffix": "%",
        "label": "Approximate share of global GDP spent through public procurement.",
        "source": "World Bank blog",
        "url": "https://blogs.worldbank.org/developmenttalk/how-large-public-procurement"
      },
      {
        "value": 1,
        "prefix": "$",
        "suffix": "trn",
        "label": "Hidden cost of waste in public procurement each year, as framed by the World Bank.",
        "source": "World Bank blog",
        "url": "https://blogs.worldbank.org/voices/hidden-1-trillion-halting-waste-public-procurement"
      }
    ],
    "changeTitle": "From manual page-turning to evidenced review.",
    "before": [
      "Checklists rebuilt by hand for each tender",
      "Certificates checked page by page",
      "Inconsistencies found late, or never",
      "Evaluation notes scattered across files"
    ],
    "after": [
      "Requirements extracted and confirmed in minutes",
      "Every requirement linked to its evidence",
      "Gaps and conflicts flagged before evaluation",
      "One evaluation record, ready for audit"
    ],
    "principlesTitle": "What we believe about procurement technology.",
    "principles": [
      [
        "Same checks for every bidder",
        "Consistency is the foundation of fairness."
      ],
      [
        "Every finding has a page",
        "If we cannot point to the evidence, we do not raise the flag."
      ],
      [
        "Officials decide",
        "Eligibility and award are legal decisions made by people."
      ],
      [
        "Similarity is not guilt",
        "Unusual patterns are questions, never conclusions."
      ],
      [
        "Records that stand up",
        "Reviews should be ready for audit, complaint or court."
      ],
      [
        "Respect bidders’ data",
        "Submissions are confidential and handled accordingly."
      ]
    ],
    "letterTitle": "Why we are building Bidnora.",
    "letter": [
      "Ngozi has sat on evaluation committees with stacks of submissions taller than the table. She knows how hard it is to check every certificate under deadline, and how much rides on getting it right.",
      "Kabiru saw the consequences in contracts that went wrong after award. Temilade had built document AI that could find and cite evidence across thousands of pages, and wanted it used where it matters.",
      "Bidnora is our attempt to make careful review the default: every requirement checked, every finding referenced, and every decision left with the officials who are accountable for it."
    ],
    "visionTitle": "Where Bidnora is going.",
    "visionIntro": "From single tenders to procurement-wide insight.",
    "vision": [
      {
        "stage": "Now",
        "title": "Concept and prototype",
        "text": "An interactive prototype on fictional data, and conversations with procurement teams."
      },
      {
        "stage": "Next",
        "title": "Evaluation pilots",
        "text": "Re-reviewing closed tenders with early partners to measure accuracy."
      },
      {
        "stage": "Then",
        "title": "Live evaluations",
        "text": "Checklists and evidence mapping used in active tenders."
      },
      {
        "stage": "Later",
        "title": "Procurement insight",
        "text": "Patterns across tenders that help agencies improve their processes."
      }
    ],
    "statsNote": "Figures are published estimates from the sources linked; they describe the wider problem, not results from this product."
  },
  "app": {
    "title": "Bid evaluation review",
    "subtitle": "Findings from submissions to a fictional tender for a 33kV substation upgrade, mapped to evaluation requirements.",
    "itemNoun": "finding",
    "itemNounPlural": "findings",
    "groupLabel": "bidder",
    "queueTitle": "Findings queue",
    "humanNote": "Findings point to evidence. The evaluation committee decides.",
    "decisions": {
      "confirm": "Confirm finding",
      "dismiss": "Not an issue",
      "escalate": "Refer to committee"
    },
    "roles": [
      {
        "id": "lead",
        "label": "Evaluation Chair",
        "can": [
          "view",
          "note",
          "assign",
          "decide",
          "escalate",
          "export"
        ]
      },
      {
        "id": "reviewer",
        "label": "Evaluator",
        "can": [
          "view",
          "note",
          "assign",
          "decide"
        ]
      },
      {
        "id": "analyst",
        "label": "Procurement Analyst",
        "can": [
          "view",
          "note",
          "escalate"
        ]
      },
      {
        "id": "auditor",
        "label": "Observer",
        "can": [
          "view",
          "export"
        ]
      }
    ],
    "examples": [
      "Which findings need review first?",
      "Summarise the review status",
      "Show Bidder B-07",
      "Explain BID-404"
    ],
    "refuse": "\\b(disqualif|award|winner|win the|collu|rig(ged|ging)?\\b|blacklist|reject (the|this) bid|who should)",
    "refuseText": "Bidnora can show the evidence behind a finding, but eligibility, disqualification, collusion conclusions and award decisions belong to the evaluation committee under procurement law.",
    "refuseExamples": [
      "Should we disqualify Bidder B-07?",
      "Who should win the award?",
      "Did B-03 and B-11 collude?"
    ]
  },
  "slug": "bidnora",
  "url": "https://www.bidnora.com",
  "email": "hello@bidnora.com",
  "stepsNote": "Bidnora recommends and ranks. Every outcome is recorded by a named person, with a reason, in an audit log.",
  "safeguards": [
    [
      "People decide",
      "Every finding is confirmed, dismissed or escalated by procurement officials, never by the model."
    ],
    [
      "Evidence first",
      "Each flag links to the tender documents, certificates and pricing schedules behind it, so a reviewer can check the reasoning before acting."
    ],
    [
      "Confidence shown",
      "Scores come with a confidence level and the data gaps that lower it, so weak signals are not mistaken for facts."
    ],
    [
      "Role-based access",
      "Permissions are set per role: who can view, comment, assign, decide, escalate or export."
    ],
    [
      "Complete audit trail",
      "Assignments, notes and decisions are time-stamped with the person and reason, and can be exported."
    ],
    [
      "Your data stays yours",
      "Customer data is isolated per tenant, encrypted at rest and in transit, and never used to train models for other customers."
    ]
  ],
  "architectureIntro": "How Bidnora would run in production: ingestion of tender documents, certificates and pricing schedules, models that score and explain, and a review workspace with a full audit trail.",
  "architecture": [
    [
      "Ingest",
      "Amazon S3 · AWS Transfer Family · API Gateway",
      "Secure upload and API connections for tender documents, certificates and pricing schedules."
    ],
    [
      "Prepare",
      "AWS Glue · AWS Step Functions",
      "Validation, cleaning and matching of records, with data-quality checks logged."
    ],
    [
      "Model",
      "Amazon SageMaker",
      "Document AI extracts requirements and evidence, maps each submission to the checklist, and scores missing, conflicting or unusually similar content with page-level references."
    ],
    [
      "Store",
      "Amazon Aurora PostgreSQL · Amazon OpenSearch Service",
      "Records, scores, evidence links and decisions in a tenant-isolated database."
    ],
    [
      "Review",
      "AWS Amplify · Amazon CloudFront · Amazon Cognito",
      "The web workspace, with single sign-on and role-based permissions."
    ],
    [
      "Govern",
      "AWS CloudTrail · AWS KMS · Amazon CloudWatch",
      "Encryption keys per tenant, access logging and monitoring of model behaviour."
    ]
  ],
  "early": {
    "title": "Pilot Bidnora with your own team.",
    "text": "We are looking for a small number of early partners to shape Bidnora. A pilot starts with a sample of your historical data and a fixed review period, so you can judge the results before committing.",
    "steps": [
      "Tell us about your team and the records you work with.",
      "A founder replies personally to arrange a short call.",
      "We agree a pilot scope, data-sharing terms and how success will be measured."
    ]
  }
};
export default site;
