import FilterTabAdultDog from "../../assets/img/FilterTabAdultDog.svg";
import FilterTabCat from "../../assets/img/FilterTabCat.svg";
import FilterTabDog from "../../assets/img/FilterTabDog.svg";
import FilterTabPuppyDog from "../../assets/img/FilterTabPuppyDog.svg";

const Data = [
    {
        id: 1,
        title: "Perros",
        imgSrc: FilterTabDog,
        imgAlt: "Un perro sentado",
        active: false
    },
    {
        id: 2,
        title: "Gatos",
        imgSrc: FilterTabCat,
        imgAlt: "Un gato sentado",
        active: false
    },
    {
        id: 3,
        title: "Cachorros",
        imgSrc: FilterTabPuppyDog,
        imgAlt: "Un perro cachorro de pie",
        active: false
    },
    {
        id: 4,
        title: "Adultos",
        imgSrc: FilterTabAdultDog,
        imgAlt: "Un perro adulto de pie",
        active: false
    }
];

export default Data;
