

function Cars(naziv,mesto)
{
    this.naziv=naziv;
    this.mesto=mesto;
    
    this.crtaj=function(host)
    {
        
        var intro=document.createElement('div');
       // intro.className='.Levo';
        intro.className='intro';
        host.appendChild(intro);
        var overlay=document.createElement('div');
        overlay.className='overlay';
         intro.appendChild(overlay);
       var container= document.createElement('div');
        container.className='container';
        overlay.appendChild(container);
        var row=document.createElement('div');
        row.className='row';
         container.appendChild(row);
       var introText=document.createElement('div');
        introText.className='intro-text';
        row.appendChild(introText);
        var h1=document.createElement('h1');
      //  h1.className='.hcars';
        h1.innerHTML="Leto";
        var a = document.createElement('a');
        a.href='#about';
        a.className='btn btn-custom btn-lg page-scroll';
        a.innerHTML='Zapocni';
      
        intro.appendChild(h1);
     introText.appendChild(a);
    }
}