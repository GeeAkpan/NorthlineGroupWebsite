/**
 * NORTHLINE AGENCY & SKILLR PLATFORM
 * TypeScript Application Engine
 */

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
[PASS] Anti-Cheat AI Interception: 0% LLM synthetic prompt leakage.
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
      { name: 'Vector DBs & Hybrid Search (Pinecone/Milvus)', score: '98%' },
      { name: 'PyTorch & CUDA Acceleration', score: '97%' },
      { name: 'AI Safety & Adverse Impact Guardrails', score: '100%' }
    ],
    evidence: `// Skillr AI Benchmark Telemetry:
[PASS] Model Latency: RAG pipeline optimized from 420ms to 48ms TTFT.
[PASS] Precision Score: F1 0.962 on enterprise domain evaluation dataset.
[PASS] Anti-Cheat Proctor: Biometric keystroke match confirmed at 99.8%.
[PASS] Zero unauthorized external API calls detected during proctored exam.`,
    hash: '0x33B19E927A10FF'
  },
  product: {
    candId: 'CANDIDATE DOSSIER: #NL-7715-SOFIA',
    role: 'Principal Product Architect & Design Lead',
    score: '97.6',
    percentile: 'Top 1.2% Global',
    skills: [
      { name: 'Enterprise Design Systems Architecture', score: '98%' },
      { name: 'UX Metrics & Funnel Conversion', score: '97%' },
      { name: 'Interactive Prototyping & Flow Logic', score: '96%' },
      { name: 'Design-to-Code Feasibility & Tokens', score: '98%' }
    ],
    evidence: `// Skillr Design Simulation Dossier:
[PASS] Accessibility: WCAG AAA compliance across 18 enterprise screen states.
[PASS] Usability Rubric: Friction score reduced by 44% in simulated user flow.
[PASS] Anti-Cheat Audit: 100% original component architecture validated.
[PASS] Time to Solution: Completed multi-tier billing system in 82 mins.`,
    hash: '0x77AE419B8C5209'
  },
  devops: {
    candId: 'CANDIDATE DOSSIER: #NL-6620-MARCUS',
    role: 'Cloud Infrastructure & Zero-Trust Security',
    score: '98.8',
    percentile: 'Top 0.6% Global',
    skills: [
      { name: 'Kubernetes Multi-Cluster Orchestration', score: '99%' },
      { name: 'Terraform & Infrastructure-as-Code', score: '98%' },
      { name: 'Zero-Trust IAM & Security Auditing', score: '97%' },
      { name: 'CI/CD Automated Canary Pipelines', score: '98%' }
    ],
    evidence: `// Skillr Cloud Sandbox Telemetry:
[PASS] Disaster Recovery: Automated failover executed in < 4.2 seconds.
[PASS] Vulnerability Scan: 0 CVEs detected in generated container topology.
[PASS] Anti-Cheat: Screen sandbox strictly contained with zero VM hooks.
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
  sec: `// Zero-Trust Session & Biometric Validator
export function auditBiometricSignature(keystrokes: CadenceSample[]): boolean {
  const entropy = calculateKeystrokeEntropy(keystrokes);
  return entropy.isGenuineHuman && !entropy.hasVirtualHooks;
}`
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initSimulator();
  initTalentFilter();
  initFAQ();
  initModals();
  initMobileMenu();
  initFormHandlers();
  initScrollCounters();
});

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

// --- 4. MODALS MANAGEMENT ---
function initModals(): void {
  const bookingModal = document.getElementById('bookingModal');
  const skillrModal = document.getElementById('skillrModal');
  const closeBookingBtn = document.getElementById('closeBookingModal');
  const closeSkillrBtn = document.getElementById('closeSkillrModal');

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
    } else if (action === 'request-talent') {
      e.preventDefault();
      const talentName = target.getAttribute('data-name') || 'the candidate';
      showToast(`Added ${talentName} to your candidate shortlist request!`);
      setTimeout(() => openModal(bookingModal), 600);
    }
  });

  closeBookingBtn?.addEventListener('click', () => closeModal(bookingModal));
  closeSkillrBtn?.addEventListener('click', () => closeModal(skillrModal));

  [bookingModal, skillrModal].forEach(modal => {
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

      showToast('Thank you! Northline has received your hiring request. A talent director will reach out within 4 hours.');
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
      showToast('Strategy call confirmed! Check your inbox for the calendar invite and candidate dossier link.');
      modalConsultForm.reset();
    });
  }

  const newsletterForm = document.getElementById('newsletterForm') as HTMLFormElement | null;
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e: SubmitEvent) => {
      e.preventDefault();
      showToast('Subscribed! You will receive our monthly verified hiring benchmarks report.');
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
        showToast('Proctored simulation passed with 0 leaks! Benchmark score: 98.4 / 100.');
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
