import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { invite } from '../../redux/slices/invites'

const Friendslist = () => {
    const dispatch = useDispatch()
    const [friends, setfriends] = useState(['Kurt', 'Hans', 'Dominick', 'Adrien', 'Daniel'])
    return (
        <>
            <ul>
                {friends.map(friend => (<li key={friend}> {friend} <button onClick={() => dispatch(invite(friend))} >+</button></li>))}
            </ul>
        </>
    )
}

export default Friendslist;