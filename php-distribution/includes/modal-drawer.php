<div class="drawer-overlay" id="drawerOverlay" onclick="closeDrawer()">
  <div class="drawer-container" onclick="event.stopPropagation()">
    <!-- Drawer Header -->
    <div class="drawer-header">
      <div class="drawer-header-left">
        <span class="drawer-badge" id="drawerStepTag">Stap</span>
        <h3 class="drawer-title" id="drawerTitle">Titel van dimensie</h3>
        <p class="drawer-subtitle" id="drawerSubtitle">Ondertitel</p>
      </div>
      <button type="button" class="drawer-close-btn" onclick="closeDrawer()" title="Sluiten">&times;</button>
    </div>

    <!-- Drawer Tabs -->
    <div class="drawer-tabs">
      <button type="button" class="tab-btn active" onclick="switchDrawerTab('inzichten')" id="tabBtn-inzichten">Inzichten & Wetenschap</button>
      <button type="button" class="tab-btn" onclick="switchDrawerTab('praktijk')" id="tabBtn-praktijk">Praktijkvoorbeelden</button>
      <button type="button" class="tab-btn" onclick="switchDrawerTab('media')" id="tabBtn-media">Media & Podcasts</button>
      <button type="button" class="tab-btn" onclick="switchDrawerTab('dialoog')" id="tabBtn-dialoog">Dialoog & Reflectie</button>
    </div>

    <!-- Drawer Content Body -->
    <div class="drawer-body" id="drawerBody">
      <!-- Wordt dynamisch gevuld via script.js -->
    </div>

    <!-- Drawer Footer Navigatie -->
    <div class="drawer-footer">
      <button type="button" class="btn btn-outline" id="drawerPrevBtn" onclick="navigateDrawer(-1)">← Vorige dimensie</button>
      <button type="button" class="btn btn-outline" id="drawerNextBtn" onclick="navigateDrawer(1)">Volgende dimensie →</button>
    </div>
  </div>
</div>
