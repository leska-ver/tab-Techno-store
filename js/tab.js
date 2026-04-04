
document.addEventListener('DOMContentLoaded', function () {
  
  function setCustomTabs () {
    const customTabName = "js-custom-tab";
    const tabs = Array.from(document.querySelectorAll(`.${customTabName}[data-path]`));
    const content = Array.from(document.querySelectorAll(`.${customTabName}[data-target]`));
    
    content.forEach(function (el, i) {
      if (i !== 0) {
        el.classList.add('is-hidden');
      }
    });
    
    tabs.forEach(function (el) {
      el.addEventListener('click', function () {
        const path = this.dataset.path;
        
        content.forEach(function (el) {
          if (path !== el.dataset.target) {
            el.classList.add('is-hidden');
          } else {
            el.classList.remove('is-hidden');
          }
        });
      });
    });
  }
  
  setCustomTabs();
});