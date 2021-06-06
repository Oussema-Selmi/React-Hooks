import React,{useState} from 'react'
import MovieList from './Components/MovieList'
import Add from './Components/Add'
import Filter from './Components/Filter'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
    const[MovieData,SetMovieData]=useState([
    {id:Math.random,    title:"The Shawshank Redemption",                        description:"It tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence.",                                                                                                             posterURL:"https://i.egycdn.com/pic/WmFwZndlY3Z0Y21wZWNtanhQbUxOYm1wbQ.jpg",                rating:4,},
    {id:Math.random,    title:"Harry Potter and the Deathly Hallows: Part 2",    description:"Deathly Hallows Part 2 is all about the final confrontation between Harry and Voldemort, the ultimate showdown between good and evil, the climax the entire series has built toward from the beginning. With Voldemort wielding the coveted Elder Wand with blinding power even before the Warner Bros.",    posterURL:"https://i.egycdn.com/pic/WmFwZndlY21FbXB2bVltRWN2Y2NOYm1ZRXdkTHc.jpg",           rating:5,},
    {id:Math.random,    title:"The Conjuring 2",                                 description:"Peggy, a single mother of four children, seeks the help of occult investigators Ed and Lorraine Warren when she and her children witness strange, paranormal events in their house.",                                                                                                                        posterURL:"https://i.egycdn.com/pic/WmFwZndlY21tbWJtRW1Uam1lY21tbUVtdm12YW1qbWJ2Yw.jpg",    rating:3,},
    {id:Math.random,    title:"Joker",                                           description:"Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.",                                                                                                              posterURL:"https://i.egycdn.com/pic/WmFwZndlY21MTnZtYm1qbWptYWN4dmNtam1tbW13VG1tYg.jpg",    rating:3,},
    {id:Math.random,    title:"The Godfather",                                   description:"The Godfather is an American film series that consists of three crime films directed by Francis Ford Coppola inspired by the 1969 novel of the same name by Italian American author Mario Puzo. ",                                                                                                           posterURL:"https://i.egycdn.com/pic/WmFwZndlY21FbUVtcGJtdnZjRWNtRW1Id2xtYmxtamE.jpg",       rating:5,},
    {id:Math.random,    title:"The Dark Knight ",                                description:"After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",                                                                                                         posterURL:"https://i.egycdn.com/pic/WmFwZndlY21FbW1tYm1ibXVjbWptVElhY05md1A.jpg",           rating:4,},
])

const[textFilter,SetTextFilter]=useState('')
const[ratingFilter,SetRatingFilter]=useState(0)
    return (
        <div>
            <Add  SetMovieData={SetMovieData} MovieData={MovieData}/>
            <Filter SetTextFilter={SetTextFilter} SetRatingFilter={SetRatingFilter}/>
            <MovieList MovieData={MovieData} textFilter={textFilter} ratingFilter={ratingFilter}/>
            
        </div>
    )
}

export default App
