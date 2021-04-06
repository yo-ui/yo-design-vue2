'use strict';
import hljs from 'highlight.js';

var vueHighlightJS = {};
vueHighlightJS.install = function install(Vue) {
  Vue.directive('highlightjs', {
    deep: true,
    bind(el, binding) {
      // on first bind, highlight all targets
      var targets = el.querySelectorAll('code');
      var target;
      var i;

      for (i = 0; i < targets.length; i += 1) {
        target = targets[i];

        if (typeof binding.value === 'string') {
          // if a value is directly assigned to the directive, use this
          // instead of the element content.
          target.textContent = binding.value;
        }

        hljs.highlightBlock(target);
      }
    },
    componentUpdated(el, binding) {
      // after an update, re-fill the content and then highlight
      var targets = el.querySelectorAll('code');
      var target;
      var i;

      for (i = 0; i < targets.length; i += 1) {
        target = targets[i];
        if (typeof binding.value === 'string') {
          target.textContent = binding.value;
        }
        hljs.highlightBlock(target);
      }
    }
  });
};

// module.exports = vueHighlightJS;
export default vueHighlightJS