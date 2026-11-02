/* KQ Tecnologia — progressively enhanced, dependency-free interactions. */
(() => {
    "use strict";

    const WHATSAPP_NUMBER = "5511989480263";
    const STORAGE_KEY = "kq-language";
    const CANONICAL_URL = "https://kevinquintiliano.vercel.app/";
    const translations = {
        en: {
            "meta.title": "KQ Tecnologia | Kevin Quintiliano — Digital Experiences",
            "meta.description": "Modern websites, digital experiences and practical technology solutions by Kevin Quintiliano. KQ Tecnologia connects businesses in the UK and Brazil with thoughtful digital solutions.",
            "menu.open": "Open menu",
            "menu.close": "Close menu",
            "form.invalid": "Please check the highlighted fields before continuing.",
            "form.draft": "Your WhatsApp draft is ready. Review it and send it in WhatsApp. If a new tab did not open, use the link below.",
            "form.fallback": "Open my draft in WhatsApp ↗",
            "error.name.required": "Please enter your name.",
            "error.name.length": "Enter a name between 2 and 100 characters.",
            "error.company.length": "Keep the company name within 100 characters.",
            "error.email.required": "Please enter your email address.",
            "error.email.invalid": "Enter a valid email address, such as name@company.com.",
            "error.email.length": "Keep the email address within 254 characters.",
            "error.phone.required": "Please enter your WhatsApp number, including the country code.",
            "error.phone.invalid": "Enter 7 to 15 digits. You can use +, spaces, parentheses, dots and hyphens.",
            "error.service.required": "Please choose a service.",
            "error.message.required": "Please tell me a little about your project.",
            "error.message.length": "Describe your project in 15 to 3,000 characters.",
            "whatsapp.intro": "Hi, Kevin! I would like to discuss a project with KQ Tecnologia.",
            "whatsapp.name": "Name",
            "whatsapp.company": "Company",
            "whatsapp.email": "Email",
            "whatsapp.phone": "WhatsApp",
            "whatsapp.service": "Service",
            "whatsapp.project": "Project",
            "whatsapp.optional": "Not provided"
        },
        pt: {
            "meta.title": "KQ Tecnologia | Kevin Quintiliano — Experiências Digitais",
            "meta.description": "Sites modernos, experiências digitais e soluções práticas de tecnologia por Kevin Quintiliano. A KQ Tecnologia atende negócios no Brasil e no Reino Unido com soluções digitais bem pensadas.",
            "menu.open": "Abrir menu",
            "menu.close": "Fechar menu",
            "form.invalid": "Revise os campos destacados antes de continuar.",
            "form.draft": "Seu rascunho está pronto. Revise e envie a mensagem no WhatsApp. Se uma nova aba não abriu, use o link abaixo.",
            "form.fallback": "Abrir meu rascunho no WhatsApp ↗",
            "error.name.required": "Informe seu nome.",
            "error.name.length": "Informe um nome entre 2 e 100 caracteres.",
            "error.company.length": "Use no máximo 100 caracteres para o nome da empresa.",
            "error.email.required": "Informe seu e-mail.",
            "error.email.invalid": "Informe um e-mail válido, como nome@empresa.com.",
            "error.email.length": "Use no máximo 254 caracteres para o e-mail.",
            "error.phone.required": "Informe seu WhatsApp, incluindo o código do país.",
            "error.phone.invalid": "Informe de 7 a 15 dígitos. Você pode usar +, espaços, parênteses, pontos e hífens.",
            "error.service.required": "Escolha um serviço.",
            "error.message.required": "Conte um pouco sobre seu projeto.",
            "error.message.length": "Descreva seu projeto em 15 a 3.000 caracteres.",
            "whatsapp.intro": "Olá, Kevin! Gostaria de conversar sobre um projeto com a KQ Tecnologia.",
            "whatsapp.name": "Nome",
            "whatsapp.company": "Empresa",
            "whatsapp.email": "E-mail",
            "whatsapp.phone": "WhatsApp",
            "whatsapp.service": "Serviço",
            "whatsapp.project": "Projeto",
            "whatsapp.optional": "Não informado",
            "access.skip": "Pular para o conteúdo",
            "access.home": "KQ Tecnologia — início",
            "access.navigation": "Navegação principal",
            "access.language": "Escolher idioma",
            "access.menuOpen": "Abrir menu",
            "access.mobileNavigation": "Navegação para dispositivos móveis",
            "access.approach": "Abordagem do estúdio",
            "access.skills": "Tecnologias e habilidades",
            "access.top": "Voltar ao topo",
            "access.footer": "Navegação do rodapé",
            "access.whatsapp": "Fale com Kevin pelo WhatsApp (abre em uma nova aba)",
            "nav.work": "Projetos",
            "nav.about": "Sobre",
            "nav.services": "Serviços",
            "nav.process": "Processo",
            "nav.contact": "Vamos conversar",
            "nav.explore": "CONHEÇA O ESTÚDIO",
            "hero.eyebrow": "PENSAMENTO INDEPENDENTE. CUIDADO DIGITAL.",
            "hero.founder": "Fundador da KQ Tecnologia",
            "hero.titleFirst": "Experiências Digitais.",
            "hero.titleSecond": "Impacto Real no Seu Negócio.",
            "hero.description": "Crio sites modernos, experiências digitais e soluções práticas de tecnologia para ajudar empresas a fortalecer sua presença online e crescer.",
            "hero.explore": "Conheça Meus Projetos",
            "hero.contact": "Vamos Trabalhar Juntos",
            "hero.skillDesign": "DESIGN",
            "hero.skillDevelopment": "DESENVOLVIMENTO",
            "hero.skillSolutions": "SOLUÇÕES DIGITAIS",
            "hero.artCaption": "CRIADO COM CUIDADO.",
            "hero.artCaptionSecond": "FEITO PARA FAZER A DIFERENÇA.",
            "hero.location": "BRASIL E REINO UNIDO",
            "hero.scroll": "ROLE PARA EXPLORAR",
            "hero.note": "Um bom design começa com a compreensão.",
            "trust.caption": "ESTÚDIO PEQUENO. COMPROMISSO PESSOAL.",
            "trust.first": "Entendimento do negócio",
            "trust.second": "Design bem pensado",
            "trust.third": "Tecnologia prática",
            "work.label": "01 / PROJETOS SELECIONADOS",
            "work.title": "Negócios diferentes.",
            "work.titleAccent": "A mesma atenção aos detalhes.",
            "work.intro": "Sites e projetos digitais publicados, cada um pensado para um público e um propósito diferentes.",
            "work.truecareCategory": "SITE DE SERVIÇOS / LONDRES",
            "work.truecareDescription": "Uma presença online clara e acolhedora para serviços de limpeza residencial e de imóveis de temporada, com serviços e contato fáceis de encontrar.",
            "work.truecareLink": "Visitar o site da TrueCare Cleaning (abre em uma nova aba)",
            "work.truecareSuffix": " — TrueCare Cleaning (abre em uma nova aba)",
            "work.imperioCategory": "E-COMMERCE DE MODA / BRASIL",
            "work.imperioDescription": "Uma loja de moda que coloca a coleção em destaque e torna a descoberta dos produtos simples e intuitiva.",
            "work.imperioLink": "Visitar o site da Império Moda Feminina (abre em uma nova aba)",
            "work.imperioSuffix": " — Império Moda Feminina (abre em uma nova aba)",
            "work.jkCategory": "SITE INSTITUCIONAL / BRASIL",
            "work.jkDescription": "Uma apresentação visual de um espaço com piscina para eventos, reunindo o ambiente, as informações e o contato para reservas.",
            "work.jkLink": "Visitar o site da JK Pool House (abre em uma nova aba)",
            "work.jkSuffix": " — JK Pool House (abre em uma nova aba)",
            "work.n1Category": "SITE DE CONSTRUÇÃO / LONDRES",
            "work.n1Description": "Um site em inglês para uma empresa de construção de Londres, reunindo serviços de construção, obras concluídas e pedidos de orçamento.",
            "work.n1Link": "Visitar o site da N1 Next Level Construction (abre em uma nova aba)",
            "work.n1Suffix": " — N1 Next Level Construction (abre em uma nova aba)",
            "work.desentopeCategory": "SERVIÇOS LOCAIS / CAMPINAS",
            "work.desentopeDescription": "Um site de serviços locais de desentupimento, com serviços, perguntas frequentes e contato direto por telefone e WhatsApp.",
            "work.desentopeLink": "Visitar o site da Desentope Mais Campinas (abre em uma nova aba)",
            "work.desentopeSuffix": " — Desentope Mais Campinas (abre em uma nova aba)",
            "work.helpallCategory": "PROJETO COMUNITÁRIO / PILOTO",
            "work.helpallDescription": "Um aplicativo comunitário em fase piloto que conecta pessoas, serviços locais e iniciativas, com catálogo de serviços, favoritos e HelpCoins de demonstração.",
            "work.helpallLink": "Explorar o piloto comunitário HELP ALL (abre em uma nova aba)",
            "work.helpallSuffix": " — Piloto comunitário HELP ALL (abre em uma nova aba)",
            "work.hitomiCategory": "DEMONSTRAÇÃO DE SITE / ODONTOLOGIA",
            "work.hitomiDescription": "Uma demonstração publicada de site odontológico que apresenta tratamentos e facilita o contato para agendamentos.",
            "work.hitomiLink": "Visitar a demonstração do site da Hitomí Odontologia (abre em uma nova aba)",
            "work.hitomiSuffix": " — Demonstração do site da Hitomí Odontologia (abre em uma nova aba)",
            "work.visit": "Visitar site",
            "work.nextLabel": "UMA NOVA PERSPECTIVA",
            "work.nextTitle": "Seu negócio. O próximo capítulo.",
            "work.nextDescription": "Tem algo em mente? Vamos transformar a ideia certa em uma experiência digital que funcione para você.",
            "work.nextCta": "Conte sobre seu projeto",
            "work.imageNote": "Imagens dos projetos publicados. Os links abrem em uma nova aba.",
            "about.label": "02 / A PESSOA POR TRÁS DA KQ",
            "about.title": "Tecnologia com",
            "about.titleAccent": "uma perspectiva humana.",
            "about.location": "Raízes brasileiras. Uma perspectiva britânica.",
            "about.lead": "Sou Kevin Quintiliano. Profissional de tecnologia, empreendedor digital e fundador da KQ Tecnologia.",
            "about.description": "Minha experiência passa por gestão de equipes, finanças, administração, organização de sistemas e melhoria de processos. Essa visão de negócio orienta minha abordagem em cada projeto digital.",
            "about.approach": "Atuando entre o Brasil e o Reino Unido, desenvolvo sites e soluções práticas com um ponto de partida simples: entender o que seu negócio realmente precisa.",
            "about.principle": "Você traz o desafio. Eu trago design bem pensado, desenvolvimento na prática e o compromisso de tornar a tecnologia útil.",
            "about.toolkit": "MINHAS FERRAMENTAS",
            "about.integrations": "Integração de sistemas",
            "about.automation": "Automação",
            "about.cta": "Vamos conhecer seu negócio",
            "services.label": "03 / COMO POSSO AJUDAR",
            "services.title": "A solução certa.",
            "services.titleAccent": "Pensada para você.",
            "services.intro": "De uma primeira impressão mais forte a um dia de trabalho mais simples. Apoio prático para o próximo passo do seu negócio.",
            "services.webTitle": "Desenvolvimento de Sites",
            "services.webDescription": "Um site rápido e responsivo que conta sua história, transmite confiança e facilita o contato dos clientes.",
            "services.webCta": "Construa sua presença online",
            "services.landingTitle": "Landing Pages e Redesign",
            "services.landingDescription": "Crie uma página focada para sua campanha ou transforme um site desatualizado em uma experiência mais clara e atraente para seus clientes.",
            "services.landingCta": "Cause uma impressão mais forte",
            "services.automationTitle": "Soluções Digitais e Automação",
            "services.automationDescription": "Conecte ferramentas, simplifique tarefas repetitivas e explore integrações úteis com IA onde elas fizerem sentido na prática.",
            "services.automationCta": "Simplifique sua rotina de trabalho",
            "services.processTitle": "Otimização de Processos de Negócio",
            "services.processDescription": "Organize informações, sistemas e operações do dia a dia com o apoio da experiência em gestão e finanças.",
            "services.processCta": "Encontre uma forma melhor de trabalhar",
            "services.supportTitle": "Suporte Técnico",
            "services.supportDescription": "Ajuda confiável para atualizar sites, resolver problemas, realizar migrações e manter suas ferramentas digitais funcionando juntas.",
            "services.supportCta": "Conte com apoio prático",
            "services.translationTitle": "Tradução e Conteúdo em Português e Inglês",
            "services.translationDescription": "Conteúdo bilíngue e tradução clara para sites, ajudando seu negócio a se comunicar com públicos no Brasil e no Reino Unido.",
            "services.translationCta": "Conecte-se em dois idiomas",
            "process.label": "04 / UM CAMINHO CLARO",
            "process.title": "Da primeira conversa",
            "process.titleAccent": "ao último detalhe.",
            "process.intro": "Um processo colaborativo, comunicação clara e decisões bem pensadas em cada etapa.",
            "process.discoverTitle": "Entender",
            "process.discoverDescription": "Conversamos sobre seu negócio, seu público e o problema que vale a pena resolver.",
            "process.designTitle": "Definir e Criar",
            "process.designDescription": "Alinhamos o escopo, as prioridades e uma direção de design que combine com sua marca.",
            "process.buildTitle": "Desenvolver e Refinar",
            "process.buildDescription": "Desenvolvo a solução, conecto o que importa e faço testes com base no seu retorno.",
            "process.launchTitle": "Lançar e Evoluir",
            "process.launchDescription": "Revisamos os detalhes, preparamos o lançamento e conversamos sobre suporte conforme seu negócio cresce.",
            "packages.label": "UM PONTO DE PARTIDA",
            "packages.title": "O caminho certo para seu próximo passo.",
            "packages.intro": "Cada proposta é adaptada aos seus objetivos. Estas são três formas de começar.",
            "packages.essentialLabel": "ESSENCIAL",
            "packages.essentialTitle": "Comece com clareza.",
            "packages.essentialDescription": "Uma presença digital focada para um negócio pronto para ser visto.",
            "packages.essentialItem1": "Landing page sob medida",
            "packages.essentialItem2": "Design responsivo e SEO básico",
            "packages.essentialItem3": "Contato pelo WhatsApp",
            "packages.essentialItem4": "Preparação para o lançamento",
            "packages.professionalLabel": "PROFISSIONAL",
            "packages.professionalTitle": "Construa sua presença.",
            "packages.professionalDescription": "Um site institucional completo, com espaço para contar sua história.",
            "packages.professionalItem1": "Site institucional com várias seções",
            "packages.professionalItem2": "Design alinhado à marca e estrutura de conteúdo",
            "packages.professionalItem3": "Fundamentos de SEO e desempenho",
            "packages.professionalItem4": "Integrações definidas conforme suas necessidades",
            "packages.bespokeLabel": "SOB MEDIDA",
            "packages.bespokeTitle": "Pense além do site.",
            "packages.bespokeDescription": "Soluções práticas para a forma como seu negócio funciona.",
            "packages.bespokeItem1": "Integração de sistemas e ferramentas",
            "packages.bespokeItem2": "Automação e aplicações úteis de IA",
            "packages.bespokeItem3": "Revisão e organização de processos",
            "packages.bespokeItem4": "Suporte técnico e migrações",
            "packages.cta": "Vamos conversar sobre seu projeto",
            "packages.note": "Não sabe por onde começar? Uma conversa é sempre um bom primeiro passo.",
            "contact.label": "05 / VAMOS CRIAR ALGO QUE FAÇA A DIFERENÇA",
            "contact.title": "Seu próximo capítulo",
            "contact.titleAccent": "começa aqui.",
            "contact.description": "Um novo site, uma ideia para explorar ou um processo que poderia funcionar melhor. Conte o que você tem em mente.",
            "contact.highlight": "Você não precisa ter tudo definido.",
            "contact.highlightDetail": "Vamos encontrar o ponto de partida certo juntos.",
            "contact.basedLabel": "ATUAÇÃO ENTRE",
            "contact.based": "Brasil e Reino Unido",
            "contact.languagesLabel": "VAMOS CONVERSAR EM",
            "contact.languages": "Inglês ou português",
            "contact.quick": "Vamos conversar",
            "form.label": "UM POUCO SOBRE SEU PROJETO",
            "form.title": "Vamos começar uma conversa.",
            "form.name": "Seu nome *",
            "form.namePlaceholder": "Como posso chamar você?",
            "form.company": "Empresa (opcional)",
            "form.companyPlaceholder": "Nome da sua empresa",
            "form.email": "E-mail *",
            "form.emailPlaceholder": "voce@empresa.com",
            "form.phone": "Número do WhatsApp *",
            "form.phonePlaceholder": "Inclua o código do país",
            "form.service": "Como posso ajudar? *",
            "form.choose": "Selecione um serviço",
            "form.optionLanding": "Landing Page",
            "form.optionRedesign": "Redesign de Site",
            "form.optionSystem": "Sistemas e Integrações sob Medida",
            "form.optionAi": "Aplicações de IA",
            "form.optionMigration": "Migração",
            "form.optionConsulting": "Consultoria em Tecnologia",
            "form.optionOther": "Outra ideia / Vamos explorar",
            "form.message": "Conte sobre seu projeto *",
            "form.messagePlaceholder": "Sua ideia, seus objetivos ou o desafio que você está enfrentando…",
            "form.submit": "Continuar no WhatsApp",
            "form.note": "Este formulário prepara uma mensagem para o WhatsApp. Você vai revisar e enviar por lá. Nenhum e-mail é enviado. * Campos obrigatórios.",
            "final.title": "Design com atenção.",
            "final.titleAccent": "Desenvolvimento com propósito.",
            "final.description": "Uma abordagem pessoal para seu futuro digital.",
            "footer.description": "Estúdio independente de tecnologia. Pessoal em cada detalhe.",
            "footer.connect": "MANTENHA CONTATO",
            "footer.rights": ". Todos os direitos reservados.",
            "footer.credit": "Design e desenvolvimento por Kevin Quintiliano.",
            "image.monogram": "Identidade visual da KQ Tecnologia",
            "image.truecare": "Quarto apresentado no site da TrueCare Cleaning",
            "image.imperio": "Coleção de moda apresentada no site da Império Moda Feminina",
            "image.jk": "Piscina e espaço para eventos apresentados no site da JK Pool House",
            "image.n1": "Ampliação de cobertura realizada pela N1 Next Level Construction",
            "image.desentope": "Equipe da Desentope Mais realizando desentupimento com jato de alta pressão",
            "image.helpall": "Logo do projeto comunitário HELP ALL",
            "image.hitomi": "Casal sorridente apresentado no site da Hitomí Odontologia"
        }
    };

    // The English HTML is the source of truth. Adding a card only requires its PT copy here.
    const translationAttributes = [
        ["data-i18n", null],
        ["data-i18n-placeholder", "placeholder"],
        ["data-i18n-aria", "aria-label"],
        ["data-i18n-title", "title"],
        ["data-i18n-alt", "alt"]
    ];
    const translationTargets = [];
    translationAttributes.forEach(([attribute, target]) => {
        document.querySelectorAll(`[${attribute}]`).forEach((element) => {
            const key = element.getAttribute(attribute);
            if (!(key in translations.en)) {
                translations.en[key] = target ? element.getAttribute(target) : element.textContent.trim();
            }
            translationTargets.push({ element, key, target });
        });
    });

    let language = "en";
    let formState = "";
    let menuIsOpen = false;
    let revealObserver = null;
    const formErrors = new Map();
    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");
    const mobileOverlay = document.getElementById("mobileOverlay");
    const navbar = document.querySelector(".navbar");
    const backToTop = document.getElementById("backToTop");
    const contactForm = document.getElementById("contactForm");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia("(min-width: 1001px)");
    const fieldIds = ["name", "company", "email", "phone", "service", "message"];
    const fields = Object.fromEntries(fieldIds.map((id) => [id, document.getElementById(id)]));
    let formStatus = document.getElementById("formStatus");
    let whatsappFallback = document.getElementById("whatsappFallback");

    const t = (key) => translations[language][key] ?? translations.en[key] ?? "";
    const whatsappUrl = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    function updateMenuLabel() {
        if (!menuButton) return;
        menuButton.setAttribute("aria-label", t(menuIsOpen ? "menu.close" : "menu.open"));
        menuButton.setAttribute("aria-expanded", String(menuIsOpen));
    }

    function updateMetadata() {
        const title = t("meta.title");
        const description = t("meta.description");
        document.title = title;
        const metadata = {
            'meta[name="description"]': description,
            'meta[property="og:title"]': title,
            'meta[property="og:description"]': description,
            'meta[property="og:locale"]': language === "pt" ? "pt_BR" : "en_GB",
            'meta[name="twitter:title"]': title,
            'meta[name="twitter:description"]': description,
            'meta[property="og:url"]': CANONICAL_URL
        };
        Object.entries(metadata).forEach(([selector, value]) => {
            const element = document.querySelector(selector);
            if (element) element.setAttribute("content", value);
        });
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute("href", CANONICAL_URL);
    }

    function readForm() {
        const data = new FormData(contactForm);
        return Object.fromEntries(fieldIds.map((id) => [id, String(data.get(id) || "").trim()]));
    }

    function buildFormUrl() {
        const values = readForm();
        const selectedOption = fields.service.options[fields.service.selectedIndex];
        const serviceText = selectedOption ? selectedOption.textContent.trim() : values.service;
        return whatsappUrl([
            t("whatsapp.intro"), "",
            `${t("whatsapp.name")}: ${values.name}`,
            `${t("whatsapp.company")}: ${values.company || t("whatsapp.optional")}`,
            `${t("whatsapp.email")}: ${values.email}`,
            `${t("whatsapp.phone")}: ${values.phone}`,
            `${t("whatsapp.service")}: ${serviceText}`,
            `${t("whatsapp.project")}: ${values.message}`
        ].join("\n"));
    }

    function renderFormState() {
        if (formStatus) {
            formStatus.textContent = formState ? t(`form.${formState}`) : "";
            formStatus.classList.toggle("is-error", formState === "invalid");
        }
        if (whatsappFallback) {
            whatsappFallback.textContent = t("form.fallback");
            whatsappFallback.hidden = formState !== "draft";
            if (formState === "draft") whatsappFallback.href = buildFormUrl();
        }
        formErrors.forEach((key, id) => {
            fields[id].setCustomValidity(t(key));
            const error = document.getElementById(`${id}-error`);
            if (error) error.textContent = t(key);
        });
    }

    function setLanguage(nextLanguage, persist = true) {
        language = nextLanguage === "pt" ? "pt" : "en";
        document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
        translationTargets.forEach(({ element, key, target }) => {
            const value = t(key);
            if (target) element.setAttribute(target, value);
            else element.textContent = value;
        });
        document.querySelectorAll("[data-language]").forEach((button) => {
            const active = button.dataset.language === language;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-pressed", String(active));
        });
        document.querySelectorAll("[data-whatsapp]").forEach((link) => {
            link.href = whatsappUrl(t("whatsapp.intro"));
        });
        updateMetadata();
        updateMenuLabel();
        renderFormState();
        if (persist) {
            try { localStorage.setItem(STORAGE_KEY, language); } catch { /* Storage can be blocked. */ }
        }
    }

    function closeMobileMenu(restoreFocus = false) {
        if (!mobileMenu || !menuButton) return;
        menuIsOpen = false;
        mobileMenu.classList.remove("active");
        mobileMenu.hidden = true;
        if (mobileOverlay) {
            mobileOverlay.classList.remove("active");
            mobileOverlay.hidden = true;
        }
        document.body.classList.remove("menu-open");
        updateMenuLabel();
        if (restoreFocus) menuButton.focus();
    }

    function openMobileMenu() {
        if (!mobileMenu || !menuButton || desktopQuery.matches) return;
        menuIsOpen = true;
        mobileMenu.hidden = false;
        mobileMenu.classList.add("active");
        if (mobileOverlay) {
            mobileOverlay.hidden = false;
            mobileOverlay.classList.add("active");
        }
        document.body.classList.add("menu-open");
        updateMenuLabel();
        const firstLink = mobileMenu.querySelector("a[href], button:not([disabled])");
        if (firstLink) firstLink.focus();
    }

    if (menuButton && mobileMenu) {
        closeMobileMenu();
        menuButton.addEventListener("click", () => {
            if (menuIsOpen) closeMobileMenu(true);
            else openMobileMenu();
        });
        if (mobileOverlay) mobileOverlay.addEventListener("click", () => closeMobileMenu(true));
        mobileMenu.querySelectorAll("a[href]").forEach((link) => {
            link.addEventListener("click", () => {
                const href = link.getAttribute("href");
                const target = href.startsWith("#") ? document.getElementById(href.slice(1)) : null;
                closeMobileMenu(!target);
                if (target) {
                    target.setAttribute("tabindex", "-1");
                    target.focus({ preventScroll: true });
                }
            });
        });
        document.addEventListener("click", (event) => {
            if (menuIsOpen && !mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
                if (!event.target.closest("[data-language]")) closeMobileMenu(true);
            }
        });
        document.addEventListener("keydown", (event) => {
            if (!menuIsOpen) return;
            if (event.key === "Escape") {
                event.preventDefault();
                closeMobileMenu(true);
            }
            if (event.key !== "Tab") return;
            const candidates = [menuButton, ...mobileMenu.querySelectorAll('a[href], button:not([disabled]), [tabindex="0"]')];
            if (navbar) candidates.push(...navbar.querySelectorAll("[data-language], .nav-button"));
            const focusable = [...new Set(candidates)]
                .filter((element) => element.getClientRects().length > 0 && !element.disabled)
                .sort((a, b) => a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            const current = document.activeElement;
            if (!first) return;
            if (event.shiftKey && (current === first || !focusable.includes(current))) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && (current === last || !focusable.includes(current))) {
                event.preventDefault();
                first.focus();
            }
        });
    }

    const listenToMedia = (query, callback) => {
        if (query.addEventListener) query.addEventListener("change", callback);
        else query.addListener(callback);
    };
    listenToMedia(desktopQuery, () => {
        if (desktopQuery.matches && menuIsOpen) closeMobileMenu();
    });

    function updateScrollState() {
        const scrollY = window.scrollY;
        if (navbar) navbar.classList.toggle("is-scrolled", scrollY > 40);
        if (backToTop) {
            const visible = scrollY > 600;
            backToTop.classList.toggle("visible", visible);
            backToTop.tabIndex = visible ? 0 : -1;
            backToTop.setAttribute("aria-hidden", String(!visible));
        }
    }
    let scrollFrame = 0;
    window.addEventListener("scroll", () => {
        if (scrollFrame) return;
        scrollFrame = requestAnimationFrame(() => {
            updateScrollState();
            scrollFrame = 0;
        });
    }, { passive: true });
    updateScrollState();

    function focusStart() {
        const start = document.getElementById("inicio");
        if (!start) return;
        start.setAttribute("tabindex", "-1");
        start.focus({ preventScroll: true });
    }
    const skipLink = document.querySelector(".skip-link");
    if (skipLink) skipLink.addEventListener("click", focusStart);
    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: motionQuery.matches ? "auto" : "smooth" });
            focusStart();
        });
    }

    function configureReveals() {
        const elements = document.querySelectorAll(".project-card, .solution-card, .process-item, .package, .development-card, .philosophy-content");
        elements.forEach((element) => element.classList.add("reveal"));
        if (revealObserver) revealObserver.disconnect();
        document.documentElement.classList.remove("js-motion");
        if (motionQuery.matches || !("IntersectionObserver" in window)) {
            elements.forEach((element) => element.classList.add("visible"));
            return;
        }
        try {
            revealObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                });
            }, { threshold: 0.08, rootMargin: "0px 0px -20px 0px" });
            elements.forEach((element) => revealObserver.observe(element));
            document.documentElement.classList.add("js-motion");
        } catch {
            elements.forEach((element) => element.classList.add("visible"));
        }
    }
    configureReveals();
    listenToMedia(motionQuery, configureReveals);

    function clearFieldError(id) {
        const field = fields[id];
        if (!field) return;
        field.setCustomValidity("");
        field.removeAttribute("aria-invalid");
        formErrors.delete(id);
        const error = document.getElementById(`${id}-error`);
        if (error) {
            error.textContent = "";
            error.hidden = true;
        }
    }

    function setFieldError(id, key) {
        const field = fields[id];
        formErrors.set(id, key);
        field.setCustomValidity(t(key));
        field.setAttribute("aria-invalid", "true");
        let error = document.getElementById(`${id}-error`);
        if (!error) {
            error = document.createElement("p");
            error.id = `${id}-error`;
            error.className = "form-error";
            field.insertAdjacentElement("afterend", error);
        }
        const descriptions = new Set((field.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean));
        descriptions.add(error.id);
        field.setAttribute("aria-describedby", [...descriptions].join(" "));
        error.textContent = t(key);
        error.hidden = false;
    }

    function validateForm(values) {
        fieldIds.forEach(clearFieldError);
        if (!values.name) setFieldError("name", "error.name.required");
        else if (values.name.length < 2 || values.name.length > 100) setFieldError("name", "error.name.length");
        if (values.company.length > 100) setFieldError("company", "error.company.length");
        if (!values.email) setFieldError("email", "error.email.required");
        else if (values.email.length > 254) setFieldError("email", "error.email.length");
        else {
            const emailCheck = document.createElement("input");
            emailCheck.type = "email";
            emailCheck.value = values.email;
            if (!emailCheck.validity.valid) setFieldError("email", "error.email.invalid");
        }
        const digits = values.phone.replace(/\D/g, "");
        if (!values.phone) setFieldError("phone", "error.phone.required");
        else if (values.phone.length > 30 || !/^\+?[\d\s().-]+$/.test(values.phone) || digits.length < 7 || digits.length > 15) {
            setFieldError("phone", "error.phone.invalid");
        }
        const selectedOption = fields.service.options[fields.service.selectedIndex];
        if (!values.service || !selectedOption || selectedOption.disabled) setFieldError("service", "error.service.required");
        if (!values.message) setFieldError("message", "error.message.required");
        else if (values.message.length < 15 || values.message.length > 3000) setFieldError("message", "error.message.length");
        return formErrors.size === 0;
    }

    if (contactForm && fieldIds.every((id) => fields[id])) {
        contactForm.noValidate = true;
        if (!formStatus) {
            formStatus = document.createElement("p");
            formStatus.id = "formStatus";
            formStatus.className = "form-status";
            contactForm.append(formStatus);
        }
        formStatus.setAttribute("role", "status");
        formStatus.setAttribute("aria-live", "polite");
        if (!whatsappFallback) {
            whatsappFallback = document.createElement("a");
            whatsappFallback.id = "whatsappFallback";
            whatsappFallback.className = "form-fallback";
            whatsappFallback.hidden = true;
            contactForm.append(whatsappFallback);
        }
        whatsappFallback.target = "_blank";
        whatsappFallback.rel = "noopener noreferrer";
        fieldIds.forEach((id) => {
            fields[id].addEventListener("input", () => {
                clearFieldError(id);
                if (formState === "draft" || formErrors.size === 0) formState = "";
                renderFormState();
            });
        });
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            if (!validateForm(readForm())) {
                formState = "invalid";
                renderFormState();
                contactForm.reportValidity();
                return;
            }
            formState = "draft";
            renderFormState();
            // Kept synchronous with the user gesture. The visible link also works if popups are blocked.
            try {
                window.open(whatsappFallback.href, "_blank", "noopener,noreferrer");
            } catch { /* The visible link remains available when the browser blocks new tabs. */ }
        });
        const submitButton = contactForm.querySelector('button[type="submit"]');
        if (submitButton) submitButton.disabled = false;
    }

    document.querySelectorAll("[data-language]").forEach((button) => {
        button.addEventListener("click", () => setLanguage(button.dataset.language));
    });
    let savedLanguage = "en";
    try { savedLanguage = localStorage.getItem(STORAGE_KEY) || "en"; } catch { /* English remains available without storage. */ }
    setLanguage(savedLanguage, false);
    const year = document.getElementById("currentYear");
    if (year) year.textContent = String(new Date().getFullYear());
})();
