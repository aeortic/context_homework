# context_homework
Practice setting up a project with a simple UX

## Running the server
- go to the /context-node directory
- run `yarn dev`

## Running the SPA
- go to the /context-app directory
- run `yarn dev`

## Task
Create an application that provides a list of clients and their detailed information. This should be composed of a both a client and a server part.

### Requirements
    • Client data is stored in clients.json (attached) and will be loaded via rest.
    • Each client list item will display a small avatar (link available within the clients.json), the client’s name, and job title. When user clicks on an item, it will display Client Details.
    • UI solution should provide the ability to filter by any client property, not only those showed in the clients list. List will be updated as the search terms are entered.
    • The client detail view will contain a full size avatar (128x128px) and all other client information.
    • The source project must provide linting, tests, and be fully executable by running “npm run dev” at which point the app will be accessible at http://localhost:3000.
