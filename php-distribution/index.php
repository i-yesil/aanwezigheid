<?php
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
