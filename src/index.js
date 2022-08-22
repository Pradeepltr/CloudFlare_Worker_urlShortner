/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request,env) {
		let param=new URL(request.url).searchParams.get('shortUrl')
		if(param!=null)
		{
			try{
            const redirectUrl=await env.url.get(param);
			// return new Response(`here redirect url ${redirectUrl}`)
			if(redirectUrl!=null)
			{
				return fetch(redirectUrl)
			}else{
				return new Response(`Url not found for this short url ${param}`)
			}
			}catch(err){
            return new Response(err)
			}
		}
		const JsonData=await request.json();
		const StringForm=JSON.stringify(JsonData);
		
		// if(shortUrl!=undefined&&longUrl!=undefined)
		// {
		// 	await env.url.put(shortUrl,longUrl);
		// 	return new Response(`Short Url Successfuly created`);

		// }
		// else if(shortUrl!=undefined)
		// {
	    // const redirectUrl=await env.url.get(shortUrl)
        // return new Response(redirectUrl);
		// }
		const data=JSON.parse(StringForm)
		try{
			await env.url.put(data.shortUrl,data.longUrl)
			return new Response('Successfuly created short URL')
		}catch(err)
		{
			return new Response(err)
		}

        // await env.url.put(data.shortUrl,data.longUrl)
		// const redirectUrl=await env.url.get(data.shortUrl)
		// return fetch('https://www.youtube.com');
	},
};
