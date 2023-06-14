import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect } from "react";


const PaymentHistory = () => {
    const [payment, setPayment] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/payments')
            .then(res => res.json())
            .then(data => setPayment(data))
    }, [])
    return (
        <div>
            <SectionTitle
                heading={'Payment History'}
            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-sky-300">
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment.map((pay,index)=> <tr
                            key={pay._id}
                            >
                                <td>{index+1}</td>
                                <td>{pay.email}</td>
                                <td>{pay.transactionId}</td>
                                <td>{pay.date}</td>
                            </tr>)
                        }
                       
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;