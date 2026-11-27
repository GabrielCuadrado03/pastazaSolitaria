function feedback(button: HTMLElement, message: string) {
  const region = button.closest('dialog, article, section')?.querySelector<HTMLElement>('.feedback');
  if (region) region.textContent = message;
}

document.addEventListener('click', async (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const button = target.closest<HTMLButtonElement>('button');
  if (!button) return;
  if (button.hasAttribute('data-campaign-whatsapp')) {
    const url = new URL(location.href); url.hash = ''; url.search = '';
    location.href = 'https://wa.me/?text=' + encodeURIComponent('❤️ Unidos por la Esperanza · Pastaza Solidaria\nPequeños gestos, grandes esperanzas. Conoce cómo ayudar a las familias afectadas y comparte esta iniciativa.\n' + url.href);
  } else if (button.hasAttribute('data-copy-link')) {
    const url = new URL(location.href); url.hash = ''; url.search = '';
    try { await navigator.clipboard.writeText(url.href); feedback(button, 'Enlace copiado.'); }
    catch { feedback(button, 'Copia el enlace desde la barra de direcciones.'); }
  } else if (button.dataset.dialog) {
    const dialog = document.getElementById(button.dataset.dialog);
    if (dialog instanceof HTMLDialogElement) dialog.showModal();
  } else if (button.hasAttribute('data-close')) {
    button.closest('dialog')?.close();
  } else if (button.dataset.copy) {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      feedback(button, button.dataset.copyFeedback || 'Número de cuenta copiado.');
    } catch {
      feedback(button, 'No se pudo copiar automáticamente. Selecciona el número y cópialo manualmente.');
    }
  } else if (button.hasAttribute('data-share')) {
    const url = new URL(location.href);
    url.hash = button.dataset.share || '';
    const title = 'Unidos por la Esperanza';
    if (navigator.share) {
      try {
        await navigator.share({ title, text: 'Pequeños gestos, grandes esperanzas.', url: url.href });
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return;
      }
    }
    location.href = 'https://wa.me/?text=' + encodeURIComponent(title + ' · ' + url.href);
  }
});
document.querySelectorAll<HTMLDialogElement>('dialog').forEach(dialog => {
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
});
