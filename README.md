# ATOMI Pack Showroom — Landing Page Promocional

Landing page profissional para a promoção Pack Showroom de Fevereiro/Março 2026 da **ATOMI** — bikes e patinetes elétricos.

## 🎨 Versões Disponíveis

| Rota | Tema | Descrição |
|------|------|-----------|
| `/v1` | **Dark Orange** | Tema escuro com acento laranja, estilo do catálogo ATOMI |
| `/v2` | **Dark Purple/Gold** | Tema escuro com gradiente roxo/dourado, estilo Páscoa 2026 |

## 🚀 Como rodar em uma máquina nova

### Pré-requisitos
- [Node.js](https://nodejs.org/) versão 18 ou superior
- [Git](https://git-scm.com/)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/Thiagogradev85/atomi-promo-landing.git

# 2. Entre na pasta do projeto
cd atomi-promo-landing

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse no navegador:
- **Versão 1 (Dark Orange):** http://localhost:5173/v1
- **Versão 2 (Dark Purple/Gold):** http://localhost:5173/v2

## 🛠️ Scripts disponíveis

```bash
npm run dev       # Inicia servidor de desenvolvimento
npm run build     # Gera build de produção (pasta /dist)
npm run preview   # Preview do build de produção
```

## 📁 Estrutura do Projeto

```
atomi-promo-landing/
├── public/
│   └── images/          ← ⭐ COLOQUE AS FOTOS DOS PRODUTOS AQUI
│       ├── m201.jpg
│       ├── l10.jpg
│       ├── zx202.jpg
│       ├── zx201.jpg
│       ├── zx161.jpg
│       └── c1.jpg
├── src/
│   ├── components/      ← Componentes reutilizáveis
│   ├── data/
│   │   └── products.js  ← Dados e preços dos produtos
│   ├── pages/
│   │   ├── LandingV1.jsx  ← Versão Dark Orange
│   │   └── LandingV2.jsx  ← Versão Dark Purple/Gold
│   └── App.jsx
└── ...
```

## 🖼️ Adicionando as Fotos dos Produtos

Coloque as imagens na pasta `public/images/` com os seguintes nomes:

| Arquivo | Produto |
|---------|---------|
| `m201.jpg` | ATOMI M201 |
| `l10.jpg` | ATOMI L10 |
| `zx202.jpg` | ATOMI ZX202 |
| `zx201.jpg` | ATOMI ZX201 |
| `zx161.jpg` | ATOMI ZX161 |
| `c1.jpg` | ATOMI C1 |

> **Dica:** Use imagens PNG ou WEBP para melhor qualidade. Renomeie a extensão no arquivo `src/data/products.js` se necessário.

## 📱 Configurar WhatsApp

Edite o arquivo `src/components/WhatsAppButton.jsx` e `src/components/ContactForm.jsx`:

```js
// Substitua pelo número real com código do país (sem espaços ou +)
const WHATSAPP_NUMBER = '5511999999999'; // Ex: 55 (Brasil) + DDD + número
```

## 🔧 Personalização

### Alterar preços ou dados dos produtos
Edite `src/data/products.js`

### Alterar data de encerramento da promoção
Edite `src/components/CountdownTimer.jsx`:
```js
const TARGET_DATE = new Date('2026-03-31T23:59:59');
```

## 📤 Publicar no GitHub

```bash
# Inicialize o git (se ainda não tiver)
git init

# Adicione o repositório remoto
git remote add origin https://github.com/Thiagogradev85/atomi-promo-landing.git

# Adicione todos os arquivos
git add .

# Crie o commit inicial
git commit -m "feat: ATOMI Pack Showroom landing page - 2 versões"

# Envie para o GitHub
git push -u origin main
```

## 🌐 Deploy Gratuito (Vercel)

```bash
# Instale a CLI da Vercel
npm install -g vercel

# Faça o deploy
vercel

# Ou conecte diretamente pelo site:
# https://vercel.com/new → Import do GitHub → Deploy automático
```

## 🛒 Produtos na Promoção

| Modelo | De | Por | Desconto |
|--------|-----|-----|----------|
| M201 | R$ 5.180,00 | R$ 5.049,00 | 3% |
| L10 | R$ 3.480,00 | R$ 3.349,00 | 4% |
| ZX202 | R$ 4.980,00 | R$ 4.749,00 | 5% |
| ZX201 | R$ 4.980,00 | R$ 4.749,00 | 5% |
| ZX161 | R$ 4.980,00 | R$ 2.579,00 | 48% |
| C1 | R$ 1.980,00 | R$ 1.849,00 | 7% |

> Mínimo 4 unidades por pedido. Exclusivo Pack Showroom.

---

© 2026 ATOMI Pack Showroom. Todos os direitos reservados.
