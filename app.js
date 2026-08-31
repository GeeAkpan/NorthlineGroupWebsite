/**
 * NORTHLINE & SKILLR - APPLICATION LOGIC
 * Dynamic interactive features, Skillr simulator, modal management, and filters.
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. SIMULATOR DATA & INTERACTIVE LOGIC ---
  const simulatorTracks = {
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

  const simTrackBtns = document.querySelectorAll('.sim-track-btn');
  const simCandId = document.getElementById('simCandId');
  const simRoleTitle = document.getElementById('simRoleTitle');
  const simScoreNum = document.getElementById('simScoreNum');
  const simPercentile = document.getElementById('simPercentile');
  const simSkillsBreakdown = document.getElementById('simSkillsBreakdown');
  const simEvidenceSnippet = document.getElementById('simEvidenceSnippet');

  function renderSimulatorTrack(trackKey) {
    const data = simulatorTracks[trackKey];
    if (!data) return;

    if (simCandId) simCandId.textContent = data.candId;
    if (simRoleTitle) simRoleTitle.textContent = data.role;
    if (simScoreNum) simScoreNum.textContent = data.score;
    if (simPercentile) simPercentile.textContent = data.percentile;

    if (simSkillsBreakdown) {
      simSkillsBreakdown.innerHTML = data.skills.map(skill => `
        <div class="skill-meter-row">
          <div class="skill-meter-meta">
            <span>${skill.name}</span>
            <span class="highlight-yellow">${skill.score}</span>
          </div>
          <div class="meter-track">
            <div class="meter-fill" style="width: ${skill.score};"></div>
          </div>
        </div>
      `).join('');
    }

    if (simEvidenceSnippet) {
      simEvidenceSnippet.innerHTML = `<pre><code>${data.evidence}</code></pre>`;
    }
  }

  // Initialize simulator
  if (simTrackBtns.length > 0) {
    renderSimulatorTrack('fullstack');

    simTrackBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        simTrackBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const track = btn.getAttribute('data-track');
        renderSimulatorTrack(track);
      });
    });
  }


  // --- 2. TALENT SHOWCASE FILTER ---
  const filterBtns = document.querySelectorAll('#talentFilterBar .filter-btn');
  const talentCards = document.querySelectorAll('#talentGrid .talent-card');

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


  // --- 3. FAQ ACCORDION ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });


  // --- 4. MODALS (BOOKING & SKILLR DEMO) ---
  const bookingModal = document.getElementById('bookingModal');
  const skillrModal = document.getElementById('skillrModal');
  const closeBookingBtn = document.getElementById('closeBookingModal');
  const closeSkillrBtn = document.getElementById('closeSkillrModal');

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Trigger modal open via data-action
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-action]');
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

  if (closeBookingBtn) closeBookingBtn.addEventListener('click', () => closeModal(bookingModal));
  if (closeSkillrBtn) closeSkillrBtn.addEventListener('click', () => closeModal(skillrModal));

  // Click outside to close
  [bookingModal, skillrModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    }
  });

  // ESC key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal(bookingModal);
      closeModal(skillrModal);
    }
  });


  // --- 5. MOBILE MENU DRAWER ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

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


  // --- 6. FORM SUBMISSIONS & TOAST NOTIFICATIONS ---
  function showToast(message) {
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

  // Consultation main form
  const consultationForm = document.getElementById('consultationForm');
  if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submitConsultationBtn');
      if (submitBtn) submitBtn.disabled = true;

      showToast('Thank you! Northline has received your hiring request. A talent director will reach out within 4 hours.');
      consultationForm.reset();
      setTimeout(() => {
        if (submitBtn) submitBtn.disabled = false;
      }, 2000);
    });
  }

  // Modal consultation form
  const modalConsultForm = document.getElementById('modalConsultForm');
  if (modalConsultForm) {
    modalConsultForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal(bookingModal);
      showToast('Strategy call confirmed! Check your inbox for the calendar invite and candidate dossier link.');
      modalConsultForm.reset();
    });
  }

  // Newsletter form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Subscribed! You will receive our monthly verified hiring benchmarks report.');
      newsletterForm.reset();
    });
  }

  // Modal sandbox tester
  const runDemoTestBtn = document.getElementById('runDemoTestBtn');
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

  // Code snippets toggle inside modal
  const chipBtns = document.querySelectorAll('.chip-btn');
  const modalCodeSnippet = document.getElementById('modalCodeSnippet');
  const codeSamples = {
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

  chipBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      chipBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sim = btn.getAttribute('data-sim');
      if (modalCodeSnippet && codeSamples[sim]) {
        modalCodeSnippet.textContent = codeSamples[sim];
      }
    });
  });


  // --- 7. NUMBER COUNTERS ON SCROLL REVEAL ---
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1500;
          const step = Math.ceil(target / (duration / 30));
          let current = 0;

          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            } else {
              counter.textContent = current;
            }
          }, 30);
        });
      }
    });
  }, { threshold: 0.2 });

  const heroMetrics = document.querySelector('.hero-metrics-bar');
  if (heroMetrics) {
    observer.observe(heroMetrics);
  }

});
