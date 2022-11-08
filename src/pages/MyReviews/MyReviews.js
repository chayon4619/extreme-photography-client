import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReview from './MyReview';

const MyReviews = () => {

    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    useTitle('My Reviews')

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email]);

    const handelDelete = (id) => {
        const agree = window.confirm('Are You sure to delete review?');
        if (agree) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Ticket Canceled successfully!')
                        const remaining = myReviews.filter(mr => mr._id !== id);
                        setMyReviews(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <h1 className='text-center font-bold text-5xl mt-10'>ALL My Reviews : {myReviews.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 m-10'>
                {
                    myReviews.map(myReview => <MyReview
                        key={myReview._id}
                        myReview={myReview}
                        handelDelete={handelDelete}
                    ></MyReview>)
                }
            </div>
        </div>
    );
};

export default MyReviews;