import Set1 from "../assets/images/Conjunto1.jpeg";
import Set2 from "../assets/images/Conjunto2.jpeg";
import Set3 from "../assets/images/Conjunto3.jpeg";
import Set4 from "../assets/images/Conjunto4.jpeg";
import Set5 from "../assets/images/Conjunto5.jpeg";

let description = "Este conjunto es de impresión tipo %i y diseño tipo %d";

const sets = [
    {
        src : Set1,
        description : description.replace("%i","sublimado").replace("%d","flores")
    },
    {
        src : Set2,
        description : description.replace("%i","sublimado").replace("%d","mariposas")
    },
    {
        src : Set3,
        description : description.replace("%i","vinil").replace("%d","puntitos")
    },
    {
        src : Set4,
        description : description.replace("%i","sublimado").replace("%d","unicornio")
    },
    {
        src : Set5,
        description : description.replace("%i","vinil").replace("%d","puntitos")
    }
]

export default sets;