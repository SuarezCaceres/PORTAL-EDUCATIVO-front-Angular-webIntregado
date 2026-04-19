# Docker - Portal Educativo WebSanAgustin

## Archivos creados:
- `Dockerfile` - Configuración para construir la imagen Docker
- `docker-compose.yml` - Orquestación de servicios
- `.dockerignore` - Archivos a ignorar en el build
- `nginx.conf` - Configuración del servidor web

## Comandos Docker:

### Para producción:
```bash
# Construir y ejecutar en producción
npm run docker:prod

# O manualmente:
docker-compose up
```

### Para desarrollo:
```bash
# Ejecutar con hot-reload
npm run docker:dev

# O manualmente:
docker-compose --profile dev up
```

### Comandos individuales:
```bash
# Construir imagen
npm run docker:build

# Ejecutar contenedor
npm run docker:run

# Limpiar contenedores e imágenes
docker-compose down
docker system prune -f
```

## Acceso:
- **Producción**: http://localhost:80
- **Desarrollo**: http://localhost:4200

## Notas:
- La imagen de producción usa Nginx para servir archivos estáticos
- El modo desarrollo permite hot-reload con ng serve
- El build está optimizado con multi-stage para reducir tamaño de imagen
