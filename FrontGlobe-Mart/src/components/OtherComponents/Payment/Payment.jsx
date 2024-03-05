import React from 'react'
import { useEffect, useState } from 'react'
// import { loadStripe } from "@stripe/stripe-js";

function Payment() {

    const [stripePromise, setStripePromise] = useState(null);

    useEffect(() => {

        fetch("/config")
            .then((res) => res.json())
            .then((data) => {
                setStripePromise(loadStripe(data.publicKey));
            });

    }, [])

    return (
        <div>Payment Component</div>
    )
}

export default Payment