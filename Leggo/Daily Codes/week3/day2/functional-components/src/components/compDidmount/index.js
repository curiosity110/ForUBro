import React, { useState, useEffect } from 'react';

const CompDidMount = (props) => {

    const [active, setActive] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setActive(true);
        }, 3000);
        return (() => {
            console.log('bye')
        })
    }, [active])

        return (
            <div>
                {active ? <p>The state is active</p> : <p> Loading </p>}
            </div>
        );
    }

export default CompDidMount;
