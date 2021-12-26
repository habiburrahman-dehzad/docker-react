FROM node:alpine as builder
WORKDIR /app/frontend
COPY package.json .
RUN yarn install
COPY public .
COPY . .
RUN yarn build

FROM nginx
COPY --from=builder /app/frontend/build /usr/share/nginx/html