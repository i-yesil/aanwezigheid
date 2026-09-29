<footer class="colofon no-print">
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
