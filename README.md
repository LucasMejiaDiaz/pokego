# Pokego

App de Expo y React Native que muestra los nombres de los primeros 20 Pokémon de [PokéAPI](https://pokeapi.co/). La lista requiere conexión a internet.

## Ejecutar en la web

Con Node.js 24 y npm, abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm ci
npm run web
```

Abre la URL que muestra Expo en la terminal.

## Verificar el proyecto

```bash
npm run lint
npx tsc --noEmit
npx expo export --platform web
```
