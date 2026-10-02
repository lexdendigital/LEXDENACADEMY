window.LEXDEN_COURSE = {
  courseId: 'gbl',
  title: 'Google Business & Local Leads Masterclass',
  subtitle: 'Assessment Workspace • LEXDEN ACADEMY',
  brand: 'LEXDEN ACADEMY',
  version: '1.2.0-assessment',
  assignments: {
    'm1-foundation-audit': {
      id: 'm1-foundation-audit', module: 'Module 1',
      title: 'Foundation Audit Challenge',
      shortTitle: 'Foundations',
      time: '90–150 minutes',
      objective: 'Inspect real public business profiles, map the customer journey, test eligibility, and produce a professional Foundation File without touching ownership controls.',
      prerequisites: [],
      next: 'm2-gbp-optimization',
      carryFrom: [],
      standards: ['Discovery and search reasoning', 'Classification and eligibility', 'Ownership/access discipline', 'Evidence quality', 'Client clarity'],
      fields: [
        {section:'Student & submission identity', fields:[
          {k:'studentName',label:'Full name',type:'text',required:true,placeholder:'Use the same name you use in Google Classroom'},
          {k:'studentEmail',label:'Google Classroom email',type:'email',required:true,placeholder:'name@example.com',hint:'This site cannot automatically read the signed-in Google Classroom email. Enter the same email manually. It is included in the encrypted submission.'},
          {k:'caseMode',label:'Case type',type:'radio',required:true,options:['Real business with permission','Public demo / practice business']}
        ]},
        {section:'Business case',fields:[
          {k:'businessName',label:'Business name',type:'text',required:true},
          {k:'businessCity',label:'City / location',type:'text',required:true},
          {k:'businessNiche',label:'Business category / niche',type:'text',required:true},
          {k:'businessWebsite',label:'Website URL (if available)',type:'url',required:false},
          {k:'businessGBPUrl',label:'Existing Google Business Profile URL (if available)',type:'url'},
          {k:'businessFacts',label:'Business fact sheet',type:'textarea',required:true,rows:5,hint:'State what is directly known: what the business does, where customers interact, contact details, hours, service model, and anything relevant to eligibility.'}
        ]},
        {section:'Customer discovery',fields:[
          {k:'query1',label:'Customer-style search #1',type:'text',required:true,placeholder:'Example: beads shop near Ibadan'},
          {k:'observation1',label:'What Search showed',type:'textarea',required:true,rows:3},
          {k:'query2',label:'Customer-style search #2',type:'text',required:true},
          {k:'observation2',label:'What Maps showed',type:'textarea',required:true,rows:3},
          {k:'query3',label:'Brand / exact-name search',type:'text',required:true},
          {k:'observation3',label:'Exact-name result and profile status',type:'textarea',required:true,rows:3}
        ]},
        {section:'Classification & eligibility',fields:[
          {k:'businessType',label:'Business classification',type:'radio',required:true,options:['Storefront','Service-area business','Hybrid','Uncertain - explain below']},
          {k:'classificationReason',label:'Why this classification is correct',type:'textarea',required:true,rows:4},
          {k:'eligibilityDecision',label:'Eligibility decision',type:'radio',required:true,options:['Eligible based on evidence','Not eligible based on evidence','Insufficient evidence']},
          {k:'eligibilityEvidence',label:'Eligibility evidence / uncertainty',type:'textarea',required:true,rows:4},
          {k:'existingProfile',label:'Existing profile check',type:'radio',required:true,options:['Claimed','Unclaimed','No profile found','Duplicate / conflicting result','Uncertain']},
          {k:'duplicateCheck',label:'Duplicate-profile check and evidence',type:'textarea',required:true,rows:4}
        ]},
        {section:'Ownership & access plan',fields:[
          {k:'ownerPlan',label:'Ownership / access plan',type:'textarea',required:true,rows:5,hint:'Explain who should remain the legitimate Owner and why an agency/student should request Manager-level access when work begins.'},
          {k:'profileStructure',label:'Draft profile structure',type:'textarea',required:true,rows:5,hint:'Include business type, category direction, hours format, address/service-area treatment, phone, website and any other setup choices you can justify.'}
        ]},
        {section:'Three-profile audit evidence',fields:[
          {k:'threeProfileAudit',label:'3-profile audit',type:'textarea',required:true,rows:12,hint:'Use one clearly separated block for Profile 1, Profile 2 and Profile 3. For each: business, location, query used, Search result, Maps result, category, address/service area, phone/hours, profile status, key issue/opportunity, and evidence URL(s).'}
        ]},
        {section:'Customer journey map',fields:[
          {k:'journeyMap',label:'Map the customer journey',type:'textarea',required:true,rows:8,hint:'Show the chain from customer intent → search → result selection → profile interaction → action (call/visit/site/etc.). Identify where this business is visible or weak.'},
          {k:'clientScript',label:'One-paragraph client explanation',type:'textarea',required:true,rows:6,hint:'Explain what a Google Business Profile is in plain language for a non-technical owner.'}
        ]},
        {section:'Evidence checklist',fields:[
          {k:'m1checkSearch',label:'I searched like a real customer and documented the query',type:'checkbox',required:true},
          {k:'m1checkSearchMaps',label:'I compared Search and Maps observations',type:'checkbox',required:true},
          {k:'m1checkType',label:'I classified the business with a reason',type:'checkbox',required:true},
          {k:'m1checkEligibility',label:'I tested eligibility using evidence',type:'checkbox',required:true},
          {k:'m1checkExisting',label:'I checked for an existing profile before proposing a new one',type:'checkbox',required:true},
          {k:'m1checkOwner',label:'I protected legitimate owner control',type:'checkbox',required:true},
          {k:'m1checkDuplicate',label:'I documented a duplicate check',type:'checkbox',required:true},
          {k:'m1checkReadable',label:'My Foundation File can be understood by a non-technical business owner',type:'checkbox',required:true}
        ]},
        {section:'Supporting evidence files',fields:[{k:'supportingFiles',label:'Supporting evidence files (optional)',type:'file',required:false,multiple:true,hint:'Add screenshots, PDFs, spreadsheets, documents, audio or video that support your work. Files are compressed into the encrypted submission and must keep the final .lexden package under 100 MiB.'}]},
        {section:'Reflection',fields:[
          {k:'reflection',label:'What did the evidence change your mind about?',type:'textarea',required:true,rows:5},
          {k:'integrity',label:'Academic-integrity declaration',type:'checkbox',required:true,checkboxText:'I confirm that this submission represents my own work and that any permitted outside assistance has been used within the course rules.'}
        ]}
      ]
    },
    'm2-gbp-optimization': {
      id:'m2-gbp-optimization',module:'Module 2',title:'GBP Optimization Challenge',shortTitle:'GBP Optimization',time:'2–3 hours',objective:'Take a real or demo profile through a complete evidence-based optimization sprint with priorities, changes, quality control and measurement.',prerequisites:['m1-foundation-audit'],next:'m3-local-visibility',carryFrom:['studentName','studentEmail','businessName','businessCity','businessNiche','businessWebsite','businessGBPUrl'],standards:['Technical accuracy','Policy compliance','Evidence-backed decisions','Change discipline','Measurement plan'],
      fields:[
        {section:'Student & case',fields:[{k:'studentName',label:'Full name',type:'text',required:true,readonlyFromPrev:true},{k:'studentEmail',label:'Google Classroom email',type:'email',required:true,readonlyFromPrev:false},{k:'caseMode',label:'Case type',type:'radio',required:true,options:['Real business with permission','Public demo / practice business']}]},
        {section:'Carried-forward business',fields:[{k:'businessName',label:'Business name',type:'text',required:true,readonlyFromPrev:true},{k:'businessCity',label:'City / location',type:'text',required:true,readonlyFromPrev:true},{k:'businessNiche',label:'Business category / niche',type:'text',required:true,readonlyFromPrev:true},{k:'businessWebsite',label:'Website URL',type:'url',readonlyFromPrev:true},{k:'businessGBPUrl',label:'GBP URL',type:'url',readonlyFromPrev:true}]},
        {section:'Before-state audit',fields:[{k:'beforeState',label:'Before-state audit',type:'textarea',required:true,rows:10,hint:'Cover primary/secondary category direction, business info, hours, services/products, description, media, reviews, posts, attributes, Q&A, website links, obvious gaps and policy-risk items. Mark unknowns as unknown.'}]},
        {section:'Priority matrix',fields:[{k:'priorityMatrix',label:'Top priority changes',type:'textarea',required:true,rows:12,hint:'Create at least 5 rows in this structure: PRIORITY | CHANGE | OBSERVED PROBLEM | REASON | EVIDENCE URL | IMPLEMENTED/SIMULATED | EXPECTED EFFECT | RISK/DEPENDENCY.'}]},
        {section:'Optimization plan',fields:[{k:'optimizationPlan',label:'Step-by-step optimization plan',type:'textarea',required:true,rows:10},{k:'changeLog',label:'Change log',type:'textarea',required:true,rows:8,hint:'Date/sequence | exact change | before | after | why | evidence. Do not invent measurements.'}]},
        {section:'Quality control',fields:[{k:'qcCategories',label:'Category choices checked against evidence and current Google guidance',type:'checkbox',required:true},{k:'qcInfo',label:'Business information is consistent and accurate',type:'checkbox',required:true},{k:'qcMedia',label:'Media choices are authentic and relevant',type:'checkbox',required:true},{k:'qcReviews',label:'Review responses are professional and policy-safe',type:'checkbox',required:true},{k:'qcAccess',label:'Owner/Manager access is handled correctly',type:'checkbox',required:true},{k:'qcNoGuarantees',label:'No ranking, lead or revenue guarantee is stated',type:'checkbox',required:true},{k:'policyStatement',label:'Policy compliance statement',type:'textarea',required:true,rows:4}],},
        {section:'Supporting evidence files',fields:[{k:'supportingFiles',label:'Supporting evidence files (optional)',type:'file',required:false,multiple:true,hint:'Add screenshots, PDFs, spreadsheets, documents, audio or video that support your work. Files are compressed into the encrypted submission and must keep the final .lexden package under 100 MiB.'}]},
        {section:'Measurement plan',fields:[{k:'measurementPlan',label:'Expected measurement plan',type:'textarea',required:true,rows:9,hint:'Baseline metric | measurement source | measurement window | what success would look like | attribution limitation. Separate expected measurement from claimed results.'},{k:'m2Reflection',label:'Reflection: Which change required the strongest evidence?',type:'textarea',required:true,rows:4},{k:'integrity',label:'Academic-integrity declaration',type:'checkbox',required:true,checkboxText:'I confirm that this submission represents my own work and that any permitted outside assistance has been used within the course rules.'}]}
      ]
    },
    'm3-local-visibility': {
      id:'m3-local-visibility',module:'Module 3',title:'Local Visibility Challenge',shortTitle:'Local Visibility',time:'2–3 hours',objective:'Connect Google Business Profile, website, citations, reputation, local landing pages and measurement into an evidence-labeled roadmap.',prerequisites:['m2-gbp-optimization'],next:'m4-lead-generation',carryFrom:['studentName','studentEmail','businessName','businessCity','businessNiche','businessWebsite','businessGBPUrl'],standards:['Search-intent analysis','Audit completeness','Evidence labeling','Prioritization','Measurement'],
      fields:[
        {section:'Student & case',fields:[{k:'studentName',label:'Full name',type:'text',required:true,readonlyFromPrev:true},{k:'studentEmail',label:'Google Classroom email',type:'email',required:true},{k:'caseMode',label:'Case type',type:'radio',required:true,options:['Real business with permission','Public demo / practice business']}]},
        {section:'Carried-forward business',fields:[{k:'businessName',label:'Business name',type:'text',required:true,readonlyFromPrev:true},{k:'businessCity',label:'City / location',type:'text',required:true,readonlyFromPrev:true},{k:'businessNiche',label:'Business category / niche',type:'text',required:true,readonlyFromPrev:true},{k:'businessWebsite',label:'Website URL',type:'url',readonlyFromPrev:true},{k:'businessGBPUrl',label:'GBP URL',type:'url',readonlyFromPrev:true}]},
        {section:'Search-intent map',fields:[{k:'searchIntentMap',label:'Search-intent map',type:'textarea',required:true,rows:10,hint:'At least 5 searches. For each: query | intent | likely customer need | current visibility | observed competing result | action opportunity.'}]},
        {section:'Competitor matrix',fields:[{k:'competitorMatrix',label:'Competitor matrix',type:'textarea',required:true,rows:10,hint:'Use at least 3 competitors. Compare category, profile completeness, reviews/reputation, website/landing-page experience, content/citations, trust signals, and gaps. Use observed facts only.'}]},
        {section:'Local SEO audit',fields:[{k:'seoAudit',label:'Local SEO audit',type:'textarea',required:true,rows:12,hint:'Audit website crawl/indexability basics, local relevance, location pages, titles/headings, internal linking, NAP consistency, structured data where relevant, GBP/website alignment, citations, reputation and conversion paths.'}]},
        {section:'Website / GBP alignment',fields:[{k:'alignmentReport',label:'Website + GBP alignment report',type:'textarea',required:true,rows:8}]},
        {section:'Local landing page',fields:[{k:'landingPagePlan',label:'Local landing-page plan',type:'textarea',required:true,rows:8,hint:'Page purpose, intended search intent, title/heading direction, local proof, services, CTA, internal links, evidence and limitations.'}]},
        {section:'Citations & reputation',fields:[{k:'citationReputation',label:'Citation and reputation findings',type:'textarea',required:true,rows:9}]},
        {section:'Evidence-labeled roadmap',fields:[{k:'roadmap',label:'Priority roadmap',type:'textarea',required:true,rows:12,hint:'Each recommendation must carry an evidence label such as OFFICIAL GOOGLE, ACADEMIC, INDUSTRY, PRACTITIONER, OBSERVED, INFERENCE, UNCERTAIN or DISPUTED. Also state dependency and priority.'},{k:'measurementFramework',label:'Measurement framework',type:'textarea',required:true,rows:8}],},
        {section:'Supporting evidence files',fields:[{k:'supportingFiles',label:'Supporting evidence files (optional)',type:'file',required:false,multiple:true,hint:'Add screenshots, PDFs, spreadsheets, documents, audio or video that support your work. Files are compressed into the encrypted submission and must keep the final .lexden package under 100 MiB.'}]},
        {section:'Reflection',fields:[{k:'m3Reflection',label:'Reflection: Which recommendation is strongest because of direct evidence?',type:'textarea',required:true,rows:5},{k:'integrity',label:'Academic-integrity declaration',type:'checkbox',required:true,checkboxText:'I confirm that this submission represents my own work and that any permitted outside assistance has been used within the course rules.'}]}
      ]
    },
    'm4-lead-generation': {
      id:'m4-lead-generation',module:'Module 4',title:'Lead Generation Challenge',shortTitle:'Lead Generation',time:'3–5 hours',objective:'Build an ethical local prospecting machine with a clear ICP, 100 real prospects, traceable scoring, personalized outreach and follow-up.',prerequisites:['m3-local-visibility'],next:'m5-client-engagement',carryFrom:['studentName','studentEmail','businessCity','businessNiche'],standards:['Prospect quality','Traceable scoring','Ethical sourcing','Personalization','Pipeline discipline'],
      fields:[
        {section:'Student & targeting',fields:[{k:'studentName',label:'Full name',type:'text',required:true,readonlyFromPrev:true},{k:'studentEmail',label:'Google Classroom email',type:'email',required:true},{k:'targetCity',label:'Target city / geography',type:'text',required:true,readonlyFromPrev:true},{k:'targetNiche',label:'Target niche',type:'text',required:true,readonlyFromPrev:true},{k:'icp',label:'Ideal Client Profile (ICP)',type:'textarea',required:true,rows:10,hint:'Define who you want, where they operate, what business signals fit, what problems make them a fit, who is excluded, and why.'}]},
        {section:'100-prospect dataset',fields:[{k:'prospectCsv',label:'100-prospect CSV',type:'csv',required:true,multiple:false,accept:'.csv,text/csv',special:'prospectCsv',hint:'Upload exactly 100 prospect rows. The site validates the required columns and basic score/rank integrity before submission.'},{k:'csvTemplate',label:'CSV template',type:'template-download',special:'prospect-template'}]},
        {section:'Scoring model',fields:[{k:'scoringModel',label:'Scoring model and weights',type:'textarea',required:true,rows:12,hint:'Explain your 0–100 model. At minimum address profile completeness, visibility opportunity, category quality, website conversion readiness, reputation opportunity, competitor gap, business urgency, decision-maker reachability, active-operation evidence, strategic fit and geographic opportunity. Do not infer sensitive personal information.'}]},
        {section:'Personalized outreach',fields:[{k:'outreachSample1',label:'Personalized outreach sample - channel 1',type:'textarea',required:true,rows:9},{k:'outreachSample2',label:'Personalized outreach sample - channel 2',type:'textarea',required:true,rows:9},{k:'qualificationLog',label:'Qualification log - at least 5 examples',type:'textarea',required:true,rows:10,hint:'For each: prospect | qualification evidence | why fit/not fit | next action.'},{k:'followUpSchedule',label:'Follow-up schedule',type:'textarea',required:true,rows:8}],},
        {section:'Supporting evidence files',fields:[{k:'supportingFiles',label:'Supporting evidence files (optional)',type:'file',required:false,multiple:true,hint:'Add screenshots, PDFs, spreadsheets, documents, audio or video that support your work. Files are compressed into the encrypted submission and must keep the final .lexden package under 100 MiB.'}]},
        {section:'Integrity & reflection',fields:[{k:'ethicalSourcing',label:'Ethical sourcing statement',type:'textarea',required:true,rows:4,hint:'Explain how the prospects were found from lawful, public or authorized business information and how you avoided spam, impersonation or sensitive-data inference.'},{k:'m4Reflection',label:'Reflection: What makes a score traceable rather than a guess?',type:'textarea',required:true,rows:5},{k:'integrity',label:'Academic-integrity declaration',type:'checkbox',required:true,checkboxText:'I confirm that this submission represents my own work and that any permitted outside assistance has been used within the course rules.'}]}
      ]
    },
    'm5-client-engagement': {
      id:'m5-client-engagement',module:'Module 5',title:'Client Engagement Challenge',shortTitle:'Client Engagement',time:'2–4 hours',objective:'Run a complete simulated client lifecycle from prospect and discovery through proposal, onboarding, delivery, reporting and renewal.',prerequisites:['m4-lead-generation'],next:'m6-growth-operator',carryFrom:['studentName','studentEmail','targetCity','targetNiche'],standards:['Discovery quality','Scope clarity','Pricing rationale','Evidence honesty','Client communication'],
      fields:[
        {section:'Student & case',fields:[{k:'studentName',label:'Full name',type:'text',required:true,readonlyFromPrev:true},{k:'studentEmail',label:'Google Classroom email',type:'email',required:true},{k:'caseMode',label:'Simulation mode',type:'radio',required:true,options:['Instructor/demo scenario','Authorized real business']},{k:'clientBusiness',label:'Client/business name',type:'text',required:true},{k:'clientContext',label:'Client context and initial problem',type:'textarea',required:true,rows:6}]},
        {section:'Conversation',fields:[{k:'conversationLog',label:'Full simulated conversation log',type:'textarea',required:true,rows:16,hint:'Show prospect → reply → discovery → diagnosis → proposal discussion → objection → agreement. Keep the interaction realistic and professional.'}]},
        {section:'Proposal & pricing',fields:[{k:'proposal',label:'Client proposal',type:'textarea',required:true,rows:14,hint:'Problem | scope | price | timeline | call to action. Do not claim results that have not happened.'},{k:'pricingRationale',label:'Pricing rationale',type:'textarea',required:true,rows:8,hint:'Explain the scope, complexity, value and package logic behind the price.'}]},
        {section:'Onboarding & access',fields:[{k:'onboardingChecklist',label:'Onboarding checklist',type:'textarea',required:true,rows:10},{k:'accessChecklist',label:'Access plan',type:'textarea',required:true,rows:6,hint:'Owner retains ownership. Student/agency requests only the access level needed to do the work.'}]},
        {section:'Delivery & reporting',fields:[{k:'deliveryEvidence',label:'Delivery evidence summary',type:'textarea',required:true,rows:10},{k:'monthlyReport',label:'Monthly report',type:'textarea',required:true,rows:12,hint:'Baseline | work completed | current state | measured observations | attribution limitations | next actions.'},{k:'renewalConversation',label:'Renewal conversation',type:'textarea',required:true,rows:8}],},
        {section:'Supporting evidence files',fields:[{k:'supportingFiles',label:'Supporting evidence files (optional)',type:'file',required:false,multiple:true,hint:'Add screenshots, PDFs, spreadsheets, documents, audio or video that support your work. Files are compressed into the encrypted submission and must keep the final .lexden package under 100 MiB.'}]},
      {section:'Reflection',fields:[{k:'m5Reflection',label:'Reflection: Which stage most needs honesty about uncertainty?',type:'textarea',required:true,rows:5},{k:'integrity',label:'Academic-integrity declaration',type:'checkbox',required:true,checkboxText:'I confirm that this submission represents my own work and that any permitted outside assistance has been used within the course rules.'}]}
      ]
    },
    'm6-growth-operator': {
      id:'m6-growth-operator',module:'Module 6',title:'Local Growth Operator Challenge',shortTitle:'Growth Operator',time:'2–4 hours',objective:'Demonstrate integrated consulting judgment through diagnosis, productized services, scaling logic, honest case-study structure and a 90-day operating plan.',prerequisites:['m5-client-engagement'],next:'capstone-local-growth-operator',carryFrom:['studentName','studentEmail','clientBusiness','targetCity','targetNiche'],standards:['Diagnosis','Prioritization','Productization','Case-study honesty','Operational planning'],
      fields:[
        {section:'Student & case',fields:[{k:'studentName',label:'Full name',type:'text',required:true,readonlyFromPrev:true},{k:'studentEmail',label:'Google Classroom email',type:'email',required:true},{k:'clientBusiness',label:'Business selected for this project',type:'text',required:true,readonlyFromPrev:true},{k:'targetCity',label:'Location',type:'text',required:true,readonlyFromPrev:true},{k:'targetNiche',label:'Niche',type:'text',required:true,readonlyFromPrev:true}]},
        {section:'Advanced diagnosis',fields:[{k:'diagnosisScenario',label:'Diagnosis scenario',type:'textarea',required:true,rows:10,hint:'Identify multiple plausible causes, distinguish evidence from inference, state what you would test next, and sequence the response.'}]},
        {section:'Productized service',fields:[{k:'serviceOffer',label:'Productized offer',type:'textarea',required:true,rows:9,hint:'Target client, scope, inputs, process, output, delivery cadence, exclusions, QA and handoff.'},{k:'delegationPlan',label:'Basic delegation/scaling plan',type:'textarea',required:true,rows:8}],},
        {section:'Honest case study',fields:[{k:'caseStudy',label:'Case-study framework',type:'textarea',required:true,rows:12,hint:'Situation | evidence | work performed | measured observations | limitations | lessons. Never convert simulated results into real claims.'}]},
        {section:'90-day operator plan',fields:[{k:'plan90',label:'90-day operating plan',type:'textarea',required:true,rows:14,hint:'Days 1–30, 31–60, 61–90. Include activities, systems, client workflow, quality checks and measurable indicators without income guarantees.'}]},
        {section:'Supporting evidence files',fields:[{k:'supportingFiles',label:'Supporting evidence files (optional)',type:'file',required:false,multiple:true,hint:'Add screenshots, PDFs, spreadsheets, documents, audio or video that support your work. Files are compressed into the encrypted submission and must keep the final .lexden package under 100 MiB.'}]},
        {section:'Reflection',fields:[{k:'m6Reflection',label:'Reflection: What would you refuse to promise a client, even if asked?',type:'textarea',required:true,rows:5},{k:'integrity',label:'Academic-integrity declaration',type:'checkbox',required:true,checkboxText:'I confirm that this submission represents my own work and that any permitted outside assistance has been used within the course rules.'}]}
      ]
    },
    'capstone-local-growth-operator': {
      id:'capstone-local-growth-operator',module:'Capstone',title:'Local Growth Operator Capstone',shortTitle:'CAPSTONE',time:'6–12+ hours',objective:'Combine the strongest evidence from Modules 1–6 into one graduation-standard end-to-end local growth engagement and portfolio case study.',prerequisites:['m6-growth-operator'],next:null,carryFrom:['studentName','studentEmail','clientBusiness','targetCity','targetNiche','businessWebsite','businessGBPUrl'],standards:['Completeness','Internal consistency','Evidence and research quality','Professional execution','Diagnosis/reasoning','Prioritization','Client usefulness','Measurement honesty','Documentation','Portfolio readiness'],
      fields:[
        {section:'Capstone identity',fields:[{k:'studentName',label:'Full name',type:'text',required:true,readonlyFromPrev:true},{k:'studentEmail',label:'Google Classroom email',type:'email',required:true},{k:'capstoneBusiness',label:'Selected business',type:'text',required:true,readonlyFromPrev:true},{k:'capstoneCity',label:'City / location',type:'text',required:true,readonlyFromPrev:true},{k:'capstoneNiche',label:'Niche',type:'text',required:true,readonlyFromPrev:true},{k:'capstoneMode',label:'Project mode',type:'radio',required:true,options:['Own business','Authorized family/friend business','Instructor demo business','Authorized real client']}]},
        {section:'Carry-forward integration',fields:[{k:'carryForwardSummary',label:'Carry-forward summary',type:'textarea',required:true,rows:10,hint:'The site automatically brings forward information available from previous assignments on this device. Review it, correct anything that changed, and explain what evidence you reused.'}],},
        {section:'1. Discovery & eligibility',fields:[{k:'discoveryReport',label:'Business discovery report',type:'textarea',required:true,rows:10},{k:'eligibilityAssessment',label:'Eligibility assessment',type:'textarea',required:true,rows:8}]},
        {section:'2. GBP & local SEO',fields:[{k:'gbpAudit',label:'GBP audit',type:'textarea',required:true,rows:10},{k:'localSeoAudit',label:'Local SEO audit',type:'textarea',required:true,rows:10},{k:'competitorAnalysis',label:'Competitor analysis',type:'textarea',required:true,rows:10}]},
        {section:'3. Lead generation & reputation',fields:[{k:'leadGenAudit',label:'Lead-generation audit + scoring',type:'textarea',required:true,rows:10},{k:'optimizationRoadmap',label:'Optimization roadmap',type:'textarea',required:true,rows:10},{k:'reputationSystem',label:'Reputation / review system',type:'textarea',required:true,rows:8},{k:'prospectingStrategy',label:'Prospecting strategy',type:'textarea',required:true,rows:8}]},
        {section:'4. Implementation & evidence',fields:[{k:'implementedWork',label:'Implemented profile work',type:'textarea',required:true,rows:10},{k:'landingRecommendations',label:'Website / local landing-page recommendations',type:'textarea',required:true,rows:8},{k:'implementationEvidence',label:'Implementation evidence index',type:'textarea',required:true,rows:8,hint:'For each evidence item: filename or link | what it proves | date/context | any limitation.'}]},
        {section:'5. Client package',fields:[{k:'capstoneProposal',label:'Client proposal',type:'textarea',required:true,rows:12},{k:'capstonePricing',label:'Pricing and scope rationale',type:'textarea',required:true,rows:8},{k:'capstoneOnboarding',label:'Onboarding system',type:'textarea',required:true,rows:8}]},
        {section:'6. Measurement & reporting',fields:[{k:'kpiDashboard',label:'KPI dashboard structure',type:'textarea',required:true,rows:9},{k:'performanceReport',label:'Performance report',type:'textarea',required:true,rows:10},{k:'executiveSummary',label:'Client-facing executive summary',type:'textarea',required:true,rows:8}]},
        {section:'7. Learning & portfolio',fields:[{k:'lessonsLearned',label:'Lessons learned',type:'textarea',required:true,rows:8},{k:'futureGrowthPlan',label:'Future growth plan',type:'textarea',required:true,rows:8},{k:'portfolioCaseStudy',label:'Portfolio case study',type:'textarea',required:true,rows:12,hint:'Tell the story as a professional portfolio artifact. Clearly label what was simulated, authorized, observed, measured and not attributable.'}]},
        {section:'Supporting evidence files',fields:[{k:'supportingFiles',label:'Supporting evidence files (optional)',type:'file',required:false,multiple:true,hint:'Add screenshots, PDFs, spreadsheets, documents, audio or video that support your work. Files are compressed into the encrypted submission and must keep the final .lexden package under 100 MiB.'}]},
        {section:'Final integrity gate',fields:[{k:'capstoneChecklist',label:'I have checked that every required capstone deliverable is present and internally consistent.',type:'checkbox',required:true},{k:'noFakeResults',label:'I have not presented simulated or illustrative outcomes as measured real results.',type:'checkbox',required:true},{k:'capstoneIntegrity',label:'Capstone integrity declaration',type:'checkbox',required:true,checkboxText:'I confirm that this capstone represents my own work, that evidence is authentic or clearly labeled as simulated/illustrative, and that I have not intentionally misrepresented results.'}]}
      ]
    }
  }
};

window.LEXDEN_PUBLIC_KEY = {"kty":"RSA","n":"ucrvIOPM8vStb781l9Jx3FDjAogYP68HlWBYvkO9sURLGqRDEEqME65272oiNFvKN4CxBQvXRNt88nk9vdytMwKc7LL8knxxQqds5Ql0fMQBuw778-8ep7JLPj3LeAtVF-Pk16o8Lipj5tubWWU9csGzRkLiA_M08qnbwCwJ4ZgxKzRs7hgAws97Qt-J_ERm5gEZ5TjbdHGUbs8VghAblm4lDZwVC7Jehj4_G2ydxLVbgeqNTWYPRhf35whCE7ej2CZ3-TcuoB7WbXaPJDEzw6dxyK0OYWA9YSZVSEpgNXZRnN-1nCAkEaplYnpoHmX4Q6Vt-YXvLaidDIs22lv-WL_Mhi4yvSBb1tgMZHLdDrrgRJNNVIdMTwks4kOtEB0nW_m8CTkUNMwjWx3CReiAa-6oU1_jYqKLiRVWnS0iPRL5mbcigNX3F52L-Y_UJX_pOiidwJq5f0X4rzpM9lcOanuuAcYWYFFj9_JAbxYLBowzpWJsY4sRWDHVG2DrCmAZ","e":"AQAB","alg":"RSA-OAEP-256","ext":true,"key_ops":["encrypt","wrapKey"]};

(function(){
  'use strict';
  const te = new TextEncoder();
  const td = new TextDecoder();

  const crcTable = (() => {
    const t = new Uint32Array(256);
    for (let n=0;n<256;n++){
      let c=n;
      for(let k=0;k<8;k++) c=(c&1)?(0xEDB88320^(c>>>1)):(c>>>1);
      t[n]=c>>>0;
    }
    return t;
  })();
  function crc32(bytes){
    let c=0xFFFFFFFF;
    for(const b of bytes) c=crcTable[(c^b)&0xFF]^(c>>>8);
    return (c^0xFFFFFFFF)>>>0;
  }
  function u16(n){ return new Uint8Array([n&255,(n>>>8)&255]); }
  function u32(n){ return new Uint8Array([n&255,(n>>>8)&255,(n>>>16)&255,(n>>>24)&255]); }
  function concat(parts){
    let total=0; for(const p of parts) total+=p.length;
    const out=new Uint8Array(total); let off=0;
    for(const p of parts){ out.set(p,off); off+=p.length; }
    return out;
  }
  function dosTimeDate(date){
    const d=date instanceof Date?date:new Date();
    const year=Math.min(2107,Math.max(1980,d.getFullYear()));
    const time=((d.getHours()<<11)|(d.getMinutes()<<5)|Math.floor(d.getSeconds()/2));
    const datev=(((year-1980)<<9)|((d.getMonth()+1)<<5)|d.getDate());
    return {time,timeDate:u16(time),date:u16(datev)};
  }
  async function deflateRaw(bytes){
    if(typeof CompressionStream!=='function') throw new Error('This browser does not provide CompressionStream. Please use a current Chrome/Edge/Firefox/Safari browser.');
    const cs=new CompressionStream('deflate-raw');
    const ab=await new Response(new Blob([bytes]).stream().pipeThrough(cs)).arrayBuffer();
    return new Uint8Array(ab);
  }
  async function createZip(entries,onProgress){
    if(!Array.isArray(entries) || entries.length===0) throw new Error('Submission ZIP cannot be empty.');
    if(entries.length>0xFFFF) throw new Error('Submission contains too many files for classic ZIP format.');
    const local=[]; const central=[]; let offset=0; const now=dosTimeDate(new Date());
    const seenNames=new Set();
    for(let i=0;i<entries.length;i++){
      const e=entries[i];
      const normalizedName=String(e?.name||'');
      if(!normalizedName) throw new Error('ZIP entry name cannot be empty.');
      if(normalizedName.length>65535) throw new Error('A ZIP entry name is too long.');
      if(seenNames.has(normalizedName)) throw new Error('Duplicate ZIP entry name: '+normalizedName);
      seenNames.add(normalizedName);
      const nameBytes=te.encode(normalizedName);
      if(nameBytes.length>65535) throw new Error('A ZIP entry filename is too long after UTF-8 encoding.');
      const raw=e.data instanceof Uint8Array?e.data:new Uint8Array(e.data||[]);
      if(raw.length>0xFFFFFFFF) throw new Error('A ZIP entry is larger than the classic ZIP 4 GiB limit.');
      const compressed=await deflateRaw(raw);
      if(compressed.length>0xFFFFFFFF) throw new Error('A compressed ZIP entry exceeds the classic ZIP 4 GiB limit.');
      const crc=crc32(raw);
      const lh=concat([
        new Uint8Array([0x50,0x4b,0x03,0x04]), u16(20), u16(0x0800), u16(8), now.timeDate, now.date,
        u32(crc),u32(compressed.length),u32(raw.length),u16(nameBytes.length),u16(0),nameBytes
      ]);
      local.push(lh,compressed);
      const ch=concat([
        new Uint8Array([0x50,0x4b,0x01,0x02]),u16(20),u16(20),u16(0x0800),u16(8),now.timeDate,now.date,
        u32(crc),u32(compressed.length),u32(raw.length),u16(nameBytes.length),u16(0),u16(0),u16(0),u16(0),u32(0),u32(offset),nameBytes
      ]);
      central.push(ch);
      offset+=lh.length+compressed.length;
      if(offset>0xFFFFFFFF) throw new Error('ZIP exceeds the classic ZIP 4 GiB limit.');
      if(onProgress) onProgress('compress',i+1,entries.length,normalizedName);
    }
    const cd=concat(central); const body=concat(local); const cdOffset=body.length;
    if(cd.length>0xFFFFFFFF || cdOffset>0xFFFFFFFF) throw new Error('ZIP central directory exceeds classic ZIP limits.');
    const eocd=concat([new Uint8Array([0x50,0x4b,0x05,0x06]),u16(0),u16(0),u16(entries.length),u16(entries.length),u32(cd.length),u32(cdOffset),u16(0)]);
    return concat([body,cd,eocd]);
  }
  window.LEXDEN_ZIP={crc32,createZip,concat};
})();

(function(){
  'use strict';
  const te=new TextEncoder();
  const A={name:'RSA-OAEP',hash:'SHA-256'};
  const G={name:'AES-GCM',length:256};
  const MAGIC=te.encode('LEXDEN02');
  const CHUNK_SIZE=1024*1024;
  function b64u(bytes){
    let s=''; const b=bytes instanceof Uint8Array?bytes:new Uint8Array(bytes);
    for(let i=0;i<b.length;i+=0x8000) s+=String.fromCharCode(...b.subarray(i,i+0x8000));
    return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
  }
  function concat(parts){
    let total=0; for(const p of parts) total+=p.length;
    const out=new Uint8Array(total); let off=0;
    for(const p of parts){out.set(p,off);off+=p.length;}
    return out;
  }
  function u32(n){return new Uint8Array([n&255,(n>>>8)&255,(n>>>16)&255,(n>>>24)&255]);}
  function utf8(s){return te.encode(String(s));}
  async function sha256Hex(bytes){
    const d=new Uint8Array(await crypto.subtle.digest('SHA-256',bytes));
    return Array.from(d,x=>x.toString(16).padStart(2,'0')).join('');
  }
  async function importPublicKey(jwk){
    if(!jwk) throw new Error('LEXDEN public encryption key is not configured.');
    return crypto.subtle.importKey('jwk',jwk,A,true,['wrapKey','encrypt']);
  }
  function randomId(){
    if(crypto.randomUUID) return crypto.randomUUID();
    const b=crypto.getRandomValues(new Uint8Array(16)); b[6]=(b[6]&15)|64; b[8]=(b[8]&63)|128;
    const h=Array.from(b,x=>x.toString(16).padStart(2,'0')).join('');
    return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`;
  }
  function aadFor(header,index){
    return utf8([header.courseId,header.assignmentId,header.submissionId,header.studentFingerprint,header.zipSha256,index].join('|'));
  }
  async function encryptSubmission({zipBytes,metadata,onProgress}){
    if(!window.LEXDEN_PUBLIC_KEY) throw new Error('Public encryption key is missing.');
    const publicKey=await importPublicKey(window.LEXDEN_PUBLIC_KEY);
    const aesKey=await crypto.subtle.generateKey(G,true,['encrypt','decrypt']);
    const wrapped=new Uint8Array(await crypto.subtle.wrapKey('raw',aesKey,publicKey,A));
    const zipSha256=await sha256Hex(zipBytes);
    const studentFingerprint=await sha256Hex(utf8(String(metadata.studentEmail||'').trim().toLowerCase()+'|'+String(metadata.studentName||'').trim()));
    const header={
      format:'LEXDEN02',version:2,courseId:metadata.courseId,assignmentId:metadata.assignmentId,
      assignmentTitle:metadata.assignmentTitle,module:metadata.module,submissionId:metadata.submissionId,
      createdAt:metadata.createdAt,studentFingerprint,wrappedAesKey:b64u(wrapped),chunkSize:CHUNK_SIZE,
      zipSize:zipBytes.length,zipSha256,chunks:[]
    };
    const encrypted=[]; let i=0;
    for(let o=0;o<zipBytes.length;o+=CHUNK_SIZE,i++){
      const chunk=zipBytes.subarray(o,Math.min(zipBytes.length,o+CHUNK_SIZE));
      const iv=crypto.getRandomValues(new Uint8Array(12));
      const cipher=new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv,additionalData:aadFor(header,i)},aesKey,chunk));
      header.chunks.push({iv:b64u(iv),cipherSize:cipher.length,plainSize:chunk.length});
      encrypted.push(cipher);
      if(onProgress)onProgress(i+1,Math.ceil(zipBytes.length/CHUNK_SIZE));
    }
    const headerBytes=utf8(JSON.stringify(header));
    const container=concat([MAGIC,u32(headerBytes.length),headerBytes,...encrypted]);
    if(container.length>100*1024*1024) throw new Error('The finished encrypted submission is larger than 100 MiB. Remove or reduce attachments and try again.');
    return container;
  }
  window.LEXDENCrypto={randomId,utf8,concat,sha256Hex,encryptSubmission,CHUNK_SIZE};
})();
;

(function(){
  'use strict';
  function ascii(s){
    return String(s).replace(/[\u2018\u2019\u201c\u201d\u2013\u2014\u2026\u00a0]/g, m=>({'\u2018':"'",'\u2019':"'",'\u201c':'"','\u201d':'"','\u2013':'-','\u2014':'-','\u2026':'...','\u00a0':' '})[m]).replace(/[^\x20-\x7E\r\n]/g,'?');
  }
  function esc(s){return ascii(s).replace(/\\/g,'\\\\').replace(/\(/g,'\\(').replace(/\)/g,'\\)');}
  function wrap(text,max){
    const words=ascii(text).split(/\s+/); const out=[]; let line='';
    for(const w of words){
      if((line+' '+w).trim().length>max){if(line)out.push(line); line=w;} else line=(line+' '+w).trim();
    }
    if(line)out.push(line); return out;
  }
  function makePdf({title,lines,filename='lexden-assessment.pdf'}){
    const pageW=595.28,pageH=841.89, margin=42, font=10.5, leading=15;
    const contentPages=[]; let cur=[]; let y=pageH-margin;
    const pushLine=(txt,size=font,bold=false)=>{
      cur.push(`BT /F${bold?2:1} ${size} Tf 1 0 0 1 ${margin.toFixed(2)} ${y.toFixed(2)} Tm (${esc(txt)}) Tj ET`); y-=leading+(size>12?4:0);
    };
    pushLine('LEXDEN ACADEMY',15,true); y-=2; pushLine(title,13,true); y-=8;
    for(const raw of lines){
      const chunks=wrap(raw,96); if(!chunks.length){y-=leading;continue;}
      for(const c of chunks){ if(y<margin+30){contentPages.push(cur);cur=[];y=pageH-margin;}
        pushLine(c); }
      y-=4;
    }
    contentPages.push(cur);
    const objs=[]; const offsets=[];
    const add=s=>{offsets.push(0);objs.push(s);return objs.length;};
    const catalog=add(''); const pages=add(''); const font1=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'); const font2=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');
    const pageIds=[];
    for(const commands of contentPages){
      const stream=commands.join('\n'); const sid=add(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
      const pid=add(`<< /Type /Page /Parent ${pages} 0 R /MediaBox [0 0 ${pageW} ${pageH}] /Resources << /Font << /F1 ${font1} 0 R /F2 ${font2} 0 R >> >> /Contents ${sid} 0 R >>`); pageIds.push(pid);
    }
    objs[catalog-1]=`<< /Type /Catalog /Pages ${pages} 0 R >>`;
    objs[pages-1]=`<< /Type /Pages /Kids [${pageIds.map(id=>id+' 0 R').join(' ')}] /Count ${pageIds.length} >>`;
    let pdf='%PDF-1.4\n%LEXDEN\n'; const realOffsets=[];
    for(let i=0;i<objs.length;i++){realOffsets[i]=pdf.length;pdf+=`${i+1} 0 obj\n${objs[i]}\nendobj\n`;}
    const xref=pdf.length; pdf+=`xref\n0 ${objs.length+1}\n0000000000 65535 f \n`; for(let i=0;i<realOffsets.length;i++)pdf+=String(realOffsets[i]).padStart(10,'0')+' 00000 n \n';
    pdf+=`trailer\n<< /Size ${objs.length+1} /Root ${catalog} 0 R >>\nstartxref\n${xref}\n%%EOF`;
    return {bytes:new TextEncoder().encode(pdf),filename};
  }
  window.LEXDEN_PDF={makePdf};
})();

(function(){
'use strict';

/* ---------------------------
   LEXDEN ACADEMY APP RUNTIME
   v1.2.0
   --------------------------- */
(() => {
  'use strict';

  const COURSE = window.LEXDEN_COURSE;
  const A = COURSE.assignments;
  const STORAGE = 'lexden_academy_assessment_v1';
  const RAW_ATTACHMENT_SAFE_LIMIT = 95 * 1024 * 1024;
  const MAX_ATTACHMENT_COUNT = 250;
  const MAX_CSV_BYTES = 5 * 1024 * 1024;
  const FINAL_PACKAGE_LIMIT = 100 * 1024 * 1024;

  const loading = document.getElementById('loading');
  const gate = document.getElementById('gate');
  const workspace = document.getElementById('workspace');

  const params = new URLSearchParams(location.search);
  const COURSE_ID = params.get('course') || COURSE.courseId;
  const ASSIGNMENT_ID = params.get('assignment') || window.LEXDEN_TEST_ASSIGNMENT;

  let bootFinished = false;

  const interaction = {
    startedAt: new Date().toISOString(),
    hiddenTransitions: 0,
    focusLosses: 0,
    pasteEvents: 0,
    activeMs: 0,
    lastVisibleAt: document.visibilityState === 'visible' ? Date.now() : null
  };

  window.__LEXDEN_SELECTED_FILES = {};
  window.__LEXDEN_CSV_TEXT = {};
  window.__LEXDEN_CSV_RECORDS = {};
  window.__LEXDEN_LAST_SUBMISSION = null;

  const STORAGE_SCHEMA_VERSION = 2;
  const STORAGE_BYTES_LIMIT = 4_500_000;
  const IDENTITY_STORAGE = 'lexden_bootstrap_identity_v2';
  const SESSION_STORAGE = 'lexden_academy_assessment_session_v2';
  const PROFILE_PREFIX = 'email:';
  let storageMode = 'memory';
  let storageWarning = 'Browser storage is unavailable. Keep this page open and download your final submission before leaving or refreshing.';
  let storageCorrupt = false;
  let storageDirty = false;
  let saveTimer = null;

  function emailKey(email) {
    return String(email || '').trim().toLowerCase();
  }

  function isValidStudentEmail(email){
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailKey(email));
  }

  function profileBucketKey(email) {
    return PROFILE_PREFIX + encodeURIComponent(emailKey(email));
  }

  function emptyMap(){ return Object.create(null); }

  function normalizeAssignmentMap(raw){
    const out=emptyMap();
    if(!raw || typeof raw!=='object' || Array.isArray(raw)) return out;
    for(const [id,value] of Object.entries(raw)){
      if(value && typeof value==='object' && !Array.isArray(value)) out[id]={...value};
    }
    return out;
  }

  function normalizeBucketMap(raw){
    const out=emptyMap();
    if(!raw || typeof raw!=='object' || Array.isArray(raw)) return out;
    for(const [key,value] of Object.entries(raw)){
      if(!value || typeof value!=='object' || Array.isArray(value)) continue;
      const safeKey=key.startsWith(PROFILE_PREFIX) ? key : profileBucketKey(key);
      out[safeKey]=normalizeAssignmentMap(value);
    }
    return out;
  }

  function makeEmptyState(){
    return {schemaVersion:STORAGE_SCHEMA_VERSION,profiles:emptyMap(),submissions:emptyMap()};
  }

  function getStorage(kind){
    try { return kind==='local' ? window.localStorage : window.sessionStorage; }
    catch { return null; }
  }

  function storageCandidates(preferred){
    const local=getStorage('local');
    const session=getStorage('session');
    return preferred==='session'
      ? [['session',session],['local',local]]
      : [['local',local],['session',session]];
  }

  function parseStoredState(raw){
    if(!raw) return makeEmptyState();
    const parsed=JSON.parse(raw);
    return {
      schemaVersion:STORAGE_SCHEMA_VERSION,
      profiles:normalizeBucketMap(parsed?.profiles),
      submissions:normalizeBucketMap(parsed?.submissions)
    };
  }

  function loadState() {
    const candidates=storageCandidates();
    let firstAvailableKind=null;
    for(const [kind,store] of candidates){
      if(!store) continue;
      if(firstAvailableKind===null) firstAvailableKind=kind;
      try{
        const raw=store.getItem(STORAGE);
        if(!raw) continue;
        try{
          const loaded=parseStoredState(raw);
          storageMode=kind;
          storageWarning=kind==='session'
            ? 'Persistent local storage is unavailable, so this draft is being kept for this browser tab only. Keep the tab open and download the final submission.'
            : '';
          return loaded;
        }catch{
          storageCorrupt=true;
        }
      }catch{
        // Try the next storage backend.
      }
    }
    if(firstAvailableKind!==null){
      storageMode=firstAvailableKind;
      storageWarning=storageCorrupt
        ? 'Saved assessment data could not be read. A new working copy has been opened; do not refresh until you have downloaded any recovered/fresh submission.'
        : firstAvailableKind==='session'
          ? 'Persistent local storage is unavailable, so this draft is being kept for this browser tab only. Keep the tab open and download the final submission.'
          : '';
    }
    return makeEmptyState();
  }

  const state = loadState();

  function serializeState(){
    const serialized=JSON.stringify({schemaVersion:STORAGE_SCHEMA_VERSION,profiles:state.profiles,submissions:state.submissions});
    if(new TextEncoder().encode(serialized).byteLength>STORAGE_BYTES_LIMIT) throw new Error('The saved draft has grown too large for reliable browser storage. Keep your answers concise enough for local saving and download your final submission promptly.');
    return serialized;
  }

  function persistStateNow(){
    try{
      const serialized=serializeState();
      const preferred=storageMode==='session'?'session':'local';
      for(const [kind,store] of storageCandidates(preferred)){
        if(!store) continue;
        try{
          store.setItem(STORAGE,serialized);
          try { (kind==='session'?getStorage('local'):getStorage('session'))?.removeItem(STORAGE); } catch {}
          storageMode=kind;
          storageDirty=false;
          storageWarning=kind==='session'
            ? 'Persistent local storage is unavailable, so this draft is being kept for this browser tab only. Keep the tab open and download the final submission.'
            : '';
          return true;
        }catch{
          // Try the next backend.
        }
      }
      throw new Error('No browser storage backend accepted the current draft.');
    }catch(error){
      storageDirty=true;
      storageWarning=error?.message || 'Browser storage could not save the current draft.';
      return false;
    }
  }

  function queueSaveState(){
    storageDirty=true;
    if(saveTimer) clearTimeout(saveTimer);
    saveTimer=setTimeout(()=>{saveTimer=null;persistStateNow();},350);
    return true;
  }

  function flushSaveState(){
    if(saveTimer){clearTimeout(saveTimer);saveTimer=null;}
    return persistStateNow();
  }

  function readIdentity(){
    for(const [,store] of storageCandidates(storageMode==='session'?'session':'local')){
      if(!store) continue;
      try{
        const raw=store.getItem(IDENTITY_STORAGE);
        if(!raw) continue;
        const parsed=JSON.parse(raw);
        if(parsed && typeof parsed==='object' && !Array.isArray(parsed)) return parsed;
      }catch{}
    }
    return {};
  }

  function writeIdentity(draft){
    const value=JSON.stringify({studentName:draft.studentName||'',studentEmail:draft.studentEmail||''});
    const preferred=storageMode==='session'?'session':'local';
    for(const [kind,store] of storageCandidates(preferred)){
      if(!store) continue;
      try{store.setItem(IDENTITY_STORAGE,value); try{(kind==='session'?getStorage('local'):getStorage('session'))?.removeItem(IDENTITY_STORAGE);}catch{} if(kind==='session') storageMode='session'; return true;}catch{}
    }
    return false;
  }

  function completeBoot() {
    bootFinished = true;
    if (typeof window.__LEXDEN_BOOT_MARK_OK__ === 'function') window.__LEXDEN_BOOT_MARK_OK__();
    if (loading) loading.setAttribute('aria-busy','false');
    show(loading, false);
  }

  function show(el, yes = true) {
    if (el) el.classList.toggle('hidden', !yes);
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, char => ({
      '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;'
    }[char]));
  }

  function cssSafeKey(value) {
    return String(value).replace(/[^a-zA-Z0-9_-]/g, '_');
  }

  function getDraft(email, id) {
    const ek = profileBucketKey(email);
    if (!state.profiles[ek] || typeof state.profiles[ek] !== 'object') state.profiles[ek]=emptyMap();
    if (!state.profiles[ek][id] || typeof state.profiles[ek][id] !== 'object') state.profiles[ek][id]={};
    return state.profiles[ek][id];
  }

  function getExistingDraft(email, id) {
    return state.profiles?.[profileBucketKey(email)]?.[id] || null;
  }

  function getSubmission(email, id) {
    return state.submissions?.[profileBucketKey(email)]?.[id] || null;
  }

  function hasPrereqs(email, assignment) {
    return (assignment.prerequisites || []).every(id => Boolean(getSubmission(email, id)?.lockedAt));
  }

  function currentAssignment() {
    return Object.prototype.hasOwnProperty.call(A, ASSIGNMENT_ID) ? A[ASSIGNMENT_ID] : null;
  }

  function notify(message, good = true) {
    const node = document.querySelector('#status');
    if (!node) return;
    node.textContent = message;
    node.className = 'status show ' + (good ? 'good' : 'bad');
  }

  function secureInt(maxExclusive) {
    if (maxExclusive <= 1) return 0;
    try {
      const buf = new Uint32Array(1);
      crypto.getRandomValues(buf);
      return buf[0] % maxExclusive;
    } catch {
      return Math.floor(Math.random() * maxExclusive);
    }
  }

  function defensePromptPool(assignmentId) {
    const pools = {
      'm1-foundation-audit': [
        d => `Defend your classification of ${d.businessName || 'the selected business'}. What is the strongest piece of evidence supporting your classification, and what uncertainty would you verify before client work begins?`,
        d => `Imagine a skeptical client challenges your Foundation File for ${d.businessName || 'this business'}. Which single finding would you defend first, and why?`,
        d => `For ${d.businessName || 'this business'}, explain one thing you deliberately refused to assume from the available public evidence and how you would verify it.`
      ],
      'm2-gbp-optimization': [
        d => `Choose your most important proposed change for ${d.businessName || 'this business'} and defend the priority using the evidence you recorded.`,
        d => `Which optimization in your ${d.businessName || 'business'} sprint has the greatest risk of being wrong, and what verification would you perform before implementation?`,
        d => `Explain one change you would NOT make to ${d.businessName || 'this business'} yet, and why the evidence is not strong enough.`
      ],
      'm3-local-visibility': [
        d => `Which recommendation in your local-visibility roadmap for ${d.businessName || 'this business'} is strongest because of direct evidence? Defend it.`,
        d => `Identify one ranking or visibility claim you intentionally labeled as uncertain or inferred. Explain why that evidence tier matters.`,
        d => `Which competitor observation most changed your roadmap for ${d.businessName || 'this business'}? Explain the link from observation to action.`
      ],
      'm4-lead-generation': [
        d => `Pick one prospect from your 100-prospect system and explain why its score is justified by observed business-facing evidence rather than guesswork.`,
        d => `Which scoring dimension in your lead model could produce the most false positives, and how would you reduce that risk?`,
        d => `Describe one ethical boundary you set for prospecting and explain why crossing it would reduce the quality or legitimacy of your pipeline.`
      ],
      'm5-client-engagement': [
        d => `Which moment in your simulated client lifecycle would be easiest to misrepresent, and what evidence or wording keeps your simulation honest?`,
        d => `Defend your pricing rationale for ${d.clientBusiness || 'the selected client'}. What scope fact most influences the price?`,
        d => `What is the most important limitation in your monthly report, and why should a client care about that limitation?`
      ],
      'm6-growth-operator': [
        d => `Which part of your 90-day plan for ${d.clientBusiness || 'the selected business'} depends on the most uncertain assumption? Explain how you would test it.`,
        d => `What result would you refuse to promise ${d.clientBusiness || 'the client'}, even if they asked for a guarantee? Explain the reason.`,
        d => `Defend one delegation or productization decision in your growth-operator plan. What quality-control step prevents the work from becoming careless?`
      ],
      'capstone-local-growth-operator': [
        d => `Choose the single most consequential judgment in your capstone for ${d.capstoneBusiness || 'the selected business'} and defend it with two pieces of evidence.`,
        d => `What part of your capstone would be least credible if the evidence labels were removed? Explain exactly why the labels matter.`,
        d => `Imagine an experienced practitioner reviews your capstone line by line. Which section are you most prepared to defend, and what evidence would you show first?`
      ]
    };
    return pools[assignmentId] || [
      d => `Defend one major decision in this assignment using direct evidence and identify one uncertainty you would still verify.`
    ];
  }

  function ensureDraftMeta(assignment, draft) {
    if (!draft.startedAt) draft.startedAt = new Date().toISOString();
    if (!draft.submissionNonce) draft.submissionNonce = window.LEXDENCrypto.randomId();
    const defensePool = defensePromptPool(assignment.id);
    if (!Number.isInteger(draft.defenseVariant) || draft.defenseVariant < 0 || draft.defenseVariant >= defensePool.length) {
      draft.defenseVariant = secureInt(defensePool.length);
    }
    if (typeof draft.verificationResponse !== 'string') draft.verificationResponse = '';
    queueSaveState();
  }

  function getDefensePrompt(assignment, draft) {
    ensureDraftMeta(assignment, draft);
    const pool = defensePromptPool(assignment.id);
    const variant = Number.isInteger(draft.defenseVariant) && draft.defenseVariant >= 0 && draft.defenseVariant < pool.length ? draft.defenseVariant : 0;
    return pool[variant](draft);
  }

  function finishActiveInterval() {
    if (interaction.lastVisibleAt != null) {
      interaction.activeMs += Math.max(0, Date.now() - interaction.lastVisibleAt);
      interaction.lastVisibleAt = null;
    }
  }

  function interactionSnapshot() {
    const activeMs = interaction.lastVisibleAt != null
      ? interaction.activeMs + Math.max(0, Date.now() - interaction.lastVisibleAt)
      : interaction.activeMs;
    return {
      startedAt: interaction.startedAt,
      visibilityHiddenCount: interaction.hiddenTransitions,
      focusLossCount: interaction.focusLosses,
      pasteEventCount: interaction.pasteEvents,
      activeMsApprox: activeMs,
      note: 'Context-only telemetry. Visibility/focus/paste events can have legitimate causes and are not proof of misconduct.'
    };
  }

  function installInteractionTelemetry() {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        interaction.hiddenTransitions += 1;
        finishActiveInterval();
      } else {
        interaction.lastVisibleAt = Date.now();
      }
    });

    window.addEventListener('blur', () => {
      interaction.focusLosses += 1;
    });

    document.addEventListener('paste', () => {
      interaction.pasteEvents += 1;
    });
  }

  function renderGate(reason, assignment = null) {
    show(gate, true);
    show(workspace, false);
    gate.innerHTML = `
      <div class="card gate-card">
        <div class="eyebrow">LEXDEN ACADEMY</div>
        <h2>${assignment ? escapeHtml(assignment.module + ' • ' + assignment.shortTitle) : 'Assessment error'}</h2>
        <p>${escapeHtml(reason)}</p>
        <div class="callout">
          This assessment is local-first. No student answers are uploaded to the public site.
          If this page does not initialize, refresh the link once. If the problem persists, report the diagnostic code below to the teacher.
        </div>
        <div class="small code boot-code">Diagnostic: LEXDEN-BOOT-${Date.now().toString(36).toUpperCase()}</div>
      </div>`;
    completeBoot();
  }

  window.addEventListener('error', event => {
    if (bootFinished) return;
    renderGate('The browser reported an initialization error: ' + (event.message || 'unknown script error'));
  });

  window.addEventListener('unhandledrejection', event => {
    if (bootFinished) return;
    const message = event.reason?.message || String(event.reason || 'unknown promise error');
    renderGate('The browser reported an initialization promise error: ' + message);
  });

  function findCarryValue(email, assignmentId, key, seen=new Set()) {
    if(seen.has(assignmentId)) return undefined;
    seen.add(assignmentId);
    for(const previousId of (A[assignmentId]?.prerequisites || [])){
      const previousDraft=getExistingDraft(email,previousId);
      const candidate=previousDraft?.[key];
      if(candidate !== undefined && candidate !== null && String(candidate).trim()!=='') return candidate;
      const upstream=findCarryValue(email,previousId,key,seen);
      if(upstream !== undefined && upstream !== null && String(upstream).trim()!=='') return upstream;
    }
    return undefined;
  }

  function importCarryForward(email, assignment) {
    const current=getDraft(email,assignment.id);
    const aliases={
      targetCity:['targetCity','businessCity'],
      targetNiche:['targetNiche','businessNiche'],
      capstoneBusiness:['capstoneBusiness','clientBusiness'],
      capstoneCity:['capstoneCity','targetCity','businessCity'],
      capstoneNiche:['capstoneNiche','targetNiche','businessNiche']
    };
    for(const key of (assignment.carryFrom || [])){
      const destination=key;
      if(current[destination]===undefined || current[destination]=== ''){
        const sources=aliases[key] || [key];
        for(const source of sources){
          const value=findCarryValue(email,assignment.id,source);
          if(value!==undefined && value!==null && String(value).trim()!==''){
            current[destination]=value;
            break;
          }
        }
      }
    }
    ensureDraftMeta(assignment,current);
    return current;
  }

  function renderField(field, draft, locked = false) {
    const key = field.k;
    const req = field.required ? '1' : '0';
    const value = draft[key] ?? '';
    const safeKey = cssSafeKey(key);
    const label = ['radio','checkbox'].includes(field.type) ? `<div class="field-label">${escapeHtml(field.label)} ${field.required ? '<span class="required">*</span>' : ''}</div>` : `<label for="${safeKey}">${escapeHtml(field.label)} ${field.required ? '<span class="required">*</span>' : ''}</label>`;
    const hint = field.hint ? `<div class="hint">${escapeHtml(field.hint)}</div>` : '';
    let inner = '';

    if (field.type === 'radio') {
      inner = `<div class="options">${(field.options || []).map(option => `
        <label class="option">
          <input type="radio" name="${escapeHtml(key)}" value="${escapeHtml(option)}" ${value === option ? 'checked' : ''} ${field.required ? 'required aria-required="true"' : ''}${locked ? ' disabled' : ''}>
          <span>${escapeHtml(option)}</span>
        </label>`).join('')}</div>`;
    } else if (field.type === 'checkbox') {
      inner = `<div class="options"><label class="option">
        <input type="checkbox" name="${escapeHtml(key)}" value="yes" ${value ? 'checked' : ''} ${field.required ? 'required aria-required="true"' : ''}${locked ? ' disabled' : ''}>
        <span>${escapeHtml(field.checkboxText || field.label)}</span>
      </label></div>`;
    } else if (field.type === 'file') {
      inner = `<div class="file-box">
        <input data-file-key="${escapeHtml(key)}" id="${safeKey}" type="file" ${field.multiple === false ? '' : 'multiple'} ${field.required ? 'required aria-required="true"' : ''}${locked ? ' disabled' : ''} accept="${escapeHtml(field.accept || '')}">
        <div class="file-meta" id="filemeta-${safeKey}">No files selected.</div>
      </div>`;
    } else if (field.type === 'csv') {
      inner = `<div class="file-box">
        <input data-csv-key="${escapeHtml(key)}" id="${safeKey}" type="file" ${field.required ? 'required aria-required="true"' : ''}${locked ? ' disabled' : ''} accept=".csv,text/csv">
        <div class="file-meta" id="filemeta-${safeKey}">Upload exactly 100 prospect rows.</div>
        <div id="csvstatus-${safeKey}" class="small"></div>
      </div>
      <a class="template-link" data-action="csv-template" href="#">Download CSV template</a>`;
    } else if (field.type === 'template-download') {
      inner = `<div class="callout">Use the CSV template link shown in the 100-prospect dataset section.</div>`;
    } else if (field.type === 'number') {
      inner = `<input id="${safeKey}" type="number" min="${field.min ?? ''}" max="${field.max ?? ''}" step="${field.step ?? '1'}" value="${escapeHtml(value)}" ${field.required ? 'required aria-required="true"' : ''}${locked ? ' disabled' : ''} ${field.readonlyFromPrev ? 'readonly' : ''}>`;
    } else if (field.type === 'select') {
      inner = `<select id="${safeKey}" ${field.required ? 'required aria-required="true"' : ''}${locked ? ' disabled' : ''}${field.readonlyFromPrev ? ' disabled' : ''}>
        ${(field.options || []).map(option => `<option value="${escapeHtml(option)}" ${value === option ? 'selected' : ''}>${escapeHtml(option)}</option>`).join('')}
      </select>`;
    } else if (field.type === 'textarea') {
      inner = `<textarea id="${safeKey}" rows="${field.rows || 5}" placeholder="${escapeHtml(field.placeholder || '')}" ${field.required ? 'required aria-required="true"' : ''}${locked ? ' disabled' : ''} ${field.readonlyFromPrev ? 'readonly' : ''}>${escapeHtml(value)}</textarea>`;
    } else {
      inner = `<input id="${safeKey}" type="${escapeHtml(field.type || 'text')}" value="${escapeHtml(value)}" placeholder="${escapeHtml(field.placeholder || '')}" ${field.required ? 'required aria-required="true"' : ''}${locked ? ' disabled' : ''} ${field.readonlyFromPrev ? 'readonly' : ''}>`;
    }

    return `<div class="field" data-field-key="${escapeHtml(key)}" data-required="${req}" data-type="${escapeHtml(field.type || 'text')}">${label}${hint}${inner}</div>`;
  }

  function renderDefenseCheckpoint(assignment, draft) {
    const submission = Boolean(draft.lockedAt);
    const prompt = getDefensePrompt(assignment, draft);

    return `<section class="verification-card">
      <div class="eyebrow">INDIVIDUAL DEFENSE CHECKPOINT</div>
      <h3>Prove that you understand your own work</h3>
      <div class="small">This checkpoint is generated for this assignment session. It is not a correctness score; it gives the teacher a compact authenticity/understanding signal to review alongside the work.</div>
      <p><strong>${escapeHtml(prompt)}</strong></p>
      <textarea id="verificationResponse" rows="7" placeholder="Answer in your own words. Refer to a specific finding, evidence item or decision from this assignment." ${submission ? 'readonly' : ''}>${escapeHtml(draft.verificationResponse || '')}</textarea>
    </section>`;
  }

  function renderSubmissionReady(submission) {
    if (!submission) return '';
    const last = window.__LEXDEN_LAST_SUBMISSION;
    const same = last && last.submissionId === submission.submissionId;

    return `<section class="card section">
      <div class="eyebrow">FINALIZED SUBMISSION</div>
      <h2>Your assessment is locked</h2>
      <p class="small">The encrypted submission is not stored on the server. Keep the downloaded .lexden file and attach it to the matching Google Classroom assignment.</p>
      <div class="integrity-summary">
        <div class="integrity-chip"><strong>LOCKED</strong><span>${escapeHtml(new Date(submission.lockedAt).toLocaleString())}</span></div>
        <div class="integrity-chip"><strong>${escapeHtml(submission.submissionId || 'Created')}</strong><span>Submission ID</span></div>
        <div class="integrity-chip"><strong>Teacher-only decode</strong><span>Private key never published</span></div>
      </div>
      ${same ? `<div class="actions compact-actions">
        <button id="downloadLexdenBtn" type="button" class="btn btn-primary">Download encrypted .lexden</button>
        <button id="downloadReceiptBtn" type="button" class="btn">Download PDF receipt</button>
      </div>` : `<div class="callout finalized-refresh-note">This page was refreshed after finalization. The encrypted file is intentionally not recoverable from the server. Use the file already downloaded to this device/browser.</div>`}
    </section>`;
  }

  function renderWorkspace(assignment, email) {
    show(gate, false);
    show(workspace, true);

    window.__LEXDEN_SELECTED_FILES = {};
    window.__LEXDEN_CSV_TEXT = {};
    window.__LEXDEN_CSV_RECORDS = {};

    const draft = importCarryForward(email, assignment);
    const submission = getSubmission(email, assignment.id);
    const sections = (assignment.fields || []).map((section, index) => `
      <section class="card section">
        <h2><span class="section-num">${String(index + 1).padStart(2, '0')}</span>${escapeHtml(section.section)}</h2>
        ${(section.fields || []).map(field => renderField(field, draft, Boolean(submission))).join('')}
      </section>`).join('');

    workspace.innerHTML = `
      <div class="hero card">
        <div class="eyebrow">${escapeHtml(assignment.module)} • ${escapeHtml(assignment.shortTitle)}</div>
        <h1>${escapeHtml(assignment.title)}</h1>
        <p>${escapeHtml(assignment.objective)}</p>
      </div>

      ${submission ? `<div class="submitted-banner">
        <h3>Submission locked</h3>
        <div class="small">Finalized ${escapeHtml(new Date(submission.lockedAt).toLocaleString())}. Editing is disabled on this device/browser for this assignment.</div>
      </div>` : ''}

      <div class="layout">
        <div class="main-col">
          <div class="card progress-card">
            <div class="progress-label"><span>Assessment readiness</span><strong id="progressText">0%</strong></div>
            <div class="progress-bar"><i id="progressFill" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"></i></div>
            <div class="small">Automatic checks evaluate structure and selected mechanical requirements. They do not replace teacher judgment.</div>
          </div>

          <div class="card section">
            <div id="storageNotice" class="storage-notice hidden"></div>
          <div class="callout">
              <strong>Student identity:</strong> ${escapeHtml(draft.studentEmail || email || 'Not entered')}<br>
              <span class="small">Google Classroom does not expose the student's account email to an ordinary public webpage. Enter the same email manually. It may be corrected before final submission.</span>
            </div>
          </div>

          <form id="assessmentForm" class="${submission ? 'locked' : ''}">
            ${sections}
            ${renderDefenseCheckpoint(assignment, draft)}
          </form>

          ${renderSubmissionReady(submission)}

          ${!submission ? `<div class="card actions">
            <button id="saveBtn" type="button" class="btn btn-ghost">Save draft</button>
            <button id="pdfBtn" type="button" class="btn">Download PDF receipt</button>
            <button id="submitBtn" type="button" class="btn btn-primary">Review & Finalize Submission</button>
          </div>` : ''}

          <div class="telemetry-note">Integrity context recorded locally: page visibility changes, focus losses and paste events are counted only as context. Mobile notifications, app switching, calls and normal research can trigger these events. They are never treated as proof of malpractice.</div>
          <div id="status" class="status" role="status" aria-live="polite"></div>
        </div>

        <aside class="side-col">
          <div class="card info-card">
            <div class="eyebrow">Current assignment</div>
            <div class="current-assignment-title">${escapeHtml(assignment.title)}</div>
            <div class="small current-assignment-time">${escapeHtml(assignment.time || 'Self-paced')}</div>
            <div class="small current-assignment-note">Only this assignment is exposed by this Classroom link.</div>
          </div>

          <div class="card info-card">
            <div class="eyebrow">Anti-malpractice design</div>
            <p class="small">This workspace uses sequential prerequisites, a final lock, personalized defense prompts, evidence requirements, file hashing and encrypted submissions.</p>
            <p class="small">It deliberately does <strong>not</strong> block copy/paste or tab switching. Those controls are easy to bypass and can punish honest mobile learners. Instead, relevant interaction events are recorded as context for teacher review.</p>
          </div>

          <div class="card info-card">
            <div class="eyebrow">Submission size</div>
            <p class="small">Final encrypted package limit: <strong>100 MiB</strong>.</p>
            <p class="small">For reliable browser/phone processing, the site warns at 95 MiB of selected raw files before ZIP/encryption overhead.</p>
          </div>
        </aside>
      </div>`;
    bindWorkspace(assignment, email);
    const storageNotice=document.getElementById('storageNotice');
    if(storageNotice){
      if(storageWarning){storageNotice.textContent=storageWarning;storageNotice.className='storage-notice show bad';}
      else storageNotice.className='storage-notice hidden';
    }
    updateProgress(assignment);
  }

  function getRadioValue(form, key) {
    const nodes = form?.querySelectorAll('input[name]');
    if (!nodes) return '';
    for (const node of nodes) {
      if (node.name === key && node.checked) return node.value;
    }
    return '';
  }

  function getCheckboxValue(form, key) {
    const nodes = form?.querySelectorAll('input[name]');
    if (!nodes) return false;
    for (const node of nodes) {
      if (node.name === key && node.checked) return true;
    }
    return false;
  }

  function getControlByKey(key) {
    return document.getElementById(cssSafeKey(key));
  }

  function collectForm(assignment, email) {
    const draft = getDraft(email, assignment.id);
    const form = document.getElementById('assessmentForm');
    if (!form) return draft;

    for (const section of assignment.fields || []) {
      for (const field of section.fields || []) {
        const key = field.k;
        if (field.type === 'radio') {
          draft[key] = getRadioValue(form, key);
        } else if (field.type === 'checkbox') {
          draft[key] = getCheckboxValue(form, key);
        } else if (!['file', 'csv', 'template-download'].includes(field.type)) {
          const element = getControlByKey(key);
          if (element) draft[key] = element.value;
        }
      }
    }

    const verification = document.getElementById('verificationResponse');
    if (verification && !verification.readOnly) draft.verificationResponse = verification.value;

    ensureDraftMeta(assignment, draft);
    if(isValidStudentEmail(draft.studentEmail)) writeIdentity(draft);
    queueSaveState();
    return draft;
  }

  function moveCurrentDraftToEmail(assignment, oldEmail, newEmail, draft){
    const oldKey=emailKey(oldEmail), nextKey=emailKey(newEmail);
    if(!nextKey || nextKey===oldKey) return draft;
    const oldBucket=profileBucketKey(oldKey), newBucket=profileBucketKey(nextKey);
    state.profiles[newBucket] ||= emptyMap();
    const existingDestination=state.profiles[newBucket][assignment.id];
    state.profiles[newBucket][assignment.id]={
      ...(existingDestination && typeof existingDestination==='object' ? existingDestination : {}),
      ...draft
    };
    draft=state.profiles[newBucket][assignment.id];
    if(state.profiles[oldBucket]){
      delete state.profiles[oldBucket][assignment.id];
      if(!Object.keys(state.profiles[oldBucket]).length) delete state.profiles[oldBucket];
    }
    draft.studentEmail=nextKey;
    writeIdentity(draft);
    queueSaveState();
    return draft;
  }

  function missingRequired(form, assignment, draft) {
    const missing = [];

    for (const section of assignment.fields || []) {
      for (const field of section.fields || []) {
        if (!field.required) continue;
        const key = field.k;

        if (field.type === 'radio') {
          if (!getRadioValue(form, key)) missing.push(key);
        } else if (field.type === 'checkbox') {
          if (!getCheckboxValue(form, key)) missing.push(key);
        } else if (field.type === 'file') {
          const files = window.__LEXDEN_SELECTED_FILES?.[key];
          if (!files?.length) missing.push(key);
        } else if (field.type === 'csv') {
          if ((window.__LEXDEN_CSV_RECORDS?.[key]?.length || 0) !== 100) missing.push(key);
        } else if (field.type !== 'template-download') {
          const element = getControlByKey(key);
          if (!element?.value?.trim()) missing.push(key);
        }
      }
    }

    if (!String(draft.verificationResponse || '').trim()) {
      missing.push('verificationResponse');
    }

    return missing;
  }

  function updateProgress(assignment) {
    const form = document.getElementById('assessmentForm');
    const progressText = document.getElementById('progressText');
    const progressFill = document.getElementById('progressFill');
    if (!form || !progressText || !progressFill) return;

    let total = 1; // defense checkpoint
    let done = String(document.getElementById('verificationResponse')?.value || '').trim() ? 1 : 0;

    for (const section of assignment.fields || []) {
      for (const field of section.fields || []) {
        if (!field.required) continue;
        total += 1;
        let ok = false;

        if (field.type === 'radio') ok = Boolean(getRadioValue(form, field.k));
        else if (field.type === 'checkbox') ok = getCheckboxValue(form, field.k);
        else if (field.type === 'file') ok = Boolean(window.__LEXDEN_SELECTED_FILES?.[field.k]?.length);
        else if (field.type === 'csv') ok = (window.__LEXDEN_CSV_RECORDS?.[field.k]?.length || 0) === 100;
        else ok = Boolean(getControlByKey(field.k)?.value?.trim());

        if (ok) done += 1;
      }
    }

    const percent = total ? Math.round((done / total) * 100) : 100;
    progressText.textContent = percent + '%';
    progressFill.style.width = percent + '%';
    progressFill.setAttribute('aria-valuenow', String(percent));
  }

  function parseCsv(text) {
    const source=String(text ?? '').replace(/^\uFEFF/,'');
    const rows=[]; let row=[]; let cell=''; let quoted=false; let cellStarted=false; let quoteClosed=false;
    for(let i=0;i<source.length;i++){
      const char=source[i];
      if(quoted){
        if(char==='"' && source[i+1]==='"'){ cell+='"'; i+=1; }
        else if(char==='"'){ quoted=false; quoteClosed=true; }
        else { cell+=char; }
      } else if(quoteClosed){
        if(char===','){
          row.push(cell); cell=''; cellStarted=false; quoteClosed=false;
        } else if(char==='\n'){
          row.push(cell); rows.push(row); row=[]; cell=''; cellStarted=false; quoteClosed=false;
        } else if(char==='\r'){
          // Ignore CR in CRLF input after a quoted field.
        } else {
          throw new Error('CSV contains characters after a closing quote before the delimiter.');
        }
      } else if(char==='"'){
        if(cellStarted || cell.length!==0) throw new Error('CSV contains a quote inside an unquoted field.');
        quoted=true; cellStarted=true;
      } else if(char===','){
        row.push(cell); cell=''; cellStarted=false;
      } else if(char==='\n'){
        row.push(cell); rows.push(row); row=[]; cell=''; cellStarted=false;
      } else if(char==='\r'){
        // Ignore CR in CRLF input.
      } else {
        cell+=char; cellStarted=true;
      }
    }
    if(quoted) throw new Error('CSV contains an unclosed quoted field.');
    row.push(cell);
    if(row.length>1 || row[0]) rows.push(row);
    return rows;
  }

  function validHttpsUrl(value) {
    try {
      const u = new URL(String(value).trim());
      return u.protocol === 'https:' && Boolean(u.hostname);
    } catch {
      return false;
    }
  }

  function validateProspectCsv(text) {
    const rows = parseCsv(text).filter(row => row.some(cell => String(cell).trim() !== ''));
    if (rows.length < 2) throw new Error('CSV must contain a header row and data rows.');

    const headers = rows[0].map(value => String(value).trim().toLowerCase());
    if (headers[0]) headers[0]=headers[0].replace(/^\uFEFF/,'');
    const required = [
      'prospect_id','business_name','city','niche','profile_url','website_url',
      'primary_category','observed_issue','evidence_url','score','rank',
      'score_reason','outreach_status','notes'
    ];

    const duplicateHeaders = headers.filter((header, index) => header && headers.indexOf(header) !== index);
    if (duplicateHeaders.length) {
      throw new Error('CSV has duplicate column names: ' + [...new Set(duplicateHeaders)].join(', '));
    }

    const missing = required.filter(name => !headers.includes(name));
    if (missing.length) {
      throw new Error('CSV is missing required columns: ' + missing.join(', '));
    }

    const data = rows.slice(1);
    if (data.length !== 100) {
      throw new Error(`Module 4 requires exactly 100 prospect rows. This file has ${data.length}.`);
    }

    const index = Object.fromEntries(headers.map((header, i) => [header, i]));
    const ids = new Set();
    const ranks = new Set();
    const errors = [];

    data.forEach((row, rowIndex) => {
      const line = rowIndex + 2;
      if (row.length > headers.length) {
        errors.push(`row ${line}: too many columns`);
        return;
      }

      const value = name => String(row[index[name]] ?? '').trim();
      const id = value('prospect_id');
      const business = value('business_name');
      const city = value('city');
      const niche = value('niche');
      const profileUrl = value('profile_url');
      const evidenceUrl = value('evidence_url');
      const websiteUrl = value('website_url');
      const scoreRaw = value('score');
      const rankRaw = value('rank');
      const score = Number(scoreRaw);
      const rank = Number(rankRaw);
      const scoreReason = value('score_reason');

      if (!id || ids.has(id)) errors.push(`row ${line}: missing or duplicate prospect_id`);
      ids.add(id);

      if (!business) errors.push(`row ${line}: business_name is required`);
      if (!city) errors.push(`row ${line}: city is required`);
      if (!niche) errors.push(`row ${line}: niche is required`);
      if (!validHttpsUrl(profileUrl)) errors.push(`row ${line}: profile_url must be a valid HTTPS URL`);
      if (!validHttpsUrl(evidenceUrl)) errors.push(`row ${line}: evidence_url must be a valid HTTPS URL`);
      if (websiteUrl) {
        if (!validHttpsUrl(websiteUrl)) errors.push(`row ${line}: website_url must be a valid HTTPS URL when provided`);
      }
      if (!scoreRaw || !/^\d+$/.test(scoreRaw) || !Number.isInteger(score) || score < 0 || score > 100) errors.push(`row ${line}: score must be an integer from 0 to 100`);
      if (!rankRaw || !/^\d+$/.test(rankRaw) || !Number.isInteger(rank) || rank < 1 || rank > 100 || ranks.has(rank)) errors.push(`row ${line}: rank must be a unique integer from 1 to 100`);
      ranks.add(rank);
      if (!scoreReason) errors.push(`row ${line}: score_reason is required`);
    });

    if (ranks.size !== 100) {
      errors.push('rank column must contain every rank from 1 through 100 exactly once');
    }

    if (errors.length) {
      throw new Error('CSV validation failed: ' + errors.slice(0, 8).join('; ') + (errors.length > 8 ? `; +${errors.length - 8} more` : ''));
    }

    return {
      headers,
      rows: data,
      records: data.map(row => Object.fromEntries(headers.map((header, i) => [header, row[i] ?? ''])))
    };
  }

  function makeCsvTemplate() {
    const headers = [
      'prospect_id','business_name','city','niche','profile_url','website_url',
      'primary_category','observed_issue','evidence_url','score','rank',
      'score_reason','outreach_status','notes'
    ];
    const rows = [headers.join(',')];
    for (let i = 1; i <= 100; i += 1) {
      rows.push([
        `P${String(i).padStart(3, '0')}`,
        '', '', '', '', '', '', '', '', '', String(i), '', '', ''
      ].join(','));
    }
    return new Blob([rows.join('\n')], { type: 'text/csv' });
  }

  function safeZipName(name) {
    const cleaned = String(name || 'file')
      .replace(/[\\/:*?"<>|]/g, '_')
      .replace(/\.\.+/g, '.')
      .replace(/[\u0000-\u001F\u007F]/g, '_')
      .trim();
    return cleaned || 'file';
  }

  function formatFileList(files) {
    const total = files.reduce((sum, file) => sum + file.size, 0);
    const names = files.slice(0, 4).map(file => file.name).join(', ');
    return `${files.length} file(s), ${formatBytes(total)}${files.length > 4 ? ` • ${files.length - 4} more` : ''} • ${names}`;
  }

  function formatBytes(bytes) {
    const units = ['B', 'KiB', 'MiB'];
    let index = 0;
    let value = Number(bytes) || 0;
    while (value >= 1024 && index < units.length - 1) {
      value /= 1024;
      index += 1;
    }
    return `${value.toFixed(value < 10 && index ? 1 : 0)} ${units[index]}`;
  }

  function downloadBlob(blob, name) {
    let url='';
    let anchor=null;
    try{
      if(!(blob instanceof Blob)) throw new Error('Download data is unavailable.');
      anchor=document.createElement('a');
      url=URL.createObjectURL(blob);
      anchor.href=url;
      anchor.download=safeZipName(name).slice(0,180);
      anchor.rel='noopener';
      anchor.referrerPolicy='no-referrer';
      document.body.appendChild(anchor);
      anchor.click();
      setTimeout(()=>{try{URL.revokeObjectURL(url);}catch{} try{anchor?.remove();}catch{}},10000);
      return true;
    }catch(error){
      if(url) try{URL.revokeObjectURL(url);}catch{}
      try{anchor?.remove();}catch{}
      notify(error?.message || 'The browser could not start the download. Check download permissions.',false);
      return false;
    }
  }

  async function fileBytesMap() {
    const selections = Object.entries(window.__LEXDEN_SELECTED_FILES || {});
    const count = selections.reduce((sum, [, files]) => sum + files.length, 0);
    const rawBytes = selections.reduce((sum, [, files]) => sum + files.reduce((inner, file) => inner + Number(file.size || 0), 0), 0);
    if (count > MAX_ATTACHMENT_COUNT) {
      throw new Error(`Too many attachments selected (${count}). Keep attachments to ${MAX_ATTACHMENT_COUNT} files or fewer.`);
    }
    if (rawBytes > RAW_ATTACHMENT_SAFE_LIMIT) {
      throw new Error(`Selected files total ${formatBytes(rawBytes)}. For reliable browser processing, keep selected raw files at or below 95 MiB.`);
    }

    const output = [];
    for (const [field, files] of selections) {
      for (const file of files) {
        const bytes = new Uint8Array(await file.arrayBuffer());
        output.push({
          field,
          name: file.name,
          type: file.type || 'application/octet-stream',
          size: file.size,
          bytes
        });
      }
    }
    return output;
  }

  function runAutoChecks(assignment, draft) {
    const textValue = key => String(draft[key] || '');
    const checks = [];

    checks.push({
      key: 'defenseCheckpoint',
      ok: Boolean(textValue('verificationResponse').trim())
    });

    if (assignment.id === 'm1-foundation-audit') {
      checks.push({ key: 'threeProfileAudit', ok: textValue('threeProfileAudit').length >= 500 });
      checks.push({ key: 'evidenceUrls', ok: (textValue('threeProfileAudit').match(/https?:\/\//gi) || []).length >= 3 });
    }

    if (assignment.id === 'm2-gbp-optimization') {
      checks.push({ key: 'priorityRows', ok: textValue('priorityMatrix').split(/\r?\n/).filter(Boolean).length >= 5 });
      checks.push({ key: 'changeLog', ok: textValue('changeLog').split(/\r?\n/).filter(Boolean).length >= 2 });
    }

    if (assignment.id === 'm3-local-visibility') {
      checks.push({ key: 'competitorEvidence', ok: textValue('competitorMatrix').length >= 350 });
      checks.push({
        key: 'evidenceLabels',
        ok: /(OFFICIAL GOOGLE|ACADEMIC|INDUSTRY|PRACTITIONER|OBSERVED|INFERENCE|UNCERTAIN|DISPUTED)/i.test(textValue('roadmap'))
      });
    }

    if (assignment.id === 'm4-lead-generation') {
      checks.push({
        key: 'prospects',
        ok: (window.__LEXDEN_CSV_RECORDS?.prospectCsv?.length || 0) === 100
      });
      checks.push({
        key: 'qualificationExamples',
        ok: textValue('qualificationLog').split(/\r?\n/).filter(Boolean).length >= 5
      });
    }

    if (assignment.id === 'm5-client-engagement') {
      const log = textValue('conversationLog').toLowerCase();
      const stages = ['prospect','reply','discovery','diagnosis','proposal','pricing','agreement','onboarding','optimization','report','renewal'];
      checks.push({
        key: 'lifecycleStages',
        ok: stages.filter(stage => log.includes(stage)).length >= 9
      });
    }

    if (assignment.id === 'm6-growth-operator') {
      checks.push({ key: 'plan90', ok: textValue('plan90').length >= 500 });
      checks.push({ key: 'caseStudyLimitations', ok: /limitation|uncertain|simulat/i.test(textValue('caseStudy')) });
    }

    if (assignment.id === 'capstone-local-growth-operator') {
      checks.push({ key: 'portfolioCaseStudy', ok: textValue('portfolioCaseStudy').length >= 700 });
      checks.push({ key: 'executiveSummary', ok: textValue('executiveSummary').length >= 250 });
      checks.push({ key: 'noFakeResults', ok: Boolean(draft.noFakeResults) });
      checks.push({ key: 'capstoneIntegrity', ok: Boolean(draft.capstoneIntegrity) });
    }

    return checks;
  }

  async function buildSubmission(assignment, email) {
    let draft = collectForm(assignment, email);
    const visibleEmail = emailKey(draft.studentEmail || email);
    const currentEmail = emailKey(email);
    if (isValidStudentEmail(visibleEmail) && visibleEmail !== currentEmail) {
      draft = moveCurrentDraftToEmail(assignment, currentEmail, visibleEmail, draft);
      email = visibleEmail;
    } else {
      email = currentEmail;
    }

    const rawFiles = await fileBytesMap();
    const rawBytes = rawFiles.reduce((sum, file) => sum + file.size, 0);

    if (assignment.id === 'm4-lead-generation') {
      const csvText = window.__LEXDEN_CSV_TEXT?.prospectCsv;
      if (!csvText) throw new Error('Module 4 requires the completed 100-prospect CSV.');
      validateProspectCsv(csvText);
    }

    const answers = {};
    for (const section of assignment.fields || []) {
      for (const field of section.fields || []) {
        if (['file', 'csv', 'template-download'].includes(field.type)) continue;
        answers[field.k] = draft[field.k] ?? '';
      }
    }

    if (window.__LEXDEN_CSV_RECORDS?.prospectCsv) {
      answers.prospectCsvValidated = window.__LEXDEN_CSV_RECORDS.prospectCsv.length;
    }

    const submissionId = `${assignment.id}-${Date.now().toString(36)}-${window.LEXDENCrypto.randomId().slice(0, 8)}`;
    const previousAssignments = {};

    for (const previousId of (assignment.prerequisites || [])) {
      const previousDraft = getExistingDraft(email, previousId) || {};
      previousAssignments[previousId] = {
        assignmentTitle: A[previousId]?.title || previousId,
        answers: previousDraft,
        submitted: Boolean(getSubmission(email, previousId)?.lockedAt)
      };
    }

    const attachmentHashes = [];
    for (const file of rawFiles) {
      attachmentHashes.push({
        field: file.field,
        name: file.name,
        type: file.type,
        size: file.size,
        sha256: await window.LEXDENCrypto.sha256Hex(file.bytes)
      });
    }

    const answerSha256 = await window.LEXDENCrypto.sha256Hex(
      window.LEXDENCrypto.utf8(JSON.stringify(answers))
    );

    const interaction = interactionSnapshot();
    const interactionSha256 = await window.LEXDENCrypto.sha256Hex(
      window.LEXDENCrypto.utf8(JSON.stringify(interaction))
    );

    const submissionCommit = await window.LEXDENCrypto.sha256Hex(
      window.LEXDENCrypto.utf8(JSON.stringify({
        courseId: COURSE.courseId,
        assignmentId: assignment.id,
        submissionId,
        answerSha256,
        attachmentHashes,
        interactionSha256
      }))
    );

    const integrity = {
      answerSha256,
      attachmentHashes,
      interactionSha256,
      submissionCommit,
      integrityNote: 'Hashes are used to verify the packaged data after decryption. Interaction telemetry is context only.'
    };

    const packagedAttachments = rawFiles.map((file, index) => ({
      ...file,
      packagePath: `evidence/${String(index + 1).padStart(3, '0')}-${safeZipName(file.field)}/${safeZipName(file.name)}`
    }));

    const manifest = {
      schemaVersion: 3,
      courseId: COURSE.courseId,
      assignmentId: assignment.id,
      assignmentTitle: assignment.title,
      module: assignment.module,
      student: {
        name: draft.studentName || '',
        email: draft.studentEmail || email || ''
      },
      createdAt: new Date().toISOString(),
      submissionId,
      defenseCheckpoint: {
        prompt: getDefensePrompt(assignment, draft),
        response: draft.verificationResponse || ''
      },
      interactionSummary: interaction,
      answers,
      previousAssignments,
      attachments: packagedAttachments.map(file => ({
        field: file.field,
        name: file.name,
        safePackageName: safeZipName(file.name),
        packagePath: file.packagePath,
        type: file.type,
        size: file.size
      })),
      integrity,
      assessmentNotes: {
        autoChecks: runAutoChecks(assignment, draft),
        teacherAssesses: 'Answer quality, evidence authenticity, reasoning, policy compliance and practical usefulness require teacher review.'
      }
    };

    const manifestBytes = window.LEXDENCrypto.utf8(JSON.stringify(manifest, null, 2));
    const entries = [{
      name: 'submission.json',
      data: manifestBytes
    }];

    packagedAttachments.forEach(file => {
      entries.push({
        name: file.packagePath,
        data: file.bytes
      });
    });

    const pdf = window.LEXDEN_PDF.makePdf({
      title: assignment.title,
      lines: buildReportLines(assignment, draft, submissionId, interaction, integrity),
      filename: `${slugSafe(assignment.id)}-submission-receipt.pdf`
    });

    entries.push({
      name: 'submission-receipt.pdf',
      data: pdf.bytes
    });

    const zip = await window.LEXDEN_ZIP.createZip(entries, (stage, done, total) => {
      notify(stage === 'compress'
        ? `Compressing ${done}/${total}...`
        : `Working ${done}/${total}...`, true);
    });

    const container = await window.LEXDENCrypto.encryptSubmission({
      zipBytes: zip,
      metadata: {
        courseId: COURSE.courseId,
        assignmentId: assignment.id,
        assignmentTitle: assignment.title,
        module: assignment.module,
        submissionId,
        createdAt: manifest.createdAt,
        studentName: draft.studentName || '',
        studentEmail: draft.studentEmail || email
      },
      onProgress: (done, total) => notify(`Encrypting ${done}/${total} chunk(s)...`, true)
    });

    if (container.length > FINAL_PACKAGE_LIMIT) {
      throw new Error('The finished encrypted submission is above the 100 MiB limit. Remove or reduce attachments and try again.');
    }

    return {
      draft,
      pdf,
      container,
      submissionId,
      size: container.length,
      submissionCommit
    };
  }

  function buildReportLines(assignment, draft, submissionId, interaction, integrity) {
    const selected = Object.entries(window.__LEXDEN_SELECTED_FILES || {})
      .flatMap(([key, files]) => files.map(file => `${key}: ${file.name} (${formatBytes(file.size)})`));

    const checks = runAutoChecks(assignment, draft);
    const passed = checks.filter(check => check.ok).length;

    return [
      `Assignment: ${assignment.title}`,
      `Course: ${COURSE.title}`,
      `Module: ${assignment.module}`,
      `Student: ${draft.studentName || ''}`,
      `Google Classroom email: ${draft.studentEmail || ''}`,
      `Submission ID: ${submissionId || 'Generated at finalization'}`,
      `Generated: ${new Date().toLocaleString()}`,
      '',
      'SUBMISSION RECEIPT',
      'This PDF is a readable receipt. The authoritative answer record and evidence files are inside the encrypted .lexden submission package.',
      '',
      `Automatic readiness checks passed: ${passed}/${checks.length}`,
      `Approximate active time on this page: ${Math.round((interaction?.activeMsApprox || 0) / 60000)} minute(s)`,
      `Recorded focus losses: ${interaction?.focusLossCount || 0}`,
      `Recorded visibility-hidden transitions: ${interaction?.visibilityHiddenCount || 0}`,
      `Recorded paste events: ${interaction?.pasteEventCount || 0}`,
      'Telemetry note: these events are context only and may have legitimate causes, especially on mobile devices.',
      '',
      `Answer SHA-256: ${integrity?.answerSha256 || 'Available inside encrypted package'}`,
      `Attachment hashes: ${(integrity?.attachmentHashes || []).length}`,
      '',
      'Attached evidence files included in the encrypted package:',
      ...(selected.length ? selected : ['None']),
      '',
      'Student action: attach the .lexden file to the matching Google Classroom assignment. The PDF is a readable receipt and may be attached as supporting documentation.'
    ];
  }

  function ensureSubmissionEnvironment() {
    if (!window.isSecureContext || !window.crypto?.subtle) {
      throw new Error('Secure HTTPS is required to create an encrypted submission. Open the HTTPS assessment link, not an insecure HTTP copy.');
    }
    if(typeof window.CompressionStream !== 'function') throw new Error('This browser does not provide the compression API required for submission packaging. Use a current Chrome, Edge, Firefox or Safari browser.');
    try { new window.CompressionStream('deflate-raw'); }
    catch { throw new Error('This browser provides CompressionStream but not the deflate-raw format required for ZIP packaging. Update to a current browser.'); }
  }

  function finalizePreparedSubmission(backdrop, assignment, email, result, restoreFocus) {
    let downloadedLexden=false;
    backdrop.innerHTML=`
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="finalPreparedTitle" tabindex="-1">
        <div class="eyebrow">SUBMISSION PREPARED</div>
        <h3 id="finalPreparedTitle">Save your encrypted submission before locking</h3>
        <p>The encrypted package is ready. The site cannot retrieve it from the server later, so download the <strong>.lexden</strong> file now. The assignment is not locked until you confirm that you saved it.</p>
        <div class="callout"><strong>${escapeHtml(formatBytes(result.size))}</strong> final encrypted package • <span class="small">Submission ID: ${escapeHtml(result.submissionId)}</span></div>
        <div class="row">
          <button class="btn btn-primary" data-download-final type="button">Download encrypted .lexden</button>
          <button class="btn" data-download-pdf-final type="button">Download PDF receipt</button>
        </div>
        <label class="option">
          <input id="confirmDownloaded" type="checkbox">
          <span>I have downloaded and saved the encrypted .lexden file on this device.</span>
        </label>
        <div class="row">
          <button class="btn btn-ghost" data-cancel-prepared type="button">Keep editing</button>
          <button class="btn btn-primary" data-lock-final type="button" disabled>Mark assignment complete & lock</button>
        </div>
      </div>`;
    const modal=backdrop.querySelector('.modal');
    const checkbox=backdrop.querySelector('#confirmDownloaded');
    const lockBtn=backdrop.querySelector('[data-lock-final]');
    const lexdenBtn=backdrop.querySelector('[data-download-final]');
    const pdfBtn=backdrop.querySelector('[data-download-pdf-final]');
    const syncLock=()=>{lockBtn.disabled=!(checkbox.checked && downloadedLexden);};
    checkbox.addEventListener('change',syncLock);
    lexdenBtn.addEventListener('click',()=>{
      const ok=downloadBlob(new Blob([result.container],{type:'application/octet-stream'}),`${slugSafe(assignment.id)}-${slugSafe(result.draft.studentName || 'student')}.lexden`);
      if(ok){downloadedLexden=true; syncLock(); notify('Encrypted .lexden download started. Check your Downloads folder before locking the assignment.',true);}
    });
    pdfBtn.addEventListener('click',()=>downloadBlob(new Blob([result.pdf.bytes],{type:'application/pdf'}),`${slugSafe(assignment.id)}-${slugSafe(result.draft.studentName || 'student')}-submission-receipt.pdf`));
    backdrop.querySelector('[data-cancel-prepared]').addEventListener('click',()=>{backdrop.remove();restoreFocus?.focus();});
    lockBtn.addEventListener('click',async()=>{
      if(!checkbox.checked || !downloadedLexden){
        notify('Download the encrypted .lexden file first, then confirm that you saved it.',false);
        return;
      }
      lockBtn.disabled=true;
      const submissionKey=profileBucketKey(result.draft.studentEmail || email);
      if(!state.submissions[submissionKey] || typeof state.submissions[submissionKey]!=='object') state.submissions[submissionKey]=emptyMap();
      const previousSubmission=state.submissions[submissionKey][assignment.id] || null;
      state.submissions[submissionKey][assignment.id]={lockedAt:new Date().toISOString(),submissionId:result.submissionId,submissionCommit:result.submissionCommit};
      if(!flushSaveState()){
        if(previousSubmission) state.submissions[submissionKey][assignment.id]=previousSubmission;
        else delete state.submissions[submissionKey][assignment.id];
        if(!Object.keys(state.submissions[submissionKey]).length) delete state.submissions[submissionKey];
        lockBtn.disabled=false;
        notify('The final lock could not be saved in browser storage. Your assignment is NOT marked complete. Keep the downloaded .lexden file and free browser storage space, then try again.',false);
        return;
      }
      backdrop.remove();
      renderWorkspace(assignment,email);
      notify('Submission finalized and locked. Keep the downloaded .lexden file and attach it to Google Classroom.',true);
      window.scrollTo({top:0,behavior:'smooth'});
      restoreFocus?.focus();
    });
    modal.focus();
  }

  function openConfirm(assignment, email) {
    const form=document.getElementById('assessmentForm');
    let draft=collectForm(assignment,email);
    const currentEmail=emailKey(getControlByKey('studentEmail')?.value || email);
    email=currentEmail;

    if(form && !form.reportValidity()){
      notify('Please correct the highlighted fields before finalization.',false);
      return;
    }
    const missing=missingRequired(form,assignment,draft);
    if(missing.length){
      notify(`Complete the required sections before finalizing. Missing: ${missing.length} item(s).`,false);
      if(missing[0]==='verificationResponse') document.getElementById('verificationResponse')?.scrollIntoView({behavior:'smooth',block:'center'});
      else document.querySelector(`[data-field-key="${cssSafeKey(missing[0])}"]`)?.scrollIntoView({behavior:'smooth',block:'center'});
      return;
    }
    if(!isValidStudentEmail(draft.studentEmail)){
      notify('Enter a valid Google Classroom email before finalization.',false);
      getControlByKey('studentEmail')?.focus();
      return;
    }
    const raw=Object.values(window.__LEXDEN_SELECTED_FILES || {}).flat().reduce((sum,file)=>sum+file.size,0);
    if(raw>RAW_ATTACHMENT_SAFE_LIMIT){notify('Selected files are above the 95 MiB reliable-processing guard. Reduce attachments before finalization.',false);return;}
    const checks=runAutoChecks(assignment,draft); const weak=checks.filter(check=>!check.ok);
    const backdrop=document.createElement('div');
    backdrop.className='modal-backdrop';
    backdrop.innerHTML=`
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="finalGateTitle" tabindex="-1">
        <div class="eyebrow">FINAL SUBMISSION GATE</div>
        <h3 id="finalGateTitle">Are you truly ready to submit?</h3>
        <p>First, the site will prepare an encrypted <strong>.lexden</strong> submission and a readable PDF receipt. You will then download the encrypted package and explicitly lock the assignment.</p>
        ${weak.length ? `<div class="status show bad">Automatic checks flagged ${weak.length} item(s). Review them yourself before proceeding. These checks are warnings, not a correctness grade.</div>` : ''}
        <p class="small">The assessment intentionally does not claim to detect or prove malpractice. It uses evidence binding, sequential progression, a student-specific defense checkpoint, tamper-evident hashes and context-only interaction telemetry to make copied or poorly understood work easier to identify during teacher review.</p>
        <label class="option"><input id="confirmReady" type="checkbox"><span>I have reviewed my work and I am truly ready to prepare the final submission.</span></label>
        <div class="row"><button class="btn btn-ghost" data-cancel type="button">Go back</button><button class="btn btn-primary" data-confirm disabled type="button">Prepare final submission</button></div>
      </div>`;
    document.body.appendChild(backdrop);
    const restoreFocus=document.getElementById('submitBtn');
    const confirm=backdrop.querySelector('#confirmReady');
    const button=backdrop.querySelector('[data-confirm]');
    confirm.addEventListener('change',()=>{button.disabled=!confirm.checked;});
    backdrop.querySelector('[data-cancel]').addEventListener('click',()=>{backdrop.remove();restoreFocus?.focus();});
    backdrop.addEventListener('keydown',event=>{
      if(event.key==='Escape'){backdrop.remove();restoreFocus?.focus();}
    });
    button.addEventListener('click',async()=>{
      button.disabled=true;
      try{
        ensureSubmissionEnvironment();
        if(!flushSaveState()) throw new Error(storageWarning || 'The current draft could not be saved. Resolve browser storage issues before finalization.');
        const result=await buildSubmission(assignment,email);
        window.__LEXDEN_LAST_SUBMISSION=result;
        finalizePreparedSubmission(backdrop,assignment,email,result,restoreFocus);
      }catch(error){
        button.disabled=false;
        notify(error?.message || String(error),false);
      }
    });
    backdrop.querySelector('.modal')?.focus();
  }

  function bindWorkspace(assignment, email) {
    const form = document.getElementById('assessmentForm');
    if (!form) return;

    let activeEmail = emailKey(email);
    const collectCurrentDraft = () => {
      const draft=collectForm(assignment,activeEmail);
      const visibleEmail=emailKey(getControlByKey('studentEmail')?.value || '');
      if(isValidStudentEmail(visibleEmail) && visibleEmail!==activeEmail){
        moveCurrentDraftToEmail(assignment,activeEmail,visibleEmail,draft);
        activeEmail=visibleEmail;
      }
      return draft;
    };

    form.addEventListener('input', () => {
      collectCurrentDraft();
      updateProgress(assignment);
    });

    form.addEventListener('change', async event => {
      const target = event.target;

      if (target.matches('input[type="radio"],input[type="checkbox"],select')) {
        collectCurrentDraft();
        updateProgress(assignment);
      }

      const fileKey = target.dataset.fileKey;
      if (fileKey) {
        const files = Array.from(target.files || []);
        if (files.length > MAX_ATTACHMENT_COUNT) {
          window.__LEXDEN_SELECTED_FILES[fileKey] = [];
          target.value = '';
          notify(`Too many files selected. Keep attachments to ${MAX_ATTACHMENT_COUNT} files or fewer.`, false);
        } else {
          window.__LEXDEN_SELECTED_FILES[fileKey] = files;
        }

        const metaNode = document.getElementById(`filemeta-${cssSafeKey(fileKey)}`);
        if (metaNode) {
          metaNode.textContent = files.length ? formatFileList(files) : 'No files selected.';
        }
        checkSizeBudget();
        updateProgress(assignment);
      }

      const csvKey = target.dataset.csvKey;
      if (csvKey) {
        const file = target.files?.[0];
        window.__LEXDEN_CSV_TEXT[csvKey] = '';
        window.__LEXDEN_CSV_RECORDS[csvKey] = [];
        delete window.__LEXDEN_SELECTED_FILES[csvKey];
        if (!file) { updateProgress(assignment); return; }
        if (file.size > MAX_CSV_BYTES) {
          const statusNode = document.getElementById(`csvstatus-${cssSafeKey(csvKey)}`);
          if (statusNode) { statusNode.textContent = `CSV file is too large (${formatBytes(file.size)}). Keep it at or below 5 MiB.`; statusNode.className='small csv-invalid'; }
          updateProgress(assignment);
          return;
        }
        const csvText = await file.text();
        if(target.files?.[0] !== file){ return; }

        try {
          const parsed = validateProspectCsv(csvText);
          if(target.files?.[0] !== file) return;
          window.__LEXDEN_CSV_TEXT[csvKey] = csvText;
          window.__LEXDEN_CSV_RECORDS[csvKey] = parsed.records;
          window.__LEXDEN_SELECTED_FILES[csvKey] = [file];
          const statusNode = document.getElementById(`csvstatus-${cssSafeKey(csvKey)}`);
          if(statusNode){statusNode.textContent='Valid: exactly 100 prospect rows, unique ranks 1–100, required evidence columns present.';statusNode.className='small csv-valid';}
        } catch(error) {
          if(target.files?.[0] !== file) return;
          const statusNode = document.getElementById(`csvstatus-${cssSafeKey(csvKey)}`);
          if(statusNode){statusNode.textContent=error.message;statusNode.className='small csv-invalid';}
        }
        updateProgress(assignment);
      }
    });

    document.querySelector('[data-action="csv-template"]')?.addEventListener('click', event => {
      event.preventDefault();
      downloadBlob(makeCsvTemplate(), 'LEXDEN-M4-100-prospect-template.csv');
    });

    document.getElementById('saveBtn')?.addEventListener('click', () => {
      collectCurrentDraft();
      if(flushSaveState()) notify('Draft saved locally on this device.', true);
      else notify(storageWarning || 'Draft could not be saved.', false);
    });

    document.getElementById('pdfBtn')?.addEventListener('click', () => {
      const draft = collectCurrentDraft();
      const interactionState = interactionSnapshot();
      const checks = runAutoChecks(assignment, draft);
      const integrity = {
        answerSha256: 'Generated only inside the encrypted final package',
        attachmentHashes: [],
      };

      const pdf = window.LEXDEN_PDF.makePdf({
        title: assignment.title,
        lines: buildReportLines(assignment, draft, '', interactionState, integrity),
        filename: 'submission-receipt.pdf'
      });

      downloadBlob(new Blob([pdf.bytes], { type: 'application/pdf' }), `${slugSafe(assignment.id)}-draft-receipt.pdf`);
      notify(`Draft PDF generated. ${checks.filter(check => check.ok).length}/${checks.length} automatic checks currently pass.`, true);
    });

    document.getElementById('submitBtn')?.addEventListener('click', () => openConfirm(assignment, activeEmail));

    document.getElementById('downloadLexdenBtn')?.addEventListener('click', () => {
      const result = window.__LEXDEN_LAST_SUBMISSION;
      if (!result) {
        notify('The final encrypted file is not available in this page session. Use the downloaded .lexden file already saved on your device.', false);
        return;
      }
      downloadBlob(
        new Blob([result.container], { type: 'application/octet-stream' }),
        `${slugSafe(assignment.id)}-${slugSafe(result.draft.studentName || 'student')}.lexden`
      );
    });

    document.getElementById('downloadReceiptBtn')?.addEventListener('click', () => {
      const result = window.__LEXDEN_LAST_SUBMISSION;
      if (!result) {
        notify('The final PDF is not available in this page session.', false);
        return;
      }
      downloadBlob(
        new Blob([result.pdf.bytes], { type: 'application/pdf' }),
        `${slugSafe(assignment.id)}-${slugSafe(result.draft.studentName || 'student')}-submission-receipt.pdf`
      );
    });

    checkSizeBudget();
  }

  function checkSizeBudget() {
    const files = Object.values(window.__LEXDEN_SELECTED_FILES || {}).flat();
    const raw = files.reduce((sum, file) => sum + file.size, 0);
    const node = document.getElementById('status');
    if (!node || raw <= RAW_ATTACHMENT_SAFE_LIMIT) return;

    node.textContent = `Selected files total ${formatBytes(raw)} before ZIP/encryption overhead. Reduce the selection to 95 MiB or less for reliable browser processing.`;
    node.className = 'status show bad';
  }

  function slugSafe(value) {
    const slug=String(value || '').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
    return slug || 'student';
  }

  function bootstrap() {
    if (COURSE_ID !== COURSE.courseId) {
      renderGate('Unknown course link.');
      return;
    }

    const assignment = currentAssignment();

    if (!assignment) {
      renderGate('No assignment was specified in this link.');
      return;
    }

    const boot = (() => {
      try {
        return readIdentity();
      } catch {
        return {};
      }
    })();

    const email = isValidStudentEmail(boot.studentEmail) ? emailKey(boot.studentEmail) : '';

    if ((assignment.prerequisites || []).length && !email) {
      show(gate, true);
      show(workspace, false);
      gate.innerHTML = `
        <div class="card gate-card">
          <div class="eyebrow">${escapeHtml(assignment.module)} • ${escapeHtml(assignment.shortTitle)}</div>
          <h2>Start with your Google Classroom email</h2>
          <p>This assignment depends on a previous finalized assignment. Use the same Google Classroom email in the earlier assignment so this device can carry the required progress forward.</p>
          <div class="callout">Open the earlier assignment first, enter the same Classroom email, finalize it, then return to this link.</div>
        </div>`;
      completeBoot();
      return;
    }

    if ((assignment.prerequisites || []).length && !hasPrereqs(email, assignment)) {
      show(gate, true);
      show(workspace, false);
      gate.innerHTML = `
        <div class="card gate-card">
          <div class="eyebrow">${escapeHtml(assignment.module)} • Locked</div>
          <h2>Complete the previous assignment first</h2>
          <p>This assignment is intentionally unavailable until the prerequisite submission is finalized on this device using the same Google Classroom email.</p>
          <div class="assessment-list">
            ${(assignment.prerequisites || []).map(previousId => `
              <div class="assessment-item ${getSubmission(email, previousId) ? 'done' : ''}">
                <span class="dot"></span>
                ${escapeHtml(A[previousId]?.module || previousId)} · ${escapeHtml(A[previousId]?.shortTitle || previousId)}
              </div>`).join('')}
          </div>
        </div>`;
      completeBoot();
      return;
    }

    const draft = getDraft(email, assignment.id);
    ensureDraftMeta(assignment, draft);

    if (!draft.studentEmail && email) {
      draft.studentEmail = email;
      queueSaveState();
    }

    renderWorkspace(assignment, email);
    completeBoot();
  }

  installInteractionTelemetry();
  window.addEventListener('pagehide',()=>{ try{flushSaveState();}catch{} });
  document.addEventListener('visibilitychange',()=>{if(document.hidden) try{flushSaveState();}catch{} });

  try {
    bootstrap();
  } catch (error) {
    renderGate('The assessment could not initialize safely: ' + (error?.message || String(error)));
  }
})();
})();
