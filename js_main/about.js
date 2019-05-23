function About()
{
    var about= document.getElementById("about");
    var overlay=document.createElement("div");
   overlay.className="overlay";
     var h2=document.createElement("h2");  
     h2.innerHTML="Uvod"; 
    overlay.appendChild(h2);
  
     var div=document.createElement("div");
     div.className="tekst";
     var p=document.createElement("p");
    p.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean libero."+
		"Praesent sagittis, lorem non gravida aliquet, justo mauris bibendum arcu, eget cursus "+
		"libero tortor a ipsum. Suspendisse dolor odio, pretium dignissim, venenatis sed, blandit at, ante. "+
		"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. "+
		"Phasellus elementum,<span helptext=>elfak</span>, diam ligula interdum ipsum, ac pulvinar"+
		"velit dui in nulla. Pellentesque dictum est sit amet erat. Suspendisse potenti. Cras vel "+
		"lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia"+
		"Curae; In hac habitasse platea dictumst. Integer elementum, dui ut venenatis tristique,"+
		"mauris dolor adipiscing diam, a viverra ligula diam in magna. Aenean tellus dui, "+
		"placerat sed, facilisis nec, consectetur ac, metus. Fusce vehicula massa bibendum arcu."+
		"Etiam vel justo eu orci elementum tincidunt. Phasellus vulputate libero nec leo. In hac "+
		"habitasse platea dictumst. Donec pharetra est nec massa."
     div.appendChild(p);
     overlay.appendChild(div); 
     about.appendChild(overlay);
     about.appendChild(div);
}