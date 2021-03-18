import FilterTabDog from "../../assets/img/FilterTabDog.svg";
import FilterTabAdultDog from "../../assets/img/FilterTabAdultDog.svg";
import FilterTabCat from "../../assets/img/FilterTabCat.svg";
import FilterTabPuppyDog from "../../assets/img/FilterTabPuppyDog.svg";

const Data = [
    {
        id: 1,
        filterTitle: "Perros",
        imgSrc: FilterTabDog,
        imgAlt: "Un perro sentado",
        activeFilter: false
    },
    {
        id: 2,
        filterTitle: "Gatos",
        imgSrc: FilterTabCat,
        imgAlt: "Un gato sentado",
        activeFilter: false
    },
    {
        id: 3,
        filterTitle: "Cachorros",
        imgSrc: FilterTabPuppyDog,
        imgAlt: "Un perro cachorro de pie",
        activeFilter: false
    },
    {
        id: 4,
        filterTitle: "Adultos",
        imgSrc: FilterTabAdultDog,
        imgAlt: "Un perro adulto de pie",
        activeFilter: false
    }
];

export default Data;
