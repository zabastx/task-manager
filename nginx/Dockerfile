FROM nginx:1.29-alpine

# RUN apk add --no-cache \
# 	nginx-mod-http-brotli \
# 	brotli

RUN apk add --no-cache \
	nginx=1.29.0 \
	nginx-mod-http-brotli=1.29.0 \
	brotli

COPY nginx.dev.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]
