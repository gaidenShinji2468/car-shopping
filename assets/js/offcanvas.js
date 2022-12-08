/*
<section class="offcanvas close-offcanvas">
    <span class="offcanvas-button">
        <i class="fa-solid fa-xmark"></i>
    </span>
    <h3>Carrito de compras</h3>
    <figure>
        <figcaption>
            <p></p><p></p>
        </figcaption>
    </figure>
    <footer class="footer-main">
        <button>
            Ir al carrito
	</button>     
    </footer>
</section>
*/

// Ensamblar el offcanvas
// 1° Especificar los elementos
let section = document.createElement("section");
let span = document.createElement("span");
let i = document.createElement("i");
let h3 = document.createElement("h3");
let title = document.createTextNode("Carrito de compras");
let figure = document.createElement("figure");
let figcaption = document.createElement("figcaption");
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let footer = document.createElement("footer");
let button = document.createElement("button");
let buttonTitle = document.createTextNode("Ir al carrito");

// 2° Asignar los atributos
section.setAttribute("class", "offcanvas close-offcanvas");
span.setAttribute("class", "offcanvas-button");
i.setAttribute("class", "fa-solid fa-xmark");
footer.setAttribute("class", "footer-main");

// 3° Construir la jerarquia de elementos
span.appendChild(i);
h3.appendChild(title);
figcaption.appendChild(p1);
figcaption.appendChild(p2);
figure.appendChild(figcaption);
button.appendChild(buttonTitle);
footer.appendChild(button);
section.appendChild(span);
section.appendChild(h3);
section.appendChild(figure);
section.appendChild(footer); // contenedor principal del offcanvas

function insertOffcanvas()
{
    document.getElementById("nav-main").appendChild(section);
}

function offcvRun()
{
    insertOffcanvas(); // 1° se inserta en el DOM
    
    // 2° se localiza dentro del DOM
    let offcanvas = document.getElementsByClassName("offcanvas");
    let offcanvasButtons = document.getElementsByClassName("offcanvas-button");
	
    offcanvas = [].slice.call(offcanvas);
    offcanvasButtons = [].slice.call(offcanvasButtons);

    function openOrClose()
    {
        for(let offcv of offcanvas)
        {
            offcv.classList.toggle("close-offcanvas");
        }
    }

    function offcvOn()
    {   
        for(let button of offcanvasButtons)
        {
            button.onclick = openOrClose;
        }
    }
   
    offcvOn(); // 3° se activa
}

export {offcvRun};
