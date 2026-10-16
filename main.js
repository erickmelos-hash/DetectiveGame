const documents = [
	{
		id: 1,
		board: "documentos-iniciais",
		newspaper: "O Diário da Periferia",
		date: "12 de fevereiro de 2023",
		title: "Investimento e território",
		headline: "Falta de investimento público e aumento do tráfico em bairros periféricos",
		image: "./assets/jornal-1.png",
		alt: "Jornal com gráfico de dispersão e tabela de investimento público e pessoas cooptadas em cinco bairros fictícios.",
		summary: "A redação reuniu uma amostra de bairros da metrópole fictícia. O gráfico relaciona o investimento público anual por habitante às estimativas de pessoas cooptadas pelo tráfico.",
		data: [
			["Jardim Esperança", "R$ 120 por habitante · 220 pessoas estimadas"],
			["Vila Nova", "R$ 250 por habitante · 180 pessoas estimadas"],
			["Bela Vista", "R$ 400 por habitante · 120 pessoas estimadas"],
			["Parque das Flores", "R$ 600 por habitante · 70 pessoas estimadas"],
			["Centro", "R$ 900 por habitante · 30 pessoas estimadas"],
			["Nota editorial", "Dados simulados para o jogo; associação estatística não demonstra causa exclusiva."]
		],
		challenge: {
			type: "choice",
			prompt: "Qual interpretação é sustentada pelo gráfico e pela tabela?",
			choices: [
				["causa", "O gráfico prova que o baixo investimento é a causa exclusiva do tráfico."],
				["associacao", "Na amostra, menor investimento aparece associado a estimativas maiores; isso não prova causa exclusiva."],
				["sem-relacao", "Os dados mostram que investimento e estimativas não têm qualquer relação."]
			],
			answer: "associacao",
			success: "Você identificou a associação sem confundi-la com prova de causalidade. Esse padrão ajuda a delimitar a investigação, mas não determina a culpa de ninguém."
		}
	},
	{
		id: 2,
		board: "documentos-iniciais",
		newspaper: "Correio do Vale",
		date: "15 de março de 2023",
		title: "O livro de caixa",
		headline: "Livro de caixa — casal Hernandez",
		image: "./assets/jornal-2.png",
		alt: "Jornal com tabela de lucros fictícios do casal Hernandez e repasses a intermediários.",
		summary: "Uma cópia do livro-caixa discrimina lucros atribuídos à operação e o total repassado aos intermediários vulneráveis.",
		data: [
			["Venda de entorpecentes", "R$ 12.000.000"],
			["Lavagem de dinheiro", "R$ 8.500.000"],
			["Outros lucros", "R$ 3.000.000"],
			["Lucro total", "R$ 23.500.000"],
			["Repasse total aos intermediários", "R$ 125.000"],
			["Percentual impresso no recorte", "0,53%"],
			["Nota", "Valores fictícios criados para os desafios do jogo."]
		],
		challenge: {
			type: "number",
			prompt: "Que porcentagem do lucro total representa o repasse de R$ 125.000? Informe o valor aproximado, sem o símbolo %",
			answer: 0.0053,
			tolerance: 0.005,
			hint: "Compare o valor repassado com o lucro total de R$ 23.500.000; lembre-se de que a pergunta pede uma porcentagem."
		},
		success: "O repasse representa aproximadamente 0,53% do lucro total. O dado evidencia uma distribuição muito desigual dos ganhos e dos riscos."
	},
	{
		id: 3,
		board: "documentos-iniciais",
		newspaper: "A Voz da Zona",
		date: "18 de março de 2023",
		title: "Mandados de busca",
		headline: "Dois endereços, uma equipe e pouco tempo",
		image: "./assets/jornal-3.png",
		alt: "Jornal com dois mandados de busca e uma tabela de ocorrências e risco estimado de fuga em regiões fictícias.",
		summary: "O Chefe informa que a prioridade é impedir a fuga e preservar evidências perecíveis. Só uma equipe está disponível antes que os suspeitos possam deixar a cidade. O chefe deixa bem claro que, cenários com maior risco de fuga terão um planejamento tático mais plano. O critério operacional é preservar evidências e impedir a fuga, não presumir culpa de moradores de uma região.",
		data: [
			["Mandado 1 · Área Central", "Armazenamento de entorpecentes · 47 ocorrências relacionadas · risco de fuga: 35%"],
			["Mandado 2 · Comunidade do Morro / Periferia", "Laboratório de corte e distribuição · risco de fuga: 60%"],
			["Outros registros", "Zona Norte: 28 ocorrências, 45% de risco · Zona Sul: 22, 55% · Bairro Nobre: 12, 25%"],
			["Critério operacional", "Priorizar o risco de fuga e a preservação das evidências; ocorrências, sozinhas, não provam culpa."]
		],
		challenge: {
			type: "choice",
			prompt: "Qual mandado deve receber prioridade diante do critério definido pelo Chefe?",
			choices: [
				["mandado1", "Mandado 1: a Área Central tem 47 ocorrências."],
				["mandado2", "Mandado 2: o endereço tem risco estimado de fuga de 60%, contra 35% no Mandado 1, e requer preservar evidências."],
				["nenhum", "Nenhum: os percentuais não permitem priorizar uma diligência."]
			],
			answer: "mandado2",
			success: "A prioridade decorre do critério operacional explícito — risco de fuga e preservação — e não de presumir que moradores de uma região sejam culpados."
		}
	},
	{
		id: 4,
		board: "documentos-intermediarios",
		newspaper: "Folha do Leste",
		date: "20 de março de 2023",
		title: "O relatório preliminar",
		headline: "Uma conclusão oficial que não fecha com os dados",
		image: "./assets/jornal-4.png",
		alt: "Relatório policial fictício: 110 de 120 abordados eram pessoas em situação de rua, com uma conclusão carimbada que os chama de líderes.",
		summary: "Um relatório atribui a liderança do esquema a pessoas em situação de rua. O percentual foi calculado a partir de abordagens; a mesma página registra operações financeiras suspeitas que não foram consideradas na conclusão.",
		data: [
			["Abordagens", "120"],
			["Pessoas em situação de rua identificadas", "110"],
			["Percentual calculado pelo relatório", "110 ÷ 120 ≈ 91,7% (arredondado para 92%)"],
			["Movimentação financeira suspeita", "R$ 48.750.000 em 12 operações"],
			["Origem registrada", "Empresas, imóveis e operações no exterior"],
			["Cautela", "Ser abordado ou identificado não comprova liderança nem responsabilidade criminal."]
		],
		challenge: {
			type: "choice",
			prompt: "Qual é o principal problema na conclusão do relatório?",
			choices: [
				["calculo", "A divisão 110 por 120 está errada; o resultado é 92 pessoas."],
				["inferência", "O percentual descreve quem foi identificado entre os abordados, não quem lidera o esquema; a conclusão não decorre desses dados."],
				["prova", "A tabela financeira prova, sozinha, que toda pessoa abordada é inocente."]
			],
			answer: "inferência",
			success: "O cálculo aproximado está correto, mas sua interpretação não: a amostra não mede liderança. As operações financeiras são uma linha de investigação distinta."
		}
	},
	{
		id: 5,
		board: "documentos-intermediarios",
		newspaper: "Jornal da Cidade",
		date: "12 de março de 2023",
		title: "A linha do tempo",
		headline: "Registros separados, uma cronologia para reconstruir",
		image: "./assets/jornal-5.png",
		alt: "Jornal com seis datas e acontecimentos relacionados à chegada dos Hernandez e à evolução da investigação.",
		summary: "Recortes de arquivo registram a chegada do casal, movimentações financeiras e mudanças na atividade da região. A proximidade das datas é um indício temporal, não prova de causalidade.",
		data: [
			["12/03/2023", "Chegada do casal Hernandez ao Brasil"],
			["20/04/2023", "Primeiro registro de movimentação suspeita"],
			["15/06/2023", "Aumento de 120% nas ocorrências registradas na região"],
			["01/08/2023", "Identificação de indícios de lavagem de dinheiro"],
			["10/10/2023", "Expansão das atividades para bairros nobres"],
			["22/12/2023", "Pico de atividade criminosa registrado na região"]
		],
		challenge: {
			type: "order",
			prompt: "Organize os seis acontecimentos do mais antigo ao mais recente. Selecione um evento diferente em cada posição.",
			events: [
				["chegada", "12/03/2023 — Chegada do casal ao Brasil"],
				["movimentacao", "20/04/2023 — Primeiro registro financeiro suspeito"],
				["aumento", "15/06/2023 — Aumento de 120% nas ocorrências"],
				["lavagem", "01/08/2023 — Indícios de lavagem identificados"],
				["expansao", "10/10/2023 — Expansão para bairros nobres"],
				["pico", "22/12/2023 — Pico de atividade na região"]
			],
			answer: ["chegada", "movimentacao", "aumento", "lavagem", "expansao", "pico"],
			success: "A cronologia permite comparar registros e estabelecer uma sequência. A ordem temporal, sozinha, não prova que um evento causou o outro."
		}
	},
	{
		id: 6,
		board: "documentos-intermediarios",
		newspaper: "O Progresso Urbano",
		date: "16 de março de 2023",
		title: "O mapa das desigualdades",
		headline: "Áreas investigadas e condições urbanas",
		image: "./assets/jornal-6.png",
		alt: "Mapa fictício com periferia em vermelho, bairro nobre em azul, área central em amarelo e uma rota de movimentação.",
		summary: "O mapa marca territórios com funções diferentes na investigação. Os dados descrevem condições e atividades registradas, não características de todas as pessoas que vivem em cada área.",
		data: [
			["Periferia · vermelho", "Indicadores de vulnerabilidade social e menor acesso a serviços"],
			["Área central · amarelo", "Atividades comerciais e indícios de distribuição"],
			["Bairro nobre · azul", "Maior concentração de renda e registros associados ao consumo"],
			["Segregação socioespacial", "Distribuição desigual de infraestrutura, oportunidades e grupos sociais pela cidade"],
			["Vulnerabilidade social", "Exposição a riscos associada a condições sociais e econômicas; não é sinônimo de culpa criminal"],
			["Escala do mapa", "0 a 8 km; as rotas e os locais são fictícios."]
		],
		challenge: {
			type: "match",
			prompt: "Associe cada área à característica indicada nos documentos.",
			matches: [
				["periferia", "Periferia"],
				["centro", "Área central"],
				["nobre", "Bairro nobre"]
			],
			options: [
				["vulnerabilidade", "Indicadores de vulnerabilidade e menor acesso a serviços"],
				["distribuicao", "Atividades comerciais e indícios de distribuição"],
				["consumo", "Maior concentração de renda e registros associados ao consumo"]
			],
			answer: { periferia: "vulnerabilidade", centro: "distribuicao", nobre: "consumo" },
			success: "Você relacionou as áreas às condições e aos registros descritos, sem generalizar sobre seus moradores. Segregação socioespacial diz respeito à distribuição desigual de condições e oportunidades."
		}
	},
	{
		id: 7,
		board: "documentos-finais",
		newspaper: "O Observador",
		date: "17 de março de 2023",
		title: "A rota registrada pelo GPS",
		headline: "Da periferia aos bairros nobres",
		image: "./assets/jornal-7.png",
		alt: "Jornal com mapa de rota e quatro registros fictícios de GPS: saída na periferia, trânsito, entrega em bairro nobre e retorno.",
		summary: "Os horários e coordenadas formam um percurso. Outra publicação compara indicadores territoriais de consumo registrado e de medida punitiva; as bases são diferentes e precisam ser lidas separadamente.",
		data: [
			["12/09 · 08:15", "Saída — Periferia · latitude -23.5496, longitude -46.6332"],
			["12/09 · 09:42", "Em trânsito · latitude -23.5071, longitude -46.6203"],
			["12/09 · 10:27", "Entrega — Bairro nobre · latitude -23.4987, longitude -46.6120"],
			["12/09 · 11:03", "Retorno · latitude -23.4902, longitude -46.6048"],
			["Indicador A", "78% dos registros de consumo da amostra ocorreram em bairros nobres"],
			["Indicador B", "12% das medidas punitivas da amostra foram registradas para o grupo de entregadores abordados"],
			["Nota metodológica", "Amostras e denominadores diferentes: os percentuais não são proporções diretamente comparáveis nem provam culpa individual."]
		],
		challenge: {
			type: "choice",
			prompt: "Qual conclusão reúne corretamente a rota e os limites dos dois percentuais?",
			choices: [
				["rota", "Os registros mostram saída da periferia, passagem em trânsito, entrega em bairro nobre e retorno; os percentuais têm bases diferentes e não podem ser comparados diretamente."],
				["culpa", "A rota prova que todos os moradores da periferia participam do esquema."],
				["percentuais", "78% é necessariamente mais de seis vezes 12% no mesmo grupo, pois os percentuais usam a mesma base."]
			],
			answer: "rota",
			success: "A sequência de GPS descreve o trajeto registrado. Como os percentuais usam bases distintas, não se pode compará-los como se medissem o mesmo grupo ou inferir culpa individual."
		}
	},
	{
		id: 8,
		board: "documentos-finais",
		newspaper: "Gazeta Nacional",
		date: "21 de março de 2023",
		title: "A combinação do cofre",
		headline: "Uma conta, um resultado impresso e um algarismo ausente",
		image: "./assets/jornal-8.png",
		alt: "Jornal com a sequência incompleta 7-3-?-2, prejuízo fictício de R$ 48.750.000 e fórmula para abrir o cofre.",
		summary: "A folha do cofre registra um prejuízo estimado de R$ 48.750.000 e a fórmula (prejuízo ÷ 1.000.000) + 5. Uma anotação mecânica informa que o terceiro disco usa o algarismo das unidades do resultado conferido.",
		data: [
			["Sequência parcialmente visível", "7 — 3 — ? — 2"],
			["Prejuízo registrado", "R$ 48.750.000"],
			["Fórmula preservada", "(prejuízo ÷ 1.000.000) + 5"],
			["Regra do mecanismo", "O terceiro disco recebe o algarismo das unidades do resultado conferido."],
			["Resultado impresso na imagem", "53,875 — incompatível com a fórmula e o prejuízo registrados."],
			["Conferência", "Dados fictícios. Recalcule a expressão em vez de confiar no resultado impresso."]
		],
		challenge: {
			type: "digit",
			prompt: "Calcule a expressão usando R$ 48.750.000 e informe o algarismo das unidades que completa o terceiro disco.",
			answer: "3",
			hint: "Primeiro divida 48.750.000 por 1.000.000; depois some 5. O resultado impresso no recorte não corresponde a essa conta."
		},
		success: "A conta verificada é 48,75 + 5 = 53,75; o algarismo das unidades é 3. A sequência fica 7–3–3–2. Você também identificou que 53,875 é um erro de impressão."
	}
];

const startScreen = document.querySelector("#telaEntrada");
const startForm = document.querySelector("#formularioEntrada");
const investigatorNameInput = document.querySelector("#nomeInvestigador");
const displayedInvestigatorName = document.querySelector("#nomeExibido");
const game = document.querySelector("#jogo");
const orientationQuery = window.matchMedia("(max-width: 700px) and (orientation: portrait)");
const documentDialog = document.querySelector("#documento-dialog");
const closeDialogButton = document.querySelector("#fechar-dialog");
const progressLabel = document.querySelector("#progresso");
const completedDocuments = new Set();
let gameStarted = false;

function updateOrientationGate() {
	game.inert = !gameStarted || orientationQuery.matches;
}

orientationQuery.addEventListener("change", updateOrientationGate);
window.addEventListener("resize", updateOrientationGate);
window.addEventListener("orientationchange", updateOrientationGate);
updateOrientationGate();

investigatorNameInput.addEventListener("input", () => {
	investigatorNameInput.setCustomValidity("");
});

startForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const investigatorName = investigatorNameInput.value.trim();
	if (!investigatorName) {
		investigatorNameInput.setCustomValidity("Digite seu nome para começar a investigação.");
		investigatorNameInput.reportValidity();
		return;
	}

	displayedInvestigatorName.textContent = investigatorName;
	startScreen.hidden = true;
	game.hidden = false;
	gameStarted = true;
	updateOrientationGate();
	game.focus();
});

function renderDocumentCards() {
	for (const documentInfo of documents) {
		const board = document.getElementById(documentInfo.board);
		const card = document.createElement("button");
		const isComplete = completedDocuments.has(documentInfo.id);

		card.className = `document-card${isComplete ? " document-card--complete" : ""}`;
		card.type = "button";
		card.dataset.documentId = String(documentInfo.id);
		card.setAttribute("aria-label", `Abrir documento ${documentInfo.id}: ${documentInfo.newspaper}, ${documentInfo.title}`);
		card.innerHTML = `
			<span class="document-card__numero">PISTA ${String(documentInfo.id).padStart(2, "0")}</span>
			<img src="${documentInfo.image}" alt="${documentInfo.alt}" loading="lazy">
			<span class="document-card__rodape">
				<strong>${documentInfo.newspaper}</strong>
				<span>${documentInfo.title}</span>
				<small>${isComplete ? "ANALISADO" : "ABRIR RECORTE"} · ${isComplete ? "✓" : "↗"}</small>
			</span>`;
		card.addEventListener("click", () => openDocument(documentInfo.id));
		board.append(card);
	}
}

function updateProgress() {
	progressLabel.textContent = `Evidências analisadas: ${completedDocuments.size}/8`;

	for (const card of document.querySelectorAll(".document-card")) {
		const id = Number(card.dataset.documentId);
		const isComplete = completedDocuments.has(id);
		card.classList.toggle("document-card--complete", isComplete);
		card.querySelector("small").textContent = isComplete ? "ANALISADO · ✓" : "ABRIR RECORTE · ↗";
	}

	document.querySelector("#desfecho").hidden = completedDocuments.size !== documents.length;
}

function challengeIsUnlocked(id) {
	return id === 1 || completedDocuments.has(id - 1);
}

function openDocument(id) {
	const documentInfo = documents.find((item) => item.id === id);
	if (!documentInfo) {
		throw new Error(`Documento de evidência não encontrado: ${id}`);
	}

	document.querySelector("#dialog-fonte").textContent = documentInfo.newspaper;
	document.querySelector("#dialog-imagem").src = documentInfo.image;
	document.querySelector("#dialog-imagem").alt = documentInfo.alt;
	document.querySelector("#dialog-legenda").textContent = `${documentInfo.newspaper} · ${documentInfo.date} · Arquivo fictício`;
	document.querySelector("#dialog-data").textContent = `${documentInfo.date} · DOCUMENTO ${String(id).padStart(2, "0")}`;
	document.querySelector("#dialog-titulo").textContent = documentInfo.headline;
	document.querySelector("#dialog-resumo").textContent = documentInfo.summary;

	const dataList = document.querySelector("#dialog-dados");
	dataList.replaceChildren();
	for (const [label, value] of documentInfo.data) {
		const term = document.createElement("dt");
		const description = document.createElement("dd");
		term.textContent = label;
		description.textContent = value;
		dataList.append(term, description);
	}

	renderChallenge(documentInfo);
	documentDialog.showModal();
}

function renderChallenge(documentInfo, solved = false) {
	const area = document.querySelector("#area-desafio");
	const challenge = documentInfo.challenge;
	area.replaceChildren();

	const heading = document.createElement("h3");
	heading.textContent = `Desafio ${documentInfo.id} · ${documentInfo.title}`;
	area.append(heading);

	if (!challengeIsUnlocked(documentInfo.id)) {
		const lockedMessage = document.createElement("p");
		lockedMessage.className = "mensagem-bloqueio";
		lockedMessage.textContent = `Este desafio será liberado depois de analisar a evidência ${String(documentInfo.id - 1).padStart(2, "0")}. Você pode consultar este jornal desde já.`;
		area.append(lockedMessage);
		return;
	}

	if (solved || completedDocuments.has(documentInfo.id)) {
		renderSolvedState(documentInfo, area);
		return;
	}

	const prompt = document.createElement("p");
	prompt.className = "pergunta-desafio";
	prompt.textContent = challenge.prompt;
	area.append(prompt);

	const form = document.createElement("form");
	form.className = "formulario-desafio";
	form.noValidate = true;
	form.innerHTML = createChallengeFields(challenge);
	const feedback = document.createElement("p");
	feedback.className = "feedback-desafio";
	feedback.setAttribute("aria-live", "polite");
	const submitButton = document.createElement("button");
	submitButton.className = "botao-acao";
	submitButton.type = "submit";
	submitButton.textContent = "Registrar análise";
	form.append(feedback, submitButton);
	form.addEventListener("submit", (event) => {
		event.preventDefault();
		if (isAnswerCorrect(challenge, new FormData(form))) {
			completedDocuments.add(documentInfo.id);
			updateProgress();
			renderChallenge(documentInfo, true);
			return;
		}

		feedback.classList.add("feedback-desafio--erro");
		feedback.textContent = challenge.hint ?? getHint(documentInfo.id);
	});
	area.append(form);
}

function createChallengeFields(challenge) {
	if (challenge.type === "choice") {
		return challenge.choices.map(([value, label], index) => `
			<label class="opcao-desafio">
				<input type="radio" name="answer" value="${value}" ${index === 0 ? "required" : ""}>
				<span>${label}</span>
			</label>`).join("");
	}

	if (challenge.type === "number" || challenge.type === "digit") {
		return `<label class="campo-resposta" for="resposta-numerica">
			<span>${challenge.type === "digit" ? "Algarismo:" : "Percentual:"}</span>
			<input id="resposta-numerica" name="answer" type="text" inputmode="decimal" autocomplete="off" required>
		</label>`;
	}

	if (challenge.type === "order") {
		const shuffledEvents = [...challenge.events].reverse();
		return challenge.events.map(([, label], index) => `
			<label class="campo-ordem" for="ordem-${index}">
				<span>${index + 1}ª posição</span>
				<select id="ordem-${index}" name="order-${index}" required>
					<option value="">Escolha um acontecimento</option>
					${shuffledEvents.map(([value, eventLabel]) => `<option value="${value}">${eventLabel}</option>`).join("")}
				</select>
			</label>`).join("");
	}

	if (challenge.type === "match") {
		return challenge.matches.map(([key, label]) => `
			<label class="campo-ordem" for="associacao-${key}">
				<span>${label}</span>
				<select id="associacao-${key}" name="${key}" required>
					<option value="">Selecione a característica</option>
					${challenge.options.map(([value, optionLabel]) => `<option value="${value}">${optionLabel}</option>`).join("")}
				</select>
			</label>`).join("");
	}

	throw new Error(`Tipo de desafio desconhecido: ${challenge.type}`);
}

function isAnswerCorrect(challenge, formData) {
	if (challenge.type === "choice") {
		return formData.get("answer") === challenge.answer;
	}

	if (challenge.type === "number") {
		const enteredValue = Number(String(formData.get("answer")).replace(",", ".").replace("%", "").trim());
		return Number.isFinite(enteredValue) && Math.abs(enteredValue - challenge.answer) <= challenge.tolerance;
	}

	if (challenge.type === "digit") {
		return String(formData.get("answer")).trim() === challenge.answer;
	}

	if (challenge.type === "order") {
		return challenge.answer.every((event, index) => formData.get(`order-${index}`) === event);
	}

	if (challenge.type === "match") {
		return Object.entries(challenge.answer).every(([region, concept]) => formData.get(region) === concept);
	}

	throw new Error(`Não é possível avaliar o desafio do tipo: ${challenge.type}`);
}

function renderSolvedState(documentInfo, area) {
	const feedback = document.createElement("p");
	feedback.className = "feedback-desafio feedback-desafio--certo";
	feedback.textContent = documentInfo.challenge.success ?? documentInfo.success;
	area.append(feedback);

	if (documentInfo.id === documents.length) {
		const ending = document.createElement("p");
		ending.className = "mensagem-final";
		ending.textContent = "Diego reuniu as provas, solicitou a prisão do casal e impediu a fuga. A operação criminosa foi interrompida; enfrentar a desigualdade e a vulnerabilidade exige também políticas públicas e proteção social.";
		area.append(ending);
		return;
	}

	const next = document.createElement("p");
	next.className = "proxima-pista";
	next.textContent = `A evidência ${String(documentInfo.id + 1).padStart(2, "0")} está liberada. Consulte os outros quadros para continuar.`;
	area.append(next);
}

function getHint(id) {
	const hints = {
		1: "Compare a direção geral dos pontos e separe associação estatística de prova de causa.",
		3: "Releia a prioridade do Chefe e compare os riscos de fuga dos dois mandados.",
		4: "Verifique o que o denominador 120 representa e se uma abordagem mede liderança.",
		7: "Ordene os horários do GPS e confira se os dois percentuais usam a mesma base."
	};
	return hints[id] ?? "Revise os números e as legendas do documento. Você pode tentar novamente.";
}

closeDialogButton.addEventListener("click", () => documentDialog.close());
documentDialog.addEventListener("click", (event) => {
	if (event.target === documentDialog) {
		documentDialog.close();
	}
});

renderDocumentCards();
