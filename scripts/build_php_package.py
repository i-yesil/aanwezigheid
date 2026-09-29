#!/usr/bin/env python3
import os
import shutil
import zipfile

root_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
out_dir = os.path.join(root_dir, 'php-distribution')

# Ensure subdirectories
for d in ['includes', 'data', 'assets/css', 'assets/js', 'public']:
    os.makedirs(os.path.join(out_dir, d), exist_ok=True)

# Copy PDF if present
pdf_src = os.path.join(root_dir, 'public', 'memo-aanwezigheidsplicht-poa.pdf')
if os.path.exists(pdf_src):
    shutil.copyfile(pdf_src, os.path.join(out_dir, 'public', 'memo-aanwezigheidsplicht-poa.pdf'))

# 1. index.php
index_php = """<?php
/**
 * Aanwezigheidsethos - Handreiking voor Hogeschool Rotterdam
 * 
 * Modulair opgebouwd conform de serverrichtlijnen van HR (MAMP / Debian Linux).
 * Elk onderdeel bevindt zich in een eigen bestand in de map /includes/.
 * Wil je iets aanpassen? Open dan simpelweg het betreffende deelbestand!
 */

// Laad de data
$dimensions = json_decode(file_get_contents(__DIR__ . '/data/dimensions.json'), true);
$sources = json_decode(file_get_contents(__DIR__ . '/data/sources.json'), true);
$steps = json_decode(file_get_contents(__DIR__ . '/data/steps.json'), true);

// Laad de HTML-head en navigatie
require_once __DIR__ . '/includes/header.php';
?>

<main class="main-content">
  <?php
  // Masthead met doelgroep en actieknoppen
  require_once __DIR__ . '/includes/masthead.php';

  // Hero sectie: Wicked problem, 'Voer het gesprek' en interactief wiel
  require_once __DIR__ . '/includes/intro-hero.php';

  // Zwevende navigatiebalk
  require_once __DIR__ . '/includes/sticky-bar.php';

  // De 4 stappen
  require_once __DIR__ . '/includes/step1.php';
  require_once __DIR__ . '/includes/step2.php';
  require_once __DIR__ . '/includes/step3.php';
  require_once __DIR__ . '/includes/step4.php';

  // Tot slot conclusieblok
  require_once __DIR__ . '/includes/conclusion.php';
  ?>
</main>

<?php
// Modals voor details en bronnen
require_once __DIR__ . '/includes/modal-drawer.php';
require_once __DIR__ . '/includes/modal-sources.php';

// Footer met colofon en JavaScripts
require_once __DIR__ . '/includes/footer.php';
?>
"""

with open(os.path.join(out_dir, 'index.php'), 'w', encoding='utf-8') as f:
    f.write(index_php)

# 2. includes/header.php
header_php = """<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aanwezigheidsethos · Handreiking Hogeschool Rotterdam</title>
  <meta name="description" content="Interactieve handreiking voor opleidingsteams en docenten over aanwezigheid, didactiek, studentbinding en de wettelijke kaders van de aanwezigheidsplicht (WHW).">
  
  <!-- Google Fonts: Poppins -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
  <!-- Hoofdstylesheet -->
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
"""

with open(os.path.join(out_dir, 'includes', 'header.php'), 'w', encoding='utf-8') as f:
    f.write(header_php)

# 3. includes/masthead.php
masthead_php = """<header class="masthead no-print">
  <div class="masthead-content">
    <div class="masthead-badge">
      <span>Voor adviseurs, management en (hoofd)docenten</span>
    </div>
    <div class="masthead-actions">
      <button type="button" class="btn btn-secondary" onclick="window.print()" title="Afdrukken of opslaan als PDF">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/></svg>
        <span>Afdrukken / PDF</span>
      </button>
      <button type="button" class="btn btn-secondary" onclick="openSourcesModal()" title="Bekijk alle bronnen">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
        <span>Bronnenlijst</span>
      </button>
    </div>
  </div>
</header>
"""

with open(os.path.join(out_dir, 'includes', 'masthead.php'), 'w', encoding='utf-8') as f:
    f.write(masthead_php)

# 4. includes/intro-hero.php
intro_hero_php = """<section class="intro-section no-print">
  <div class="title-block">
    <h1 class="main-title">Aanwezigheidsethos</h1>
    <p class="subtitle">Handreiking voor een afgestemde aanpak van aanwezigheid en aanwezigheidsplicht in het hbo</p>
    <p class="intro-lead">
      Een onderbouwd instrumentarium voor opleidingsteams, docenten, examencommissies en onderwijsadviseurs bij het voeren van een constructieve dialoog over aanwezigheid en aanwezigheidsplicht. Klik op 
      <span class="inline-badge">
        <span class="info-icon">i</span> Meer info
      </span> 
      bij elk thema voor wetenschappelijke inzichten, praktijkvoorbeelden, media en concrete handvatten.
    </p>
  </div>

  <!-- Wicked Problem kader -->
  <div class="card card-hero">
    <span class="tag-label text-red">Voer het gesprek</span>
    <p class="hero-paragraph font-medium">
      Aanwezigheid van studenten in de les is een <strong>wicked problem</strong>: veel actoren, veel factoren, en beleidskeuzes die elkaar beïnvloeden. Er is geen één magische oplossing. Wat wel werkt: zorgen dat de keuzes die je maakt op elkaar zijn afgestemd; binnen het team en tussen de feitelijke en normatieve dimensies.
    </p>
    <p class="hero-paragraph text-muted">
      Deze handreiking neemt je mee langs vier stappen om tot een onderbouwd advies of een afgestemde aanpak te komen.
    </p>
    <div class="hero-footer">
      <span>
        Gebaseerd op de workshop van <strong>Rick Ikkersheim (Inholland)</strong> in maart 2026 en lectoraatonderzoek van 
        <a href="https://www.inholland.nl/onderzoek/publicaties/afwezig-maar-aanwezig-het-rimpeleffect-van-afwezigheid-van-studenten/" target="_blank" rel="noopener noreferrer" class="link-blue">
          Rutger Kappe (2026) ↗
        </a>.
      </span>
    </div>
  </div>

  <!-- Interactief Wiel -->
  <div class="wheel-container">
    <div class="wheel-header">
      <h3 class="wheel-title">Doorloop de vier stappen in het wiel voor het teamgesprek</h3>
      <p class="wheel-subtitle">Of klik op een stap om direct naar inzichten en praktische handvatten te gaan</p>
    </div>
    <?php require_once __DIR__ . '/wheel.php'; ?>
  </div>
</section>
"""

with open(os.path.join(out_dir, 'includes', 'intro-hero.php'), 'w', encoding='utf-8') as f:
    f.write(intro_hero_php)

# 5. includes/wheel.php
wheel_php = """<div class="wheel-wrapper">
  <svg viewBox="0 0 680 680" class="wheel-svg" id="interactiveWheelSvg">
    <!-- STAP 1: Linksboven (NW) -->
    <g class="wheel-quadrant quadrant-step1" onclick="scrollToStep(1)" data-step="1">
      <path d="M 34,340 A 306,306 0 0 1 340,34 L 340,224 A 116,116 0 0 0 224,340 Z" fill="#d3104c" stroke="#ffffff" stroke-width="1.5" />
      <circle cx="188" cy="138" r="19" fill="#ffffff" stroke="#d3104c" stroke-width="1.5" />
      <text x="188" y="138" text-anchor="middle" dy="0.36em" fill="#d3104c" class="badge-number">1</text>
      <text x="188" y="178" text-anchor="middle" fill="#ffffff" class="wheel-q-text">Wat is eigenlijk</text>
      <text x="188" y="200" text-anchor="middle" fill="#ffffff" class="wheel-q-text">het probleem?</text>
      <text x="188" y="224" text-anchor="middle" fill="#ffffff" class="wheel-tag-text">Feitelijke dimensie</text>
    </g>

    <!-- STAP 2: Rechtsboven (NE) -->
    <g class="wheel-quadrant quadrant-step2" onclick="scrollToStep(2)" data-step="2">
      <path d="M 340,34 A 306,306 0 0 1 646,340 L 456,340 A 116,116 0 0 0 340,224 Z" fill="#003340" stroke="#ffffff" stroke-width="1.5" />
      <circle cx="492" cy="138" r="19" fill="#ffffff" stroke="#003340" stroke-width="1.5" />
      <text x="492" y="138" text-anchor="middle" dy="0.36em" fill="#003340" class="badge-number">2</text>
      <text x="492" y="178" text-anchor="middle" fill="#ffffff" class="wheel-q-text">Welke waarden</text>
      <text x="492" y="200" text-anchor="middle" fill="#ffffff" class="wheel-q-text">spelen hier?</text>
      <text x="492" y="224" text-anchor="middle" fill="#ffffff" class="wheel-tag-text">Normatieve dimensie</text>
    </g>

    <!-- STAP 3: Rechtsonder (SE) -->
    <g class="wheel-quadrant quadrant-step3" onclick="scrollToStep(3)" data-step="3">
      <path d="M 646,340 A 306,306 0 0 1 340,646 L 340,456 A 116,116 0 0 0 456,340 Z" fill="#008bb8" stroke="#ffffff" stroke-width="1.5" />
      <circle cx="492" cy="442" r="19" fill="#ffffff" stroke="#008bb8" stroke-width="1.5" />
      <text x="492" y="442" text-anchor="middle" dy="0.36em" fill="#008bb8" class="badge-number">3</text>
      <text x="492" y="478" text-anchor="middle" fill="#ffffff" class="wheel-q-text">Hoe werken we</text>
      <text x="492" y="500" text-anchor="middle" fill="#ffffff" class="wheel-q-text">aan aanwezigheid?</text>
      <text x="492" y="525" text-anchor="middle" fill="#ffffff" class="wheel-tag-bold">Handelings-</text>
      <text x="492" y="542" text-anchor="middle" fill="#ffffff" class="wheel-tag-bold">perspectieven</text>
    </g>

    <!-- STAP 4: Linksonder (SW) -->
    <g class="wheel-quadrant quadrant-step4" onclick="scrollToStep(4)" data-step="4">
      <path d="M 340,646 A 306,306 0 0 1 34,340 L 224,340 A 116,116 0 0 0 340,456 Z" fill="#c98a00" stroke="#ffffff" stroke-width="1.5" />
      <circle cx="188" cy="442" r="19" fill="#ffffff" stroke="#c98a00" stroke-width="1.5" />
      <text x="188" y="442" text-anchor="middle" dy="0.36em" fill="#c98a00" class="badge-number">4</text>
      <text x="188" y="478" text-anchor="middle" fill="#ffffff" class="wheel-q-text">Staat het</text>
      <text x="188" y="500" text-anchor="middle" fill="#ffffff" class="wheel-q-text">beleid stevig?</text>
      <text x="188" y="528" text-anchor="middle" fill="#ffffff" class="wheel-tag-bold">Evaluatie</text>
    </g>

    <!-- Centraal Hub: Aanwezigheidsethos -->
    <circle cx="340" cy="340" r="105" fill="#ffffff" stroke="#003340" stroke-width="1.5" stroke-opacity="0.14" />
    <circle cx="340" cy="340" r="92" fill="#fbfaf7" />
    <text x="340" y="331" text-anchor="middle" fill="#003340" class="hub-title">Aanwezigheids</text>
    <text x="340" y="358" text-anchor="middle" fill="#d3104c" class="hub-ethos">ethos</text>
  </svg>
</div>
"""

with open(os.path.join(out_dir, 'includes', 'wheel.php'), 'w', encoding='utf-8') as f:
    f.write(wheel_php)

# 6. includes/sticky-bar.php
sticky_bar_php = """<nav class="sticky-step-bar no-print" id="stickyStepBar">
  <div class="sticky-inner">
    <span class="sticky-label">Stappen</span>
    <div class="sticky-links">
      <button type="button" class="step-pill active" onclick="scrollToStep(1)" data-step-btn="1">
        <span class="pill-badge pill-step1">1</span>
        <span class="pill-text">Feitelijke dimensie</span>
      </button>
      <button type="button" class="step-pill" onclick="scrollToStep(2)" data-step-btn="2">
        <span class="pill-badge pill-step2">2</span>
        <span class="pill-text">Normatieve dimensie</span>
      </button>
      <button type="button" class="step-pill" onclick="scrollToStep(3)" data-step-btn="3">
        <span class="pill-badge pill-step3">3</span>
        <span class="pill-text">Handelingsperspectieven</span>
      </button>
      <button type="button" class="step-pill" onclick="scrollToStep(4)" data-step-btn="4">
        <span class="pill-badge pill-step4">4</span>
        <span class="pill-text">Evaluatie</span>
      </button>
    </div>
  </div>
</nav>
"""

with open(os.path.join(out_dir, 'includes', 'sticky-bar.php'), 'w', encoding='utf-8') as f:
    f.write(sticky_bar_php)

# 7. includes/step1.php
step1_php = """<section id="stap-1" class="step-section border-step1">
  <div class="step-badge badge-step1">1</div>
  <div class="step-header">
    <span class="tag-pill tag-step1">Feitelijke dimensie</span>
    <h2 class="step-title">Wat is eigenlijk het probleem?</h2>
  </div>

  <p class="step-intro">
    Aanwezigheidsproblemen manifesteren zich op verschillende niveaus: van de leefwereld van de student tot de organisatie van het rooster en de cultuur in de docentenkamer. Vaak wijst het werkelijke probleem naar een ander domein dan we intuïtief aannemen.
  </p>

  <!-- 8 Feitelijke Dimensies (2 Kolommen: Student vs Onderwijsteam) -->
  <div class="grid grid-2">
    <!-- Kolom Links: De Student (4 domeinen) -->
    <div class="perspective-column col-student">
      <div class="col-header">
        <h3 class="col-title text-step1">De student</h3>
        <p class="col-desc">Vier domeinen rondom leefwereld, belasting en motivatie van de student:</p>
      </div>
      <div class="cards-list">
        <div class="card card-item" onclick="openDrawer('p-doelgroep')">
          <span class="card-domain">Doelgroep</span>
          <h4 class="card-heading">Zicht op de studentpopulatie</h4>
          <p class="card-desc">Wie is onze student eigenlijk? Leefwereld, belasting en behoeften.</p>
          <div class="card-action">
            <span class="info-badge"><i>i</i> Meer info</span>
          </div>
        </div>

        <div class="card card-item" onclick="openDrawer('p-didactiek')">
          <span class="card-domain">Didactiek</span>
          <h4 class="card-heading">Didactische meerwaarde</h4>
          <p class="card-desc">Ervaren studenten dat fysiek aanwezig zijn écht iets toevoegt aan hun leren?</p>
          <div class="card-action">
            <span class="info-badge"><i>i</i> Meer info</span>
          </div>
        </div>

        <div class="card card-item" onclick="openDrawer('p-pedagogiek')">
          <span class="card-domain">Pedagogiek</span>
          <h4 class="card-heading">Klimaat & binding</h4>
          <p class="card-desc">Voelen studenten zich gezien, welkom en sociaal verbonden met medestudenten en docenten?</p>
          <div class="card-action">
            <span class="info-badge"><i>i</i> Meer info</span>
          </div>
        </div>

        <div class="card card-item" onclick="openDrawer('p-technisch')">
          <span class="card-domain">Technisch</span>
          <h4 class="card-heading">Zicht op verzuim</h4>
          <p class="card-desc">Weten we tijdig wie er afwezig is, en wat doen we met die signalen?</p>
          <div class="card-action">
            <span class="info-badge"><i>i</i> Meer info</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Kolom Rechts: Het Onderwijsteam (4 domeinen) -->
    <div class="perspective-column col-team">
      <div class="col-header">
        <h3 class="col-title text-step1">Het onderwijsteam & context</h3>
        <p class="col-desc">Vier domeinen rondom organisatie, beleid en randvoorwaarden:</p>
      </div>
      <div class="cards-list">
        <div class="card card-item" onclick="openDrawer('p-ontwerp')">
          <span class="card-domain">Ontwerp</span>
          <h4 class="card-heading">Curriculum & studeerbaarheid</h4>
          <p class="card-desc">Sluit de programmering aan op de student of veroorzaakt het ontwerp verzuim?</p>
          <div class="card-action">
            <span class="info-badge"><i>i</i> Meer info</span>
          </div>
        </div>

        <div class="card card-item" onclick="openDrawer('p-logistiek')">
          <span class="card-domain">Logistiek</span>
          <h4 class="card-heading">Roostering & faciliteiten</h4>
          <p class="card-desc">Lange tussenuren, te vroege/late slots of ongeschikte lokalen als drempels.</p>
          <div class="card-action">
            <span class="info-badge"><i>i</i> Meer info</span>
          </div>
        </div>

        <div class="card card-item" onclick="openDrawer('p-team')">
          <span class="card-domain">Docententeam</span>
          <h4 class="card-heading">Gezamenlijke afstemming</h4>
          <p class="card-desc">Hanteert het team een eenduidige lijn of hanteert elke docent eigen regels?</p>
          <div class="card-action">
            <span class="info-badge"><i>i</i> Meer info</span>
          </div>
        </div>

        <div class="card card-item" onclick="openDrawer('p-beleid')">
          <span class="card-domain">Beleid</span>
          <h4 class="card-heading">Kaders & regelgeving</h4>
          <p class="card-desc">Hoe verhouden onze wensen zich tot de OER, de WHW en het HR-beleidskader?</p>
          <div class="card-action">
            <span class="info-badge"><i>i</i> Meer info</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
"""

with open(os.path.join(out_dir, 'includes', 'step1.php'), 'w', encoding='utf-8') as f:
    f.write(step1_php)

# 8. includes/step2.php
step2_php = """<section id="stap-2" class="step-section border-step2">
  <div class="step-badge badge-step2">2</div>
  <div class="step-header">
    <span class="tag-pill tag-step2">Normatieve dimensie</span>
    <h2 class="step-title">Welke waarden spelen hier?</h2>
  </div>

  <p class="step-intro">
    Feiten alleen vertellen nog niet wat wenselijk is. Elke keuze rondom aanwezigheid raakt aan fundamentele opvattingen over autonomie, verantwoordelijkheid en onderwijskwaliteit. Deze drie perspectieven maken die waarden bespreekbaar vóór je besluit.
  </p>

  <div class="grid grid-3">
    <!-- Sociaal Perspectief -->
    <div class="card card-item" onclick="openDrawer('p-soc')">
      <span class="card-domain text-step2">Sociaal perspectief</span>
      <h4 class="card-heading">Sociale dynamiek & groepscultuur</h4>
      <p class="card-desc">
        Aanwezigheid is een sociaal contract. Als medestudenten wegblijven, ontstaat een vicieuze cirkel die ook gemotiveerde studenten demotiveert.
      </p>
      <div class="card-action">
        <span class="info-badge"><i>i</i> Meer info</span>
      </div>
    </div>

    <!-- Psychologisch Perspectief -->
    <div class="card card-item" onclick="openDrawer('p-psy')">
      <span class="card-domain text-step2">Psychologisch perspectief</span>
      <h4 class="card-heading">Psychologische veiligheid & welzijn</h4>
      <p class="card-desc">
        Fysieke aanwezigheid vraagt dat studenten zich durven laten zien en fouten mogen maken. Dwang zonder veiligheid leidt tot mentale afwezigheid.
      </p>
      <div class="card-action">
        <span class="info-badge"><i>i</i> Meer info</span>
      </div>
    </div>

    <!-- Onderwijskundig Perspectief -->
    <div class="card card-item" onclick="openDrawer('p-ok')">
      <span class="card-domain text-step2">Onderwijskundig perspectief</span>
      <h4 class="card-heading">Onderwijskundige visie & didactiek</h4>
      <p class="card-desc">
        Is aanwezigheid een doel op zich of een randvoorwaarde voor betekenisvol leren? Waar zit de didactische noodzaak van fysieke ontmoeting?
      </p>
      <div class="card-action">
        <span class="info-badge"><i>i</i> Meer info</span>
      </div>
    </div>
  </div>
</section>
"""

with open(os.path.join(out_dir, 'includes', 'step2.php'), 'w', encoding='utf-8') as f:
    f.write(step2_php)

# 9. includes/step3.php
step3_php = """<section id="stap-3" class="step-section border-step3">
  <div class="step-badge badge-step3">3</div>
  <div class="step-header">
    <span class="tag-pill tag-step3">Handelingsperspectieven</span>
    <h2 class="step-title">Hoe stimuleren we aanwezigheid en wanneer is een plicht zinvol?</h2>
  </div>

  <p class="step-intro">
    Om aanwezigheid te bevorderen zet je als opleidingsteam primair in op twee elkaar versterkende sporen: werken aan meerwaarde en studeerbaarheid (Spoor 1) en werken aan relatie en binding (Spoor 2). Pas wanneer dat aantoonbaar ontoereikend blijkt, onderzoek je of een formele aanwezigheidsplicht (POA) didactisch proportioneel is (Spoor 3) en voldoet aan het HR-kader 2025.
  </p>

  <div class="grid grid-2">
    <!-- Spoor 1: Meerwaarde -->
    <div class="card card-item" onclick="openDrawer('p-routeA')">
      <span class="card-domain text-step3">Spoor 1 · didactisch & roosterontwerp</span>
      <h4 class="card-heading">Werken aan meerwaarde en studeerbaarheid</h4>
      <p class="card-desc">
        Herontwerp van rooster, didactische meerwaarde en studeerbaarheid. Zorg dat bijeenkomsten interactief zijn en iets bieden wat zelfstudie of opnames niet kunnen vervangen.
      </p>
      <div class="card-action">
        <span class="info-badge"><i>i</i> Meer info</span>
      </div>
    </div>

    <!-- Spoor 2: Binding & Follow-up -->
    <div class="card card-item" onclick="openDrawer('p-routeB')">
      <span class="card-domain text-step3">Spoor 2 · docentnabijheid & preventie</span>
      <h4 class="card-heading">Werken aan relatie en binding</h4>
      <p class="card-desc">
        Versterk de binding, docentnabijheid en het gevoel gezien en gemist te worden. Signaleer verzuim tijdig via zichtbare registratie en organiseer een directe, warme follow-up.
      </p>
      <div class="card-action">
        <span class="info-badge"><i>i</i> Meer info</span>
      </div>
    </div>
  </div>

  <!-- Spoor 3 & Juridisch Kader -->
  <div class="grid grid-2 mt-4">
    <!-- Spoor 3: Formele Plicht -->
    <div class="card card-item" onclick="openDrawer('p-routeC')">
      <span class="card-domain text-step3">Spoor 3 · ultimum remedium (poa)</span>
      <h4 class="card-heading">Formele aanwezigheidsplicht: alleen als POA</h4>
      <p class="card-desc">
        Overweegt het team een formele aanwezigheidsplicht, dan gelden de strikte kaders van Hogeschool Rotterdam en de WHW: studeren is een recht, geen plicht. Een plicht mag alleen op cursusniveau bij een praktische oefening (POA), met verplichte verankering in OER en curriculumschema.
      </p>
      <div class="card-action">
        <span class="info-badge"><i>i</i> Meer info</span>
      </div>
    </div>

    <!-- Juridisch Kader HR 2025 Callout -->
    <div class="card card-juridisch" onclick="openDrawer('p-juridisch')">
      <div class="juridisch-header">
        <span class="tag-pill tag-dark">Beleidskader Hogeschool Rotterdam (2025)</span>
        <h4 class="juridisch-title">Wettelijke kaders & de Praktische Oefening (POA)</h4>
      </div>
      <p class="juridisch-body">
        Volgens de WHW (art. 7.13 lid 2 sub t) en het officiële HR-kader (2025) is een aanwezigheidsplicht alléén toegestaan bij een Praktische Oefening (POA). Lees de strikte voorwaarden voor proportionaliteit, vervangende opdrachten en OER-borging.
      </p>
      <div class="juridisch-actions">
        <span class="info-badge"><i>i</i> Meer info</span>
        <a href="public/memo-aanwezigheidsplicht-poa.pdf" target="_blank" rel="noopener noreferrer" class="link-download" onclick="event.stopPropagation()">
          <span>Download officieel HR-kader (PDF) ↗</span>
        </a>
      </div>
    </div>
  </div>
</section>
"""

with open(os.path.join(out_dir, 'includes', 'step3.php'), 'w', encoding='utf-8') as f:
    f.write(step3_php)

# 10. includes/step4.php
step4_php = """<section id="stap-4" class="step-section border-step4">
  <div class="step-badge badge-step4">4</div>
  <div class="step-header">
    <span class="tag-pill tag-step4">Evaluatie</span>
    <h2 class="step-title">Staat het beleid stevig?</h2>
  </div>

  <p class="step-intro">
    Deze vier evaluatievragen toetsen of de voorgenomen of bestaande aanpak van aanwezigheid stevig staat. Alle vier moeten 'ja' zijn, anders weet je waar het werk ligt.
  </p>

  <div class="grid grid-4">
    <!-- G1: Gedragen -->
    <div class="card card-item" onclick="openDrawer('p-g1')">
      <h4 class="card-heading"><span class="highlight-g">G</span>edragen</h4>
      <p class="card-desc">
        Staat het gehele docententeam achter deze aanpak, of hanteert elke docent in de praktijk eigen regels?
      </p>
      <div class="card-action">
        <span class="info-badge"><i>i</i> Meer info</span>
      </div>
    </div>

    <!-- G2: Geloofwaardig -->
    <div class="card card-item" onclick="openDrawer('p-g2')">
      <h4 class="card-heading"><span class="highlight-g">G</span>eloofwaardig</h4>
      <p class="card-desc">
        Ervaren studenten de lessen als relevant en didactisch waardevol, of voelt aanwezig zijn als tijdverspilling?
      </p>
      <div class="card-action">
        <span class="info-badge"><i>i</i> Meer info</span>
      </div>
    </div>

    <!-- G3: Gerechtvaardigd -->
    <div class="card card-item" onclick="openDrawer('p-g3')">
      <h4 class="card-heading"><span class="highlight-g">G</span>erechtvaardigd</h4>
      <p class="card-desc">
        Is de eventuele plicht juridisch en didactisch verdedigbaar volgens WHW, OER en het HR-kader 2025?
      </p>
      <div class="card-action">
        <span class="info-badge"><i>i</i> Meer info</span>
      </div>
    </div>

    <!-- G4: Gedeeld -->
    <div class="card card-item" onclick="openDrawer('p-g4')">
      <h4 class="card-heading"><span class="highlight-g">G</span>edeeld</h4>
      <p class="card-desc">
        Is de visie op aanwezigheid expliciet besproken en afgestemd met studenten, examencommissie en SLC?
      </p>
      <div class="card-action">
        <span class="info-badge"><i>i</i> Meer info</span>
      </div>
    </div>
  </div>
</section>
"""

with open(os.path.join(out_dir, 'includes', 'step4.php'), 'w', encoding='utf-8') as f:
    f.write(step4_php)

# 11. includes/conclusion.php
conclusion_php = """<section class="conclusion-section no-print">
  <div class="card card-conclusion">
    <span class="tag-label text-red">Tot slot</span>
    <p class="conclusion-text">
      Een aanwezigheidsethos bouw je niet in één gesprek. De vier stappen zijn geen eenmalige checklist, maar een leidraad die steeds opnieuw langsgelopen kan worden wanneer het curriculum verandert, de studentenpopulatie verschuift of het team roteert. De vier G's blijven daarbij het kompas: zodra één G gaat schuren, ligt daar het volgende gesprek.
    </p>
    <div class="conclusion-actions">
      <button type="button" class="btn btn-red" onclick="openSourcesModal()">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
        <span>Bronnenlijst</span>
      </button>
      <span class="conclusion-hint">
        Bekijk het complete overzicht van 50+ geraadpleegde wetenschappelijke publicaties, wetgeving en jurisprudentie.
      </span>
    </div>
  </div>
</section>
"""

with open(os.path.join(out_dir, 'includes', 'conclusion.php'), 'w', encoding='utf-8') as f:
    f.write(conclusion_php)

# 12. includes/modal-drawer.php
modal_drawer_php = """<div class="drawer-overlay" id="drawerOverlay" onclick="closeDrawer()">
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
"""

with open(os.path.join(out_dir, 'includes', 'modal-drawer.php'), 'w', encoding='utf-8') as f:
    f.write(modal_drawer_php)

# 13. includes/modal-sources.php
modal_sources_php = """<div class="modal-overlay" id="sourcesModalOverlay" onclick="closeSourcesModal()">
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
"""

with open(os.path.join(out_dir, 'includes', 'modal-sources.php'), 'w', encoding='utf-8') as f:
    f.write(modal_sources_php)

# 14. includes/footer.php
footer_php = """<footer class="colofon no-print">
  <div class="colofon-content">
    <div class="colofon-brand">
      <strong>Hogeschool Rotterdam</strong> · Handreiking Aanwezigheidsethos
    </div>
    <div class="colofon-text">
      Gebaseerd op de workshop van Rick Ikkersheim (Inholland, maart 2026), lectoraatonderzoek van Rutger Kappe (2026) en het HR-beleidskader aanwezigheidsplicht (2025).
    </div>
    <div class="colofon-copyright">
      &copy; <?php echo date('Y'); ?> Hogeschool Rotterdam. Vrij te gebruiken en aan te passen voor onderwijsteams.
    </div>
  </div>
</footer>

<!-- Laad data in JavaScript voor interacties -->
<script>
  window.AANWEZIGHEID_DIMENSIONS = <?php echo json_encode($dimensions, JSON_UNESCAPED_UNICODE); ?>;
  window.AANWEZIGHEID_SOURCES = <?php echo json_encode($sources, JSON_UNESCAPED_UNICODE); ?>;
  window.AANWEZIGHEID_STEPS = <?php echo json_encode($steps, JSON_UNESCAPED_UNICODE); ?>;
</script>

<!-- Hoofd JavaScript -->
<script src="assets/js/script.js"></script>
</body>
</html>
"""

with open(os.path.join(out_dir, 'includes', 'footer.php'), 'w', encoding='utf-8') as f:
    f.write(footer_php)

# 15. assets/css/style.css
style_css = """/* ==========================================================================
   Aanwezigheidsethos - Stijlenblad
   Opgebouwd conform HR-stijl: Poppins, Petrol (#003340), Rood (#d3104c),
   Blauw (#008bb8), Okergoud (#c98a00) en warme zandkleur (#f7efe3).
   ========================================================================== */

:root {
  --color-bg: #f7efe3;
  --color-petrol: #003340;
  --color-red: #d3104c;
  --color-blue: #008bb8;
  --color-gold: #c98a00;
  --color-white: #ffffff;
  --color-border: rgba(0, 51, 64, 0.15);
  --color-border-light: rgba(0, 51, 64, 0.08);
  --font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --max-width: 1340px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-family);
  background-color: var(--color-bg);
  color: var(--color-petrol);
  line-height: 1.6;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
}

.main-content {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 32px 24px 64px 24px;
}

.masthead {
  border-bottom: 2px solid var(--color-petrol);
  padding-bottom: 14px;
  margin-bottom: 32px;
}

.masthead-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.masthead-badge span {
  font-size: 13px;
  font-weight: 500;
  color: rgba(0, 51, 64, 0.85);
}

.masthead-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 9999px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 51, 64, 0.2);
  color: var(--color-petrol);
}

.btn-secondary:hover {
  border-color: var(--color-red);
  color: var(--color-red);
}

.btn-primary {
  background: var(--color-petrol);
  color: var(--color-white);
  border: none;
}

.btn-primary:hover {
  background: #00222b;
}

.btn-red {
  background: var(--color-red);
  color: var(--color-white);
  border: none;
}

.btn-red:hover {
  background: #b00d3f;
}

.btn-outline {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-petrol);
}

.btn-outline:hover {
  border-color: var(--color-petrol);
}

.icon {
  width: 14px;
  height: 14px;
}

.intro-section {
  margin-bottom: 36px;
}

.title-block {
  margin-bottom: 24px;
}

.main-title {
  font-size: 38px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--color-petrol);
  line-height: 1.15;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 19px;
  color: var(--color-red);
  font-weight: 600;
  margin-bottom: 12px;
}

.intro-lead {
  font-size: 15px;
  color: rgba(0, 51, 64, 0.9);
  max-width: 960px;
}

.inline-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 1px 8px;
  background: rgba(0, 51, 64, 0.08);
  border: 1px solid rgba(0, 51, 64, 0.2);
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 600;
  color: var(--color-petrol);
  margin: 0 4px;
}

.info-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 1px solid currentColor;
  font-style: italic;
  font-size: 9px;
  font-family: serif;
}

.card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.15s ease-in-out;
}

.card-hero {
  padding: 24px;
  margin-bottom: 28px;
}

.tag-label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 8px;
}

.text-red { color: var(--color-red); }
.text-muted { color: rgba(0, 51, 64, 0.8); }
.text-step1 { color: var(--color-red); }
.text-step2 { color: var(--color-petrol); }
.text-step3 { color: var(--color-blue); }
.text-step4 { color: var(--color-gold); }

.hero-paragraph {
  font-size: 15px;
  margin-bottom: 12px;
}

.hero-footer {
  padding-top: 12px;
  border-top: 1px solid var(--color-border-light);
  font-size: 12px;
  color: rgba(0, 51, 64, 0.7);
}

.link-blue {
  color: #0098d4;
  text-decoration: none;
  font-weight: 500;
}

.link-blue:hover {
  text-decoration: underline;
}

.wheel-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 28px 0;
}

.wheel-header {
  text-align: center;
  margin-bottom: 12px;
}

.wheel-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-petrol);
}

.wheel-subtitle {
  font-size: 13px;
  color: rgba(0, 51, 64, 0.75);
}

.wheel-wrapper {
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
}

.wheel-svg {
  width: 100%;
  height: auto;
  overflow: visible;
}

.wheel-quadrant {
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.wheel-quadrant:hover {
  transform: scale(1.015);
}

.badge-number {
  font-weight: 700;
  font-size: 16px;
}

.wheel-q-text {
  font-size: 16.5px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.wheel-tag-text {
  font-size: 12px;
  font-weight: 600;
}

.wheel-tag-bold {
  font-size: 13px;
  font-weight: 700;
}

.hub-title {
  font-size: 18.5px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.hub-ethos {
  font-size: 21.5px;
  font-weight: 900;
  letter-spacing: -0.02em;
}

.sticky-step-bar {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(247, 239, 227, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 51, 64, 0.15);
  margin-bottom: 28px;
  padding: 8px 0;
}

.sticky-inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 12px;
}

.sticky-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(0, 51, 64, 0.6);
}

.sticky-links {
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
}

.step-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border-radius: 9999px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-petrol);
  background: var(--color-white);
  border: 1px solid var(--color-border);
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.step-pill:hover,
.step-pill.active {
  border-color: var(--color-petrol);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.pill-badge {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: var(--color-white);
}

.pill-step1 { background: var(--color-red); }
.pill-step2 { background: var(--color-petrol); }
.pill-step3 { background: var(--color-blue); }
.pill-step4 { background: var(--color-gold); }

.step-section {
  position: relative;
  border-left: 4px solid;
  padding-left: 24px;
  margin-bottom: 48px;
  scroll-margin-top: 70px;
}

.border-step1 { border-color: var(--color-red); }
.border-step2 { border-color: var(--color-petrol); }
.border-step3 { border-color: var(--color-blue); }
.border-step4 { border-color: var(--color-gold); }

.step-badge {
  position: absolute;
  left: -20px;
  top: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 16px;
  color: var(--color-white);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.badge-step1 { background: var(--color-red); }
.badge-step2 { background: var(--color-petrol); }
.badge-step3 { background: var(--color-blue); }
.badge-step4 { background: var(--color-gold); }

.step-header {
  border-bottom: 1px solid var(--color-border-light);
  padding-bottom: 8px;
  margin-bottom: 12px;
}

.tag-pill {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-white);
  margin-bottom: 6px;
}

.tag-step1 { background: var(--color-red); }
.tag-step2 { background: var(--color-petrol); }
.tag-step3 { background: var(--color-blue); }
.tag-step4 { background: var(--color-gold); }
.tag-dark { background: var(--color-petrol); }

.step-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--color-petrol);
  letter-spacing: -0.01em;
}

.step-intro {
  font-size: 14.5px;
  color: rgba(0, 51, 64, 0.9);
  margin-bottom: 20px;
  line-height: 1.6;
}

.grid {
  display: grid;
  gap: 16px;
}

.grid-2 {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.grid-3 {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.grid-4 {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.mt-4 {
  margin-top: 16px;
}

.perspective-column {
  background: rgba(255, 255, 255, 0.45);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 16px;
}

.col-header {
  margin-bottom: 12px;
}

.col-title {
  font-size: 16px;
  font-weight: 700;
}

.col-desc {
  font-size: 12px;
  color: rgba(0, 51, 64, 0.7);
}

.cards-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card-item {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-item:hover {
  border-color: var(--color-red);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.border-step2 .card-item:hover {
  border-color: var(--color-petrol);
}

.border-step3 .card-item:hover {
  border-color: var(--color-blue);
}

.border-step4 .card-item:hover {
  border-color: var(--color-gold);
}

.card-domain {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-red);
  margin-bottom: 4px;
}

.card-heading {
  font-size: 15px;
  font-weight: 700;
  color: var(--color-petrol);
  margin-bottom: 6px;
}

.card-desc {
  font-size: 13px;
  color: rgba(0, 51, 64, 0.85);
  line-height: 1.5;
  margin-bottom: 12px;
}

.card-action {
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  border-top: 1px solid var(--color-border-light);
  margin-top: auto;
}

.info-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 600;
  color: var(--color-petrol);
  border: 1px solid var(--color-border);
  background: rgba(0, 51, 64, 0.04);
  transition: all 0.15s ease;
}

.card-item:hover .info-badge {
  background: var(--color-petrol);
  color: var(--color-white);
  border-color: var(--color-petrol);
}

.info-badge i {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  border: 1px solid currentColor;
  font-style: italic;
  font-size: 9px;
  font-family: serif;
}

.card-juridisch {
  background: #f0f7f9;
  border: 1px solid #b8dbe5;
  cursor: pointer;
}

.card-juridisch:hover {
  border-color: var(--color-blue);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.juridisch-header {
  margin-bottom: 8px;
}

.juridisch-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--color-petrol);
  margin-top: 4px;
}

.juridisch-body {
  font-size: 13px;
  color: rgba(0, 51, 64, 0.85);
  line-height: 1.5;
  margin-bottom: 14px;
}

.juridisch-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(0, 51, 64, 0.1);
  flex-wrap: wrap;
}

.link-download {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-blue);
  text-decoration: none;
}

.link-download:hover {
  text-decoration: underline;
}

.highlight-g {
  font-size: 18px;
  font-weight: 900;
  color: var(--color-gold);
}

.conclusion-section {
  margin-top: 40px;
}

.card-conclusion {
  padding: 24px;
}

.conclusion-text {
  font-size: 14.5px;
  color: var(--color-petrol);
  line-height: 1.6;
  margin-bottom: 16px;
}

.conclusion-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--color-border-light);
  flex-wrap: wrap;
}

.conclusion-hint {
  font-size: 12px;
  color: rgba(0, 51, 64, 0.75);
}

.drawer-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 51, 64, 0.4);
  backdrop-filter: blur(3px);
  z-index: 100;
  justify-content: flex-end;
}

.drawer-overlay.open {
  display: flex;
}

.drawer-container {
  background: var(--color-white);
  width: 100%;
  max-width: 640px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  animation: slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.drawer-header {
  padding: 20px 24px;
  border-bottom: 1px solid var(--color-border-light);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.drawer-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-red);
  margin-bottom: 4px;
}

.drawer-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-petrol);
  line-height: 1.3;
}

.drawer-subtitle {
  font-size: 13px;
  color: rgba(0, 51, 64, 0.7);
  margin-top: 2px;
}

.drawer-close-btn {
  background: none;
  border: none;
  font-size: 28px;
  line-height: 1;
  color: rgba(0, 51, 64, 0.6);
  cursor: pointer;
  padding: 0 4px;
}

.drawer-close-btn:hover {
  color: var(--color-red);
}

.drawer-tabs {
  display: flex;
  border-bottom: 1px solid var(--color-border-light);
  background: #fbf8f3;
  overflow-x: auto;
}

.tab-btn {
  flex: 1;
  padding: 10px 14px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  color: rgba(0, 51, 64, 0.7);
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
}

.tab-btn:hover {
  color: var(--color-petrol);
}

.tab-btn.active {
  color: var(--color-red);
  border-bottom-color: var(--color-red);
  background: var(--color-white);
}

.drawer-body {
  padding: 24px;
  overflow-y: auto;
  flex: 1;
}

.drawer-footer {
  padding: 14px 24px;
  border-top: 1px solid var(--color-border-light);
  display: flex;
  justify-content: space-between;
  background: #faf8f5;
}

.lead-quote-box {
  background: #fdfaf5;
  border-left: 3px solid var(--color-red);
  padding: 14px 16px;
  border-radius: 0 8px 8px 0;
  margin-bottom: 20px;
  font-size: 14px;
  font-style: italic;
  color: var(--color-petrol);
}

.dialogue-box {
  background: rgba(0, 139, 184, 0.08);
  border: 1px solid rgba(0, 139, 184, 0.25);
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 24px;
}

.dialogue-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-blue);
  margin-bottom: 6px;
}

.dialogue-q {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-petrol);
}

.insight-card {
  border: 1px solid var(--color-border-light);
  border-radius: 8px;
  padding: 14px;
  margin-bottom: 12px;
  background: var(--color-white);
}

.insight-text {
  font-size: 13.5px;
  margin-bottom: 8px;
  color: var(--color-petrol);
}

.citation-tag {
  display: inline-block;
  font-size: 11px;
  color: var(--color-red);
  font-weight: 600;
}

.modal-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 51, 64, 0.4);
  backdrop-filter: blur(3px);
  z-index: 110;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-overlay.open {
  display: flex;
}

.modal-container {
  background: var(--color-white);
  width: 100%;
  max-width: 800px;
  max-height: 88vh;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.modal-header {
  padding: 20px 24px;
  border-bottom: 1px solid var(--color-border-light);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.modal-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-petrol);
}

.modal-subtitle {
  font-size: 12.5px;
  color: rgba(0, 51, 64, 0.7);
}

.modal-close-btn {
  background: none;
  border: none;
  font-size: 28px;
  line-height: 1;
  color: rgba(0, 51, 64, 0.6);
  cursor: pointer;
}

.modal-filters {
  padding: 14px 24px;
  background: #fbf8f3;
  border-bottom: 1px solid var(--color-border-light);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.search-input {
  width: 100%;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  font-family: inherit;
  font-size: 13px;
  outline: none;
}

.search-input:focus {
  border-color: var(--color-red);
}

.filter-chips {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.chip {
  padding: 4px 10px;
  border-radius: 9999px;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  font-family: inherit;
  font-size: 11px;
  font-weight: 600;
  color: rgba(0, 51, 64, 0.7);
  cursor: pointer;
}

.chip.active, .chip:hover {
  background: var(--color-petrol);
  color: var(--color-white);
  border-color: var(--color-petrol);
}

.modal-body {
  padding: 20px 24px;
  overflow-y: auto;
  flex: 1;
}

.source-item {
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border-light);
}

.source-item:last-child {
  border-bottom: none;
}

.source-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--color-petrol);
  margin-bottom: 2px;
}

.source-meta {
  font-size: 12px;
  color: rgba(0, 51, 64, 0.7);
  margin-bottom: 4px;
}

.source-annotation {
  font-size: 12.5px;
  color: rgba(0, 51, 64, 0.85);
  font-style: italic;
}

.modal-footer {
  padding: 12px 24px;
  border-top: 1px solid var(--color-border-light);
  display: flex;
  justify-content: flex-end;
  background: #faf8f5;
}

.colofon {
  border-top: 1px solid var(--color-border);
  padding: 32px 0;
  margin-top: 64px;
  font-size: 12px;
  color: rgba(0, 51, 64, 0.7);
  text-align: center;
}

.colofon-content {
  max-width: 800px;
  margin: 0 auto;
}

.colofon-brand {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-petrol);
  margin-bottom: 6px;
}

.colofon-text {
  margin-bottom: 8px;
}

@media print {
  .no-print {
    display: none !important;
  }
  body {
    background: #fff;
    color: #000;
    font-size: 12pt;
  }
  .main-content {
    max-width: 100%;
    padding: 0;
  }
  .card {
    border: 1px solid #ccc;
    break-inside: avoid;
    box-shadow: none;
  }
}
"""

with open(os.path.join(out_dir, 'assets', 'css', 'style.css'), 'w', encoding='utf-8') as f:
    f.write(style_css)

# 16. assets/js/script.js
script_js = """/**
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
"""

with open(os.path.join(out_dir, 'assets', 'js', 'script.js'), 'w', encoding='utf-8') as f:
    f.write(script_js)

# 17. .htaccess
htaccess = """# Beveiliging en MIME-types conform HR postulatieserver
Options -Indexes
ServerSignature Off

# UTF-8 als standaard tekenset
AddDefaultCharset UTF-8

# Correcte content-types
<IfModule mod_mime.c>
  AddType application/json .json
  AddType application/pdf .pdf
  AddType text/css .css
  AddType text/javascript .js
</IfModule>

# Caching van statische bestanden voor snelle laadtijd
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 week"
  ExpiresByType text/javascript "access plus 1 week"
  ExpiresByType application/javascript "access plus 1 week"
  ExpiresByType application/json "access plus 1 day"
  ExpiresByType application/pdf "access plus 1 month"
</IfModule>
"""

with open(os.path.join(out_dir, '.htaccess'), 'w', encoding='utf-8') as f:
    f.write(htaccess)

# 18. README.md
readme = """# Aanwezigheidsethos · Modulair PHP-pakket
**Handreiking Hogeschool Rotterdam**

Dit pakket is speciaal ingericht volgens de serverrichtlijnen van de systeembeheerder (MAMP / Debian Linux / Apache / PHP).

---

## 📁 Waar staat wat? (Handig voor latere aanpassingen)

In plaats van één reusachtig bestand, is alles netjes opgeknipt in logische deelbestanden. Je hoeft dus nooit meer dan een paar regels tegelijk te bewerken!

| Bestand | Wat kun je hier aanpassen? |
|---|---|
| `includes/intro-hero.php` | De welkomsttekst, 'Voer het gesprek' en het wicked problem kader. |
| `includes/masthead.php` | De bovenste balk met de doelgroep ('Voor adviseurs...') en actieknoppen. |
| `includes/wheel.php` | Het interactieve wiel (SVG, teksten, centrale cirkel). |
| `includes/step1.php` | **Stap 1: Feitelijke dimensie** (de 8 domeinen verdeeld over student & team). |
| `includes/step2.php` | **Stap 2: Normatieve dimensie** (sociaal, psychologisch, onderwijskundig). |
| `includes/step3.php` | **Stap 3: Handelingsperspectieven** (Spoor 1, 2, 3 en het HR-juridisch kader). |
| `includes/step4.php` | **Stap 4: Evaluatie** (De vier G's: Gedragen, Geloofwaardig, Gerechtvaardigd, Gedeeld). |
| `includes/conclusion.php` | Het afsluitende blok onderaan de pagina. |
| `data/dimensions.json` | Alle diepere teksten, citaten, bronverwijzingen en dialoogvragen. |
| `data/sources.json` | De complete lijst met wetenschappelijke publicaties en jurisprudentie. |
| `assets/css/style.css` | De vormgeving, kleuren (HR-rood, petrol, blauw, goud) en typografie. |
| `assets/js/script.js` | De interactie (wiel, uitschuifpaneel, bronnenfilter en zoekfunctie). |

---

## 🚀 Hoe plaats je dit op de HR-server?

1. Verbind met de HR VPN (`vpn-mobielewerkplek.hro.nl`).
2. Open je FTP/SFTP-programma (of Visual Studio Code).
3. Ga naar de map `httpdocs` op de server (`postulate.hro.nl`).
4. Maak een projectmap aan, bijvoorbeeld: `httpdocs/aanwezigheidsethos/`.
5. Upload de inhoud van deze map rechtstreeks naar die map.
6. Je handreiking is nu direct bereikbaar via de webbrowser!
"""

with open(os.path.join(out_dir, 'README.md'), 'w', encoding='utf-8') as f:
    f.write(readme)

print("Files successfully generated in php-distribution/")

# 19. Zip the distribution into public/
public_dir = os.path.join(root_dir, 'public')
os.makedirs(public_dir, exist_ok=True)
zip_target = os.path.join(public_dir, 'aanwezigheidsethos-php.zip')

with zipfile.ZipFile(zip_target, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk(out_dir):
        for file in files:
            file_path = os.path.join(root, file)
            arcname = os.path.relpath(file_path, out_dir)
            zipf.write(file_path, arcname)

print(f"Zip archive successfully created at: {zip_target}")
