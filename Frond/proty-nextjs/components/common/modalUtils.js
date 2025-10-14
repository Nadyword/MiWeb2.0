// Función helper para cerrar modales de Bootstrap de forma segura
export const closeModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  // Intentar cerrar con Bootstrap si está disponible
  if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
    const modalInstance = bootstrap.Modal.getInstance(modal);
    if (modalInstance) {
      modalInstance.hide();
      return;
    }
  }

  // Fallback: cerrar manualmente
  modal.classList.remove('show');
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  modal.removeAttribute('aria-modal');
  
  // Remover clases del body
  document.body.classList.remove('modal-open');
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
  
  // Remover el backdrop si existe
  const backdrop = document.querySelector('.modal-backdrop');
  if (backdrop) {
    backdrop.remove();
  }
  
  // Remover el atributo data-bs-toggle si existe
  const trigger = document.querySelector(`[data-bs-target="#${modalId}"]`);
  if (trigger) {
    trigger.setAttribute('aria-expanded', 'false');
  }
};

export default closeModal;


