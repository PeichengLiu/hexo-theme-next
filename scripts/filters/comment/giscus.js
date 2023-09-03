/* global hexo */

'use strict';

const path = require('path');

// Add comment
hexo.extend.filter.register('theme_inject', injects => {
  const config = hexo.theme.config.giscus;
  if (!config.enable) return;

  if (!config.repo || !config.repo_id || !config.category || !config.category_id) {
    hexo.log.warn('giscus.repo & giscus.repo_id & giscus.category & giscus.category_id can\'t be null.');
    return;
  }
  
  injects.comment.raw('giscus', '<div class="comments giscus-container"></div>', {}, { cache: true });

  injects.bodyEnd.file('giscus', path.join(hexo.theme_dir, 'layout/_third-party/comments/giscus.njk'));

});
