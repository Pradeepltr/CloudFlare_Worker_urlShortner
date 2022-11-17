## **URL Shortner**
We have to plan make url shortner with the help of cloudflare and its services.If user put long url, this end convert into short url and with the help of short user can redirect to original long url.

>#### **Used cloudflare Services**
>- Cloudflare Worker
>- Worker KV-Key Value Pair(for Storage)

### **Working**
>- **Step 1**
>>>First install wrangler for access services of cloudflare.
 
 >>>> **Command for install wrangler**
 
 >>>> *npm install -g wrangler*

 >>>After install wrangler need to create a worker with command -
 >>>> *wrangler init < worker name >* 


>- **Step 2**
>>> After create worker store long url with short url as key in KV storage.KV provide facility to store data in pair first is key and second is data.

>>>> Before store data in KV need to create KV namespace.Namespace like bucketName.

>>>> **Command for creating KV namespace**

>>>>wrangler kv:namespace create "Your_KV_Namespace_Name"

>>>After creating namespace bind KV with worker-
>>>>    
    kv_namespaces =
      [
     { binding = "your_kv_namespace", id = "your_id" } 
       ]
>>>Put this configuration in wrangler.toml file

>>Now All things ready

> **Input formate** -
>> **worker hosted link -**
>>> *url_shortner.pk6361439.workers.dev*

>>>Method - POST

>>>Json data
>>>>{

>>>>"shortUrl" : "Choose your shorl url",

>>>>"longUrl"  : "put your long url"

>>>>}

>Return message if successfully created short url

>>Successfuly created short URL

>>> **short url redirect link-**
>>>> *url_shortner.pk6361439.workers.dev?shortUrl=your_short_url*




