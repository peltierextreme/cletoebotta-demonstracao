const articleData = [
  {
    title: "Seguro Prestamista e sua Abusiva Imposição pelas Instituições Financeiras",
    date: "15 de julho de 2020",
    author: "Lineu Botta de Assis Filho",
    summary: "Analisa a contratação do seguro prestamista em relações de consumo, incluindo a anuência do consumidor e a escolha da seguradora.",
    url: "https://www.cletoebotta.com.br/post/seguro-prestamista-e-sua-abusiva-imposi%C3%A7%C3%A3o-pelas-institui%C3%A7%C3%B5es-financeiras"
  },
  {
    title: "A Comunicabilidade e a Legalidade da Penhora sobre os Valores Investidos na Previdência Privada",
    date: "8 de maio de 2020 · atualizado em 15 de julho de 2020",
    author: "Lineu Botta de Assis Filho",
    summary: "Aborda a discussão sobre partilha e penhora de valores investidos em planos VGBL e PGBL, segundo o conteúdo publicado à época.",
    url: "https://www.cletoebotta.com.br/post/comunicabilidade-e-legalidade-da-penhora-dos-valores-investidos-em-planos-de-previd%C3%AAncia-privada"
  },
  {
    title: "A Extinção dos Contratos na Pandemia do Novo Coronavírus",
    date: "2 de abril de 2020 · atualizado em 15 de julho de 2020",
    author: "Lineu Botta de Assis Filho",
    summary: "Reúne considerações sobre extinção contratual e os efeitos da pandemia nas relações privadas e nos contratos de locação.",
    url: "https://www.cletoebotta.com.br/post/a-extin%C3%A7%C3%A3o-dos-contratos-na-pandemia-do-novo-coronav%C3%ADrus"
  },
  {
    title: "Comentários à Medida Provisória N. 931, de 21 de março de 2020",
    date: "1º de abril de 2020",
    author: "Henrique Rossetti Cleto",
    summary: "Resume as medidas societárias emergenciais descritas na publicação de 2020, como prazos de assembleias e participação a distância.",
    url: "https://www.cletoebotta.com.br/post/coment%C3%A1rios-%C3%A0-medidaprovis%C3%B3ria-n-931"
  }
];

const areaData = [
  {
    slug: "consultivo-contencioso-civel",
    title: "Consultivo e Contencioso Cível",
    short: "Atuação estratégica em demandas cíveis de maior complexidade.",
    description: "A área é apresentada como um dos pilares do escritório. O conteúdo institucional destaca representação eficiente e completa nas esferas extrajudicial e judicial, com experiência em demandas de alta complexidade.",
    detail: "O escritório informa atuar de forma consultiva e contenciosa em questões cíveis estratégicas, tanto fora do Judiciário quanto em processos judiciais.",
    focus: "Atuação consultiva · Atuação contenciosa · Âmbitos judicial e extrajudicial"
  },
  {
    slug: "direito-empresarial-tributario",
    title: "Direito Empresarial e Tributário",
    short: "Assessoria jurídica para questões societárias e aspectos tributários das operações.",
    description: "O conteúdo atual descreve uma assessoria jurídica empresarial abrangente, que contempla questões societárias e aspectos tributários da operação dos clientes.",
    detail: "O escritório destaca um time técnico e a busca por soluções completas para necessidades empresariais. O site não detalha uma lista individual de serviços; o escopo deve ser confirmado antes da publicação definitiva.",
    focus: "Questões societárias · Aspectos tributários · Assessoria empresarial"
  },
  {
    slug: "direito-medico",
    title: "Direito Médico",
    short: "Assessoramento jurídico a médicos e empresas do setor da saúde.",
    description: "A descrição institucional informa atendimento a médicos e empresas da saúde, desde a constituição da pessoa jurídica até a representação perante Conselhos de Medicina e em demandas judiciais.",
    detail: "A atuação descrita combina apoio jurídico a profissionais e organizações da saúde com representação institucional e judicial, conforme o conteúdo publicado pelo escritório.",
    focus: "Médicos · Empresas da saúde · Conselhos de Medicina · Demandas judiciais"
  },
  {
    slug: "direito-publico-relacoes-governamentais",
    title: "Direito Público e Relações Governamentais",
    short: "Atuação relacionada às relações público-privadas.",
    description: "O site atual menciona conhecimento nas relações público-privadas, mas não apresenta um detalhamento suficiente dos serviços ou dos públicos atendidos.",
    detail: "Para evitar incluir promessas não confirmadas, esta página mantém apenas a descrição disponível no site original. O escopo específico precisa ser revisado e aprovado pelo escritório.",
    focus: "Relações público-privadas · Escopo detalhado a confirmar",
    pending: true
  },
  {
    slug: "compliance-governanca-corporativa",
    title: "Compliance e Governança Corporativa",
    short: "Assessoria em compliance e integridade corporativa.",
    description: "O conteúdo existente menciona assessoria relacionada a práticas de compliance e integridade corporativa, com foco na prevenção e no combate à corrupção.",
    detail: "A página resume exclusivamente o escopo descrito na página inicial do escritório. A lista de serviços, metodologias e públicos atendidos deve ser validada antes de ampliar o conteúdo.",
    focus: "Compliance · Integridade corporativa · Prevenção e combate à corrupção",
    pending: true
  }
];

const areaPath = (area) => `/areas/${area.slug}`;
const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
const main = document.querySelector("#conteudo");
const cleanPath = (window.location.pathname.replace(/\/+$/, "") || "/").toLowerCase();

function pageHero(eyebrow, title, lead) {
  return `<section class="page-hero"><div class="container"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="lead">${lead}</p></div></section>`;
}

function contactBand() {
  return `<section class="cta-band"><div class="container cta-inner"><div><p class="eyebrow">Contato</p><h2>Uma conversa pode ser o próximo passo.</h2><p>Fale com a equipe pelo canal institucional do escritório.</p></div><a class="button" href="/contato">Entre em contato</a></div></section>`;
}

function renderAreas(items = areaData) {
  return `<div class="area-grid">${items.map((area, index) => `
    <article class="area-item">
      <div class="area-number">0${index + 1}</div>
      <div><h3>${area.title}</h3><p>${area.short}</p><a class="text-link" href="${areaPath(area)}">Conheça a área</a></div>
    </article>`).join("")}</div>`;
}

function renderArticles(items = articleData) {
  return items.map((article) => `
    <article class="publication">
      <p class="meta">${article.date}</p>
      <h3><a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title}</a></h3>
      <p>${article.summary}</p>
      <p class="article-author">${article.author}</p>
      <a class="text-link" href="${article.url}" target="_blank" rel="noopener noreferrer">Ler no site original</a>
    </article>`).join("");
}

function homePage() {
  return `
    <div class="container">
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Cleto &amp; Botta Advogados</p>
          <h1>Atenção e dedicação personalizada. Soluções céleres e eficazes.</h1>
          <p class="lead">Assessoria jurídica com atuação integrada, atenção às necessidades de cada cliente e compromisso com a qualidade técnica.</p>
          <div class="button-row"><a class="button" href="/areas">Explore as áreas de atuação</a><a class="button secondary" href="/contato">Fale com o escritório</a></div>
        </div>
        <figure class="hero-visual">
          <img src="/assets/hero-architecture.webp" alt="Ambiente arquitetônico genérico, usado como referência visual; não representa a sede do escritório">
          <figcaption>Imagem ilustrativa — não representa a sede do escritório.</figcaption>
        </figure>
      </section>
      <section class="intro-band">
        <p class="eyebrow">Quem somos</p>
        <p>Somos um escritório direcionado ao assessoramento e atendimento das necessidades jurídicas dos clientes. A integração entre as áreas amplia a visão sobre os desafios e apoia a busca por respostas assertivas.</p>
      </section>
      <div class="values-row" aria-label="Valores institucionais">
        <div class="value"><strong>Ética</strong><span>Princípio declarado pelo escritório</span></div>
        <div class="value"><strong>Transparência</strong><span>Relações claras e responsáveis</span></div>
        <div class="value"><strong>Capacitação técnica</strong><span>Conhecimento como fundamento</span></div>
        <div class="value"><strong>Profissionalismo</strong><span>Compromisso em cada atendimento</span></div>
      </div>
    </div>
    <section class="section alt">
      <div class="container">
        <div class="section-heading"><div><p class="eyebrow">Como podemos apoiar</p><h2>Áreas de atuação</h2><p>Conheça as frentes jurídicas apresentadas pelo escritório. O detalhamento de cada página segue as informações disponíveis e será ampliado somente após validação.</p></div><a class="text-link" href="/areas">Ver todas as áreas</a></div>
        ${renderAreas()}
      </div>
    </section>
    <section class="section">
      <div class="container statement">
        <p class="eyebrow">Uma visão integrada</p>
        <div><blockquote>“A atuação integrada de todas as áreas permite uma visão ampla dos desafios dos clientes.”</blockquote><p>Síntese editorial da proposta institucional publicada no site atual.</p><a class="text-link" href="/o-escritorio">Conheça o escritório</a></div>
      </div>
    </section>
    <section class="section alt">
      <div class="container">
        <div class="section-heading"><div><p class="eyebrow">Conhecimento jurídico</p><h2>Publicações em destaque</h2><p>Artigos do acervo original, identificados com suas datas e autoria.</p></div><a class="text-link" href="/publicacoes">Acessar publicações</a></div>
        <div class="publication-list">${renderArticles(articleData.slice(0, 3))}</div>
        <p class="archive-notice" style="margin-top:28px">Os artigos disponíveis foram publicados em 2020. O conteúdo é histórico e precisa de revisão antes de ser apresentado como orientação jurídica atual.</p>
      </div>
    </section>
    ${contactBand()}`;
}

function officePage() {
  return `${pageHero("O escritório", "Atuação próxima, integrada e técnica.", "A Cleto & Botta Advogados apresenta como propósito o assessoramento jurídico atento às necessidades de seus clientes.")}
    <section class="page-content"><div class="container">
      <div class="prose">
        <p>O escritório descreve uma atuação integrada entre suas áreas, voltada a oferecer uma visão ampla dos obstáculos enfrentados pelos clientes. Sua comunicação institucional destaca atenção personalizada, qualidade técnica, assertividade e rapidez nas respostas.</p>
        <h2>Valores que orientam a atuação</h2>
      </div>
      <div class="values-row">
        <div class="value"><strong>Ética</strong><span>Valor declarado institucionalmente</span></div>
        <div class="value"><strong>Transparência</strong><span>Valor declarado institucionalmente</span></div>
        <div class="value"><strong>Capacitação técnica</strong><span>Valor declarado institucionalmente</span></div>
        <div class="value"><strong>Profissionalismo</strong><span>Valor declarado institucionalmente</span></div>
      </div>
      <div class="team-placeholder"><h3>Equipe e trajetória</h3><p><strong>Informação a confirmar:</strong> nomes, cargos, números de OAB, especialidades, biografias e marcos históricos não estão detalhados nas páginas consultadas. Os autores identificados no acervo não são apresentados aqui como sócios ou integrantes sem validação do escritório.</p></div>
    </div></section>${contactBand()}`;
}

function areasPage() {
  return `${pageHero("Áreas de atuação", "Assessoria jurídica em diferentes frentes.", "A estrutura abaixo organiza as cinco áreas identificadas no site atual e dá acesso às suas páginas individuais.")}
    <section class="page-content"><div class="container">
      <div class="area-catalog">${areaData.map((area) => `<article class="area-card"><p class="eyebrow">${area.pending ? "Descrição a validar" : "Atuação"}</p><h3><a href="${areaPath(area)}">${area.title}</a></h3><p>${area.short}</p><a class="text-link" href="${areaPath(area)}">Ver detalhes</a></article>`).join("")}</div>
      <p class="info-note" style="margin-top:32px">As descrições refletem o conteúdo público identificado. Detalhamentos adicionais devem ser confirmados pela equipe do escritório antes da publicação final.</p>
    </div></section>${contactBand()}`;
}

function areaDetailPage(area) {
  const pendingNote = area.pending ? `<div class="info-note"><strong>Informação a confirmar:</strong> o conteúdo consultado não especifica todos os serviços, públicos atendidos ou formas de atuação desta área. Esta página foi mantida intencionalmente restrita ao que está documentado.</div>` : "";
  return `${pageHero("Áreas de atuação", area.title, area.short)}
    <section class="page-content"><div class="container detail-layout">
      <div class="prose"><p>${area.description}</p><h2>Como o escritório apresenta esta atuação</h2><p>${area.detail}</p>${pendingNote}<div class="button-row"><a class="button" href="/contato">Fale com o escritório</a><a class="button secondary" href="/areas">Voltar às áreas</a></div></div>
      <aside class="detail-aside"><p class="small-label">Frentes mencionadas</p><h3>Escopo publicado</h3><p>Resumo baseado exclusivamente nas informações institucionais disponíveis no site atual.</p><ul class="pill-list">${area.focus.split(" · ").map((label) => `<li>${label}</li>`).join("")}</ul></aside>
    </div></section>${contactBand()}`;
}

function publicationsPage() {
  return `${pageHero("Publicações", "Artigos e análises do escritório.", "Um acervo de conteúdos jurídicos com autoria e datas preservadas conforme aparecem no site original.")}
    <section class="page-content"><div class="container">
      <p class="archive-notice"><strong>Conteúdo histórico:</strong> os artigos listados foram publicados em 2020. Eles não foram atualizados para esta reformulação. Revise a legislação e a jurisprudência antes de republicar ou tratá-los como orientação atual.</p>
      <div class="article-list">${articleData.map((article) => `<article class="article-row"><div class="date">${article.date}</div><div><h3><a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title}</a></h3><p>${article.summary}</p></div><div class="article-author">${article.author}<br><a class="text-link" href="${article.url}" target="_blank" rel="noopener noreferrer">Abrir original</a></div></article>`).join("")}</div>
    </div></section>${contactBand()}`;
}

function contactPage() {
  const address = "Avenida Queiroz Filho, 1700, salas 408 e 409, Bloco E, Condomínio Villa Lobos Office Park, Vila Hamburguesa, São Paulo/SP, 05319-000";
  const mapQuery = encodeURIComponent(address);
  return `${pageHero("Contato", "Estamos à disposição para conversar.", "Entre em contato pelo e-mail institucional ou envie uma mensagem pelo formulário abaixo.")}
    <section class="page-content"><div class="container contact-grid">
      <div class="contact-details">
        <p class="eyebrow">Fale conosco</p><h3>Cleto &amp; Botta Advogados</h3>
        <p>E-mail: <a class="inline" href="mailto:contato@cletoebotta.com.br">contato@cletoebotta.com.br</a></p>
        <address class="office-address"><strong>Endereço</strong>Avenida Queiroz Filho, 1700<br>Salas 408 e 409, Bloco E<br>Condomínio Villa Lobos Office Park<br>Vila Hamburguesa<br>São Paulo/SP · CEP 05319-000</address>
        <p><a class="text-link" href="https://www.google.com/maps/search/?api=1&amp;query=${mapQuery}" target="_blank" rel="noopener noreferrer">Abrir rotas no Google Maps</a></p>
        <div class="social-links"><a href="https://www.instagram.com/cletoebotta/" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://www.linkedin.com/company/cleto-botta-advogados-associados" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
        <p class="info-note" style="margin-top:26px"><strong>Informação a confirmar:</strong> telefone e horário de atendimento.</p>
      </div>
      <form class="contact-form" id="contact-form">
        <div class="form-field"><label for="nome">Nome</label><input id="nome" name="nome" autocomplete="name" required></div>
        <div class="form-field"><label for="email">E-mail</label><input id="email" name="email" type="email" autocomplete="email" required></div>
        <div class="form-field"><label for="assunto">Assunto</label><input id="assunto" name="assunto" required></div>
        <div class="form-field"><label for="mensagem">Mensagem</label><textarea id="mensagem" name="mensagem" required></textarea></div>
        <p class="form-hint">Ao enviar, seu aplicativo de e-mail será aberto com os dados preenchidos. O site não armazena nem envia a mensagem por conta própria.</p>
        <button class="button" type="submit">Preparar e-mail</button>
        <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
      </form>
    </div>
    <section class="map-section" id="map-section" aria-labelledby="map-title">
      <div class="map-heading"><div><p class="eyebrow">Como chegar</p><h2 id="map-title">Localização</h2><p>Consulte o mapa ou abra a rota no Google Maps.</p></div></div>
      <div class="map-shell"><div id="contact-map" class="map-frame" role="region" aria-label="Mapa interativo da localização da Cleto &amp; Botta Advogados Associados"></div><p id="map-status" class="map-status" role="status" aria-live="polite">Carregando o mapa interativo…</p></div>
      <p class="map-credit">Cartografia por <a href="https://openfreemap.org/" target="_blank" rel="noopener noreferrer">OpenFreeMap</a> · Dados © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a> e <a href="https://www.openmaptiles.org/" target="_blank" rel="noopener noreferrer">OpenMapTiles</a>.</p>
    </section>
    </div></section>`;
}

const routes = {
  "/": { title: "Início", render: homePage },
  "/o-escritorio": { title: "O Escritório", render: officePage },
  "/areas": { title: "Áreas de Atuação", render: areasPage },
  "/publicacoes": { title: "Publicações", render: publicationsPage },
  "/contato": { title: "Contato", render: contactPage }
};

const currentArea = areaData.find((area) => cleanPath === areaPath(area));
let currentRoute = routes[cleanPath];
if (currentArea) currentRoute = { title: currentArea.title, render: () => areaDetailPage(currentArea) };

if (currentRoute) {
  document.title = `${currentRoute.title} | Cleto & Botta Advogados`;
  main.innerHTML = currentRoute.render();
} else {
  document.title = "Página não encontrada | Cleto & Botta Advogados";
  main.innerHTML = `${pageHero("Página não encontrada", "Não encontramos este endereço.", "Confira o menu ou volte para a página inicial.")}<section class="page-content"><div class="container"><a class="button" href="/">Ir para o início</a></div></section>`;
}

const mapContainer = document.querySelector("#contact-map");
if (mapContainer) {
  const mapStatus = document.querySelector("#map-status");
  const showMapFallback = () => {
    if (!mapStatus) return;
    mapStatus.hidden = false;
    mapStatus.textContent = "O mapa interativo não carregou. Use o link para abrir a rota no Google Maps.";
  };
  const mapStyles = document.createElement("link");
  mapStyles.rel = "stylesheet";
  mapStyles.href = "https://unpkg.com/maplibre-gl@5.6.2/dist/maplibre-gl.css";
  mapStyles.onload = () => {
    const mapScript = document.createElement("script");
    mapScript.src = "https://unpkg.com/maplibre-gl@5.6.2/dist/maplibre-gl.js";
    mapScript.onload = () => {
      if (!window.maplibregl) {
        showMapFallback();
        return;
      }
      try {
        const map = new window.maplibregl.Map({
          container: mapContainer,
          style: "https://tiles.openfreemap.org/styles/positron",
          center: [-46.7330314, -23.5434931],
          zoom: 16,
          attributionControl: true
        });
        map.addControl(new window.maplibregl.NavigationControl({ showCompass: false }), "top-right");
        new window.maplibregl.Marker({ color: "#6f1d2b" })
          .setLngLat([-46.7330314, -23.5434931])
          .setPopup(new window.maplibregl.Popup({ offset: 24 }).setText("Cleto & Botta Advogados Associados"))
          .addTo(map);
        const mapLoadTimeout = window.setTimeout(showMapFallback, 12000);
        map.once("load", () => {
          window.clearTimeout(mapLoadTimeout);
          if (mapStatus) mapStatus.hidden = true;
        });
      } catch {
        showMapFallback();
      }
    };
    mapScript.onerror = showMapFallback;
    document.head.append(mapScript);
  };
  mapStyles.onerror = showMapFallback;
  document.head.append(mapStyles);
}

const topLinks = document.querySelectorAll(".main-nav a");
for (const link of topLinks) {
  const target = link.getAttribute("href");
  const active = target === cleanPath || (target === "/areas" && cleanPath.startsWith("/areas/"));
  if (active) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
}

document.querySelector("#ano-atual").textContent = String(new Date().getFullYear());
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("open", !expanded);
});

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    const data = new FormData(contactForm);
    const subject = `[Site] ${String(data.get("assunto")).trim()}`;
    const body = `Nome: ${String(data.get("nome")).trim()}\nE-mail: ${String(data.get("email")).trim()}\n\nMensagem:\n${String(data.get("mensagem")).trim()}`;
    const mailto = `mailto:contato@cletoebotta.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.querySelector("#form-status").textContent = "Abrindo seu aplicativo de e-mail para concluir o envio.";
    window.location.href = mailto;
  });
}
