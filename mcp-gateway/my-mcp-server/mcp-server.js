import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"

// Check for API key environment variable
const apiKey = process.env.API_KEY;
if (!apiKey) {
    console.error('ERROR: API_KEY environment variable is required');
    process.exit(1);
}

const server = new McpServer({
  name: "MCP Server test",
  version: "1.0.0",
})

server.tool(
  "get_api_key",
  "Get the API key",
  {},
  async () => ({
    content: [{ type: "text", text: process.env.API_KEY || "API_KEY environment variable not set" }],
  })
)

const transport = new StdioServerTransport()
await server.connect(transport)