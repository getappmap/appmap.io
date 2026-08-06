# Language pass on /how-it-works

Goal: convert the page from "behavioral model" / "one model" vocabulary to the current recording-based language used on the homepage. One recorded application run produces diagrams developers can understand and evidence AI can trust. All technical detail stays accurate: MCP tool names, language agent mechanisms, capture sources.

Single file: `src/routes/how-it-works.tsx`.

## 1. New opening thesis

Insert between the H1 and the existing introductory paragraph, as a standalone prominent paragraph (not a heading), sized about 22px on mobile and 26px on desktop, in headline ink `#f2effb`, semibold, max width matching the intro:

> Source code tells you what software could do. Runtime behavior tells you what it actually did.

The existing intro paragraph stays directly below it, at its current 19px muted styling.

## 2. Meta description

Current:
> AppMap builds and updates the behavioral model of your application every time it runs. Here is what it captures, the views it produces, and how it reaches your AI agent.

Replacement:
> AppMap records your application as it runs. Here is what one recording captures, the views it produces, and how that evidence reaches your AI agent.

## 3. Page introduction paragraph

Current:
> Every time your software runs, AppMap builds and updates the behavioral model of your application. Here is what it captures, the views it produces, and how it reaches your AI agent.

Replacement:
> Every time your software runs, AppMap records what actually happened. Here is what one recording captures, the views it produces, and how that evidence reaches your AI agent.

## 4. Capture diagram caption

Current:
> One execution. Six signals tap off the same run, all written into one behavioral model.

Replacement:
> One execution. Six signals tap off the same run, all written into one recording.

## 5. H2 above the MCP tool cards

Current:
> How the behavioral model reaches your agent

Replacement:
> How the recording reaches your agent

The four MCP cards below it are unchanged: `get_call_tree`, `find_calls`, `find_queries`, `find_requests`, with their existing descriptions.

## 6. "What is AppMap?" body paragraph

Current:
> AppMap helps developers and AI coding agents understand what software actually does at runtime. It captures application behavior in the editor and turns it into a behavioral model that humans can review and AI agents can query over MCP.

Replacement:
> AppMap helps developers and AI coding agents understand what software actually does at runtime. It records the application in the editor and turns that run into diagrams humans can review and evidence AI agents can query over MCP.

## 7. FAQ answers (these also feed the JSON-LD schema)

**FAQ: "What does AppMap do?"**

Current:
> AppMap helps developers and AI coding agents understand what software actually does at runtime. It captures application behavior in the editor and turns it into a behavioral model that humans can review and AI agents can query over MCP.

Replacement (same wording as section 6, so page and schema stay in sync):
> AppMap helps developers and AI coding agents understand what software actually does at runtime. It records the application in the editor and turns that run into diagrams humans can review and evidence AI agents can query over MCP.

**FAQ question text: "What is the behavioral model of your software?"**

Replacement question:
> What does an AppMap recording contain?

Current answer:
> It is the continuously updated record of how your application runs: function calls, SQL queries, HTTP traffic, exceptions, and the relationships between them. Every map, view, and review is drawn from that one model. Captured via a language agent (Java -javaagent, Python, Ruby, Node) from tests, requests, or a running process.

Replacement answer:
> It is a record of how your application actually ran: function calls, SQL queries, HTTP traffic, exceptions, and the relationships between them. Every map, view, and review is drawn from that one recording. Captured via a language agent (Java -javaagent, Python, Ruby, Node) from tests, requests, or a running process.

**FAQ: "How does AppMap work with MCP?"**

Current:
> AppMap exposes the behavioral model over the Model Context Protocol. Agents call get_call_tree, find_calls, find_queries, and find_requests over the AppMap MCP server to read the same evidence you see in your editor.

Replacement:
> AppMap exposes the recording over the Model Context Protocol. Agents call get_call_tree, find_calls, find_queries, and find_requests over the AppMap MCP server to read the same evidence you see in your editor.

**FAQ: "Does AppMap send code or runtime data to the cloud?"**

Current:
> No. AppMap records and analyzes behavior locally. The model stays with your editor and your repository by default, with no egress.

Replacement:
> No. AppMap records and analyzes behavior locally. Recordings stay with your editor and your repository by default, with no egress.

The remaining FAQ items (AI-generated code review, agent compatibility, where runtime behavior is stored) already use recording language and are unchanged.

## 8. Link labels to /architecture

Two buttons currently read "Where the model lives". Both change to:

> Where recordings live

## Technical notes

- The JSON-LD `FAQPage` schema is generated from the same `faqs` array, so editing the array updates the structured data automatically. No separate schema edit is needed, and question and answer text stay identical between the visible accordion and the schema.
- Banned terms ("Navie", "Runtime Intelligence", "Behavioral Intelligence") are not introduced. No em-dashes in any new copy.
- No layout, color token, image, route, or component structure changes beyond the one inserted paragraph.
