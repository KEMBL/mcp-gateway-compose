
FROM node:22-alpine

WORKDIR /app
#RUN npm init -y

COPY package.json ./
COPY mcp-server.js ./

RUN npm install @modelcontextprotocol/sdk

ENV NODE_ENV=production
CMD ["node", "mcp-server.js"]
