import serverless from "serverless-http";
import app from "../server"; // Import the Express app

export default serverless(app); // Wrap the app in serverless-http
