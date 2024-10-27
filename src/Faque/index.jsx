import React from 'react';
import './index.scss';

const Faque = () => {
    const faqs = [
        {
            question: "→How do I file a complaint regarding my railway journey?",
            answer: "You can file a complaint through the official railway website, customer service centers, or by calling the railway helpline."
        },
        {
            question: "→What information do I need to provide when filing a complaint?",
            answer: "You should provide details such as your PNR number, and a description of your complaint."
        },
        {
            question: "→Can I track the status of my complaint?",
            answer: "Yes, you can track the status of your complaint through the official website using your complaint reference number."
        },
        {
            question: "→What types of complaints can I file?",
            answer: "You can file complaints related to service quality, cleanliness, and any other grievances regarding your journey."
        },
        {
            question: "→How will I receive a response to my complaint?",
            answer: "You will receive the message on the website."
        },
        {
            question: "→Is there a dedicated helpline for complaints?",
            answer: "Yes, you can call the dedicated railway complaint helpline for immediate assistance."
        },
        {
            question: "→Can I escalate my complaint if I am not satisfied with the response?",
            answer: "No, you can't escalate your complaint to higher authorities through the official channels."
        },
        {
            question: "→Are complaints taken seriously?",
            answer: "Yes, all complaints are taken seriously and are investigated thoroughly."
        },
        {
            question: "→Can I submit a complaint anonymously?",
            answer: "No, While you can submit a complaint without revealing your identity, providing your details helps in addressing the issue more effectively."
        },
        {
            question: "→What happens if my complaint is not resolved?",
            answer: "If your complaint is not resolved, you can contact the customer service again or escalate it further."
        },
        {
            question: "→Is there a feedback mechanism after my complaint is resolved?",
            answer: "Yes, you will usually be asked to provide feedback on how your complaint was handled."
        },,
        {
            question: "→What if I have a suggestion for improvement?",
            answer: "You can submit suggestions through the feedback section on the railway website or customer service."
        },
        {
            question: "→Are there any penalties for filing false complaints?",
            answer: "Yes, filing false complaints can lead to penalties as per railway regulations."
        },
        {
            question: "→How can I provide feedback on the complaint resolution process?",
            answer: "You can provide feedback through the official website or customer service after your complaint has been resolved."
        },
        {
            question: "→What if I face harassment during my journey?",
            answer: "You should report any harassment to the railway staff immediately or call the helpline for assistance."
        },
        {
            question: "→How can I ensure my complaint reaches the right department?",
            answer: "Make sure to select the appropriate category while filing your complaint on the official website."
        },
        {
            question: "→What is the expected time frame for complaint resolution?",
            answer: "The expected time frame for resolution varies, depends on the type."
        }
    ];

    return (
        <div  className="container">

        <div className="faq-container">
            <h1>Railway Complaint Management FAQs</h1>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <h2 className="faq-question">{faq.question}</h2>
                        <p className="faq-answer">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>

    );
};

export default Faque;