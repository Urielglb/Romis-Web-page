import Pencil1 from '../assets/images/Estuchera1.jpeg';
import Pencil2 from '../assets/images/Estuchera2.jpeg';
import Pencil3 from '../assets/images/Estuchera3.jpeg';
import Pencil4 from '../assets/images/Estuchera4.jpeg';
import Pencil5 from '../assets/images/Estuchera5.jpeg';
import Pencil6 from '../assets/images/Estuchera6.jpeg';
import Pencil7 from '../assets/images/Estuchera7.jpeg';
import Pencil8 from '../assets/images/Estuchera8.jpeg';
import Pencil9 from '../assets/images/Estuchera9.jpeg';
import Pencil10 from '../assets/images/Estuchera10.jpeg';

let description ="Esta estuchera tiene %c  con una impresión de tipo %i y diseño %d "

const pencilCases = [
    {
        src:Pencil1,
        description : description.replace("%c","tres cierres").replace("%i","vinil").replace("%d"," soccer")
    },
    {
        src:Pencil2,
        description : description.replace("%c","tres cierres").replace("%i","vinil").replace("%d"," football")
    },
    {
        src:Pencil3,
        description : description.replace("%c","tres cierres").replace("%i","vinil").replace("%d"," football").replace("Esta estuchera tiene","Estas estucheras tienen")
    },
    {
        src:Pencil4,
        description : description.replace("%c","un cierre").replace("%i","vinil").replace("%d"," bbf")
    },
    {
        src:Pencil5,
        description : description.replace("%c","un cierre").replace("%i","vinil").replace("%d"," bbf").replace("Esta estuchera tiene","Estas estucheras tienen")
    },
    {
        src:Pencil6,
        description : description.replace("%c","un cierre").replace("%i","vinil").replace("%d"," bbf")
    },
    {
        src:Pencil7,
        description : "Este conjunto de estucheras son de tres cierres y uno con una impresión vinil y diseño puntos"
    },
    {
        src:Pencil8,
        description : description.replace("%c","tres cierres").replace("%i","sublimado").replace("%d"," flores")
    },
    {
        src:Pencil9,
        description : "Este conjunto de estucheras son de tres cierres y uno con una impresión sublimado y diseño flores"
    },
];

export default pencilCases;