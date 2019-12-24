// https://gist.github.com/FarhanMS123/33f2db7d42aa987ee9000b961cfaad4d
// https://developers.giphy.com/docs/api/endpoint#translate
window.customElements.define("giphy-translate", class extends HTMLElement{
	constructor(){
		var el_super = super();
		var el_this = this;
		
		var api_key = "sHbWeq0H0nocqmSEgUHs9OkGCq8sTlLh";

		setTimeout(function(){
			var shadowRoot = el_this.attachShadow({mode: 'open'});
			var ifrm_style = el_this.getAttribute("data-ifrm-style") || "border:none;height:20em;";
			var weirdness = el_this.getAttribute("data-weirdness");
			var s = el_this.getAttribute("data-s");

			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var resJSON = JSON.parse(xhr.responseText);

					shadowRoot.innerHTML = `<iframe src="${resJSON.data.embed_url}" style="${ifrm_style}"></iframe>`;
				}
			};
			var url = `http://api.giphy.com/v1/gifs/translate?api_key=${api_key}&s=${s}${weirdness ? `&weirdness=${weirdness}` : ""}`;
			xhr.open("GET", url, true);
			xhr.send();

			console.log(url);
		}, 1);
	}
});