# About

This simple project shows how to use Docker MCP gateway with a simple STDIO MCP server.

Gateway is required to convert STDIO server type into Server-Sent Events (SSE).

# Secrets

Simple STDIO MCP server when started receives environment value with a secret from `mcp-gateway\secrets.env` file.

# How it works

After command line operation `docker compose up --build` is performed this happens:
- image `mcpserver-mcp-image` is built
- `mcp-gateway` service is started and uses built image in a local catalog configuration file `docker-mcp.yaml`

