FROM alpine:3.18
RUN apk add --no-cache bash curl
# Copy your script into the container
COPY entrypoint.sh /entrypoint.sh
# Make it executable
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]