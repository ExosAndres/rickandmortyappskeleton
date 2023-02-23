import {useParams} from 'react-router-dom'
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getCharacterDetail, cleanCharacterDetail } from '../../redux/actions';

const CharacterDetail = () =>{
    const {id} = useParams();
    const dispatch = useDispatch()
    const {image, name, species, origin, gender} = useSelector(state =>state.characterDetail);

    useEffect(()=>{
        dispatch(getCharacterDetail(id))
        return ()=> dispatch(cleanCharacterDetail())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <div>
            <h1>{name}</h1>
            <img src={image} alt={name}/>
            <p>Specie: {species}</p>
            <p>Gender: {gender}</p>
            <p>Origin: {origin?.name}</p>
            <p></p>
        </div>
    )
}

export default CharacterDetail;