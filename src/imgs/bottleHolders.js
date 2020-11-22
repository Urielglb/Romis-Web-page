import Bottle1 from '../assets/images/Portabotellas1.jpeg';
import Bottle2 from '../assets/images/Portabotellas2.jpeg';
import Bottle3 from '../assets/images/Portabotellas3.jpeg';
import Bottle4 from '../assets/images/Portabotellas4.jpeg';
import Bottle5 from '../assets/images/Portabotellas5.jpeg';
import Bottle6 from '../assets/images/Portabotellas6.jpeg';

let description = "Este portabotellas tiene una impresión de tipo %i y diseño %d "

const bottleHolders = [
    {
        id:0,
        src:Bottle1,
        description : description.replace("%i","vinil").replace("%d","gimnasia")
    },
    {
        id:1,
        src:Bottle2,
        description : description.replace("%i","vinil").replace("%d","soccer y natación")
    },
    {
        id:2,
        src:Bottle3,
        description : description.replace("%i","sublimado").replace("%d","flamingo")
    },
    {
        id:3,
        src:Bottle4,
        description : description.replace("%i","vinil").replace("%d","pumas")
    },
    {
        id:4,
        src:Bottle5,
        description : description.replace("%i","vinil").replace("%d","personalizado").replace("Este portabotellas tiene","Estos portabotellas tienen")
    },
    {
        id:5,
        src:Bottle6,
        description : description.replace("%i","vinil").replace("%d","personalizado").replace("Este portabotellas tiene","Estos portabotellas tienen")
    },
];

export default bottleHolders;