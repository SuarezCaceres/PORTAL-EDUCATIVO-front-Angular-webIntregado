# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar todas las dependencias (incluyendo devDependencies para el build)
RUN npm ci

# Copiar código fuente
COPY . .

# Construir la aplicación
RUN npm run build


# Etapa 2: Producción
FROM nginx:alpine

# Copiar archivos de configuración de nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copiar archivos build al directorio de nginx
COPY --from=builder /app/dist/web-san-agustin/browser /usr/share/nginx/html

# Exponer puerto 80
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
