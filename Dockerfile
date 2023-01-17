FROM node:18-alpine3.16 AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm install --frozen-lockfile

FROM node:18-alpine3.16 AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine3.16 AS runner
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --prod
COPY --from=build /app/dist ./dist

# RUN adduser --disable-password newsfestuser
# RUN chown -R newsfestuser:newsfestuser /app
# USER newsfestuser

# RUN npm cache clean --force

FROM nginx:alpine
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/app/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]