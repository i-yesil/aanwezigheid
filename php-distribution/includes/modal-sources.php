<div class="modal-overlay" id="sourcesModalOverlay" onclick="closeSourcesModal()">
  <div class="modal-container" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div>
        <h3 class="modal-title">Bronnenbibliotheek & Onderbouwing</h3>
        <p class="modal-subtitle">50 wetenschappelijke studies, wetgeving en jurisprudentie rondom aanwezigheid in het hoger onderwijs</p>
      </div>
      <button type="button" class="modal-close-btn" onclick="closeSourcesModal()">&times;</button>
    </div>

    <!-- Filter & Search Bar -->
    <div class="modal-filters">
      <input type="text" id="sourcesSearchInput" class="search-input" placeholder="Zoek op auteur, titel, trefwoord of jaartal..." oninput="filterSources()">
      <div class="filter-chips">
        <button type="button" class="chip active" onclick="setSourceTypeFilter('all')" data-source-type="all">Alles</button>
        <button type="button" class="chip" onclick="setSourceTypeFilter('wetenschappelijk')" data-source-type="wetenschappelijk">Wetenschappelijk</button>
        <button type="button" class="chip" onclick="setSourceTypeFilter('wetgeving')" data-source-type="wetgeving">Wetgeving</button>
        <button type="button" class="chip" onclick="setSourceTypeFilter('jurisprudentie')" data-source-type="jurisprudentie">Jurisprudentie</button>
        <button type="button" class="chip" onclick="setSourceTypeFilter('praktijk')" data-source-type="praktijk">Instrumenten & Media</button>
      </div>
    </div>

    <!-- Sources List -->
    <div class="modal-body" id="sourcesListBody">
      <!-- Dynamisch ingevuld via script.js -->
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-primary" onclick="closeSourcesModal()">Sluiten</button>
    </div>
  </div>
</div>
