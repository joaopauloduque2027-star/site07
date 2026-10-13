document.addEventListener('DOMContentLoaded', () => {
  // Atualiza ano no rodapé
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Compartilhamento
  const shareBtn = document.getElementById('share-btn');
  const shareWa = document.getElementById('share-wa');
  const shareFb = document.getElementById('share-fb');
  const shareTw = document.getElementById('share-tw');
  const shareMail = document.getElementById('share-mail');

  const pageUrl = window.location.href;
  const title = document.title;
  const text = 'Confira este site: ' + title + '\n';

  // Web Share API se disponível
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({ title, text, url: pageUrl });
        } catch (err) {
          // usuário cancelou ou erro
          console.log('share error', err);
        }
      } else {
        // fallback: copia link
        try {
          await navigator.clipboard.writeText(pageUrl);
          alert('Link copiado para a área de transferência!');
        } catch (err) {
          prompt('Copie este link:', pageUrl);
        }
      }
    });
  }

  // Links de compartilhamento diretos
  if (shareWa) {
    shareWa.setAttribute('href', 'https://api.whatsapp.com/send?text=' + encodeURIComponent(text + pageUrl));
    shareWa.setAttribute('target', '_blank');
  }
  if (shareFb) {
    shareFb.setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(pageUrl));
    shareFb.setAttribute('target', '_blank');
  }
  if (shareTw) {
    shareTw.setAttribute('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(pageUrl));
    shareTw.setAttribute('target', '_blank');
  }
  if (shareMail) {
    shareMail.setAttribute('href', 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(text + pageUrl));
  }
});
