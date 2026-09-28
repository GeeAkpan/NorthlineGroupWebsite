/**
 * NORTHLINE AGENCY & SKILLR PLATFORM
 * TypeScript Application Engine & Blog Admin
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import TestimonialMarquee from '@/components/ui/marquee-01';

// --- TYPES & INTERFACES ---
export interface SkillMetric {
  name: string;
  score: string;
}

export interface SimulatorTrack {
  candId: string;
  role: string;
  score: string;
  percentile: string;
  skills: SkillMetric[];
  evidence: string;
  hash: string;
}

export type SimulatorTrackKey = 'fullstack' | 'aiml' | 'product' | 'devops';

export type CodeSampleKey = 'code' | 'sys' | 'sec';

export interface Article {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string;
}

// --- DATA DEFINITIONS ---
const SIMULATOR_TRACKS: Record<SimulatorTrackKey, SimulatorTrack> = {
  fullstack: {
    candId: 'CANDIDATE DOSSIER: #NL-9942-ELENA',
    role: 'Staff Full-Stack & Distributed Systems',
    score: '98.4',
    percentile: 'Top 0.8% Global',
    skills: [
      { name: 'Distributed Go/Rust Microservices', score: '99%' },
      { name: 'System Architecture & Data Modeling', score: '98%' },
      { name: 'Async Event Streaming (Kafka/Redis)', score: '96%' },
      { name: 'Frontend React/TypeScript Core', score: '95%' }
    ],
    evidence: `// Skillr Proctored Execution Summary:
[PASS] Test Suite: 32/32 tests passed in 118ms.
[PASS] Concurrency: 10,000 virtual user burst handled with 0 race conditions.
[PASS] Anti-Cheat AI Check: 100% original human problem solving.
[PASS] Code Sandbox: O(log N) cache retrieval verified.`,
    hash: '0x8F9C21A79DE44B'
  },
  aiml: {
    candId: 'CANDIDATE DOSSIER: #NL-8831-KENJI',
    role: 'Senior AI / ML Solutions Architect',
    score: '99.1',
    percentile: 'Top 0.4% Global',
    skills: [
      { name: 'LLM Fine-Tuning & Quantization', score: '99%' },
      { name: 'Vector DBs & Hybrid Search', score: '98%' },
      { name: 'PyTorch & GPU Acceleration', score: '97%' },
      { name: 'AI Safety & Guardrails', score: '100%' }
    ],
    evidence: `// Skillr AI Benchmark Telemetry:
[PASS] Model Latency: RAG pipeline optimized from 420ms to 48ms TTFT.
[PASS] Precision Score: F1 0.962 on enterprise evaluation dataset.
[PASS] Anti-Cheat Proctor: Keystroke cadence match confirmed at 99.8%.
[PASS] Zero unauthorized external API calls detected during exam.`,
    hash: '0x33B19E927A10FF'
  },
  product: {
    candId: 'CANDIDATE DOSSIER: #NL-7715-SOFIA',
    role: 'Lead Product Designer & Design Systems',
    score: '97.6',
    percentile: 'Top 1.2% Global',
    skills: [
      { name: 'Enterprise Design Systems', score: '98%' },
      { name: 'UX Research & Conversion Flows', score: '97%' },
      { name: 'Interactive Prototyping', score: '96%' },
      { name: 'Design-to-Code Systems', score: '98%' }
    ],
    evidence: `// Skillr Design Simulation Dossier:
[PASS] Accessibility: WCAG AAA compliance across 18 screen states.
[PASS] Usability Rubric: Friction score reduced by 44% in simulated flow.
[PASS] Anti-Cheat Audit: 100% original component architecture validated.
[PASS] Time to Solution: Completed multi-tier design in 82 mins.`,
    hash: '0x77AE419B8C5209'
  },
  devops: {
    candId: 'CANDIDATE DOSSIER: #NL-6620-MARCUS',
    role: 'Cloud Security & DevOps Lead',
    score: '98.8',
    percentile: 'Top 0.6% Global',
    skills: [
      { name: 'Kubernetes Multi-Cluster Management', score: '99%' },
      { name: 'Terraform & Infrastructure-as-Code', score: '98%' },
      { name: 'Zero-Trust Security Auditing', score: '97%' },
      { name: 'CI/CD Automated Deployments', score: '98%' }
    ],
    evidence: `// Skillr Cloud Sandbox Telemetry:
[PASS] Disaster Recovery: Automated failover executed in < 4.2 seconds.
[PASS] Security Scan: 0 vulnerabilities detected in container config.
[PASS] Anti-Cheat: Screen sandbox strictly contained with zero hooks.
[PASS] Cost Optimization: Simulated cluster spend reduced by 36.8%.`,
    hash: '0x992B104F5E66A1'
  }
};

const CODE_SAMPLES: Record<CodeSampleKey, string> = {
  code: `// Skillr Proctored Execution Sandbox
export async function verifyRateLimiter(reqStream: Stream): Promise<Metric> {
  const windowBucket = new TokenBucket({ capacity: 1000, refillRate: 50 });
  const telemetry = await windowBucket.auditExecution(reqStream);
  return telemetry.integrityVerified();
}`,
  sys: `// Distributed Sharding & Cache Rebalancing
export class ShardManager {
  async rebalance(nodes: NodeRing[]): Promise<ConsistentHashTopology> {
    const ring = new ConsistentHashRing({ replicas: 256 });
    return ring.buildVirtualPartitions(nodes);
  }
}`,
  sec: `// Zero-Trust Session & Keystroke Validator
export function auditBiometricSignature(keystrokes: CadenceSample[]): boolean {
  const entropy = calculateKeystrokeEntropy(keystrokes);
  return entropy.isGenuineHuman && !entropy.hasVirtualHooks;
}`
};

// --- DEFAULT INITIAL ARTICLES (African Tech & Hiring Focus) ---
const DEFAULT_ARTICLES: Article[] = [
  {
    id: 'post-1',
    title: 'Why Global Companies Are Hiring Top Software Engineers from Africa',
    category: 'AFRICAN TECH',
    author: 'Sylvia Duruson',
    date: 'September 2026',
    readTime: '4 min read',
    image: 'assets/images/why_clients.jpg',
    summary: 'From Lagos and Nairobi to Cape Town and Kigali, world-class African developers are building critical infrastructure for global tech teams.',
    content: `The global technology landscape has changed. Today, some of the world's most talented, hardworking, and innovative software engineers are based in tech hubs across Africa.

Cities like Lagos, Nairobi, Cape Town, Accra, and Kigali are home to developers who have built high-scale payment gateways, offline-first mobile apps, and distributed microservices handling millions of daily transactions.

When companies hire verified talent through Northline and Skillr, they get engineers who understand real-world resilience, high-performance architecture, and cross-border collaboration from day one.

With strong English fluency, compatible timezones with Europe and the Americas, and unmatched problem-solving grit, African tech talent is driving real impact on world-class engineering teams.`
  },
  {
    id: 'post-2',
    title: 'How Anti-Cheat Testing Eliminates Guesswork in Tech Hiring',
    category: 'HIRING GUIDE',
    author: 'Juliet Duruson',
    date: 'September 2026',
    readTime: '5 min read',
    image: 'assets/images/mockup_laptop_ui.jpg',
    summary: 'Traditional resume screening wastes hundreds of hours. Live coding tests with anti-cheat protection give hiring managers real confidence.',
    content: `Most tech hiring processes rely heavily on resumes and unmonitored take-home assignments. But resumes often tell you what someone knows how to write on paper, not what they can build in production.

Skillr changes this by putting candidates into a realistic coding sandbox where their actual problem-solving and coding ability are tested in real time.

With automated test cases, code quality rubrics, and anti-cheat verification, engineering leaders receive a clear, ranked shortlist of top performers in just 72 hours.

This saves engineering teams dozens of wasted interview hours and guarantees that every hire has proven technical ability before joining the team.`
  },
  {
    id: 'post-3',
    title: 'Building High-Performing Remote Teams Across Time Zones',
    category: 'ENGINEERING',
    author: 'Northline Editorial',
    date: 'August 2026',
    readTime: '4 min read',
    image: 'assets/images/mockup_brand_kit.jpg',
    summary: 'Simple best practices for seamless asynchronous collaboration between African engineers and global engineering teams.',
    content: `Running a successful remote team does not require everyone to sit in the same timezone. It requires clear communication, great documentation, and engineers who take ownership of their tasks.

African tech hubs operate conveniently within GMT+0 to GMT+3, offering significant workday overlap with European teams and easy coordination with US East Coast mornings.

By establishing asynchronous standups, clear pull request guidelines, and measurable sprint goals, distributed engineering teams ship faster and with higher morale.

At Northline, we prepare all candidates with remote work best practices so they integrate into existing engineering workflows from day one.`
  }
];

const BLOG_STORAGE_KEY = 'northline_blog_articles_v2';

// --- BLOG STORAGE HELPERS ---
function loadArticles(): Article[] {
  try {
    const raw = localStorage.getItem(BLOG_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error loading articles from localStorage', e);
  }
  // If not found or invalid, initialize defaults
  saveArticlesToStorage(DEFAULT_ARTICLES);
  return DEFAULT_ARTICLES;
}

function saveArticlesToStorage(articles: Article[]): void {
  try {
    localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(articles));
  } catch (e) {
    console.error('Error saving articles to localStorage', e);
  }
}

// --- INITIALIZATION ---
function startApp(): void {
  initSimulator();
  initTalentFilter();
  initFAQ();
  initModals();
  initMobileMenu();
  initFormHandlers();
  initScrollCounters();
  initBlogSystem();
  initTestimonialsMarquee();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}

function initTestimonialsMarquee(): void {
  const rootEl = document.getElementById('testimonialMarqueeRoot');
  if (rootEl && !rootEl.hasAttribute('data-mounted')) {
    rootEl.setAttribute('data-mounted', 'true');
    const root = ReactDOM.createRoot(rootEl);
    root.render(React.createElement(TestimonialMarquee));
  }
}

// --- 1. SIMULATOR LOGIC ---
function initSimulator(): void {
  const simTrackBtns = document.querySelectorAll<HTMLButtonElement>('.sim-track-btn');
  const simCandId = document.getElementById('simCandId');
  const simRoleTitle = document.getElementById('simRoleTitle');
  const simScoreNum = document.getElementById('simScoreNum');
  const simPercentile = document.getElementById('simPercentile');
  const simSkillsBreakdown = document.getElementById('simSkillsBreakdown');
  const simEvidenceSnippet = document.getElementById('simEvidenceSnippet');

  function renderSimulatorTrack(trackKey: SimulatorTrackKey): void {
    const data = SIMULATOR_TRACKS[trackKey];
    if (!data) return;

    if (simCandId) simCandId.textContent = data.candId;
    if (simRoleTitle) simRoleTitle.textContent = data.role;
    if (simScoreNum) simScoreNum.textContent = data.score;
    if (simPercentile) simPercentile.textContent = data.percentile;

    if (simSkillsBreakdown) {
      simSkillsBreakdown.innerHTML = data.skills
        .map(
          skill => `
        <div class="skill-meter-row">
          <div class="skill-meter-meta">
            <span>${skill.name}</span>
            <span class="highlight-yellow">${skill.score}</span>
          </div>
          <div class="meter-track">
            <div class="meter-fill" style="width: ${skill.score};"></div>
          </div>
        </div>
      `
        )
        .join('');
    }

    if (simEvidenceSnippet) {
      simEvidenceSnippet.innerHTML = `<pre><code>${data.evidence}</code></pre>`;
    }
  }

  if (simTrackBtns.length > 0) {
    renderSimulatorTrack('fullstack');

    simTrackBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        simTrackBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const track = btn.getAttribute('data-track') as SimulatorTrackKey;
        if (track && SIMULATOR_TRACKS[track]) {
          renderSimulatorTrack(track);
        }
      });
    });
  }
}

// --- 2. TALENT FILTER LOGIC ---
function initTalentFilter(): void {
  const filterBtns = document.querySelectorAll<HTMLButtonElement>('#talentFilterBar .filter-btn');
  const talentCards = document.querySelectorAll<HTMLElement>('#talentGrid .talent-editorial-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-category');

      talentCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          card.style.animation = 'toast-in 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// --- 3. FAQ ACCORDION ---
function initFAQ(): void {
  const faqItems = document.querySelectorAll<HTMLElement>('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector<HTMLButtonElement>('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherBtn = otherItem.querySelector<HTMLButtonElement>('.faq-question');
        otherBtn?.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// --- 4. MODALS & GENERAL EVENT LOGIC ---
function initModals(): void {
  const bookingModal = document.getElementById('bookingModal');
  const skillrModal = document.getElementById('skillrModal');
  const blogAdminModal = document.getElementById('blogAdminModal');
  const articleReaderModal = document.getElementById('articleReaderModal');

  const closeBookingBtn = document.getElementById('closeBookingModal');
  const closeSkillrBtn = document.getElementById('closeSkillrModal');
  const closeBlogAdminBtn = document.getElementById('closeBlogAdminModal');
  const closeArticleReaderBtn = document.getElementById('closeArticleReaderModal');

  function openModal(modal: HTMLElement | null): void {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal: HTMLElement | null): void {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest<HTMLElement>('[data-action]');
    if (!target) return;

    const action = target.getAttribute('data-action');
    if (action === 'open-booking-modal') {
      e.preventDefault();
      openModal(bookingModal);
    } else if (action === 'open-skillr-modal') {
      e.preventDefault();
      openModal(skillrModal);
    } else if (action === 'open-blog-admin') {
      e.preventDefault();
      openModal(blogAdminModal);
      renderAdminArticlesList();
    } else if (action === 'request-talent') {
      e.preventDefault();
      const talentName = target.getAttribute('data-name') || 'the candidate';
      showToast(`Added ${talentName} to your candidate shortlist request!`);
      setTimeout(() => openModal(bookingModal), 600);
    }
  });

  closeBookingBtn?.addEventListener('click', () => closeModal(bookingModal));
  closeSkillrBtn?.addEventListener('click', () => closeModal(skillrModal));
  closeBlogAdminBtn?.addEventListener('click', () => closeModal(blogAdminModal));
  closeArticleReaderBtn?.addEventListener('click', () => closeModal(articleReaderModal));

  [bookingModal, skillrModal, blogAdminModal, articleReaderModal].forEach(modal => {
    modal?.addEventListener('click', (e: MouseEvent) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal(bookingModal);
      closeModal(skillrModal);
      closeModal(blogAdminModal);
      closeModal(articleReaderModal);
    }
  });

  // Modal Code Snippet Switcher
  const chipBtns = document.querySelectorAll<HTMLButtonElement>('.chip-btn');
  const modalCodeSnippet = document.getElementById('modalCodeSnippet');

  chipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      chipBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sim = btn.getAttribute('data-sim') as CodeSampleKey;
      if (modalCodeSnippet && CODE_SAMPLES[sim]) {
        modalCodeSnippet.textContent = CODE_SAMPLES[sim];
      }
    });
  });
}

// --- 5. MOBILE DRAWER ---
function initMobileMenu(): void {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll<HTMLAnchorElement>('.mobile-nav-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

// --- 6. FORM HANDLERS & TOASTS ---
export function showToast(message: string): void {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="color: #FFC306; font-size: 1.1rem; font-weight: 900;">✓</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function initFormHandlers(): void {
  const consultationForm = document.getElementById('consultationForm') as HTMLFormElement | null;
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e: SubmitEvent) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submitConsultationBtn') as HTMLButtonElement | null;
      if (submitBtn) submitBtn.disabled = true;

      showToast('Thank you! Northline has received your request. We will reach out within 4 hours.');
      consultationForm.reset();
      setTimeout(() => {
        if (submitBtn) submitBtn.disabled = false;
      }, 2000);
    });
  }

  const modalConsultForm = document.getElementById('modalConsultForm') as HTMLFormElement | null;
  const bookingModal = document.getElementById('bookingModal');
  if (modalConsultForm) {
    modalConsultForm.addEventListener('submit', (e: SubmitEvent) => {
      e.preventDefault();
      if (bookingModal) {
        bookingModal.classList.remove('open');
        document.body.style.overflow = '';
      }
      showToast('Hiring call confirmed! Check your email for meeting details.');
      modalConsultForm.reset();
    });
  }

  const newsletterForm = document.getElementById('newsletterForm') as HTMLFormElement | null;
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e: SubmitEvent) => {
      e.preventDefault();
      showToast('Subscribed! You will receive our monthly tech updates.');
      newsletterForm.reset();
    });
  }

  const runDemoTestBtn = document.getElementById('runDemoTestBtn') as HTMLButtonElement | null;
  if (runDemoTestBtn) {
    runDemoTestBtn.addEventListener('click', () => {
      runDemoTestBtn.innerHTML = 'Testing Sandbox...';
      runDemoTestBtn.disabled = true;
      setTimeout(() => {
        runDemoTestBtn.innerHTML = '✓ Anti-Cheat Verification: 100% Clean';
        showToast('Proctored test passed! Candidate score: 98.4 / 100.');
        setTimeout(() => {
          runDemoTestBtn.innerHTML = 'Run Anti-Cheat Benchmark';
          runDemoTestBtn.disabled = false;
        }, 3000);
      }, 1200);
    });
  }
}

// --- 7. SCROLL NUMBER REVEAL COUNTERS ---
function initScrollCounters(): void {
  const counters = document.querySelectorAll<HTMLElement>('.counter');
  let animated = false;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          counters.forEach(counter => {
            const target = Number(counter.getAttribute('data-target')) || 0;
            const duration = 1500;
            const step = Math.ceil(target / (duration / 30));
            let current = 0;

            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                counter.textContent = String(target);
                clearInterval(timer);
              } else {
                counter.textContent = String(current);
              }
            }, 30);
          });
        }
      });
    },
    { threshold: 0.2 }
  );

  const heroMetrics = document.querySelector('.hero-metrics-bar');
  if (heroMetrics) {
    observer.observe(heroMetrics);
  }
}

// --- 8. DYNAMIC BLOG SYSTEM & ADMIN PANEL ---
let currentArticles: Article[] = [];

function initBlogSystem(): void {
  currentArticles = loadArticles();
  renderPublicArticles();
  setupAdminPanelHandlers();
}

function renderPublicArticles(): void {
  const grid = document.getElementById('insightsGrid');
  if (!grid) return;

  if (currentArticles.length === 0) {
    grid.innerHTML = `
      <div class="empty-blog-state">
        <p>No articles published yet.</p>
        <button class="btn btn-primary btn-sm" data-action="open-blog-admin">+ Write First Article</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = currentArticles
    .map(
      art => `
    <div class="insight-card" data-article-id="${art.id}">
      <div class="insight-img-wrap">
        <img src="${art.image || 'assets/images/why_clients.jpg'}" alt="${art.title}" class="insight-img" onerror="this.src='assets/images/why_clients.jpg'">
        <span class="insight-tag">${art.category}</span>
      </div>
      <div class="insight-content">
        <span class="insight-date">${art.date} &bull; ${art.readTime}</span>
        <h3 class="insight-title">${art.title}</h3>
        <p class="insight-summary">${art.summary}</p>
        <button class="insight-read-btn" data-article-btn-id="${art.id}">
          Read Full Article &rarr;
        </button>
      </div>
    </div>
  `
    )
    .join('');

  // Attach read buttons
  const readButtons = grid.querySelectorAll<HTMLButtonElement>('[data-article-btn-id]');
  readButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const id = btn.getAttribute('data-article-btn-id');
      if (id) openArticleReader(id);
    });
  });
}

function openArticleReader(articleId: string): void {
  const article = currentArticles.find(a => a.id === articleId);
  if (!article) return;

  const readerModal = document.getElementById('articleReaderModal');
  const readerContent = document.getElementById('articleReaderContent');
  if (!readerModal || !readerContent) return;

  // Format paragraphs
  const formattedParagraphs = article.content
    .split('\n\n')
    .filter(p => p.trim().length > 0)
    .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
    .join('');

  readerContent.innerHTML = `
    <div class="article-reader-header">
      <div class="reader-tag-pill">${article.category}</div>
      <h2 class="reader-title">${article.title}</h2>
      <div class="reader-meta-row">
        <span>By <strong>${article.author || 'Northline Editorial'}</strong></span>
        <span>&bull;</span>
        <span>${article.date}</span>
        <span>&bull;</span>
        <span>${article.readTime}</span>
      </div>
    </div>
    
    <div class="reader-hero-image-wrap">
      <img src="${article.image || 'assets/images/why_clients.jpg'}" alt="${article.title}" class="reader-hero-image" onerror="this.src='assets/images/why_clients.jpg'">
    </div>

    <div class="reader-body-text">
      ${formattedParagraphs}
    </div>

    <div class="reader-footer-cta">
      <div class="reader-footer-inner">
        <h4>Looking to hire verified African tech talent?</h4>
        <p>Get a ranked shortlist of tested candidates delivered in 72 hours.</p>
        <button class="btn btn-primary" data-action="open-booking-modal">Book a Free Consultation</button>
      </div>
    </div>
  `;

  readerModal.classList.add('open');
  readerModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function renderAdminArticlesList(filterText = ''): void {
  const table = document.getElementById('adminArticlesTable');
  const countEl = document.getElementById('adminArticleCount');
  if (countEl) countEl.textContent = String(currentArticles.length);
  if (!table) return;

  const filtered = currentArticles.filter(
    a =>
      a.title.toLowerCase().includes(filterText.toLowerCase()) ||
      a.category.toLowerCase().includes(filterText.toLowerCase()) ||
      a.author.toLowerCase().includes(filterText.toLowerCase())
  );

  if (filtered.length === 0) {
    table.innerHTML = `
      <div class="admin-empty-table">
        <p>No articles found matching your search.</p>
      </div>
    `;
    return;
  }

  table.innerHTML = filtered
    .map(
      art => `
    <div class="admin-article-item">
      <img src="${art.image}" class="admin-thumb" alt="${art.title}" onerror="this.src='assets/images/why_clients.jpg'">
      <div class="admin-item-info">
        <span class="admin-item-tag">${art.category}</span>
        <h4 class="admin-item-title">${art.title}</h4>
        <span class="admin-item-meta">${art.date} &bull; ${art.author} &bull; ${art.readTime}</span>
      </div>
      <div class="admin-item-actions">
        <button class="btn-admin-action edit" data-edit-id="${art.id}" title="Edit Article">
          Edit
        </button>
        <button class="btn-admin-action delete" data-delete-id="${art.id}" title="Delete Article">
          Delete
        </button>
      </div>
    </div>
  `
    )
    .join('');

  // Attach Edit and Delete buttons
  table.querySelectorAll<HTMLButtonElement>('[data-edit-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-edit-id');
      if (id) populateEditForm(id);
    });
  });

  table.querySelectorAll<HTMLButtonElement>('[data-delete-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-delete-id');
      if (id && confirm('Are you sure you want to delete this article?')) {
        deleteArticle(id);
      }
    });
  });
}

function setupAdminPanelHandlers(): void {
  const tabListBtn = document.getElementById('tabArticlesList');
  const tabNewBtn = document.getElementById('tabNewArticle');
  const adminListView = document.getElementById('adminListView');
  const adminFormView = document.getElementById('adminFormView');
  const adminForm = document.getElementById('adminArticleForm') as HTMLFormElement | null;
  const cancelEditBtn = document.getElementById('cancelArticleEditBtn');
  const imageSelect = document.getElementById('articleImageSelect') as HTMLSelectElement | null;
  const customImageUrl = document.getElementById('articleCustomImageUrl') as HTMLInputElement | null;
  const searchInput = document.getElementById('adminSearchInput') as HTMLInputElement | null;
  const resetDefaultsBtn = document.getElementById('btnResetDefaultArticles');

  function switchTab(tab: 'list' | 'form'): void {
    if (tab === 'list') {
      tabListBtn?.classList.add('active');
      tabNewBtn?.classList.remove('active');
      adminListView?.classList.add('active');
      adminFormView?.classList.remove('active');
    } else {
      tabListBtn?.classList.remove('active');
      tabNewBtn?.classList.add('active');
      adminListView?.classList.remove('active');
      adminFormView?.classList.add('active');
    }
  }

  tabListBtn?.addEventListener('click', () => switchTab('list'));
  tabNewBtn?.addEventListener('click', () => {
    resetAdminForm();
    switchTab('form');
  });

  imageSelect?.addEventListener('change', () => {
    if (imageSelect.value === 'custom') {
      if (customImageUrl) customImageUrl.style.display = 'block';
    } else {
      if (customImageUrl) customImageUrl.style.display = 'none';
    }
  });

  searchInput?.addEventListener('input', () => {
    renderAdminArticlesList(searchInput.value.trim());
  });

  cancelEditBtn?.addEventListener('click', () => {
    resetAdminForm();
    switchTab('list');
  });

  resetDefaultsBtn?.addEventListener('click', () => {
    if (confirm('Reset all articles to default sample posts? This will overwrite your current articles.')) {
      currentArticles = [...DEFAULT_ARTICLES];
      saveArticlesToStorage(currentArticles);
      renderPublicArticles();
      renderAdminArticlesList();
      showToast('Articles reset to defaults.');
    }
  });

  // Admin Form Submit (Create or Update)
  adminForm?.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault();

    const idInput = document.getElementById('adminFormArticleId') as HTMLInputElement | null;
    const titleInput = document.getElementById('articleTitleInput') as HTMLInputElement | null;
    const categoryInput = document.getElementById('articleCategoryInput') as HTMLSelectElement | null;
    const authorInput = document.getElementById('articleAuthorInput') as HTMLInputElement | null;
    const readTimeInput = document.getElementById('articleReadTimeInput') as HTMLInputElement | null;
    const summaryInput = document.getElementById('articleSummaryInput') as HTMLTextAreaElement | null;
    const contentInput = document.getElementById('articleContentInput') as HTMLTextAreaElement | null;

    if (!titleInput || !summaryInput || !contentInput) return;

    let selectedImage = imageSelect?.value || 'assets/images/why_clients.jpg';
    if (selectedImage === 'custom' && customImageUrl && customImageUrl.value.trim()) {
      selectedImage = customImageUrl.value.trim();
    } else if (selectedImage === 'custom') {
      selectedImage = 'assets/images/why_clients.jpg';
    }

    const isEditing = idInput && idInput.value;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const now = new Date();
    const currentDate = `${months[now.getMonth()]} ${now.getFullYear()}`;

    if (isEditing) {
      // Update existing article
      const existingIndex = currentArticles.findIndex(a => a.id === idInput.value);
      if (existingIndex !== -1) {
        currentArticles[existingIndex] = {
          ...currentArticles[existingIndex],
          title: titleInput.value.trim(),
          category: categoryInput?.value || 'AFRICAN TECH',
          author: authorInput?.value.trim() || 'Northline Editorial',
          readTime: readTimeInput?.value.trim() || '4 min read',
          image: selectedImage,
          summary: summaryInput.value.trim(),
          content: contentInput.value.trim()
        };
        showToast('Article updated successfully!');
      }
    } else {
      // Create new article
      const newArticle: Article = {
        id: `post-${Date.now()}`,
        title: titleInput.value.trim(),
        category: categoryInput?.value || 'AFRICAN TECH',
        author: authorInput?.value.trim() || 'Northline Editorial',
        date: currentDate,
        readTime: readTimeInput?.value.trim() || '5 min read',
        image: selectedImage,
        summary: summaryInput.value.trim(),
        content: contentInput.value.trim()
      };
      currentArticles.unshift(newArticle);
      showToast('New article published successfully!');
    }

    saveArticlesToStorage(currentArticles);
    renderPublicArticles();
    renderAdminArticlesList();
    resetAdminForm();
    switchTab('list');
  });
}

function populateEditForm(articleId: string): void {
  const article = currentArticles.find(a => a.id === articleId);
  if (!article) return;

  const idInput = document.getElementById('adminFormArticleId') as HTMLInputElement | null;
  const titleInput = document.getElementById('articleTitleInput') as HTMLInputElement | null;
  const categoryInput = document.getElementById('articleCategoryInput') as HTMLSelectElement | null;
  const authorInput = document.getElementById('articleAuthorInput') as HTMLInputElement | null;
  const readTimeInput = document.getElementById('articleReadTimeInput') as HTMLInputElement | null;
  const imageSelect = document.getElementById('articleImageSelect') as HTMLSelectElement | null;
  const customImageUrl = document.getElementById('articleCustomImageUrl') as HTMLInputElement | null;
  const summaryInput = document.getElementById('articleSummaryInput') as HTMLTextAreaElement | null;
  const contentInput = document.getElementById('articleContentInput') as HTMLTextAreaElement | null;
  const saveBtn = document.getElementById('saveArticleBtn');

  if (idInput) idInput.value = article.id;
  if (titleInput) titleInput.value = article.title;
  if (categoryInput) categoryInput.value = article.category;
  if (authorInput) authorInput.value = article.author;
  if (readTimeInput) readTimeInput.value = article.readTime;
  if (summaryInput) summaryInput.value = article.summary;
  if (contentInput) contentInput.value = article.content;

  if (imageSelect) {
    const isStandard = Array.from(imageSelect.options).some(opt => opt.value === article.image);
    if (isStandard) {
      imageSelect.value = article.image;
      if (customImageUrl) customImageUrl.style.display = 'none';
    } else {
      imageSelect.value = 'custom';
      if (customImageUrl) {
        customImageUrl.style.display = 'block';
        customImageUrl.value = article.image;
      }
    }
  }

  if (saveBtn) saveBtn.textContent = 'Update Article';

  // Switch to Form tab
  const tabListBtn = document.getElementById('tabArticlesList');
  const tabNewBtn = document.getElementById('tabNewArticle');
  const adminListView = document.getElementById('adminListView');
  const adminFormView = document.getElementById('adminFormView');

  tabListBtn?.classList.remove('active');
  tabNewBtn?.classList.add('active');
  if (tabNewBtn) tabNewBtn.textContent = 'Edit Article';
  adminListView?.classList.remove('active');
  adminFormView?.classList.add('active');
}

function resetAdminForm(): void {
  const adminForm = document.getElementById('adminArticleForm') as HTMLFormElement | null;
  const idInput = document.getElementById('adminFormArticleId') as HTMLInputElement | null;
  const saveBtn = document.getElementById('saveArticleBtn');
  const tabNewBtn = document.getElementById('tabNewArticle');
  const customImageUrl = document.getElementById('articleCustomImageUrl') as HTMLInputElement | null;

  if (adminForm) adminForm.reset();
  if (idInput) idInput.value = '';
  if (saveBtn) saveBtn.textContent = 'Publish Article';
  if (tabNewBtn) tabNewBtn.textContent = '+ Write New Article';
  if (customImageUrl) customImageUrl.style.display = 'none';
}

function deleteArticle(articleId: string): void {
  currentArticles = currentArticles.filter(a => a.id !== articleId);
  saveArticlesToStorage(currentArticles);
  renderPublicArticles();
  renderAdminArticlesList();
  showToast('Article deleted.');
}
