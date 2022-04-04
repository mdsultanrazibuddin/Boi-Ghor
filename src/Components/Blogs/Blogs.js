import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1 className='text'>welcome to my blogs</h1>
            <div className='blog'>
                <div className='context'>
                    <h1> প্রশ্নঃ Context API কি ?</h1>
                    <p>
                        <span>উত্তরঃ</span> <br />
                         React Context API হল একটি React App এর জন্য কার্যকরভাবে গ্লোবাল ভেরিয়েবল তৈরি করার একটি উপায় যা চারপাশে পাস করা যায় । Context API ডেটা আদান-প্রদানের জন্য সহায়ক বলে মনে করা হয় । আমাদের কাছে যখন এই ধরণের ডেটা থাকে, তখন আমরা অন্য কোনও মডিউল ব্যবহার না করেই Context API ব্যবহার করতে পারি ।
                    </p>
                </div>
                <div className='context'>
                    <h1> প্রশ্নঃ Inline Element, Inline-Block Element, Block Element  কি ?</h1>
                    <p>
                    <span>উত্তরঃ</span> <br />
                     Inline Element  একটি নতুন লাইনে শুরু হয় না এবং শুধুমাত্র এটির প্রয়োজনীয় প্রস্থটি দখল করে। Inline Element এ প্রস্থ বা উচ্চতা সেট করা যায় না।
                    <br />
                    Inline-Block Element টি ইনলাইন উপাদানের মতো format করা হয়েছে, যেখানে এটি একটি নতুন লাইনে শুরু হয় না। কিন্তু, Inline-Block Element এ প্রস্থ এবং উচ্চতার মান সেট করা যায়।
                    <br />
                    Block Element একটি নতুন লাইনে শুরু হয় এবং উপলব্ধ পুরো প্রস্থটি দখল করবে। এবং Block Element এ প্রস্থ এবং উচ্চতা মান সেট করা যায়।
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;