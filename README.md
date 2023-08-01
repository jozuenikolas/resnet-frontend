# Resnet Frontend

SPA del sistema ResNet

## Tabla de contenidos

- [Descripción](#descripcion)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalacion)
- [Uso](#uso)
- [Características](#caracteristicas)
- [Contribución](#contribucion)
- [Licencia](#licencia)

## Descripción

Frontend del sistema web ResNet que tiene como propósito extraer y presentar datos de redes de coautoría de investigadores ecuatorianos. Esta herramienta ofrece la posibilidad de visualizar información académica, buscar expertos en áreas de investigación y analizar temas relacionados. Para mejorar la precisión en las búsquedas, se han implementado técnicas de Information Retrieval. El objetivo principal es proporcionar a los usuarios una experiencia eficiente en la exploración y análisis de información académica.

## Requisitos previos

* Node.js (versión 18.13.0)
* Npm (versión 8.19.3)
* Angular CLI (versión 15.1.2)

## Instalación

1. Clona el repositorio: `git clone https://github.com/jozuenikolas/resnet-frontend.git`
2. Ingresa al directorio del proyecto: `cd resnet-frontend`
3. Instala las dependencias: `npm install`

## Uso

### Ambiente de Desarrollo

Para ejecutar el proyecto en el ambiente de desarrollo, utiliza el siguiente comando:

```bash
ng serve -c development
```

Este comando iniciará el servidor de desarrollo y podrás acceder al proyecto en http://localhost:4200/.

### Ambiente de Producción

Para ejecutar el proyecto en el ambiente de producción, utiliza el siguiente comando:

```bash
ng serve -c production
```

Este comando también iniciará el servidor, pero se optimizará para la producción, lo que significa que se aplicarán técnicas de minificación y agrupación para obtener un mejor rendimiento.

## Licencia

Este proyecto está bajo la Licencia MIT
