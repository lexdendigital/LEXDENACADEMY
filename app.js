(function(){
  const timeout = setTimeout(function(){
    if (window.__LEXDEN_BOOT_OK__) return;
    const loading = document.getElementById('loading');
    const gate = document.getElementById('gate');
    if (loading) loading.classList.add('hidden');
    if (gate) {
      gate.classList.remove('hidden');
      gate.innerHTML =
        '<div class="card gate-card">' +
        '<div class="eyebrow">LEXDEN ACADEMY</div>' +
        '<h2>Assessment could not finish loading</h2>' +
        '<p>The page arrived, but its application code did not initialize. This is usually a deployment or browser-script issue.</p>' +
        '<div class="callout">Refresh once. If the problem remains, open <strong>/health</strong> on this Worker and report whether it returns OK. Do not submit student work until the assessment loads normally.</div>' +
        '<div class="small code boot-code">Diagnostic: LEXDEN-CLIENT-BOOT-TIMEOUT</div>' +
        '</div>';
    }
  }, 7000);
  window.__LEXDEN_BOOT_TIMER__ = timeout;
  window.__LEXDEN_MARK_BOOT_OK__ = function(){
    window.__LEXDEN_BOOT_OK__ = true;
    clearTimeout(timeout);
  };
})();

window.LEXDEN_COURSE = {
  courseId: 'gbl',
  title: 'Google Business & Local Leads Masterclass',
  subtitle: 'Assessment Workspace • LEXDEN ACADEMY',
  brand: 'LEXDEN ACADEMY',
  version: '1.1.3-assessment',
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
    const year=Math.max(1980,d.getFullYear());
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
  async function inflateRaw(bytes){
    if(typeof DecompressionStream!=='function') throw new Error('This browser does not provide DecompressionStream. Please use a current Chrome/Edge/Firefox/Safari browser.');
    const ds=new DecompressionStream('deflate-raw');
    const ab=await new Response(new Blob([bytes]).stream().pipeThrough(ds)).arrayBuffer();
    return new Uint8Array(ab);
  }

  async function createZip(entries,onProgress){
    const local=[]; const central=[]; let offset=0; const now=dosTimeDate(new Date());
    for(let i=0;i<entries.length;i++){
      const e=entries[i];
      const nameBytes=te.encode(e.name);
      const raw=e.data instanceof Uint8Array?e.data:new Uint8Array(e.data);
      const compressed=await deflateRaw(raw);
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
      if(onProgress) onProgress('compress',i+1,entries.length,e.name);
      if(offset>0xFFFFFFFF) throw new Error('ZIP exceeds the classic ZIP 4 GiB limit.');
    }
    const cd=concat(central); const body=concat(local); const cdOffset=body.length;
    const eocd=concat([new Uint8Array([0x50,0x4b,0x05,0x06]),u16(0),u16(0),u16(entries.length),u16(entries.length),u32(cd.length),u32(cdOffset),u16(0)]);
    return concat([body,cd,eocd]);
  }

  function findEOCD(bytes){
    const min=Math.max(0,bytes.length-65557);
    for(let i=bytes.length-22;i>=min;i--){
      if(bytes[i]===0x50&&bytes[i+1]===0x4b&&bytes[i+2]===0x05&&bytes[i+3]===0x06) return i;
    }
    throw new Error('ZIP end record not found.');
  }
  function readU16(b,o){return b[o]|(b[o+1]<<8);}
  function readU32(b,o){return (b[o]|(b[o+1]<<8)|(b[o+2]<<16)|(b[o+3]<<24))>>>0;}
  function parseZipDirectory(bytes){
    if(bytes.length<22) throw new Error('ZIP is too small.');
    const e=findEOCD(bytes);
    if(e+22>bytes.length) throw new Error('ZIP end record is truncated.');
    const count=readU16(bytes,e+10), size=readU32(bytes,e+12), off=readU32(bytes,e+16);
    const dirEnd=off+size;
    if(off>bytes.length || size>bytes.length || dirEnd>e || dirEnd>bytes.length){
      throw new Error('Invalid ZIP central directory bounds.');
    }
    let p=off; const list=[];
    for(let i=0;i<count;i++){
      if(p+46>dirEnd || readU32(bytes,p)!==0x02014b50) throw new Error('Invalid ZIP central directory.');
      const method=readU16(bytes,p+10), crc=readU32(bytes,p+16), csize=readU32(bytes,p+20), usize=readU32(bytes,p+24);
      const nlen=readU16(bytes,p+28), xlen=readU16(bytes,p+30), clen=readU16(bytes,p+32), lhoff=readU32(bytes,p+42);
      const recordEnd=p+46+nlen+xlen+clen;
      if(recordEnd>dirEnd) throw new Error('Truncated ZIP central-directory entry.');
      const name=td.decode(bytes.subarray(p+46,p+46+nlen));
      if(lhoff+30>bytes.length) throw new Error('ZIP local-header offset is outside the file.');
      list.push({name,method,crc,compressedSize:csize,uncompressedSize:usize,localOffset:lhoff});
      p=recordEnd;
    }
    if(p!==dirEnd) throw new Error('ZIP central directory size does not match its entries.');
    return list;
  }
  async function extractZip(bytes,onProgress){
    const entries=parseZipDirectory(bytes); const out=[];
    for(let i=0;i<entries.length;i++){
      const e=entries[i], p=e.localOffset;
      if(p+30>bytes.length || readU32(bytes,p)!==0x04034b50) throw new Error('Invalid ZIP local header.');
      const nlen=readU16(bytes,p+26), xlen=readU16(bytes,p+28);
      const dataStart=p+30+nlen+xlen;
      const dataEnd=dataStart+e.compressedSize;
      if(dataStart>bytes.length || dataEnd>bytes.length) throw new Error('ZIP entry data is truncated for '+e.name);
      const comp=bytes.subarray(dataStart,dataEnd);
      let data;
      if(e.method===8) data=await inflateRaw(comp); else if(e.method===0) data=new Uint8Array(comp); else throw new Error('Unsupported ZIP compression method: '+e.method);
      if(data.length!==e.uncompressedSize) throw new Error('ZIP size mismatch for '+e.name);
      if(crc32(data)!==e.crc) throw new Error('ZIP integrity check failed for '+e.name);
      out.push({name:e.name,data});
      if(onProgress) onProgress('extract',i+1,entries.length,e.name);
    }
    return out;
  }
  window.LEXDEN_ZIP={crc32,createZip,extractZip,parseZipDirectory,concat};
})();

(function(){
  'use strict';
  const te=new TextEncoder(), td=new TextDecoder();
  const A={name:'RSA-OAEP',hash:'SHA-256'};
  const G={name:'AES-GCM',length:256};
  const MAGIC=te.encode('LEXDEN02');
  const CHUNK_SIZE=1024*1024;
  function b64u(bytes){
    let s=''; const b=bytes instanceof Uint8Array?bytes:new Uint8Array(bytes);
    for(let i=0;i<b.length;i+=0x8000) s+=String.fromCharCode(...b.subarray(i,i+0x8000));
    return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
  }
  function unb64u(s){
    s=s.replace(/-/g,'+').replace(/_/g,'/'); while(s.length%4)s+='=';
    const raw=atob(s), out=new Uint8Array(raw.length); for(let i=0;i<raw.length;i++)out[i]=raw.charCodeAt(i); return out;
  }
  function concat(parts){
    let total=0; for(const p of parts)total+=p.length; const out=new Uint8Array(total); let o=0;
    for(const p of parts){out.set(p,o);o+=p.length;} return out;
  }
  function u32(n){return new Uint8Array([n&255,(n>>>8)&255,(n>>>16)&255,(n>>>24)&255]);}
  function readU32(b,o){return (b[o]|(b[o+1]<<8)|(b[o+2]<<16)|(b[o+3]<<24))>>>0;}
  function utf8(s){return te.encode(String(s));}
  function text(bytes){return td.decode(bytes);
  }
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
    const b=crypto.getRandomValues(new Uint8Array(16)); b[6]=(b[6]&15)|64; b[8]=(b[8]&63)|128; const h=Array.from(b,x=>x.toString(16).padStart(2,'0')).join(''); return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`;
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
      createdAt:metadata.createdAt,studentFingerprint,
      wrappedAesKey:b64u(wrapped),chunkSize:CHUNK_SIZE,zipSize:zipBytes.length,zipSha256,chunks:[]
    };
    const encrypted=[]; let total=0; let i=0;
    for(let o=0;o<zipBytes.length;o+=CHUNK_SIZE,i++){
      const chunk=zipBytes.subarray(o,Math.min(zipBytes.length,o+CHUNK_SIZE));
      const iv=crypto.getRandomValues(new Uint8Array(12));
      const cipher=new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv,additionalData:aadFor(header,i)},aesKey,chunk));
      header.chunks.push({iv:b64u(iv),cipherSize:cipher.length,plainSize:chunk.length});
      encrypted.push(cipher); total+=cipher.length;
      if(onProgress)onProgress(i+1,Math.ceil(zipBytes.length/CHUNK_SIZE));
    }
    const headerBytes=utf8(JSON.stringify(header));
    const container=concat([MAGIC,u32(headerBytes.length),headerBytes,...encrypted]);
    if(container.length>100*1024*1024) throw new Error('The finished encrypted submission is larger than 100 MiB. Remove or reduce attachments and try again.');
    return container;
  }
  async function readContainer(bytes){
    const MAX_CONTAINER_BYTES=100*1024*1024;
    if(bytes.length<12)throw new Error('Submission file is too small.');
    if(bytes.length>MAX_CONTAINER_BYTES)throw new Error('Submission file exceeds the supported 100 MiB limit.');
    for(let i=0;i<MAGIC.length;i++)if(bytes[i]!==MAGIC[i])throw new Error('This is not a valid LEXDEN submission file.');
    const hlen=readU32(bytes,8), hs=12, he=hs+hlen;
    if(hlen===0 || he>bytes.length || he<hs)throw new Error('Submission header is truncated or invalid.');
    let header; try{header=JSON.parse(text(bytes.subarray(hs,he)));}catch(e){throw new Error('Submission header is unreadable.');}
    if(header.format!=='LEXDEN02'||header.version!==2)throw new Error('Unsupported LEXDEN submission format.');
    if(!Number.isInteger(header.zipSize)||header.zipSize<1||header.zipSize>MAX_CONTAINER_BYTES)throw new Error('Invalid submission ZIP size.');
    if(!Array.isArray(header.chunks)||header.chunks.length!==Math.ceil(header.zipSize/CHUNK_SIZE))throw new Error('Invalid submission chunk manifest.');
    let p=he, plainTotal=0; const chunks=[];
    for(let i=0;i<header.chunks.length;i++){
      const meta=header.chunks[i];
      if(!meta||!Number.isInteger(meta.plainSize)||!Number.isInteger(meta.cipherSize)||meta.plainSize<1||meta.plainSize>CHUNK_SIZE||meta.cipherSize!==meta.plainSize+16){
        throw new Error('Invalid submission chunk metadata.');
      }
      const iv=unb64u(meta.iv);
      if(iv.length!==12)throw new Error('Invalid submission chunk IV.');
      plainTotal+=meta.plainSize;
      if(plainTotal>MAX_CONTAINER_BYTES)throw new Error('Submission plaintext exceeds the supported 100 MiB limit.');
      const end=p+meta.cipherSize;
      if(end>bytes.length)throw new Error('Submission chunk is truncated.');
      chunks.push(bytes.subarray(p,end)); p=end;
    }
    if(plainTotal!==header.zipSize)throw new Error('Submission ZIP size does not match the chunk manifest.');
    if(p!==bytes.length)throw new Error('Submission contains unexpected trailing data.');
    return {header,chunks};
  }
  async function decryptContainer(bytes,adminKeyPackageText,passphrase,onProgress){
    const {header,chunks}=await readContainer(bytes);
    const pkg=typeof adminKeyPackageText==='string'?JSON.parse(adminKeyPackageText):adminKeyPackageText;
    if(pkg.version!==1||pkg.algorithm!=='PBKDF2-SHA256/600000 + AES-256-GCM')throw new Error('Unsupported admin key package.');
    const salt=unb64u(pkg.salt), iv=unb64u(pkg.iv), ct=unb64u(pkg.ciphertext), tag=pkg.tag?unb64u(pkg.tag):new Uint8Array(0);
    const passBytes=utf8(passphrase);
    const base=await crypto.subtle.importKey('raw',passBytes,'PBKDF2',false,['deriveKey']);
    const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:600000,hash:'SHA-256'},base,{name:'AES-GCM',length:256},false,['decrypt']);
    const fullCipher=tag.length?concat([ct,tag]):ct;
    let pkcs8;
    try{pkcs8=new Uint8Array(await crypto.subtle.decrypt({name:'AES-GCM',iv},key,fullCipher));}
    catch(e){throw new Error('Admin key could not be unlocked. Check the passphrase and key package.');}
    const privateKey=await crypto.subtle.importKey('pkcs8',pkcs8,A,false,['unwrapKey']);
    const aesKey=await crypto.subtle.unwrapKey('raw',unb64u(header.wrappedAesKey),privateKey,A,{name:'AES-GCM',length:256},false,['decrypt']);
    const plain=[]; let total=0;
    for(let i=0;i<chunks.length;i++){
      const meta=header.chunks[i]; const iv2=unb64u(meta.iv);
      let part;
      try{part=new Uint8Array(await crypto.subtle.decrypt({name:'AES-GCM',iv:iv2,additionalData:aadFor(header,i)},aesKey,chunks[i]));}
      catch(e){throw new Error('Submission integrity check failed. The file may have been altered or is not for this key.');}
      if(part.length!==meta.plainSize)throw new Error('Submission chunk size check failed.');
      plain.push(part); total+=part.length;
      if(onProgress)onProgress(i+1,chunks.length);
    }
    const zip=concat(plain); if(zip.length!==header.zipSize)throw new Error('Submission ZIP size check failed.');
    const hash=await sha256Hex(zip); if(hash!==header.zipSha256)throw new Error('Submission SHA-256 integrity check failed.');
    return {header,zipBytes:zip};
  }
  async function encryptAdminPrivateKey(pkcs8Bytes,passphrase){
    const salt=crypto.getRandomValues(new Uint8Array(16)),iv=crypto.getRandomValues(new Uint8Array(12));
    const base=await crypto.subtle.importKey('raw',utf8(passphrase),'PBKDF2',false,['deriveKey']);
    const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:600000,hash:'SHA-256'},base,{name:'AES-GCM',length:256},false,['encrypt']);
    const enc=new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv},key,pkcs8Bytes));
    const tag=enc.slice(-16),ciphertext=enc.slice(0,-16);
    return {version:1,algorithm:'PBKDF2-SHA256/600000 + AES-256-GCM',salt:b64u(salt),iv:b64u(iv),tag:b64u(tag),ciphertext:b64u(ciphertext)};
  }
  window.LEXDENCrypto={randomId,b64u,unb64u,utf8,text,concat,sha256Hex,encryptSubmission,readContainer,decryptContainer,encryptAdminPrivateKey,CHUNK_SIZE};
})();

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
   v1.1.3
   --------------------------- */
(() => {
  'use strict';

  const COURSE = window.LEXDEN_COURSE;
  const A = COURSE.assignments;
  const STORAGE = 'lexden_academy_assessment_v1';
  const BOOT_TIMEOUT_MS = 6000;
  const RAW_ATTACHMENT_SAFE_LIMIT = 95 * 1024 * 1024;
  const FINAL_PACKAGE_LIMIT = 100 * 1024 * 1024;

  const app = document.getElementById('app');
  const loading = document.getElementById('loading');
  const gate = document.getElementById('gate');
  const workspace = document.getElementById('workspace');

  const params = new URLSearchParams(location.search);
  const COURSE_ID = params.get('course') || COURSE.courseId;
  const ASSIGNMENT_ID = params.get('assignment') || window.LEXDEN_TEST_ASSIGNMENT;

  let bootFinished = false;
  let bootTimer = null;

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

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE) || '{}');
      return {
        profiles: parsed?.profiles && typeof parsed.profiles === 'object' && !Array.isArray(parsed.profiles) ? parsed.profiles : {},
        submissions: parsed?.submissions && typeof parsed.submissions === 'object' && !Array.isArray(parsed.submissions) ? parsed.submissions : {}
      };
    } catch (error) {
      return { profiles: {}, submissions: {} };
    }
  }

  const state = loadState();

  function saveState() {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(state));
      return true;
    } catch (error) {
      return false;
    }
  }

  function completeBoot() {
    bootFinished = true;
    if (bootTimer) clearTimeout(bootTimer);
    if (typeof window.__LEXDEN_MARK_BOOT_OK__ === 'function') window.__LEXDEN_MARK_BOOT_OK__();
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

  function emailKey(email) {
    return String(email || '').trim().toLowerCase();
  }

  function getDraft(email, id) {
    const ek = emailKey(email);
    state.profiles[ek] ||= {};
    state.profiles[ek][id] ||= {};
    return state.profiles[ek][id];
  }

  function getSubmission(email, id) {
    return state.submissions?.[emailKey(email)]?.[id] || null;
  }

  function hasPrereqs(email, assignment) {
    return (assignment.prerequisites || []).every(id => Boolean(getSubmission(email, id)?.lockedAt));
  }

  function currentAssignment() {
    return A[ASSIGNMENT_ID];
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
    if (!Number.isInteger(draft.defenseVariant)) {
      draft.defenseVariant = secureInt(defensePromptPool(assignment.id).length);
    }
    if (typeof draft.verificationResponse !== 'string') draft.verificationResponse = '';
    saveState();
  }

  function getDefensePrompt(assignment, draft) {
    ensureDraftMeta(assignment, draft);
    const pool = defensePromptPool(assignment.id);
    return pool[draft.defenseVariant % pool.length](draft);
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

  function bootstrapFailSafe() {
    bootTimer = setTimeout(() => {
      if (bootFinished) return;
      renderGate('The assessment did not finish initializing within the safety timeout. This usually indicates a deployment/serving problem rather than an assignment answer problem.');
    }, BOOT_TIMEOUT_MS);
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

  function importCarryForward(email, assignment) {
    const current = getDraft(email, assignment.id);
    const aliases = {
      targetCity: 'businessCity',
      targetNiche: 'businessNiche',
      capstoneBusiness: 'clientBusiness',
      capstoneCity: 'targetCity',
      capstoneNiche: 'targetNiche'
    };

    for (const prevId of (assignment.prerequisites || [])) {
      const prev = getDraft(email, prevId);
      for (const key of (assignment.carryFrom || [])) {
        const destination = Object.entries(aliases).find(([, from]) => from === key)?.[0] || key;
        if ((current[destination] === undefined || current[destination] === '') && prev[key] !== undefined) {
          current[destination] = prev[key];
        }
      }
    }

    ensureDraftMeta(assignment, current);
    return current;
  }

  function renderField(field, draft) {
    const key = field.k;
    const req = field.required ? '1' : '0';
    const value = draft[key] ?? '';
    const safeKey = cssSafeKey(key);
    const label = `<label for="${safeKey}">${escapeHtml(field.label)} ${field.required ? '<span class="required">*</span>' : ''}</label>`;
    const hint = field.hint ? `<div class="hint">${escapeHtml(field.hint)}</div>` : '';
    let inner = '';

    if (field.type === 'radio') {
      inner = `<div class="options">${(field.options || []).map(option => `
        <label class="option">
          <input type="radio" name="${escapeHtml(key)}" value="${escapeHtml(option)}" ${value === option ? 'checked' : ''}>
          <span>${escapeHtml(option)}</span>
        </label>`).join('')}</div>`;
    } else if (field.type === 'checkbox') {
      inner = `<div class="options"><label class="option">
        <input type="checkbox" name="${escapeHtml(key)}" value="yes" ${value ? 'checked' : ''}>
        <span>${escapeHtml(field.checkboxText || field.label)}</span>
      </label></div>`;
    } else if (field.type === 'file') {
      inner = `<div class="file-box">
        <input data-file-key="${escapeHtml(key)}" id="${safeKey}" type="file" multiple accept="${escapeHtml(field.accept || '')}">
        <div class="file-meta" id="filemeta-${safeKey}">No files selected.</div>
      </div>`;
    } else if (field.type === 'csv') {
      inner = `<div class="file-box">
        <input data-csv-key="${escapeHtml(key)}" id="${safeKey}" type="file" accept=".csv,text/csv">
        <div class="file-meta" id="filemeta-${safeKey}">Upload exactly 100 prospect rows.</div>
        <div id="csvstatus-${safeKey}" class="small"></div>
      </div>
      <a class="template-link" data-action="csv-template" href="#">Download CSV template</a>`;
    } else if (field.type === 'template-download') {
      inner = `<div class="callout">Use the CSV template link shown in the 100-prospect dataset section.</div>`;
    } else if (field.type === 'number') {
      inner = `<input id="${safeKey}" type="number" min="${field.min ?? ''}" max="${field.max ?? ''}" step="${field.step ?? '1'}" value="${escapeHtml(value)}" ${field.readonlyFromPrev ? 'readonly' : ''}>`;
    } else if (field.type === 'select') {
      inner = `<select id="${safeKey}" ${field.readonlyFromPrev ? 'disabled' : ''}>
        ${(field.options || []).map(option => `<option value="${escapeHtml(option)}" ${value === option ? 'selected' : ''}>${escapeHtml(option)}</option>`).join('')}
      </select>`;
    } else if (field.type === 'textarea') {
      inner = `<textarea id="${safeKey}" rows="${field.rows || 5}" placeholder="${escapeHtml(field.placeholder || '')}" ${field.readonlyFromPrev ? 'readonly' : ''}>${escapeHtml(value)}</textarea>`;
    } else {
      inner = `<input id="${safeKey}" type="${escapeHtml(field.type || 'text')}" value="${escapeHtml(value)}" placeholder="${escapeHtml(field.placeholder || '')}" ${field.readonlyFromPrev ? 'readonly' : ''}>`;
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
        ${(section.fields || []).map(field => renderField(field, draft)).join('')}
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
            <div class="progress-bar"><i id="progressFill"></i></div>
            <div class="small">Automatic checks evaluate structure and selected mechanical requirements. They do not replace teacher judgment.</div>
          </div>

          <div class="card section">
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
          <div id="status" class="status"></div>
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
    const oldKey = emailKey(email);
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
    const newKey = emailKey(draft.studentEmail || email);

    if (newKey && newKey !== oldKey) {
      state.profiles[newKey] ||= {};
      state.profiles[newKey][assignment.id] = draft;
      if (state.profiles[oldKey]) {
        delete state.profiles[oldKey][assignment.id];
        if (!Object.keys(state.profiles[oldKey]).length) delete state.profiles[oldKey];
      }
    }

    try {
      localStorage.setItem('lexden_bootstrap_identity', JSON.stringify({
        studentName: draft.studentName || '',
        studentEmail: draft.studentEmail || newKey || ''
      }));
    } catch {
      // Continue in memory when browser storage is blocked.
    }
    saveState();

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
  }

  function parseCsv(text) {
    const rows = [];
    let row = [];
    let cell = '';
    let quoted = false;

    for (let i = 0; i < text.length; i += 1) {
      const char = text[i];

      if (quoted) {
        if (char === '"' && text[i + 1] === '"') {
          cell += '"';
          i += 1;
        } else if (char === '"') {
          quoted = false;
        } else {
          cell += char;
        }
      } else if (char === '"') {
        quoted = true;
      } else if (char === ',') {
        row.push(cell);
        cell = '';
      } else if (char === '\n') {
        row.push(cell);
        rows.push(row);
        row = [];
        cell = '';
      } else if (char === '\r') {
        // Ignore CR in CRLF input.
      } else {
        cell += char;
      }
    }

    if (quoted) throw new Error('CSV contains an unclosed quoted field.');
    row.push(cell);
    if (row.length > 1 || row[0]) rows.push(row);
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
      const score = Number(value('score'));
      const rank = Number(value('rank'));
      const scoreReason = value('score_reason');

      if (!id || ids.has(id)) errors.push(`row ${line}: missing or duplicate prospect_id`);
      ids.add(id);

      if (!business) errors.push(`row ${line}: business_name is required`);
      if (!city) errors.push(`row ${line}: city is required`);
      if (!niche) errors.push(`row ${line}: niche is required`);
      if (!validHttpsUrl(profileUrl)) errors.push(`row ${line}: profile_url must be a valid HTTPS URL`);
      if (!validHttpsUrl(evidenceUrl)) errors.push(`row ${line}: evidence_url must be a valid HTTPS URL`);
      if (!Number.isInteger(score) || score < 0 || score > 100) errors.push(`row ${line}: score must be an integer from 0 to 100`);
      if (!Number.isInteger(rank) || rank < 1 || rank > 100 || ranks.has(rank)) errors.push(`row ${line}: rank must be a unique integer from 1 to 100`);
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
    const anchor = document.createElement('a');
    const url = URL.createObjectURL(blob);
    anchor.href = url;
    anchor.download = name;
    document.body.appendChild(anchor);
    anchor.click();
    setTimeout(() => {
      URL.revokeObjectURL(url);
      anchor.remove();
    }, 1500);
  }

  async function fileBytesMap() {
    const output = [];
    for (const [field, files] of Object.entries(window.__LEXDEN_SELECTED_FILES)) {
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
    const draft = collectForm(assignment, email);
    email = emailKey(draft.studentEmail || email);

    const rawFiles = await fileBytesMap();
    const rawBytes = rawFiles.reduce((sum, file) => sum + file.size, 0);

    if (rawBytes > RAW_ATTACHMENT_SAFE_LIMIT) {
      throw new Error(`Selected files total ${formatBytes(rawBytes)}. For reliable browser processing, keep selected raw files at or below 95 MiB.`);
    }

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
      const previousDraft = getDraft(email, previousId);
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
    if (typeof window.CompressionStream !== 'function') {
      throw new Error('This browser does not provide the compression API required for submission packaging. Use a current Chrome, Edge, Firefox or Safari browser.');
    }
  }

  function openConfirm(assignment, email) {
    const form = document.getElementById('assessmentForm');
    let draft = collectForm(assignment, email);
    const currentEmail = emailKey(getControlByKey('studentEmail')?.value || email);
    email = currentEmail;

    const missing = missingRequired(form, assignment, draft);
    if (missing.length) {
      notify(`Complete the required sections before finalizing. Missing: ${missing.length} item(s).`, false);
      if (missing[0] === 'verificationResponse') {
        document.getElementById('verificationResponse')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        const node = document.querySelector(`[data-field-key="${cssSafeKey(missing[0])}"]`);
        node?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    if (!draft.studentEmail || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(draft.studentEmail)) {
      notify('Enter a valid Google Classroom email before finalization.', false);
      getControlByKey('studentEmail')?.focus();
      return;
    }

    const raw = Object.values(window.__LEXDEN_SELECTED_FILES || {})
      .flat()
      .reduce((sum, file) => sum + file.size, 0);

    if (raw > RAW_ATTACHMENT_SAFE_LIMIT) {
      notify('Selected files are above the 95 MiB reliable-processing guard. Reduce attachments before finalization.', false);
      return;
    }

    const checks = runAutoChecks(assignment, draft);
    const weak = checks.filter(check => !check.ok);

    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.innerHTML = `
      <div class="modal">
        <div class="eyebrow">FINAL SUBMISSION GATE</div>
        <h3>Are you truly ready to submit?</h3>
        <p>After confirmation, this assignment locks on this device/browser. The site will prepare the encrypted <strong>.lexden</strong> submission and a readable PDF receipt. You will then download them and attach the required file(s) back to Google Classroom.</p>
        ${weak.length ? `<div class="status show bad">Automatic checks flagged ${weak.length} item(s). Review them yourself before proceeding. These checks are warnings, not a correctness grade.</div>` : ''}
        <p class="small">The assessment intentionally does not claim to detect or prove malpractice. It uses evidence binding, sequential progression, a student-specific defense checkpoint, tamper-evident hashes and context-only interaction telemetry to make copied or poorly understood work easier to identify during teacher review.</p>
        <label class="option">
          <input id="confirmReady" type="checkbox">
          <span>I have reviewed my work and I am truly ready to submit this assignment.</span>
        </label>
        <div class="row">
          <button class="btn btn-ghost" data-cancel>Go back</button>
          <button class="btn btn-primary" data-confirm disabled>Prepare final submission</button>
        </div>
      </div>`;

    document.body.appendChild(backdrop);

    const confirm = backdrop.querySelector('#confirmReady');
    const button = backdrop.querySelector('[data-confirm]');

    confirm.addEventListener('change', () => {
      button.disabled = !confirm.checked;
    });

    backdrop.querySelector('[data-cancel]').onclick = () => backdrop.remove();

    button.onclick = async () => {
      button.disabled = true;
      try {
        ensureSubmissionEnvironment();
        const result = await buildSubmission(assignment, email);
        const submissionKey = emailKey(result.draft.studentEmail || email);
        state.submissions[submissionKey] ||= {};
        const previousSubmission = state.submissions[submissionKey][assignment.id] || null;
        state.submissions[submissionKey][assignment.id] = {
          lockedAt: new Date().toISOString(),
          submissionId: result.submissionId,
          submissionCommit: result.submissionCommit
        };
        if (!saveState()) {
          if (previousSubmission) state.submissions[submissionKey][assignment.id] = previousSubmission;
          else delete state.submissions[submissionKey][assignment.id];
          if (!Object.keys(state.submissions[submissionKey]).length) delete state.submissions[submissionKey];
          throw new Error('The browser could not save the final lock. Your submission file has not been finalized. Free browser storage space or allow site storage, then try again.');
        }

        window.__LEXDEN_LAST_SUBMISSION = result;
        backdrop.remove();

        renderWorkspace(assignment, email);
        notify('Submission finalized and locked. Download the encrypted file and PDF from the finalized-submission panel.', true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (error) {
        button.disabled = false;
        notify(error?.message || String(error), false);
      }
    };
  }

  function bindWorkspace(assignment, email) {
    const form = document.getElementById('assessmentForm');
    if (!form) return;

    let activeEmail = emailKey(email);
    const collectCurrentDraft = () => {
      const visibleEmail = getControlByKey('studentEmail')?.value;
      if (visibleEmail !== undefined && String(visibleEmail).trim()) {
        activeEmail = emailKey(visibleEmail);
      }
      return collectForm(assignment, activeEmail);
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
        window.__LEXDEN_SELECTED_FILES[fileKey] = files;

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
        if (!file) return;

        const csvText = await file.text();

        try {
          const parsed = validateProspectCsv(csvText);
          window.__LEXDEN_CSV_TEXT[csvKey] = csvText;
          window.__LEXDEN_CSV_RECORDS[csvKey] = parsed.records;
          window.__LEXDEN_SELECTED_FILES[csvKey] = [file];

          const statusNode = document.getElementById(`csvstatus-${cssSafeKey(csvKey)}`);
          if (statusNode) {
            statusNode.textContent = 'Valid: exactly 100 prospect rows, unique ranks 1–100, required evidence columns present.';
            statusNode.style.color = 'var(--green)';
          }
        } catch (error) {
          window.__LEXDEN_CSV_TEXT[csvKey] = '';
          window.__LEXDEN_CSV_RECORDS[csvKey] = [];
          const statusNode = document.getElementById(`csvstatus-${cssSafeKey(csvKey)}`);
          if (statusNode) {
            statusNode.textContent = error.message;
            statusNode.style.color = 'var(--danger)';
          }
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
      notify('Draft saved locally on this device.', true);
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
    return String(value || '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  function bootstrap() {
    bootstrapFailSafe();

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
        return JSON.parse(localStorage.getItem('lexden_bootstrap_identity') || '{}');
      } catch {
        return {};
      }
    })();

    const email = emailKey(boot.studentEmail || '');

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
      saveState();
    }

    renderWorkspace(assignment, email);
    completeBoot();
  }

  installInteractionTelemetry();

  try {
    bootstrap();
  } catch (error) {
    renderGate('The assessment could not initialize safely: ' + (error?.message || String(error)));
  }
})();
})();
