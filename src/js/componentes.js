import '../css/componentes.css'
import webPackImg from '../assets/img/webpack-logo.png'

export const saludar = (nombre) => {

    console.log('creando etiqueta h1')

    const h1 = document.createElement('h1')
    h1.innerText = `Hola ${nombre}
    111`

    document.body.append( h1 )

    const img = document.createElement('img');
    img.src = webPackImg;
    document.body.append(img);

};
