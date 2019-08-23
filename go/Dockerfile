FROM golang:1.12-alpine AS builder

RUN apk add git

WORKDIR /app

COPY . .

RUN go mod download
RUN go build -o go-project src/main.go

FROM alpine:3.8 AS runner

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 8080
CMD ["sh" , "-c", "./go-project"];