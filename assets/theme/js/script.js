// -----------------------------------------scrolltotop ---------------------------------------//
window.onscroll = function() {
	var e = document.getElementById("scrolltop");
    if (!e) {
    	e = document.createElement("a");
        e.id = "scrolltop";
        e.href = "#";
        document.body.appendChild(e);
	}
	e.style.display = document.documentElement.scrollTop >300 ? "block" : "none";
    e.onclick = (ev) => {
    	ev.preventDefault();
        document.documentElement.scrollTop = 0;
    };
};
// -----------------------------------------scrolltotop ---------------------------------------//

//----------------------------------Google tag (gtag.js)---------------------------------------------//
{<script async src="https://www.googletagmanager.com/gtag/js?id=G-TN9TC8YPC6"></script>

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TN9TC8YPC6')};
//----------------------------------Google tag (gtag.js)---------------------------------------------//



//---------------------------------------Google Tag Manager---------------------------------------------------//
  (function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
        'gtm.start':
            new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-WJNBHBX');

//--------------------------------------End Google Tag Manager-----------------------------------//
