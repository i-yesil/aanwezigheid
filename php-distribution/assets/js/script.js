/**
 * Aanwezigheidsethos - Client-side interactiviteit
 * Verzorgt soepele animaties, het interactieve SVG-wiel,
 * de detail-drawer met tabbladen en de doorzoekbare bronnenlijst.
 */

let currentDimensionId = null;
let activeTab = 'inzichten';
let currentSourceFilter = 'all';

// Scroll to Step
function scrollToStep(stepNumber) {
  const target = document.getElementById('stap-' + stepNumber);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  updateStickyPill(stepNumber);
}

// Update Active Sticky Pill
function updateStickyPill(stepNumber) {
  document.querySelectorAll('.step-pill').forEach(pill => {
    const pStep = pill.getAttribute('data-step-btn');
    if (parseInt(pStep) === stepNumber) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });
}

// Observe Scroll Position to update sticky bar
window.addEventListener('scroll', () => {
  const steps = [1, 2, 3, 4];
  const scrollPos = window.scrollY + 140;

  for (let i = steps.length - 1; i >= 0; i--) {
    const el = document.getElementById('stap-' + steps[i]);
    if (el && el.offsetTop <= scrollPos) {
      updateStickyPill(steps[i]);
      break;
    }
  }
});

// Drawer Functions
function openDrawer(dimensionId) {
  currentDimensionId = dimensionId;
  const data = window.AANWEZIGHEID_DIMENSIONS[dimensionId];
  if (!data) return;

  document.getElementById('drawerStepTag').textContent = data.stepName + ' · ' + data.stepTag;
  document.getElementById('drawerTitle').textContent = data.name;
  document.getElementById('drawerSubtitle').textContent = data.subtitle || '';

  renderDrawerContent(data);

  const overlay = document.getElementById('drawerOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  const overlay = document.getElementById('drawerOverlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function switchDrawerTab(tabName) {
  activeTab = tabName;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === 'tabBtn-' + tabName);
  });

  if (currentDimensionId) {
    const data = window.AANWEZIGHEID_DIMENSIONS[currentDimensionId];
    renderDrawerContent(data);
  }
}

function renderDrawerContent(data) {
  const body = document.getElementById('drawerBody');
  let html = '';

  if (data.leadParagraph) {
    html += '<div class="lead-quote-box">' + escapeHtml(data.leadParagraph) + '</div>';
  }

  if (data.dialogueQuestion) {
    html += '<div class="dialogue-box">';
    html += '<div class="dialogue-title">Dialoogvraag voor het team</div>';
    html += '<div class="dialogue-q">' + escapeHtml(data.dialogueQuestion) + '</div>';
    html += '</div>';
  }

  if (activeTab === 'inzichten') {
    if (data.insights && data.insights.length > 0) {
      data.insights.forEach(ins => {
        html += '<div class="insight-card">';
        html += '<p class="insight-text">' + escapeHtml(ins.text) + '</p>';
        if (ins.citation) {
          html += '<span class="citation-tag">[' + escapeHtml(ins.citation) + ']</span>';
        }
        html += '</div>';
      });
    } else {
      html += '<p class="text-muted">Geen afzonderlijke inzichten beschikbaar voor dit onderdeel.</p>';
    }
  } else if (activeTab === 'praktijk') {
    if (data.practicalExamples && data.practicalExamples.length > 0) {
      data.practicalExamples.forEach(ex => {
        html += '<div class="insight-card">';
        html += '<h5 style="font-weight:700; margin-bottom:4px;">' + escapeHtml(ex.title) + '</h5>';
        html += '<p class="insight-text">' + escapeHtml(ex.description) + '</p>';
        if (ex.tip) {
          html += '<p style="font-size:12px; color:#008bb8; font-weight:600;">💡 Tip: ' + escapeHtml(ex.tip) + '</p>';
        }
        html += '</div>';
      });
    } else {
      html += '<p class="text-muted">Praktijkvoorbeelden en handvatten worden door onderwijsteams aangevuld.</p>';
    }
  } else if (activeTab === 'media') {
    if (data.media && data.media.length > 0) {
      data.media.forEach(m => {
        html += '<div class="insight-card">';
        html += '<h5 style="font-weight:700; margin-bottom:4px;">' + escapeHtml(m.title) + '</h5>';
        if (m.caption) {
          html += '<p class="insight-text">' + escapeHtml(m.caption) + '</p>';
        }
        if (m.mediaUrl) {
          html += '<a href="' + escapeHtml(m.mediaUrl) + '" target="_blank" rel="noopener noreferrer" class="link-blue" style="font-size:12px;">Bekijk / Luister extern ↗</a>';
        }
        html += '</div>';
      });
    } else {
      html += '<p class="text-muted">Geen specifieke media of podcasts gekoppeld aan dit thema.</p>';
    }
  } else if (activeTab === 'dialoog') {
    html += '<div class="insight-card">';
    html += '<h5 style="font-weight:700; margin-bottom:6px;">Hoe voer je dit gesprek in het team?</h5>';
    html += '<p class="insight-text">1. Bespreek eerst ieders waarnemingen zonder direct naar maatregelen te springen.</p>';
    html += '<p class="insight-text">2. Toets of studenten en docenten dezelfde oorzaken aanwijzen.</p>';
    html += '<p class="insight-text">3. Formuleer een gezamenlijke intentie en leg die vast in het teamakkoord.</p>';
    html += '</div>';
  }

  body.innerHTML = html;
}

function navigateDrawer(direction) {
  const keys = Object.keys(window.AANWEZIGHEID_DIMENSIONS);
  const currentIndex = keys.indexOf(currentDimensionId);
  if (currentIndex === -1) return;

  const newIndex = currentIndex + direction;
  if (newIndex >= 0 && newIndex < keys.length) {
    openDrawer(keys[newIndex]);
  }
}

function openSourcesModal() {
  const overlay = document.getElementById('sourcesModalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  filterSources();
}

function closeSourcesModal() {
  const overlay = document.getElementById('sourcesModalOverlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function setSourceTypeFilter(type) {
  currentSourceFilter = type;
  document.querySelectorAll('.chip').forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('data-source-type') === type);
  });
  filterSources();
}

function filterSources() {
  const search = (document.getElementById('sourcesSearchInput').value || '').toLowerCase();
  const listBody = document.getElementById('sourcesListBody');
  const sources = window.AANWEZIGHEID_SOURCES || [];

  const filtered = sources.filter(s => {
    if (currentSourceFilter !== 'all' && s.type !== currentSourceFilter) return false;
    if (!search) return true;
    const matchText = (s.title + ' ' + (s.authors || '') + ' ' + (s.summary || '') + ' ' + (s.sourceOrPublisher || '')).toLowerCase();
    return matchText.includes(search);
  });

  if (filtered.length === 0) {
    listBody.innerHTML = '<p class="text-muted" style="padding:24px; text-align:center;">Geen bronnen gevonden voor deze zoekopdracht.</p>';
    return;
  }

  let html = '';
  filtered.forEach(s => {
    html += '<div class="source-item">';
    html += '<div class="source-title">' + escapeHtml(s.title) + '</div>';
    html += '<div class="source-meta">';
    if (s.authors) html += escapeHtml(s.authors) + ' ';
    if (s.year) html += '(' + s.year + ') ';
    if (s.sourceOrPublisher) html += '· ' + escapeHtml(s.sourceOrPublisher);
    html += '</div>';
    if (s.summary) {
      html += '<div class="source-annotation">' + escapeHtml(s.summary) + '</div>';
    }
    if (s.doiOrUrl) {
      html += '<a href="' + escapeHtml(s.doiOrUrl) + '" target="_blank" rel="noopener noreferrer" class="link-blue" style="font-size:11px; margin-top:4px; display:inline-block;">DOI / Link ↗</a>';
    }
    html += '</div>';
  });

  listBody.innerHTML = html;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
