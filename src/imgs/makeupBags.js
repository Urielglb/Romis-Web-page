import Makeup1 from '../assets/images/Cosmetiquera1.jpeg';
import Makeup2 from '../assets/images/Cosmetiquera2.jpeg';
import Makeup3 from '../assets/images/Cosmetiquera3.jpeg';
import Makeup4 from '../assets/images/Cosmetiquera4.jpeg';
import Makeup5 from '../assets/images/Cosmetiquera5.jpeg';

let description = "Esta cosmetiquera tiene una impresión de tipo %i y diseño %d "

const makeupBags = [
    {
        src:Makeup1,
        description : description.replace("%i","vinil").replace("%d","puntitos")
    },
    {
        src:Makeup2,
        description : description.replace("%i","sublimado").replace("%d","mariposas")
    },
    {
        src:Makeup3,
        description : description.replace("%i","sublimado").replace("%d","flores oaxaqueñas").replace("Esta cosmetiquera tiene","Estas cosmetiqueras tienen")
    },
    {
        src:Makeup4,
        description : description.replace("%i","sublimado").replace("%d","flores oaxaqueñas")
    },
    {
        src:Makeup5,
        description : description.replace("%i","sublimado").replace("%d","mandalas")
    },
];
export default makeupBags;