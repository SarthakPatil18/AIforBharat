(function () {
  function byId(id) { return document.getElementById(id); }

  // AI Search: suggestions and clarifier chips
  const SUGGESTIONS = [
    'Leaking kitchen tap',
    'Bathroom pipe leak',
    'Short circuit in bedroom',
    'Fan not working',
    'AC not cooling',
    'Water purifier installation',
    'Carpenter for door repair',
    'Deep home cleaning',
    'Pest control for cockroaches'
  ];

  const CLARIFIERS = {
    default: ['When did it start?', 'Exact location?', 'Any photos?', 'Preferred time?', 'Budget range?'],
    plumbing: ['Leak location?', 'Water shut valve working?', 'Single or multiple taps?', 'Floor type?'],
    electrical: ['Power outage in room?', 'Smell/burning?', 'MCB tripped?', 'Appliance affected?'],
    ac: ['Split or window?', 'Last service date?', 'Any error code?', 'Coolant issue suspected?'],
    carpentry: ['Door size?', 'Material?', 'Hinges broken?', 'Lock replacement?']
  };

  function detectTopic(text) {
    const t = text.toLowerCase();
    if (t.includes('leak') || t.includes('tap') || t.includes('pipe')) return 'plumbing';
    if (t.includes('short') || t.includes('circuit') || t.includes('fan') || t.includes('electric')) return 'electrical';
    if (t.includes('ac') || t.includes('air')) return 'ac';
    if (t.includes('door') || t.includes('wood') || t.includes('carpenter')) return 'carpentry';
    return 'default';
  }

  function renderSuggestions(container, query) {
    if (!container) return;
    const q = query.trim().toLowerCase();
    const items = SUGGESTIONS.filter(s => s.toLowerCase().includes(q)).slice(0, 6);
    if (!q || items.length === 0) {
      container.classList.add('hidden');
      container.innerHTML = '';
      return;
    }
    container.classList.remove('hidden');
    container.innerHTML = items.map(s => `
      <button class="suggestion">${s}</button>
    `).join('');
    container.querySelectorAll('.suggestion').forEach((btn) => {
      btn.addEventListener('click', () => {
        const input = byId('ai-search');
        if (input) input.value = btn.textContent;
        container.classList.add('hidden');
        renderClarifiers(byId('clarify-chips'), btn.textContent);
      });
    });
  }

  function renderClarifiers(container, text) {
    if (!container) return;
    const topic = detectTopic(text || '');
    const chips = CLARIFIERS[topic] || CLARIFIERS.default;
    container.innerHTML = chips.map(c => `<button class="chip">${c}</button>`).join('');
    container.querySelectorAll('.chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const input = byId('ai-search');
        if (!input) return;
        const add = chip.textContent.replace(/\?$/, '');
        const joiner = input.value.trim().endsWith('.') ? ' ' : (input.value.trim().length ? '. ' : '');
        input.value = `${input.value.trim()}${joiner}${add}`.trim();
      });
    });
  }

  function summarizeRequest() {
    const input = byId('ai-search');
    const box = byId('ai-summary');
    const textEl = byId('ai-summary-text');
    if (!input || !box || !textEl) return;
    const text = input.value.trim();
    if (!text) return;
    const summary = `Job request: ${text}. Location: Pune. Priority: Normal. Include budget estimate and preferred time.`;
    textEl.textContent = summary;
    box.classList.remove('hidden');
    const copyBtn = byId('copy-summary');
    if (copyBtn) {
      copyBtn.onclick = () => navigator.clipboard.writeText(summary);
    }
  }

  function initSearch() {
    const input = byId('ai-search');
    const suggestions = byId('ai-suggestions');
    const summarizeBtn = byId('ai-summarize');
    const chips = byId('clarify-chips');

    if (input) {
      input.addEventListener('input', () => renderSuggestions(suggestions, input.value));
      input.addEventListener('focus', () => renderSuggestions(suggestions, input.value));
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          summarizeRequest();
        }
      });
      renderClarifiers(chips, '');
    }
    if (summarizeBtn) summarizeBtn.addEventListener('click', summarizeRequest);
  }

  // Rating stars
  function initStars() {
    const wrap = byId('rating-stars');
    if (!wrap) return;
    const stars = Array.from(wrap.querySelectorAll('.star'));
    function setRating(n) {
      stars.forEach((s, i) => {
        s.classList.toggle('active', i < n);
        s.setAttribute('aria-pressed', String(i < n));
      });
      wrap.dataset.rating = String(n);
    }
    stars.forEach((s, i) => s.addEventListener('click', () => setRating(i + 1)));
    setRating(5);

    const submit = byId('submit-review');
    if (submit) {
      submit.addEventListener('click', () => {
        const thanks = byId('review-thanks');
        if (thanks) {
          const dict = { en: 'Thanks for your review! 🎉', hi: 'आपकी समीक्षा के लिए धन्यवाद! 🎉', mr: 'तुमच्या रिव्ह्यूसाठी धन्यवाद! 🎉' };
          const lang = window.LocalLensI18N?.getCurrentLang?.() || 'en';
          thanks.textContent = dict[lang] || dict.en;
          thanks.classList.remove('hidden');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  }

  // Photo upload preview
  function initPhotoUpload() {
    const input = byId('photo-upload');
    const preview = byId('photo-preview');
    if (!input || !preview) return;
    input.addEventListener('change', () => {
      preview.innerHTML = '';
      Array.from(input.files || []).slice(0, 6).forEach((file) => {
        const url = URL.createObjectURL(file);
        const img = document.createElement('img');
        img.src = url;
        img.alt = file.name;
        img.className = 'h-20 w-20 rounded-lg object-cover border';
        preview.appendChild(img);
      });
    });
  }

  // Payment interactions
  function initPayment() {
    const summaryEl = byId('payment-summary');
    const params = new URLSearchParams(window.location.search);
    const pro = params.get('pro');
    const service = params.get('service');
    const amountParam = params.get('amount');
    if (summaryEl && (pro || service)) {
      summaryEl.textContent = `${pro || 'Service'} — ${service || ''}`.trim();
    }
    const amountInput = byId('amount');
    if (amountInput && amountParam) amountInput.value = amountParam;

    document.querySelectorAll('.upi-app').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.upi-app').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
    const saved = document.querySelectorAll('[data-saved-upi] button');
    saved.forEach((b) => b.addEventListener('click', () => {
      const id = b.closest('li')?.querySelector('span')?.textContent;
      const upi = byId('upi-id');
      if (upi && id) upi.value = id;
    }));

    const payNow = byId('pay-now');
    if (payNow) {
      function updateDisabled() {
        const terms = document.getElementById('terms');
        payNow.disabled = !(terms && terms.checked);
      }
      updateDisabled();
      document.getElementById('terms')?.addEventListener('change', updateDisabled);

      payNow.addEventListener('click', () => {
        const amount = Number(byId('amount')?.value || 0) || 0;
        alert(`Initiating UPI collect request for ₹${amount}. (Demo)`);
        // Append to history (demo)
        const list = document.getElementById('txn-list');
        if (list) {
          const li = document.createElement('li');
          li.className = 'flex items-center justify-between';
          li.innerHTML = `<span>Payment — ₹${amount}</span><span>Paid</span>`;
          list.prepend(li);
        }
      });
    }
  }

  // Provider/review params
  function initProviderParams() {
    const params = new URLSearchParams(window.location.search);
    const pro = params.get('pro');
    const el = document.getElementById('review-pro');
    if (el && pro) el.textContent = `for ${pro}`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    initSearch();
    initStars();
    initPhotoUpload();
    initPayment();
    initProviderParams();
  });
})();