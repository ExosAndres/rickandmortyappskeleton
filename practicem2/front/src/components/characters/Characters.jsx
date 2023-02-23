import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { getAllCharacters } from '../../redux/actions'
import CharacterCard from '../characterCard/CharacterCard';


//useSelector >> Hook que funciona igual que el mapStateToProps
// UseDispatch >> Hook que funciona igual que el mapDispatchToProps
// useEffect >> Hook que emula los ciclos de vida del componente

const Characters =  ()=>{
    const dispatch = useDispatch()
    const characters = useSelector(state=> state.characters);

    useEffect(()=>{
        dispatch(getAllCharacters())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

   console.log(characters);

    return(
        <>
            {characters.map(character =>{
                return <CharacterCard
                key={character.id}
                name={character.name}
                id={character.id}
                image={character.image}
                gender = {character.gender}
                />
            })}
        </>
    )
}

export default Characters