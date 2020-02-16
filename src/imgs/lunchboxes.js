import Luch1 from '../assets/images/Lunchera1.jpeg';
import Luch2 from '../assets/images/Lunchera2.jpeg';
import Luch3 from '../assets/images/Lunchera3.jpeg';
import Luch4 from '../assets/images/Lunchera4.jpeg';
import Luch5 from '../assets/images/Lunchera5.jpeg';
import Luch6 from '../assets/images/Lunchera6.jpeg';
import Luch7 from '../assets/images/Lunchera7.jpeg';
import Luch8 from '../assets/images/Lunchera8.jpeg';
import Luch9 from '../assets/images/Lunchera9.jpeg';
import Luch10 from '../assets/images/Lunchera10.jpeg';

let description = "Esta lunchera es de tamaño %s con una impresión de tipo %i y diseño %d "

const lunchBoxes =[
    {
        src:Luch1,
        description : description.replace("%s","grande").replace("%i","sublimado").replace("%d","flores oaxaqueñas")
    },
    {
        src:Luch2,
        description : description.replace("%s","grande").replace("%i","vinil").replace("%d","lentejuelas")
    },
    {
        src:Luch3,
        description : description.replace("%s","grande").replace("%i","vinil").replace("%d","personalizado")
    },   
    {
        src:Luch4,
        description : description.replace("%s","grande").replace("%i","vinil").replace("%d","personalizado")
    },
    {
        src:Luch5,
        description : description.replace("%s","chicas y grandes").replace("%i","vinil").replace("%d","puntitos").replace("Esta lunchera es","Estas luncheras son")
    },
    {
        src:Luch6,
        description : description.replace("%s","grande").replace("%i","vinil").replace("%d","pompones")
    },
    {
        src:Luch7,
        description : "Esta lonchera es de tipo vertical con una impresión de tipo vinil y diseño garza"
    },
    {
        src:Luch8,
        description : "Esta lonchera es de tipo vertical con una impresión de tipo vinil y diseño garza"
    },
    {
        src:Luch9,
        description : description.replace("%s","chica").replace("%i","sublimada").replace("%d","flores")
    },
    {
        src:Luch10,
        description : description.replace("%s","chico").replace("%i","vinil").replace("%d","puntitos").replace("Esta lunchera es","Estas luncheras son")
    },
]

export default lunchBoxes;