# CloudFlare_Worker_urlShortner
Some basic commands of cloudflare worker to initiliaze and deploy worker project
First need to install wrangler to use worker cli with the help of command - npm install -g wrangler
Second authentication required to start creation of worker project - wrangler login
To create new project - wrangler init <Worker_Project_Name>
To create KV Namespace (Key Value data store Name) - wrangler kv:namespace create "Your_KV_Namespace_Name"
To deploy code - wrangler publish
