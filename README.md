# Pokego

App de práctica hecha con Expo, React Native, TypeScript y Expo Router. Consulta los primeros 20 Pokémon de [PokéAPI](https://pokeapi.co/), muestra su tipo y sus imágenes de frente y de espaldas. Al tocar una tarjeta, puedes ver la imagen de frente en grande sobre un fondo del color de su tipo.

## Instalación

Necesitas Node.js 24, npm y conexión a internet para consultar PokéAPI.

```bash
git clone https://github.com/LucasMejiaDiaz/pokego.git
cd pokego
npm ci
```

## Ejecutar el proyecto

### En el navegador

```bash
npm run web
```

Abre la URL que Expo muestra en la terminal. En la web, los detalles se abren como una pantalla del navegador.

### En el celular

```bash
npx expo start --go
```

Conecta tu computadora y tu celular a la misma red Wi-Fi. Escanea el QR de la terminal con Expo Go en Android o con la cámara en iOS. Sigue las instrucciones de inicio de sesión de Expo si aparecen. En la app nativa, los detalles se abren en un panel que se puede arrastrar entre distintas alturas. [Guía para abrir una app de Expo en el celular](https://docs.expo.dev/get-started/start-developing/#open-the-app-on-your-device)

## Estructura

- `src/app/index.tsx` consulta PokéAPI, arma las tarjetas y pasa el nombre, tipo, imagen y color a la ruta de detalles.
- `src/app/details.tsx` lee esos parámetros y muestra la tarjeta ampliada.
- `src/app/_layout.tsx` configura la navegación y el panel de detalles.

## Verificar el proyecto

```bash
npm run lint
npx tsc --noEmit
```

Los datos y las imágenes de los Pokémon se consultan en [PokéAPI](https://pokeapi.co/). La licencia del código está en [LICENSE](LICENSE).
