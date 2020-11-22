import Makeup1 from '../assets/images/Cosmetiquera1.jpeg';
import Makeup2 from '../assets/images/Cosmetiquera2.jpeg';
import Makeup3 from '../assets/images/Cosmetiquera3.jpeg';
import Makeup4 from '../assets/images/Cosmetiquera4.jpeg';
import Makeup5 from '../assets/images/Cosmetiquera5.jpeg';

let description = "Esta cosmetiquera tiene una impresión de tipo %i y diseño %d "

const makeupBags = [
    {
        id:0,
        src:Makeup1,
        description : description.replace("%i","vinil").replace("%d","puntitos")
    },
    {
        id:1,
        src:Makeup2,
        description : description.replace("%i","sublimado").replace("%d","mariposas")
    },
    {
        id:2,
        src:Makeup3,
        description : description.replace("%i","sublimado").replace("%d","flores oaxaqueñas").replace("Esta cosmetiquera tiene","Estas cosmetiqueras tienen")
    },
    {
        id:3,
        src:Makeup4,
        description : description.replace("%i","sublimado").replace("%d","flores oaxaqueñas")
    },
    {
        id:4,
        src:Makeup5,
        description : description.replace("%i","sublimado").replace("%d","mandalas")
    },
];
export default makeupBags;