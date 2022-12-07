let offcanvasButtons = document.getElementsByClassName("offcanvas-button");
let offcanvas = document.getElementsByClassName("offcanvas");

offcanvasButtons = [].slice.call(offcanvasButtons);
offcanvas = [].slice.call(offcanvas);

function openOrClose()
{
    for(let offcv of offcanvas)
    {
        offcv.classList.toggle("close-offcanvas");
    }
}

function run()
{
    for(let button of offcanvasButtons)
    {
        button.onclick = openOrClose;
    }
}

export {run};
