/* ============================================
   LOJA — Elektroid
   Fluxo: produto → carrinho → checkout → WhatsApp
   ============================================ */

const WHATSAPP_NUMERO = "5585999008436";
const FRETE_GRATIS = ["fortaleza", "aquiraz", "eusébio", "eusebio"];

let carrinho = [];
let produtoAtual = null;

/* ---------- UTILS ---------- */
function fmt(v) {
  return v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function slugify(s) {
  return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/g, "");
}

/* ---------- MODAL DE PRODUTO ---------- */
function abrirProduto(produto) {
  produtoAtual = produto;
  const corSel = produto.nomes_cores[0] || null;

  const especsHTML = [
    produto.motor     ? `<div class="spec-row"><span>Motor</span><span>${produto.motor}</span></div>` : '',
    produto.autonomia ? `<div class="spec-row"><span>Autonomia</span><span>${produto.autonomia}</span></div>` : '',
    produto.velocidade? `<div class="spec-row"><span>Vel. máxima</span><span>${produto.velocidade}</span></div>` : '',
    produto.bateria   ? `<div class="spec-row"><span>Bateria</span><span>${produto.bateria}</span></div>` : '',
    produto.freio     ? `<div class="spec-row"><span>Freio</span><span>${produto.freio}</span></div>` : '',
  ].filter(Boolean).join('');

  const coresHTML = produto.cores.length ? `
    <div class="modal-cores">
      <div class="modal-cores-label">Cor: <strong id="cor-label">${produto.nomes_cores[0]}</strong></div>
      <div class="cores-list">
        ${produto.cores.map((c, i) => `
          <button class="cor-btn ${i === 0 ? 'ativa' : ''}"
            style="background:${c}"
            title="${produto.nomes_cores[i]}"
            onclick="selecionarCor(this, '${produto.nomes_cores[i]}')">
          </button>
        `).join('')}
      </div>
    </div>` : '';

  const precoHTML = produto.preco_texto ? `
    <div class="modal-preco-consulta">Consultar preço via WhatsApp</div>
  ` : `
    ${produto.preco_de ? `<div class="modal-preco-de">R$ ${fmt(produto.preco_de)}</div>` : ''}
    <div class="modal-preco-por">R$ ${fmt(produto.preco_por)}</div>
    <div class="modal-parcela">12x de R$ ${fmt(produto.preco_por / 10)} no cartão sem juros</div>
  `;

  const botaoHTML = produto.preco_texto ? `
    <a class="btn btn-primary btn-full" href="https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent('Oi! Tenho interesse no ' + produto.nome + ' (pré-venda). Quando chega?')}" target="_blank">
      Consultar no WhatsApp
    </a>
  ` : `
    <button class="btn btn-primary btn-full" onclick="adicionarAoCarrinho()">
      Adicionar ao carrinho
    </button>
  `;

  document.getElementById('modal-produto').innerHTML = `
    <div class="modal-overlay" onclick="fecharModal('modal-produto')"></div>
    <div class="modal-box">
      <button class="modal-close" onclick="fecharModal('modal-produto')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <div class="modal-inner">
        <div class="modal-img">
          <img src="${produto.imagem}" alt="${produto.nome}"
            onerror="this.closest('.modal-img').innerHTML='<div class=modal-img-placeholder>FOTO EM BREVE</div>'"
          >
          ${produto.badge ? `<span class="product-badge badge-${slugify(produto.badge)}">${produto.badge}</span>` : ''}
        </div>
        <div class="modal-info">
          <div class="product-cat">Elektroid · ${produto.modelo}</div>
          <h2 class="modal-nome">${produto.nome}</h2>
          <div class="modal-specs">${especsHTML}</div>
          ${coresHTML}
          <div class="modal-preco-block">${precoHTML}</div>
          ${botaoHTML}
        </div>
      </div>
    </div>
  `;
  document.getElementById('modal-produto').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function selecionarCor(btn, nome) {
  document.querySelectorAll('.cor-btn').forEach(b => b.classList.remove('ativa'));
  btn.classList.add('ativa');
  document.getElementById('cor-label').textContent = nome;
}

function corSelecionada() {
  const ativa = document.querySelector('.cor-btn.ativa');
  if (!ativa) return null;
  return ativa.title;
}

function fecharModal(id) {
  document.getElementById(id).style.display = 'none';
  document.body.style.overflow = '';
}

/* ---------- CARRINHO ---------- */
function adicionarAoCarrinho() {
  if (!produtoAtual) return;
  const cor = corSelecionada();
  const item = {
    nome: produtoAtual.nome,
    preco: produtoAtual.preco_por,
    imagem: produtoAtual.imagem,
    cor: cor,
    qty: 1
  };
  const idx = carrinho.findIndex(i => i.nome === item.nome && i.cor === item.cor);
  if (idx >= 0) carrinho[idx].qty++;
  else carrinho.push(item);
  atualizarBadgeCarrinho();
  fecharModal('modal-produto');
  abrirCarrinho();
}

function atualizarBadgeCarrinho() {
  const total = carrinho.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('carrinho-badge');
  if (badge) {
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  }
}

function removerItem(idx) {
  carrinho.splice(idx, 1);
  atualizarBadgeCarrinho();
  abrirCarrinho();
}

function mudarQty(idx, delta) {
  carrinho[idx].qty += delta;
  if (carrinho[idx].qty <= 0) carrinho.splice(idx, 1);
  atualizarBadgeCarrinho();
  abrirCarrinho();
}

function totalCarrinho() {
  return carrinho.reduce((s, i) => s + i.preco * i.qty, 0);
}

function abrirCarrinho() {
  const itensHTML = carrinho.length === 0 ? `
    <div class="carrinho-vazio">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      <p>Seu carrinho está vazio</p>
    </div>
  ` : carrinho.map((item, i) => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.imagem}" alt="${item.nome}" onerror="this.style.display='none'">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-nome">${item.nome}</div>
        ${item.cor ? `<div class="cart-item-cor">Cor: ${item.cor}</div>` : ''}
        <div class="cart-item-preco">R$ ${fmt(item.preco)}</div>
        <div class="cart-qty">
          <button onclick="mudarQty(${i}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="mudarQty(${i}, +1)">+</button>
          <button class="cart-remove" onclick="removerItem(${i})">Remover</button>
        </div>
      </div>
    </div>
  `).join('');

  const total = totalCarrinho();

  document.getElementById('modal-carrinho').innerHTML = `
    <div class="modal-overlay" onclick="fecharModal('modal-carrinho')"></div>
    <div class="modal-box modal-carrinho-box">
      <button class="modal-close" onclick="fecharModal('modal-carrinho')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <h2 class="modal-titulo">Seu carrinho</h2>
      <div class="cart-items">${itensHTML}</div>
      ${carrinho.length > 0 ? `
        <div class="cart-footer">
          <div class="cart-total">
            <span>Total</span>
            <span>R$ ${fmt(total)}</span>
          </div>
          <div class="cart-parcela">ou 12x de R$ ${fmt(total / 10)} no cartão sem juros</div>
          <button class="btn btn-primary btn-full" style="margin-top:16px" onclick="fecharModal('modal-carrinho'); abrirCheckout()">
            Finalizar pedido
          </button>
        </div>
      ` : ''}
    </div>
  `;
  document.getElementById('modal-carrinho').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

/* ---------- CHECKOUT ---------- */
function abrirCheckout() {
  document.getElementById('modal-checkout').innerHTML = `
    <div class="modal-overlay" onclick="fecharModal('modal-checkout')"></div>
    <div class="modal-box modal-checkout-box">
      <button class="modal-close" onclick="fecharModal('modal-checkout')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <h2 class="modal-titulo">Finalizar pedido</h2>

      <div class="checkout-section">
        <div class="checkout-label">📦 Resumo</div>
        ${carrinho.map(i => `<div class="checkout-resumo-item"><span>${i.nome}${i.cor ? ' · '+i.cor : ''} x${i.qty}</span><span>R$ ${fmt(i.preco * i.qty)}</span></div>`).join('')}
        <div class="checkout-total-row"><span>Total</span><span>R$ ${fmt(totalCarrinho())}</span></div>
      </div>

      <div class="checkout-section">
        <div class="checkout-label">💳 Forma de pagamento</div>
        <div class="pagamento-grid">
          <label class="pagamento-opt"><input type="radio" name="pgto" value="Pix" checked> <span>Pix</span></label>
          <label class="pagamento-opt"><input type="radio" name="pgto" value="Cartão de débito"> <span>Débito</span></label>
          <label class="pagamento-opt"><input type="radio" name="pgto" value="Cartão de crédito (12x sem juros)"> <span>Crédito 12x</span></label>
          <label class="pagamento-opt"><input type="radio" name="pgto" value="Dinheiro"> <span>Dinheiro</span></label>
        </div>
      </div>

      <div class="checkout-section">
        <div class="checkout-label">🚚 Entrega</div>
        <div class="frete-info">✅ Frete grátis em Fortaleza, Aquiraz e Eusébio<br>📍 Demais cidades: cotação via WhatsApp após o pedido</div>
        <div class="checkout-campos">
          <input class="checkout-input" id="ck-nome" type="text" placeholder="Seu nome completo *">
          <input class="checkout-input" id="ck-tel" type="tel" placeholder="Telefone / WhatsApp *">
          <input class="checkout-input" id="ck-cidade" type="text" placeholder="Cidade *">
          <input class="checkout-input" id="ck-bairro" type="text" placeholder="Bairro">
          <input class="checkout-input" id="ck-rua" type="text" placeholder="Rua e número">
          <input class="checkout-input" id="ck-obs" type="text" placeholder="Observação (opcional)">
        </div>
      </div>

      <button class="btn btn-primary btn-full" style="margin-top:8px" onclick="finalizarPedido()">
        Enviar pedido no WhatsApp
      </button>
    </div>
  `;
  document.getElementById('modal-checkout').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function finalizarPedido() {
  const nome    = document.getElementById('ck-nome').value.trim();
  const tel     = document.getElementById('ck-tel').value.trim();
  const cidade  = document.getElementById('ck-cidade').value.trim();
  const bairro  = document.getElementById('ck-bairro').value.trim();
  const rua     = document.getElementById('ck-rua').value.trim();
  const obs     = document.getElementById('ck-obs').value.trim();
  const pgto    = document.querySelector('input[name="pgto"]:checked')?.value || 'Não informado';

  if (!nome || !tel || !cidade) {
    alert('Preencha nome, telefone e cidade para continuar.');
    return;
  }

  const cidadeSlug = slugify(cidade);
  const freteGratis = FRETE_GRATIS.some(c => cidadeSlug.includes(c));
  const freteTexto = freteGratis ? 'Frete GRÁTIS ✅' : 'Frete a cotar (aguardar confirmação)';

  const itensTexto = carrinho.map(i =>
    `• ${i.nome}${i.cor ? ' (' + i.cor + ')' : ''} x${i.qty} — R$ ${fmt(i.preco * i.qty)}`
  ).join('\n');

  const enderecoTexto = [cidade, bairro, rua].filter(Boolean).join(', ');

  const msg = [
    '🛵 *Novo pedido — Elektroid*',
    '',
    '*Itens:*',
    itensTexto,
    '',
    `*Total:* R$ ${fmt(totalCarrinho())}`,
    `*Pagamento:* ${pgto}`,
    '',
    '*Entrega:*',
    `Nome: ${nome}`,
    `Telefone: ${tel}`,
    `Endereço: ${enderecoTexto}`,
    `Frete: ${freteTexto}`,
    obs ? `Obs: ${obs}` : '',
  ].filter(s => s !== undefined).join('\n');

  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
  fecharModal('modal-checkout');
  carrinho = [];
  atualizarBadgeCarrinho();
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  atualizarBadgeCarrinho();
  document.getElementById('btn-carrinho').addEventListener('click', () => {
    if (carrinho.length === 0) {
      abrirCarrinho();
    } else {
      abrirCarrinho();
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      ['modal-produto','modal-carrinho','modal-checkout'].forEach(fecharModal);
    }
  });
});
