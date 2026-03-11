/**
 * Componentes: renderizado de tarjetas de propuestas, acordeón y filtro.
 */

const CHEVRON_SVG = '<svg class="proposal-card-chevron" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>';

/**
 * Crea el DOM de una tarjeta de propuesta (acordeón).
 * @param {Object} proposal - Objeto con id, title, problem, objective, actions, expectedResult
 * @returns {HTMLElement}
 */
function createProposalCard(proposal) {
  const card = document.createElement("article");
  card.className = "proposal-card";
  card.setAttribute("role", "listitem");
  card.setAttribute("data-proposal-id", proposal.id);
  card.setAttribute("aria-expanded", "false");

  const bodyId = `proposal-body-${proposal.id}`;

  card.innerHTML = `
    <button type="button" class="proposal-card-header" aria-expanded="false" aria-controls="${bodyId}" id="proposal-toggle-${proposal.id}">
      <span class="proposal-card-number">${proposal.id}</span>
      <span class="proposal-card-title">${escapeHtml(proposal.title)}</span>
      ${CHEVRON_SVG}
    </button>
    <div id="${bodyId}" class="proposal-card-body" role="region" aria-labelledby="proposal-toggle-${proposal.id}">
      <div class="proposal-card-content">
        <h4>Problema identificado</h4>
        <p>${escapeHtml(proposal.problem)}</p>
        <h4>Objetivo</h4>
        <p>${escapeHtml(proposal.objective)}</p>
        <h4>Acciones</h4>
        <p>${escapeHtml(proposal.actions)}</p>
        <h4>Resultado esperado</h4>
        <p>${escapeHtml(proposal.expectedResult)}</p>
      </div>
    </div>
  `;

  const header = card.querySelector(".proposal-card-header");
  header.addEventListener("click", function () {
    const expanded = card.getAttribute("aria-expanded") === "true";
    card.setAttribute("aria-expanded", !expanded);
    header.setAttribute("aria-expanded", !expanded);
  });

  return card;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Renderiza todas las propuestas en el contenedor dado.
 * @param {HTMLElement} container - Elemento con id proposals-container
 * @param {Array} list - Array de propuestas (puede estar filtrado)
 */
function renderProposals(container, list) {
  if (!container) return;
  container.innerHTML = "";
  list.forEach(function (proposal) {
    container.appendChild(createProposalCard(proposal));
  });
}

/**
 * Filtra las propuestas por rango de id.
 * @param {string} range - "all" | "1-5" | "6-10" | "11-15"
 * @returns {Array}
 */
function getProposalsByRange(range) {
  if (range === "all") return proposals.slice();
  if (range === "1-5") return proposals.filter(function (p) { return p.id >= 1 && p.id <= 5; });
  if (range === "6-10") return proposals.filter(function (p) { return p.id >= 6 && p.id <= 10; });
  if (range === "11-15") return proposals.filter(function (p) { return p.id >= 11 && p.id <= 15; });
  if (range === "11-16") return proposals.filter(function (p) { return p.id >= 11 && p.id <= 16; });
  if (range === "11-17") return proposals.filter(function (p) { return p.id >= 11 && p.id <= 17; });
  return proposals.slice();
}

/**
 * Aplica el filtro actual y re-renderiza las tarjetas.
 * Actualiza el estado activo de los botones de filtro.
 * @param {string} range
 * @param {HTMLElement} container
 * @param {NodeList} filterButtons
 */
function applyFilter(range, container, filterButtons) {
  const list = getProposalsByRange(range);
  renderProposals(container, list);

  if (filterButtons) {
    filterButtons.forEach(function (btn) {
      const isActive = btn.getAttribute("data-range") === range;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }
}
