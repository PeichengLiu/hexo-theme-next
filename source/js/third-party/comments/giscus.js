/* global NexT, CONFIG, giscus */

document.addEventListener('page:loaded', () => {
  if (!CONFIG.page.comments) return;

  NexT.utils.loadComments('.giscus-container')
    .then(() => NexT.utils.getScript('https://giscus.app/client.js', {
      attributes: {
        async                   : true,
        crossOrigin             : 'anonymous',
        'data-repo'             : CONFIG.giscus.repo,
        'data-repo-id'          : CONFIG.giscus.repo_id,
        'data-category'         : CONFIG.giscus.category,
        'data-category-id'      : CONFIG.giscus.category_id,
        'data-mapping'          : 'specific',
        'data-term'             : CONFIG.page.title,
        'data-strict'           : '1',
        'data-reactions-enabled': CONFIG.giscus.reactions_enabled,
        'data-emit-metadata'    : '0',
        'data-input-position'   : CONFIG.giscus.input_position || 'bottom',
        'data-theme'            : CONFIG.giscus.theme || 'light',
        'data-lang'             : CONFIG.giscus.language || 'en',
        'data-loading'          : CONFIG.giscus.lazy_loading || 'no'
      },
      parentNode: document.querySelector('.giscus-container')
    }));
});
