# Excel Avançado — projeto para Vercel

Este pacote contém a landing page completa do Excel Avançado, incluindo:

- página principal responsiva;
- espaço configurável para o vídeo;
- área de membros, bônus, certificado, oferta e FAQ;
- Política de Privacidade;
- Termos de Uso;
- todas as imagens utilizadas pelo site.

## Antes de publicar

O site está configurado para receber dois links por variáveis de ambiente:

1. `NEXT_PUBLIC_CHECKOUT_URL`: link completo do checkout da Kiwify.
2. `NEXT_PUBLIC_VIDEO_EMBED_URL`: link de incorporação do vídeo.

Você pode configurar essas variáveis na Vercel em **Settings → Environment Variables**. Sem elas, o site continua funcionando, mas mostra avisos provisórios ao clicar no vídeo ou na compra.

## Publicar pela Vercel usando GitHub

1. Crie um repositório vazio no GitHub.
2. Extraia este ZIP no computador.
3. No repositório, clique em **Add file → Upload files**.
4. Envie as pastas `app`, `public` e todos os arquivos da raiz. Não envie o ZIP fechado.
5. Acesse `vercel.com/new` e entre na sua conta.
6. Clique em **Import** ao lado do repositório.
7. A Vercel reconhecerá **Next.js** automaticamente. Não altere Build Command, Output Directory ou Install Command.
8. Em **Environment Variables**, adicione o checkout e o vídeo.
9. Clique em **Deploy**.

Depois, cada alteração enviada ao repositório será publicada automaticamente.

## Publicar diretamente pelo computador

Com Node.js instalado, abra esta pasta no terminal e execute:

```bash
npm install
npx vercel login
npx vercel
```

Para colocar a versão definitiva em produção:

```bash
npx vercel --prod
```

## Testar antes de publicar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Onde editar

- Textos, seções e preço: `app/site-client.tsx`
- Cores, tamanhos e visual: `app/globals.css`
- SEO e título do navegador: `app/layout.tsx`
- Política de Privacidade: `app/politica-de-privacidade/page.tsx`
- Termos de Uso: `app/termos-de-uso/page.tsx`
- Imagens: `public/assets`

## Domínio próprio

Depois do deploy, abra o projeto na Vercel e acesse **Settings → Domains**. Digite o domínio desejado e siga os registros DNS exibidos pela própria Vercel.

## Observações importantes

- O preço atualmente escrito na página é **R$ 97,00**. Altere `app/site-client.tsx` se a oferta final for R$ 147,00.
- Confira a liberação do certificado antes da venda, pois seus materiais anteriores mencionaram 7 e 8 dias em momentos diferentes.
