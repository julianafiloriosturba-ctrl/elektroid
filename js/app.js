/* ============================================
   APP — Elektroid
   Renderiza cards, delega clique pro loja.js
   ============================================ */

function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function calcularParcela(produto) {
  if (produto.parcela_valor) return produto.parcela_valor;
  return produto.preco_por / 10;
}

function slugify(s) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
}

function badgeHTML(badge) {
  if (!badge) return '';
  const map = {
    'promocao':      'badge-promocao',
    'prevenda':      'badge-prevenda',
    'producaopropria':'badge-producao',
  };
  const cls = map[slugify(badge)] || 'badge-default';
  return `<span class="product-badge ${cls}">${badge}</span>`;
}

function iconePlaceholder() {
  return `
    <div class="product-placeholder">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <path d="M21 15l-5-5L5 21"/>
      </svg>
      <span>Foto em breve</span>
    </div>
  `;
}

// índice global de produtos para o loja.js acessar pelo ID do card
const PRODUTO_MAP = {};

function criarCardProduto(produto) {
  const id = 'p-' + slugify(produto.nome);
  PRODUTO_MAP[id] = produto;

  const temDesconto = produto.preco_de && produto.preco_de > produto.preco_por;
  const precoHTML = produto.preco_texto
    ? `<span class="price-new consulta">Consultar</span>`
    : `
      ${temDesconto ? `<span class="price-old">R$ ${formatarPreco(produto.preco_de)}</span>` : ''}
      <span class="price-new">R$ ${formatarPreco(produto.preco_por)}</span>
      ${!produto.sem_parcelamento ? `<span class="price-installment">12x de R$ ${formatarPreco(calcularParcela(produto))} no cartão sem juros</span>` : ''}
    `;

  return `
    <div class="product-card" id="${id}" onclick="abrirProduto(PRODUTO_MAP['${id}'])" style="cursor:pointer">
      <div class="product-media">
        ${badgeHTML(produto.badge)}
        <div class="product-placeholder-wrap">${iconePlaceholder()}</div>
        <img
          src="${produto.imagem}"
          alt="${produto.nome}"
          loading="lazy"
          style="display:none"
          onload="this.style.display='block'; this.previousElementSibling.style.display='none';"
          onerror="this.remove();"
        >
      </div>
      <div class="product-body">
        <span class="product-cat">Elektroid</span>
        <h3 class="product-name">${produto.nome}</h3>
        <div class="product-specs">
          ${produto.motor ? `<span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>
            ${produto.motor}
          </span>` : ''}
          ${produto.autonomia ? `<span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
            ${produto.autonomia}
          </span>` : ''}
        </div>
        <div class="product-price-row">
          <div class="price-block">${precoHTML}</div>
        </div>
        <div class="product-cta">
          <div class="btn btn-primary btn-full" style="pointer-events:none">Ver detalhes</div>
        </div>
      </div>
    </div>
  `;
}

function renderizarGrid(idGrid, lista) {
  const el = document.getElementById(idGrid);
  if (!el) return;
  el.innerHTML = lista.map(criarCardProduto).join('');
}

function criarCardDepoimento(d) {
  const star = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>`;
  return `
    <div class="testimonial-card">
      <div class="stars">${star.repeat(5)}</div>
      <p>"${d.texto}"</p>
      <div class="testimonial-author">— ${d.autor}</div>
    </div>
  `;
}

function renderizarDepoimentos() {
  const track = document.getElementById('testimonial-track');
  if (!track) return;
  track.innerHTML = DEPOIMENTOS.map(criarCardDepoimento).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarGrid('grid-scooters', PRODUTOS.scooters);
  renderizarGrid('grid-triciclos', PRODUTOS.triciclos);
  renderizarGrid('grid-baterias', PRODUTOS.baterias);
  renderizarGrid('grid-pecas-acessorios', PRODUTOS.pecasAcessorios);
  renderizarDepoimentos();

  // filtro de preço (scooters)
  const chips = document.querySelectorAll('.filter-bar .filter-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const texto = chip.textContent.trim();
      let filtrado = PRODUTOS.scooters;
      if (texto === 'Até R$ 5.000') filtrado = PRODUTOS.scooters.filter(p => p.preco_por <= 5000);
      else if (texto === 'Acima de R$ 5.000') filtrado = PRODUTOS.scooters.filter(p => p.preco_por > 5000);
      else if (texto === 'Mais vendidas') filtrado = PRODUTOS.scooters.filter(p => p.badge === 'Promoção');
      renderizarGrid('grid-scooters', filtrado);
    });
  });
});
