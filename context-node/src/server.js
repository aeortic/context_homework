import {app} from './index.js';

// Start server
app.listen(process.env.PORT || 3001, () => {
  console.log("node is online.")
});
