/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
    'pk_test_51K6H6UCd6afBdXVt68wopdILs5TwfKHT1g0sa3popYaqWOlVlUKgLds8Gg0MTe8MSKVWBYwNLzAa2FzzXdxQohsf00HUt64tSH'
);
export const bookTour = async (tourID) => {
    try {
        // 1) Get checkout session from API
        const session = await axios(
            `/api/v1/booking/checkout-session/${tourID}`
        );
        // console.log(session);

        // 2) Create checkout form + charge credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id,
        });
    } catch (err) {
        console.log(err);
        showAlert('error', err);
    }
};
