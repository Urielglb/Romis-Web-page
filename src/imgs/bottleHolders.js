import Bottle1 from '../assets/images/Portabotellas1.jpeg';
import Bottle2 from '../assets/images/Portabotellas2.jpeg';
import Bottle3 from '../assets/images/Portabotellas3.jpeg';
import Bottle4 from '../assets/images/Portabotellas4.jpeg';
import Bottle5 from '../assets/images/Portabotellas5.jpeg';
import Bottle6 from '../assets/images/Portabotellas6.jpeg';

let description = "Este portabotellas tiene una impresión de tipo %i y diseño %d "

const bottleHolders = [
    {
        src:Bottle1,
        description : description.replace("%i","vinil").replace("%d","gimnasia")
    },
    {
        src:Bottle2,
        description : description.replace("%i","vinil").replace("%d","soccer y natación")
    },
    {
        src:Bottle3,
        description : description.replace("%i","sublimado").replace("%d","flamingo")
    },
    {
        src:Bottle4,
        description : description.replace("%i","vinil").replace("%d","pumas")
    },
    {
        src:Bottle5,
        description : description.replace("%i","vinil").replace("%d","personalizado").replace("Este portabotellas tiene","Estos portabotellas tienen")
    },
    {
        src:Bottle6,
        description : description.replace("%i","vinil").replace("%d","personalizado").replace("Este portabotellas tiene","Estos portabotellas tienen")
    },
];

export default bottleHolders;