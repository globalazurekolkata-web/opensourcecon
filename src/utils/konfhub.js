/**
 * Opens the KonfHub registration widget.
 * The widget button is hidden off-screen in index.html;
 * this helper triggers its click programmatically.
 */
export function openKonfHub(e) {
  if (e) e.preventDefault();
  const kBtn = document.querySelector(
    '#konfhub-widget-trigger button, #konfhub-widget-trigger a'
  );
  if (kBtn) kBtn.click();
}
