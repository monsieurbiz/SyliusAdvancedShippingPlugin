// Reactivate native collection JS management after calculator selection
const initReloadCollection = () => {
  const config = document.querySelector('.ui.segment.configuration');
  if (config) {
    const observer = new MutationObserver(mutationList =>  
      mutationList.filter(m => m.type === 'childList').forEach(m => {  
        $('[data-form-type="collection"]').CollectionForm();
      })
    );
    observer.observe(config,{childList: true, subtree: true});  
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (window.jQuery) {
    initReloadCollection();
  }
});
