# axia-lp

Landing page do Axia Flow (AXIA BPO).

## Estrutura (só isso importa)

| Pasta | Função |
|-------|--------|
| `src/` | Código-fonte React (**único lugar para editar a LP**) |
| `public/` | Imagens e favicon usados no site |
| `docs/` | Build gerado para o GitHub Pages (**não editar à mão**) |
| `index.html` | Entrada do Vite em desenvolvimento |

`dist/` é build local temporário (ignorado no git).  
Prints brutos de referência ficam em `.references/` (ignorado no git).

## Comandos

```bash
npm install
npm run dev      # desenvolvimento
npm run pages    # gera docs/ e publica no Pages após git push
```

Depois de `npm run pages`:

```bash
git add docs src public
git commit -m "chore: atualiza build do GitHub Pages"
git push
```

## GitHub Pages

- Branch: `main`
- Folder: `/docs`
- URL: https://matheustavaresz.github.io/axia-lp/
