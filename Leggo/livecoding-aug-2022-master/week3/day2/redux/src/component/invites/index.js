import { useSelector } from 'react-redux'

const Invites = () => {
    const invitedPeople = useSelector((state) => state.invites.invitedPeople)
    return (
        <>
            <ul>
                {invitedPeople.map(invitedPerson => (<li key={invitedPerson}> {invitedPerson}</li>))}
            </ul>
        </>
    )
}

export default Invites;