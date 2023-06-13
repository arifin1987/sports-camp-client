import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {Elements} from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart]= useCart();
    console.log(cart);
    const itemPrice = cart.map(prc => prc.price);
    console.log(itemPrice);
    return (
        <div>
            <SectionTitle
            subHeading={'Payment related informations'}
            heading={'Payment'}
            ></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={itemPrice} ></CheckoutForm>
            </Elements>
            
        </div>
    );
};

export default Payment;