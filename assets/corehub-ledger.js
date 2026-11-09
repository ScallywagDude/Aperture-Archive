/* Source previews can expire; preserve a useful link to the original message. */
document.querySelectorAll('.corehub-media-entry img').forEach(img => {
  const showFallback = () => { img.classList.add('corehub-preview-missing'); img.alt = ''; };
  img.addEventListener('error', showFallback, { once: true });
  if (img.complete && img.naturalWidth === 0) showFallback();
});
