import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {Elements} from "@stripe/react-stripe-js"
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";
import useCart from "../../../hooks/useCart";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const[cart]=useCart()
    const location = useLocation();
    const data = location.state;
    console.log(data);
    return (
        <div>
            <SectionTitle
            subHeading={'Payment related informations'}
            heading={'Payment'}
            ></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} data={data} ></CheckoutForm>
            </Elements>
            
        </div>
    );
};

export default Payment;