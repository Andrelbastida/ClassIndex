const galeriaContainer = document.querySelector('.galeria-container');
const containerControlesGaleria= document.querySelector('.galeria-controle');
const galeriaControle = ['Voltar','Próximo'];
const galeriaItens= document.querySelectorAll('.galeria-item');

class Carousel{

    constructor(container, items, controls){
        this.carouselContainer= container;
        this.controleCarrosel = controls;
        this.carouselArray = [...items];
    }

    updateGallery(){
        this.carouselArray.forEach(el => {
            el.classList.remove('galeria-item-1');
            el.classList.remove('galeria-item-2');
            el.classList.remove('galeria-item-3');
            el.classList.remove('galeria-item-4');
            el.classList.remove('galeria-item-5');

        });
        this.carouselArray.slice(0, 5).forEach((el , i) => {
            el.classList.add(`galeria-item-${i+1}`);
        });
    }

    setCurrentState(direction){
        if(direction.className == 'galeria-controle-Voltar'){
         this.carouselArray.unshift(this.carouselArray.pop());
          }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }
    setControls(){
        this.controleCarrosel.forEach(control => {
            containerControlesGaleria.appendChild(document.createElement('button')).className = `galeria-controle-${control}`;
            document.querySelector(`.galeria-controle-${control}`).innerText = control;
        });
    }

    useControls(){
        const triggers = [...containerControlesGaleria.childNodes];
        triggers.forEach(control =>{
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);

            });
        });

    }

}
const exampleCarousel = new Carousel(galeriaContainer, galeriaItens,galeriaControle);

exampleCarousel.setControls();
exampleCarousel.useControls();
