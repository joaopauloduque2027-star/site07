document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const shareBtn = document.getElementById('share-btn');
  const shareWa = document.getElementById('share-wa');
  const shareFb = document.getElementById('share-fb');
  const shareTw = document.getElementById('share-tw');
  const shareMail = document.getElementById('share-mail');

  const pageUrl = window.location.href;
  const title = document.title;
  const text = 'Confira este site: ' + title + '\n';

  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({ title, text, url: pageUrl });
        } catch (error) {
          console.log('Compartilhamento cancelado', error);
        }
      } else {
        try {
          await navigator.clipboard.writeText(pageUrl);
          alert('Link copiado para a área de transferência!');
        } catch (error) {
          prompt('Copie este link:', pageUrl);
        }
      }
    });
  }

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
