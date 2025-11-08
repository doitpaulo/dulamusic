import { Module } from '../types';

export const quizData: Module[] = [
  {
    id: "module1",
    title: "Reunião de Jovens",
    level: "Básico",
    trails: [
      {
        id: "m1t1",
        title: "Notas e Claves",
        questions: [
          { id: 1, questionText: "Qual nota está na primeira linha da clave de Sol?", options: [{ text: "Fá", isCorrect: false }, { text: "Mi", isCorrect: true }, { text: "Ré", isCorrect: false }, { text: "Dó", isCorrect: false }], explanation: "A primeira linha da clave de Sol corresponde à nota Mi. Uma dica é memorizar a frase 'Minha Sol Sibilava Ré Fa' para as linhas." },
          { id: 2, questionText: "Qual nota ocupa o primeiro espaço da clave de Sol?", options: [{ text: "Mi", isCorrect: false }, { text: "Dó", isCorrect: false }, { text: "Fá", isCorrect: true }, { text: "Ré", isCorrect: false }], explanation: "O primeiro espaço da clave de Sol é a nota Fá. Para os espaços, lembre-se da palavra 'FÁ-LÁ-DÓ-MI'." },
          { id: 3, questionText: "Qual nota ocupa o terceiro espaço da clave de Sol?", options: [{ text: "Fá", isCorrect: false }, { text: "Dó", isCorrect: true }, { text: "Mi", isCorrect: false }, { text: "Ré", isCorrect: false }], explanation: "Seguindo a lógica dos espaços (Fá-Lá-Dó-Mi), o terceiro espaço é a nota Dó." },
          { id: 4, questionText: "Qual nota ocupa a primeira linha da clave de Fá?", options: [{ text: "Fá", isCorrect: false }, { text: "Sol", isCorrect: true }, { text: "Ré", isCorrect: false }, { text: "Lá", isCorrect: false }] },
          { id: 5, questionText: "Qual nota ocupa o segundo espaço da clave de Fá?", options: [{ text: "Ré", isCorrect: false }, { text: "Fá", isCorrect: false }, { text: "Si", isCorrect: false }, { text: "Dó", isCorrect: true }] },
          { id: 6, questionText: "Qual nota ocupa a quarta linha da clave de Sol?", options: [{ text: "Mi", isCorrect: false }, { text: "Ré", isCorrect: true }, { text: "Sol", isCorrect: false }, { text: "Fá", isCorrect: false }] },
          { id: 7, questionText: "Qual nota ocupa o terceiro espaço da clave de Fá?", options: [{ text: "Fá", isCorrect: false }, { text: "Mi", isCorrect: true }, { text: "Si", isCorrect: false }, { text: "Dó", isCorrect: false }] },
          { id: 8, questionText: "Qual nota ocupa o quarto espaço da clave de Sol?", options: [{ text: "Mi", isCorrect: true }, { text: "Dó", isCorrect: false }] },
        ]
      },
      {
        id: "m1t2",
        title: "Figuras e Pausas",
        questions: [
          { id: 9, questionText: "Quantas colcheias equivalem a uma semínima?", options: [{ text: "3", isCorrect: false }, { text: "2", isCorrect: true }, { text: "4", isCorrect: false }, { text: "1", isCorrect: false }], explanation: "Uma semínima vale 1 tempo em compassos simples. Uma colcheia vale meio tempo. Portanto, 2 colcheias equivalem a 1 semínima." },
          { id: 10, questionText: "Quantas semicolcheias existem em uma semínima?", options: [{ text: "4", isCorrect: true }, { text: "2", isCorrect: false }, { text: "1", isCorrect: false }, { text: "3", isCorrect: false }] },
          { id: 11, questionText: "Quantos tempos dura uma mínima em compasso 4/4?", options: [{ text: "1", isCorrect: false }, { text: "3", isCorrect: false }, { text: "2", isCorrect: true }, { text: "4", isCorrect: false }] },
          { id: 12, questionText: "Quantos tempos dura uma semínima em compasso 4/4?", options: [{ text: "2", isCorrect: false }, { text: "1", isCorrect: true }, { text: "3", isCorrect: false }, { text: "4", isCorrect: false }] },
          { id: 13, questionText: "Qual nota dura metade de uma semínima?", options: [{ text: "Colcheia", isCorrect: true }, { text: "Semicolcheia", isCorrect: false }, { text: "Semínima", isCorrect: false }, { text: "Mínima", isCorrect: false }] },
          { id: 14, questionText: "Qual nota dura o dobro de uma semínima?", options: [{ text: "Mínima", isCorrect: true }, { text: "Semínima", isCorrect: false }, { text: "Colcheia", isCorrect: false }, { text: "Semicolcheia", isCorrect: false }] },
          { id: 15, questionText: "Quantas semínimas existem em um compasso 3/4?", options: [{ text: "4", isCorrect: false }, { text: "3", isCorrect: true }, { text: "2", isCorrect: false }, { text: "6", isCorrect: false }] },
          { id: 16, questionText: "Quantas colcheias existem em um compasso 2/4?", options: [{ text: "4", isCorrect: true }, { text: "2", isCorrect: false }] },
        ]
      },
      {
        id: "m1t3",
        title: "Compassos e Tempo",
        questions: [
            { id: 17, questionText: "Quantos tempos existem em um compasso 4/4?", options: [{ text: "3", isCorrect: false }, { text: "1", isCorrect: false }, { text: "4", isCorrect: true }, { text: "2", isCorrect: false }] },
            { id: 18, questionText: "Quantos tempos existem em um compasso 3/4?", options: [{ text: "4", isCorrect: false }, { text: "2", isCorrect: false }, { text: "6", isCorrect: false }, { text: "3", isCorrect: true }] },
            { id: 19, questionText: "Quantos tempos existem em um compasso 2/2?", options: [{ text: "2", isCorrect: true }, { text: "1", isCorrect: false }, { text: "3", isCorrect: false }, { text: "4", isCorrect: false }] },
            { id: 20, questionText: "Em compasso 6/8, quantos tempos compostos existem?", options: [{ text: "6", isCorrect: false }, { text: "2", isCorrect: true }, { text: "3", isCorrect: false }, { text: "4", isCorrect: false }] },
            { id: 21, questionText: "Quantas semicolcheias existem em uma colcheia?", options: [{ text: "1", isCorrect: false }, { text: "2", isCorrect: true }, { text: "3", isCorrect: false }, { text: "4", isCorrect: false }] },
            { id: 22, questionText: "Quantas colcheias existem em uma mínima?", options: [{ text: "2", isCorrect: false }, { text: "3", isCorrect: false }, { text: "4", isCorrect: true }, { text: "1", isCorrect: false }] },
            { id: 23, questionText: "Quantas semínimas existem em uma mínima?", options: [{ text: "2", isCorrect: true }, { text: "3", isCorrect: false }, { text: "4", isCorrect: false }, { text: "1", isCorrect: false }] },
            { id: 24, questionText: "Quantas semínimas existem em um compasso 2/4?", options: [{ text: "2", isCorrect: true }, { text: "1", isCorrect: false }] },
        ]
      },
      {
        id: "m1t4",
        title: "Escalas e Intervalos",
        questions: [
          { id: 25, questionText: "Qual intervalo existe entre Dó e Mi?", options: [{ text: "Terça maior", isCorrect: true }, { text: "Segunda menor", isCorrect: false }, { text: "Quarta justa", isCorrect: false }, { text: "Quinta justa", isCorrect: false }] },
          { id: 26, questionText: "Qual intervalo existe entre Fá e Lá?", options: [{ text: "Terça maior", isCorrect: true }, { text: "Segunda maior", isCorrect: false }, { text: "Sexta menor", isCorrect: false }, { text: "Quarta justa", isCorrect: false }] },
          { id: 27, questionText: "Qual intervalo existe entre Ré e Fá?", options: [{ text: "Terça menor", isCorrect: true }, { text: "Terça maior", isCorrect: false }, { text: "Segunda maior", isCorrect: false }, { text: "Quinta justa", isCorrect: false }] },
          { id: 28, questionText: "Qual intervalo existe entre Sol e Dó?", options: [{ text: "Quarta justa", isCorrect: true }, { text: "Terça maior", isCorrect: false }, { text: "Quinta justa", isCorrect: false }, { text: "Sexta maior", isCorrect: false }] },
          { id: 29, questionText: "Qual é a nota que completa a escala de Dó maior após Ré?", options: [{ text: "Mi", isCorrect: true }, { text: "Fá", isCorrect: false }, { text: "Sol", isCorrect: false }, { text: "Lá", isCorrect: false }] },
          { id: 30, questionText: "Qual é a nota que completa a escala de Sol maior após Fá#?", options: [{ text: "Si", isCorrect: false }, { text: "Sol", isCorrect: true }, { text: "Dó", isCorrect: false }, { text: "Lá", isCorrect: false }] },
          { id: 31, questionText: "Qual é a nota que completa a escala de Fá maior após Mi?", options: [{ text: "Fá", isCorrect: true }, { text: "Sol", isCorrect: false }, { text: "Lá", isCorrect: false }, { text: "Dó", isCorrect: false }] },
          { id: 32, questionText: "Qual é a nota que completa a escala de Ré maior após Dó#?", options: [{ text: "Ré", isCorrect: true }, { text: "Mi", isCorrect: false }] },
        ]
      },
      {
        id: "m1t5",
        title: "Dinâmica e Sinais de Repetição",
        questions: [
            { id: 33, questionText: "O que significa “p” na dinâmica?", options: [{ text: "Forte", isCorrect: false }, { text: "Suave", isCorrect: true }, { text: "Moderado", isCorrect: false }, { text: "Muito forte", isCorrect: false }] },
            { id: 34, questionText: "O que significa \"f\" na dinâmica?", options: [{ text: "Forte", isCorrect: true }, { text: "Suave", isCorrect: false }, { text: "Moderado", isCorrect: false }, { text: "Muito suave", isCorrect: false }] },
            { id: 35, questionText: "O que indica o símbolo fermata ()?", options: [{ text: "Sustentar a nota além da duração", isCorrect: true }, { text: "Aumentar o volume", isCorrect: false }, { text: "Mudar de clave", isCorrect: false }, { text: "Dobrar a velocidade", isCorrect: false }] },
            { id: 36, questionText: "O que indica o símbolo \">\" sobre a nota?", options: [{ text: "Acento", isCorrect: true }, { text: "Ligadura", isCorrect: false }, { text: "Pausa", isCorrect: false }, { text: "Alteração", isCorrect: false }] },
            { id: 37, questionText: "O que indica a ligadura de repetição (tie)?", options: [{ text: "Pausa", isCorrect: false }, { text: "Une notas iguais somando duração", isCorrect: true }, { text: "Une notas diferentes", isCorrect: false }, { text: "Notas pontuadas", isCorrect: false }] },
            { id: 38, questionText: "Qual símbolo indica decrescendo gradual?", options: [{ text: "Diminuendo", isCorrect: true }, { text: "Crescendo", isCorrect: false }, { text: "Staccato", isCorrect: false }, { text: "Ligadura", isCorrect: false }] },
            { id: 39, questionText: "Qual nota representa sustenido (#)?", options: [{ text: "Eleva a nota meio tom", isCorrect: true }, { text: "Mantém a nota igual", isCorrect: false }, { text: "Diminui a nota", isCorrect: false }, { text: "Dobrar a duração", isCorrect: false }] },
            { id: 40, questionText: "Qual nota representa bemol (b)?", options: [{ text: "Diminui a nota meio tom", isCorrect: true }, { text: "Eleva a nota", isCorrect: false }, { text: "Mantém a nota igual", isCorrect: false }, { text: "Dobrar a duração", isCorrect: false }] },
        ]
      }
    ]
  },
  {
    id: "module2",
    title: "Culto Oficial",
    level: "Médio",
    trails: [
      {
        id: "m2t1",
        title: "Armaduras de Clave",
        questions: [
          { id: 41, questionText: "Quantos sustenidos existem na armadura de Sol maior?", options: [{ text: "2", isCorrect: false }, { text: "1", isCorrect: true }, { text: "3", isCorrect: false }, { text: "4", isCorrect: false }] },
          { id: 42, questionText: "Quantos bemóis existem na armadura de Fá maior?", options: [{ text: "2", isCorrect: false }, { text: "1", isCorrect: true }, { text: "3", isCorrect: false }, { text: "4", isCorrect: false }] },
          { id: 43, questionText: "Quais são as notas alteradas na armadura de Ré maior?", options: [{ text: "Fá# e Dó#", isCorrect: true }, { text: "Apenas Fá#", isCorrect: false }, { text: "Apenas Dó#", isCorrect: false }, { text: "Sol# e Ré#", isCorrect: false }] },
          { id: 44, questionText: "Quais são as notas alteradas na armadura de Si bemol maior?", options: [{ text: "Sib e Mib", isCorrect: true }, { text: "Apenas Sib", isCorrect: false }, { text: "Apenas Mib", isCorrect: false }, { text: "Láb e Réb", isCorrect: false }] },
          { id: 45, questionText: "Qual armadura tem 3 sustenidos?", options: [{ text: "Lá maior", isCorrect: true }, { text: "Mi maior", isCorrect: false }, { text: "Ré maior", isCorrect: false }, { text: "Sol maior", isCorrect: false }] },
          { id: 46, questionText: "Qual armadura tem 2 bemóis?", options: [{ text: "Sib maior", isCorrect: true }, { text: "Fá maior", isCorrect: false }, { text: "Mib maior", isCorrect: false }, { text: "Dó maior", isCorrect: false }] },
          { id: 47, questionText: "Quantos sustenidos tem a armadura de Mi maior?", options: [{ text: "4", isCorrect: true }, { text: "3", isCorrect: false }, { text: "5", isCorrect: false }, { text: "2", isCorrect: false }] },
          { id: 48, questionText: "Quais são as notas alteradas na armadura de Lá maior?", options: [{ text: "Fá#, Dó# e Sol#", isCorrect: true }, { text: "Apenas Sol#", isCorrect: false }, { text: "Fá# e Dó#", isCorrect: false }, { text: "Ré#, Lá# e Mi#", isCorrect: false }] },
        ]
      },
      {
        id: "m2t2",
        title: "Intervalos e Tons/Semitons",
        questions: [
            { id: 49, questionText: "Qual intervalo existe entre Dó e Sol?", options: [{ text: "Quinta justa", isCorrect: true }, { text: "Quarta justa", isCorrect: false }, { text: "Terça maior", isCorrect: false }, { text: "Sexta maior", isCorrect: false }] },
            { id: 50, questionText: "Qual intervalo existe entre Ré e Lá?", options: [{ text: "Quinta justa", isCorrect: true }, { text: "Quarta justa", isCorrect: false }, { text: "Terça maior", isCorrect: false }, { text: "Sexta maior", isCorrect: false }] },
            { id: 51, questionText: "Qual intervalo existe entre Fá e Dó?", options: [{ text: "Quinta justa", isCorrect: true }, { text: "Terça maior", isCorrect: false }, { text: "Quarta justa", isCorrect: false }, { text: "Sexta maior", isCorrect: false }] },
            { id: 52, questionText: "Qual intervalo existe entre Mi e Sol?", options: [{ text: "Terça menor", isCorrect: true }, { text: "Terça maior", isCorrect: false }, { text: "Quarta justa", isCorrect: false }, { text: "Quinta justa", isCorrect: false }] },
            { id: 53, questionText: "Qual intervalo existe entre Lá e Dó?", options: [{ text: "Terça menor", isCorrect: true }, { text: "Terça maior", isCorrect: false }, { text: "Quinta justa", isCorrect: false }, { text: "Quarta justa", isCorrect: false }] },
            { id: 54, questionText: "Quantos semitons existem em uma terça maior?", options: [{ text: "3", isCorrect: false }, { text: "4", isCorrect: true }, { text: "5", isCorrect: false }, { text: "2", isCorrect: false }] },
            { id: 55, questionText: "Quantos semitons existem em uma terça menor?", options: [{ text: "3", isCorrect: true }, { text: "4", isCorrect: false }, { text: "5", isCorrect: false }, { text: "2", isCorrect: false }] },
            { id: 56, questionText: "Quantos semitons existem em uma quinta justa?", options: [{ text: "7", isCorrect: true }, { text: "6", isCorrect: false }, { text: "5", isCorrect: false }, { text: "8", isCorrect: false }] },
        ]
      },
      {
        id: "m2t3",
        title: "Compassos Compostos e Simples",
        questions: [
          { id: 57, questionText: "Quantos tempos tem um compasso 12/8?", options: [{ text: "4", isCorrect: true }, { text: "3", isCorrect: false }, { text: "6", isCorrect: false }, { text: "12", isCorrect: false }] },
          { id: 58, questionText: "Quantos tempos tem um compasso 9/8?", options: [{ text: "3", isCorrect: true }, { text: "9", isCorrect: false }, { text: "6", isCorrect: false }, { text: "4", isCorrect: false }] },
          { id: 59, questionText: "Quantos tempos tem um compasso 6/8?", options: [{ text: "2", isCorrect: true }, { text: "3", isCorrect: false }, { text: "6", isCorrect: false }, { text: "4", isCorrect: false }] },
          { id: 60, questionText: "Quantos tempos tem um compasso 3/4?", options: [{ text: "3", isCorrect: true }, { text: "4", isCorrect: false }, { text: "2", isCorrect: false }, { text: "1", isCorrect: false }] },
          { id: 61, questionText: "Quantos tempos tem um compasso 2/4?", options: [{ text: "2", isCorrect: true }, { text: "4", isCorrect: false }, { text: "3", isCorrect: false }, { text: "1", isCorrect: false }] },
          { id: 62, questionText: "Quantas colcheias existem em um compasso 6/8?", options: [{ text: "6", isCorrect: true }, { text: "3", isCorrect: false }, { text: "4", isCorrect: false }, { text: "2", isCorrect: false }] },
          { id: 63, questionText: "Quantas semínimas existem em um compasso 4/4?", options: [{ text: "4", isCorrect: true }, { text: "3", isCorrect: false }, { text: "2", isCorrect: false }, { text: "1", isCorrect: false }] },
          { id: 64, questionText: "Quantas semicolcheias existem em um compasso 2/4?", options: [{ text: "8", isCorrect: true }, { text: "6", isCorrect: false }, { text: "4", isCorrect: false }, { text: "2", isCorrect: false }] },
        ]
      },
      {
        id: "m2t4",
        title: "Escalas Maiores e Menores",
        questions: [
          { id: 65, questionText: "Qual é a mediante (III grau) da escala de Dó maior?", options: [{ text: "Mi", isCorrect: true }, { text: "Ré", isCorrect: false }, { text: "Dó", isCorrect: false }, { text: "Sol", isCorrect: false }] },
          { id: 66, questionText: "Qual é a sensível (VII grau) da escala de Sol maior?", options: [{ text: "Fá#", isCorrect: true }, { text: "Sol", isCorrect: false }, { text: "Lá", isCorrect: false }, { text: "Ré", isCorrect: false }] },
          { id: 67, questionText: "Qual é a subdominante (IV grau) da escala de Ré maior?", options: [{ text: "Sol", isCorrect: true }, { text: "Fá#", isCorrect: false }, { text: "Mi", isCorrect: false }, { text: "Ré", isCorrect: false }] },
          { id: 68, questionText: "Qual é a sensível (VII grau) da escala de Mi menor harmônica?", options: [{ text: "Ré#", isCorrect: true }, { text: "Sol", isCorrect: false }, { text: "Lá", isCorrect: false }, { text: "Mi", isCorrect: false }] },
          { id: 69, questionText: "Qual é a supertônica (II grau) da escala de Lá menor?", options: [{ text: "Si", isCorrect: true }, { text: "Lá", isCorrect: false }, { text: "Dó", isCorrect: false }, { text: "Ré", isCorrect: false }] },
          { id: 70, questionText: "Qual é a subdominante (IV grau) da escala de Fá maior?", options: [{ text: "Sib", isCorrect: true }, { text: "Mi", isCorrect: false }, { text: "Dó", isCorrect: false }, { text: "Sol", isCorrect: false }] },
          { id: 71, questionText: "Qual é a mediante (III grau) da escala de Si menor?", options: [{ text: "Ré", isCorrect: true }, { text: "Si", isCorrect: false }, { text: "Fá#", isCorrect: false }, { text: "Sol", isCorrect: false }] },
          { id: 72, questionText: "Qual é a dominante (V grau) da escala de Sol menor?", options: [{ text: "Ré", isCorrect: true }, { text: "Lá", isCorrect: false }, { text: "Dó", isCorrect: false }, { text: "Fá", isCorrect: false }] },
        ]
      },
      {
        id: "m2t5",
        title: "Leitura Avançada e Expressividade",
        questions: [
          { id: 73, questionText: "O que indica um staccato?", options: [{ text: "Nota curta e destacada", isCorrect: true }, { text: "Nota longa", isCorrect: false }, { text: "Ligadura", isCorrect: false }, { text: "Crescendo", isCorrect: false }] },
          { id: 74, questionText: "O que indica um legato?", options: [{ text: "Notas conectadas", isCorrect: true }, { text: "Notas curtas", isCorrect: false }, { text: "Acento", isCorrect: false }, { text: "Pausa", isCorrect: false }] },
          { id: 75, questionText: "O que indica o símbolo de crescendo (<)?", options: [{ text: "Aumentar gradualmente o volume", isCorrect: true }, { text: "Diminuir volume", isCorrect: false }, { text: "Pausa", isCorrect: false }, { text: "Notas curtas", isCorrect: false }] },
          { id: 76, questionText: "O que indica o símbolo de diminuendo (>)?", options: [{ text: "Diminuir volume", isCorrect: true }, { text: "Aumentar volume", isCorrect: false }, { text: "Ligadura", isCorrect: false }, { text: "Pausa", isCorrect: false }] },
          { id: 77, questionText: "O que indica um forte?", options: [{ text: "Forte", isCorrect: true }, { text: "Suave", isCorrect: false }, { text: "Moderado", isCorrect: false }, { text: "Muito suave", isCorrect: false }] },
          { id: 78, questionText: "O que indica um piano?", options: [{ text: "Suave", isCorrect: true }, { text: "Forte", isCorrect: false }, { text: "Moderado", isCorrect: false }, { text: "Muito forte", isCorrect: false }] },
          { id: 79, questionText: "O que indica o símbolo de fermata?", options: [{ text: "Sustentar a nota", isCorrect: true }, { text: "Pausa", isCorrect: false }, { text: "Aumentar volume", isCorrect: false }, { text: "Diminuir", isCorrect: false }] },
          { id: 80, questionText: "O que indica um sforzando (sfz)?", options: [{ text: "Nota com acento súbito", isCorrect: true }, { text: "Ligadura", isCorrect: false }, { text: "Crescendo", isCorrect: false }, { text: "Pausa", isCorrect: false }] },
        ]
      }
    ]
  },
  {
    id: "module3",
    title: "Oficialização",
    level: "Especialista",
    trails: [
      {
        id: "m3t1",
        title: "Modos Gregos e Estrutura das Escalas",
        questions: [
          { id: 81, questionText: "Qual modo começa em Dó e segue Dó-Re-Mi-Fá-Sol-Lá-Si-Dó?", options: [{ text: "Dórico", isCorrect: false }, { text: "Jônio", isCorrect: true }, { text: "Frígio", isCorrect: false }, { text: "Lídio", isCorrect: false }] },
          { id: 82, questionText: "Qual modo começa em Ré e segue Ré-Mi-Fá-Sol-Lá-Si-Dó-Ré?", options: [{ text: "Dórico", isCorrect: true }, { text: "Frígio", isCorrect: false }, { text: "Mixolídio", isCorrect: false }, { text: "Lócrio", isCorrect: false }] },
          { id: 83, questionText: "Qual modo começa em Mi e segue Mi-Fá-Sol-Lá-Si-Dó-Ré-Mi?", options: [{ text: "Frígio", isCorrect: true }, { text: "Dórico", isCorrect: false }, { text: "Jônio", isCorrect: false }, { text: "Lídio", isCorrect: false }] },
          { id: 84, questionText: "Qual modo começa em Fá e segue Fá-Sol-Lá-Si-Dó-Ré-Mi-Fá?", options: [{ text: "Lídio", isCorrect: true }, { text: "Mixolídio", isCorrect: false }, { text: "Jônio", isCorrect: false }, { text: "Frígio", isCorrect: false }] },
          { id: 85, questionText: "Qual modo começa em Sol e segue Sol-Lá-Si-Dó-Ré-Mi-Fá-Sol?", options: [{ text: "Mixolídio", isCorrect: true }, { text: "Dórico", isCorrect: false }, { text: "Frígio", isCorrect: false }, { text: "Lídio", isCorrect: false }] },
          { id: 86, questionText: "Qual modo começa em Lá e segue Lá-Si-Dó-Ré-Mi-Fá-Sol-Lá?", options: [{ text: "Eólio", isCorrect: true }, { text: "Jônio", isCorrect: false }, { text: "Lócrio", isCorrect: false }, { text: "Dórico", isCorrect: false }] },
          { id: 87, questionText: "Qual modo começa em Si e segue Si-Dó-Ré-Mi-Fá-Sol-Lá-Si?", options: [{ text: "Lócrio", isCorrect: true }, { text: "Frígio", isCorrect: false }, { text: "Mixolídio", isCorrect: false }, { text: "Eólio", isCorrect: false }] },
          { id: 88, questionText: "Qual modo é considerado a escala menor natural?", options: [{ text: "Jônio", isCorrect: false }, { text: "Eólio", isCorrect: true }, { text: "Dórico", isCorrect: false }, { text: "Lídio", isCorrect: false }] },
        ]
      },
       {
        id: "m3t2",
        title: "Harmonia Funcional e Campo Harmônico",
        questions: [
          { id: 89, questionText: "Qual acorde é o tônico na tonalidade de Dó maior?", options: [{ text: "Dó maior", isCorrect: true }, { text: "Sol maior", isCorrect: false }, { text: "Fá maior", isCorrect: false }, { text: "Ré menor", isCorrect: false }] },
          { id: 90, questionText: "Qual acorde é o dominante na tonalidade de Dó maior?", options: [{ text: "Sol maior", isCorrect: true }, { text: "Dó maior", isCorrect: false }, { text: "Lá menor", isCorrect: false }, { text: "Fá maior", isCorrect: false }] },
          { id: 91, questionText: "Qual acorde é o subdominante na tonalidade de Dó maior?", options: [{ text: "Fá maior", isCorrect: true }, { text: "Dó maior", isCorrect: false }, { text: "Sol maior", isCorrect: false }, { text: "Mi menor", isCorrect: false }] },
          { id: 92, questionText: "Qual é o acorde tônico na tonalidade de Sol maior?", options: [{ text: "Sol maior", isCorrect: true }, { text: "Ré maior", isCorrect: false }, { text: "Dó maior", isCorrect: false }, { text: "Lá menor", isCorrect: false }] },
          { id: 93, questionText: "Qual é o acorde dominante na tonalidade de Sol maior?", options: [{ text: "Ré maior", isCorrect: true }, { text: "Sol maior", isCorrect: false }, { text: "Mi menor", isCorrect: false }, { text: "Dó maior", isCorrect: false }] },
          { id: 94, questionText: "Qual acorde é subdominante em Ré maior?", options: [{ text: "Sol maior", isCorrect: true }, { text: "Ré maior", isCorrect: false }, { text: "Lá maior", isCorrect: false }, { text: "Si menor", isCorrect: false }] },
          { id: 95, questionText: "Qual acorde é relativo menor da tonalidade de Dó maior?", options: [{ text: "Lá menor", isCorrect: true }, { text: "Ré menor", isCorrect: false }, { text: "Mi menor", isCorrect: false }, { text: "Fá maior", isCorrect: false }] },
          { id: 96, questionText: "Qual acorde é relativo menor da tonalidade de Sol maior?", options: [{ text: "Mi menor", isCorrect: true }, { text: "Ré menor", isCorrect: false }, { text: "Lá menor", isCorrect: false }, { text: "Dó maior", isCorrect: false }] },
        ]
      },
      {
        id: "m3t3",
        title: "Alterações, Armaduras e Modulações",
        questions: [
          { id: 97, questionText: "Quais são as notas sustenidas na tonalidade de Ré maior?", options: [{ text: "Fá# e Dó#", isCorrect: true }, { text: "Apenas Fá#", isCorrect: false }, { text: "Apenas Dó#", isCorrect: false }, { text: "Sol# e Ré#", isCorrect: false }] },
          { id: 98, questionText: "Quantos sustenidos tem a armadura de Mi maior?", options: [{ text: "4", isCorrect: true }, { text: "3", isCorrect: false }, { text: "5", isCorrect: false }, { text: "2", isCorrect: false }] },
          { id: 99, questionText: "Quais são as notas alteradas na armadura de Lá maior?", options: [{ text: "Fá#, Dó# e Sol#", isCorrect: true }, { text: "Apenas Sol#", isCorrect: false }, { text: "Fá# e Dó#", isCorrect: false }, { text: "Ré#, Lá# e Mi#", isCorrect: false }] },
          { id: 100, questionText: "Quantos bemóis tem a armadura de Si bemol maior?", options: [{ text: "2", isCorrect: true }, { text: "1", isCorrect: false }, { text: "3", isCorrect: false }, { text: "4", isCorrect: false }] },
          { id: 101, questionText: "Qual é a nota alterada na tonalidade de Fá maior?", options: [{ text: "Sib", isCorrect: true }, { text: "Mi", isCorrect: false }, { text: "Dó", isCorrect: false }, { text: "Sol", isCorrect: false }] },
          { id: 102, questionText: "Qual é o último sustenido na armadura da tonalidade de Dó# maior?", options: [{ text: "Si#", isCorrect: true }, { text: "Mi#", isCorrect: false }, { text: "Lá#", isCorrect: false }, { text: "Ré#", isCorrect: false }] },
          { id: 103, questionText: "Qual modulação comum vai de Dó maior para Sol maior?", options: [{ text: "Subdominante", isCorrect: false }, { text: "Dominante", isCorrect: true }, { text: "Tônica", isCorrect: false }, { text: "Relativa menor", isCorrect: false }] },
          { id: 104, questionText: "Qual modulação comum vai de Ré menor para Fá maior?", options: [{ text: "Relativa maior", isCorrect: true }, { text: "Dominante", isCorrect: false }, { text: "Tônica", isCorrect: false }, { text: "Subdominante", isCorrect: false }] },
        ]
      },
      {
        id: "m3t4",
        title: "Compassos Irregulares e Polirritmia",
        questions: [
          { id: 105, questionText: "Quantos tempos tem um compasso 5/4?", options: [{ text: "5", isCorrect: true }, { text: "4", isCorrect: false }, { text: "3", isCorrect: false }, { text: "6", isCorrect: false }] },
          { id: 106, questionText: "Quantos tempos tem um compasso 7/8?", options: [{ text: "7", isCorrect: true }, { text: "8", isCorrect: false }, { text: "6", isCorrect: false }, { text: "4", isCorrect: false }] },
          { id: 107, questionText: "Quantos tempos tem um compasso 11/8?", options: [{ text: "11", isCorrect: true }, { text: "4", isCorrect: false }, { text: "8", isCorrect: false }, { text: "6", isCorrect: false }] },
          { id: 108, questionText: "Em polirritmia, se uma mão toca 3 e outra 2, qual é a combinação?", options: [{ text: "3:2", isCorrect: true }, { text: "2:3", isCorrect: false }, { text: "3:3", isCorrect: false }, { text: "2:2", isCorrect: false }] },
          { id: 109, questionText: "Quantos tempos tem um compasso 13/8?", options: [{ text: "13", isCorrect: true }, { text: "12", isCorrect: false }, { text: "14", isCorrect: false }, { text: "10", isCorrect: false }] },
          { id: 110, questionText: "Quantos tempos tem um compasso 5/8?", options: [{ text: "5", isCorrect: true }, { text: "4", isCorrect: false }, { text: "6", isCorrect: false }, { text: "3", isCorrect: false }] },
          { id: 111, questionText: "Qual é a polirritmia comum entre 4 e 3?", options: [{ text: "4:3", isCorrect: true }, { text: "3:3", isCorrect: false }, { text: "2:3", isCorrect: false }, { text: "3:2", isCorrect: false }] },
          { id: 112, questionText: "Qual compasso é considerado irregular?", options: [{ text: "7/8", isCorrect: true }, { text: "4/4", isCorrect: false }, { text: "3/4", isCorrect: false }, { text: "6/8", isCorrect: false }] },
        ]
      },
      {
        id: "m3t5",
        title: "Interpretação e Dinâmica Avançada",
        questions: [
          { id: 113, questionText: "O que indica sfz?", options: [{ text: "Acento súbito", isCorrect: true }, { text: "Crescendo", isCorrect: false }, { text: "Legato", isCorrect: false }, { text: "Staccato", isCorrect: false }] },
          { id: 114, questionText: "O que indica fp?", options: [{ text: "Forte e subito piano", isCorrect: true }, { text: "Fortissimo", isCorrect: false }, { text: "Pianissimo", isCorrect: false }, { text: "Crescendo", isCorrect: false }] },
          { id: 115, questionText: "O que indica sffz?", options: [{ text: "Fortissimo com acento súbito", isCorrect: true }, { text: "Pianissimo", isCorrect: false }, { text: "Legato", isCorrect: false }, { text: "Staccato", isCorrect: false }] },
          { id: 116, questionText: "O que indica mp?", options: [{ text: "Mezzo piano", isCorrect: true }, { text: "Mezzo forte", isCorrect: false }, { text: "Forte", isCorrect: false }, { text: "Piano", isCorrect: false }] },
          { id: 117, questionText: "O que indica mf?", options: [{ text: "Mezzo forte", isCorrect: true }, { text: "Mezzo piano", isCorrect: false }, { text: "Forte", isCorrect: false }, { text: "Piano", isCorrect: false }] },
          { id: 118, questionText: "O que indica ppp?", options: [{ text: "Pianississimo", isCorrect: true }, { text: "Pianissimo", isCorrect: false }, { text: "Forte", isCorrect: false }, { text: "Mezzo piano", isCorrect: false }] },
          { id: 119, questionText: "O que indica fff?", options: [{ text: "Fortississimo", isCorrect: true }, { text: "Forte", isCorrect: false }, { text: "Mezzo forte", isCorrect: false }, { text: "Piano", isCorrect: false }] },
          { id: 120, questionText: "O que indica cresc.?", options: [{ text: "Aumentar gradualmente o volume", isCorrect: true }, { text: "Diminuir volume", isCorrect: false }, { text: "Staccato", isCorrect: false }, { text: "Legato", isCorrect: false }] },
        ]
      }
    ]
  }
];