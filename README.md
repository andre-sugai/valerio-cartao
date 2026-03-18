# Orbee360 - Página de Avaliações Google Maps

## Sobre o Projeto

Esta é uma aplicação web desenvolvida para a **Orbee360**, empresa especializada em **Tour Virtual com Fotos 360º** e **otimização de Google Meu Negócio**. A página foi criada para facilitar a coleta de avaliações no Google Maps dos clientes da Orbee360.

## Funcionalidades

- ✨ **Interface moderna e responsiva** com animações suaves
- ⭐ **Sistema de avaliação com 5 estrelas** interativo
- 📝 **100+ frases pré-escritas** otimizadas com palavras-chave relevantes
- 📱 **QR Code** para acesso rápido via mobile
- 🎯 **Redirecionamento direto** para Google Maps
- 📋 **Botão de copiar** frases sugeridas
- 🔄 **Gerador de frases aleatórias**

## Palavras-chave Incluídas

As frases foram otimizadas com termos relevantes para o negócio da Orbee360:

- Tour Virtual
- Fotos 360º
- Google Maps
- Google Meu Negócio
- Google
- Marketing Digital
- SEO Local

## Tecnologias Utilizadas

- **React 18** com TypeScript
- **Vite** como bundler
- **Tailwind CSS** para estilização
- **shadcn/ui** para componentes de interface
- **Lucide React** para ícones
- **React Router** para navegação

## Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Navegue até o diretório
cd orbee360-review-page

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Build para desenvolvimento
npm run build:dev

# Lint do código
npm run lint

# Preview da build
npm run preview
```

## Personalização

### Atualizando o Link do Google Maps

No arquivo `src/components/ReviewPage.tsx`, atualize a URL na função `handleGoogleMapsReview`:

```typescript
const handleGoogleMapsReview = () => {
  const googleMapsUrl = 'https://g.page/r/[SEU_GOOGLE_MAPS_ID]/review';
  window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
};
```

### Substituindo o Logo

Substitua o arquivo `src/assets/wine-bar-logo.png` pelo logo da Orbee360.

### Atualizando o QR Code

Substitua o arquivo `src/assets/qr-code-placeholder.png` pelo QR Code real que direciona para o Google Maps da Orbee360.

## Estrutura do Projeto

```
src/
├── components/
│   ├── ui/              # Componentes shadcn/ui
│   ├── ReviewPage.tsx   # Página principal
│   ├── StarRating.tsx   # Componente de estrelas
│   └── CopyButton.tsx   # Botão de copiar
├── data/
│   └── phrases.ts       # 100 frases otimizadas
├── assets/
│   ├── wine-bar-logo.png    # Logo (substituir)
│   └── qr-code-placeholder.png # QR Code (substituir)
└── pages/
    ├── Index.tsx        # Página inicial
    └── NotFound.tsx     # Página 404
```

## Deploy

O projeto pode ser facilmente deployado em qualquer plataforma que suporte aplicações React:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

## Contato

**Orbee360**

- Website: [www.orbee360.com.br](https://www.orbee360.com.br)
- Instagram: [@orbee360](https://www.instagram.com/orbee360)

---

_Especialistas em Tour Virtual com Fotos 360º e Google Meu Negócio_
