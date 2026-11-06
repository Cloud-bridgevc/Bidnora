// Fictional sample data for the Bidnora prototype. Any resemblance to real records is coincidental.
export const seed = {
  "team": [
    {
      "name": "Engr. Bola Ogun",
      "role": "Evaluation Chair"
    },
    {
      "name": "Uche Nnadi",
      "role": "Evaluator"
    },
    {
      "name": "Amina Yusuf",
      "role": "Evaluator"
    },
    {
      "name": "Dayo Fashola",
      "role": "Procurement Analyst"
    },
    {
      "name": "Ruth Akpan",
      "role": "Observer"
    }
  ],
  "items": [
    {
      "id": "BID-401",
      "title": "Tax clearance certificate expired",
      "subtitle": "Requirement M-03 · valid tax clearance for last three years",
      "group": "Bidder B-07",
      "metrics": [
        [
          "Requirement",
          "M-03 (mandatory)"
        ],
        [
          "Document date",
          "Valid to 31 Dec 2025"
        ],
        [
          "Closing date",
          "20 Mar 2026"
        ],
        [
          "Page",
          "14"
        ]
      ],
      "flags": [
        {
          "label": "Expired document",
          "severity": "high",
          "confidence": 0.94,
          "explanation": "The tax clearance certificate on page 14 expired before the tender closing date. No newer certificate was found elsewhere in the submission.",
          "evidence": [
            [
              "Certificate validity",
              "Ends 31 Dec 2025",
              "B-07 submission p.14"
            ],
            [
              "Tender closing",
              "20 Mar 2026",
              "Tender document §2.1"
            ],
            [
              "Other certificates found",
              "None",
              "Full-text search"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "BID-402",
      "title": "Experience claim not supported",
      "subtitle": "Requirement T-02 · two similar substation projects in 5 years",
      "group": "Bidder B-03",
      "metrics": [
        [
          "Requirement",
          "T-02 (mandatory)"
        ],
        [
          "Projects claimed",
          "3"
        ],
        [
          "With completion certs",
          "1"
        ],
        [
          "Pages",
          "22–31"
        ]
      ],
      "flags": [
        {
          "label": "Missing evidence",
          "severity": "medium",
          "confidence": 0.79,
          "explanation": "Three projects are listed in the form, but completion certificates were found for only one. The other two have reference letters without dates or values.",
          "evidence": [
            [
              "Projects listed",
              "3",
              "B-03 form p.22"
            ],
            [
              "Completion certificates",
              "1 (p.27)",
              "B-03 submission"
            ],
            [
              "Undated letters",
              "2 (p.29, p.31)",
              "B-03 submission"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "BID-403",
      "title": "Unusual similarity in pricing schedules",
      "subtitle": "Identical arithmetic error in two bids",
      "group": "Bidder B-11",
      "metrics": [
        [
          "Compared with",
          "B-03"
        ],
        [
          "Shared error",
          "Line 14 total"
        ],
        [
          "Text similarity",
          "91%"
        ],
        [
          "Pages",
          "B-11 p.40 · B-03 p.38"
        ]
      ],
      "flags": [
        {
          "label": "Unusual similarity",
          "severity": "high",
          "confidence": 0.73,
          "explanation": "Both pricing schedules contain the same arithmetic error on line 14 and near-identical item descriptions. This may have an innocent cause, such as a shared template; it needs committee review.",
          "evidence": [
            [
              "Line 14 error",
              "Identical in both",
              "Pricing schedules"
            ],
            [
              "Description similarity",
              "91%",
              "Similarity model"
            ],
            [
              "Shared template source",
              "Not established",
              "Document metadata"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "BID-404",
      "title": "Conflicting company registration numbers",
      "subtitle": "Requirement M-01 · CAC certificate",
      "group": "Bidder B-05",
      "metrics": [
        [
          "Form",
          "RC 1048822"
        ],
        [
          "Certificate",
          "RC 1048282"
        ],
        [
          "Difference",
          "Two digits swapped"
        ],
        [
          "Pages",
          "3 · 9"
        ]
      ],
      "flags": [
        {
          "label": "Conflicting details",
          "severity": "low",
          "confidence": 0.68,
          "explanation": "The registration number in the bid form differs from the certificate by two transposed digits. Likely a typing error, but it should be confirmed.",
          "evidence": [
            [
              "Bid form",
              "RC 1048822",
              "B-05 form p.3"
            ],
            [
              "Certificate",
              "RC 1048282",
              "B-05 submission p.9"
            ],
            [
              "Company name",
              "Matches",
              "Both documents"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "BID-405",
      "title": "Bid security below required amount",
      "subtitle": "Requirement M-06 · bid security 2% of bid price",
      "group": "Bidder B-05",
      "metrics": [
        [
          "Bid price",
          "₦1.84bn"
        ],
        [
          "Required security",
          "₦36.8m"
        ],
        [
          "Submitted",
          "₦30.0m"
        ],
        [
          "Page",
          "12"
        ]
      ],
      "flags": [
        {
          "label": "Requirement not met",
          "severity": "high",
          "confidence": 0.88,
          "explanation": "The bank guarantee is for ₦30.0m, below 2% of the bid price (₦36.8m).",
          "evidence": [
            [
              "Bid price",
              "₦1,840,000,000",
              "B-05 form of tender"
            ],
            [
              "Guarantee",
              "₦30,000,000",
              "B-05 submission p.12"
            ],
            [
              "Rule",
              "2% of bid price",
              "Tender document §4.3"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "BID-406",
      "title": "Key staff CV missing",
      "subtitle": "Requirement T-05 · CVs for project manager and site engineer",
      "group": "Bidder B-07",
      "metrics": [
        [
          "Required CVs",
          "2"
        ],
        [
          "Found",
          "1"
        ],
        [
          "Missing",
          "Site engineer"
        ],
        [
          "Pages",
          "45–48"
        ]
      ],
      "flags": [
        {
          "label": "Missing document",
          "severity": "medium",
          "confidence": 0.83,
          "explanation": "A project manager CV is included, but no CV for the site engineer named in the staffing schedule.",
          "evidence": [
            [
              "Staffing schedule",
              "Names 2 key staff",
              "B-07 p.44"
            ],
            [
              "CVs found",
              "Project manager only",
              "B-07 p.45–48"
            ],
            [
              "Full-text search",
              "Site engineer name: 1 hit (schedule)",
              "Index"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "BID-407",
      "title": "Equipment specification deviation",
      "subtitle": "Requirement T-09 · 15MVA transformer, ONAN cooling",
      "group": "Bidder B-11",
      "metrics": [
        [
          "Required",
          "15MVA ONAN"
        ],
        [
          "Offered",
          "15MVA ONAF"
        ],
        [
          "Deviation declared",
          "No"
        ],
        [
          "Page",
          "52"
        ]
      ],
      "flags": [
        {
          "label": "Possible deviation",
          "severity": "medium",
          "confidence": 0.64,
          "explanation": "The technical datasheet lists ONAF cooling, while the specification requires ONAN. No deviation is declared. A technical evaluator should confirm whether this is acceptable.",
          "evidence": [
            [
              "Specification",
              "ONAN",
              "Tender technical spec §6.2"
            ],
            [
              "Datasheet",
              "ONAF",
              "B-11 p.52"
            ],
            [
              "Deviation schedule",
              "Empty",
              "B-11 p.55"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "BID-408",
      "title": "Audited accounts — turnover below threshold",
      "subtitle": "Requirement F-01 · average turnover ₦2bn over 3 years",
      "group": "Bidder B-03",
      "metrics": [
        [
          "Required average",
          "₦2.0bn"
        ],
        [
          "Computed average",
          "₦1.71bn"
        ],
        [
          "Years found",
          "2023–2025"
        ],
        [
          "Pages",
          "60–74"
        ]
      ],
      "flags": [
        {
          "label": "Threshold not met",
          "severity": "medium",
          "confidence": 0.76,
          "explanation": "Turnover extracted from three years of audited accounts averages ₦1.71bn. Extraction from one scanned page had low OCR confidence.",
          "evidence": [
            [
              "Turnover 2023–25",
              "₦1.52bn · ₦1.68bn · ₦1.93bn",
              "Audited accounts"
            ],
            [
              "Low-confidence page",
              "p.66 (2023)",
              "OCR quality check"
            ],
            [
              "Threshold",
              "₦2.0bn average",
              "Tender §5.1"
            ]
          ]
        }
      ],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    },
    {
      "id": "BID-409",
      "title": "All mandatory documents present",
      "subtitle": "Requirements M-01 to M-08",
      "group": "Bidder B-02",
      "metrics": [
        [
          "Mandatory requirements",
          "8"
        ],
        [
          "Evidenced",
          "8"
        ],
        [
          "Expired",
          "0"
        ],
        [
          "Pages",
          "1–36"
        ]
      ],
      "flags": [],
      "status": "open",
      "assignee": null,
      "notes": [],
      "decision": null
    }
  ]
};
