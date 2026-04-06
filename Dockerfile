FROM node:22-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund

FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json ./
COPY index.html ./index.html
COPY postcss.config.mjs ./postcss.config.mjs
COPY vite.config.ts ./vite.config.ts
COPY public ./public
COPY src ./src

ARG VITE_Book_an_Enterprise_Discovery_Call_Redirect_URL="https://selecttime.appointy.com/appointy85l?service=srv_01KJCES1E93X3KBEW3GS7MHBRB"
ENV VITE_Book_an_Enterprise_Discovery_Call_Redirect_URL=${VITE_Book_an_Enterprise_Discovery_Call_Redirect_URL}

RUN npm run build

FROM nginx:1.27-alpine AS runtime

LABEL org.opencontainers.image.title="enterprise-landing-page-design"
LABEL org.opencontainers.image.description="Static enterprise landing page served by nginx"

RUN addgroup -S -g 10001 appgroup \
  && adduser -S -D -H -u 10001 -G appgroup appuser \
  && mkdir -p /var/cache/nginx /var/log/nginx /tmp \
  && chown -R appuser:appgroup /var/cache/nginx /var/log/nginx /usr/share/nginx/html /tmp \
  && sed -i 's|^user .*;|# user disabled for non-root runtime;|g' /etc/nginx/nginx.conf \
  && sed -i 's|^pid .*;|pid /tmp/nginx.pid;|g' /etc/nginx/nginx.conf

COPY --chown=10001:10001 nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder --chown=root:root /app/dist /usr/share/nginx/html

USER 10001:10001

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]