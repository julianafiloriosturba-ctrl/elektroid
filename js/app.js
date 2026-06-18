/* ============================================
   APP — Elektroid
   Renderiza produtos e depoimentos a partir de produtos.js
   ============================================ */

const WHATSAPP_NUMERO = "5585999008436";

function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function calcularParcela(produto) {
  // Se o produto já define um valor de parcela manualmente, usa esse.
  if (produto.parcela_valor) return produto.parcela_valor;
  // Senão, calcula automaticamente dividindo o preço pelo número de vezes.
  const vezes = produto.parcelas || 12;
  return produto.preco_por / vezes;
}

function linkWhatsApp(nomeProduto) {
  const msg = `Oi! Tenho interesse no ${nomeProduto}, vi no site da Elektroid.`;
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(msg)}`;
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

function criarCardProduto(produto) {
  const temDesconto = produto.preco_de && produto.preco_de > produto.preco_por;

  return `
    <div class="product-card">
      <div class="product-media">
        ${produto.badge ? `<span class="product-badge">${produto.badge}</span>` : ''}
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
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>
            ${produto.potencia}
          </span>
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
            ${produto.autonomia}
          </span>
        </div>
        <div class="product-price-row">
          <div class="price-block">
            ${temDesconto ? `<span class="price-old">R$ ${formatarPreco(produto.preco_de)}</span>` : ''}
            <span class="price-new">R$ ${formatarPreco(produto.preco_por)}</span>
            ${produto.sem_parcelamento ? '' : `<span class="price-installment">ou ${produto.parcelas || 12}x de R$ ${formatarPreco(calcularParcela(produto))}</span>`}
          </div>
        </div>
        <a class="btn btn-primary btn-full product-cta" href="${linkWhatsApp(produto.nome)}" target="_blank" rel="noopener">
          Comprar no WhatsApp
        </a>
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
  return `
    <div class="testimonial-card">
      <div class="stars">
        ${'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>'.repeat(5)}
      </div>
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
  renderizarGrid('grid-acessorios', PRODUTOS.acessorios);
  renderizarGrid('grid-eletronicos', PRODUTOS.eletronicos);
  renderizarDepoimentos();

  // filtro de preço (scooters)
  const chips = document.querySelectorAll('.filter-bar .filter-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const texto = chip.textContent.trim();
      let filtrado = PRODUTOS.scooters;

      if (texto === 'Até R$ 5.000') {
        filtrado = PRODUTOS.scooters.filter(p => p.preco_por <= 5000);
      } else if (texto === 'Acima de R$ 5.000') {
        filtrado = PRODUTOS.scooters.filter(p => p.preco_por > 5000);
      } else if (texto === 'Mais vendidas') {
        filtrado = [...PRODUTOS.scooters].filter(p => p.badge === 'Promoção');
      }

      renderizarGrid('grid-scooters', filtrado);
    });
  });
});
