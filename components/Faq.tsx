import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  // Array of FAQs with type annotation
  const faqs: FAQItem[] = [
    {
      question: 'What services does your platform offer for MVP development?',
      answer: 'Our platform offers a wide range of services tailored to MVP development, including dedicated Slack channels, scheduled Zoom meetings, shared Vimeo accounts for video training, mobile application development using React Native, custom Shopify theme and app development, and comprehensive solutions across Laravel, Node.js Express, cloud computing with AWS and Firebase, and WordPress solutions including custom theme and plugin development.'
      // Add the rest of your FAQ content here
    },
    {
      question: 'How do I choose the right package for my project?',
      answer: 'Choosing the right package depends on your project\'s specific needs, timeline, and budget. We recommend starting with our free consultation to discuss your project requirements. This session will help us guide you to the most suitable package, whether it\'s Basic, Standard, or Premium, based on the scope and complexity of your project.'
      // Add more FAQs as needed
    },
    {
        question:'What does the free consultation include?',
        answer:'The free consultation includes a one-time Zoom call where we discuss your project\'s vision, requirements, and how our services can align with your goals. It\'s an opportunity for you to learn more about us and for us to understand how we can best support your project.',
    },
    {
        question:'Can I upgrade my package after signing up?',
        answer:'Yes, you can upgrade your package at any time during the project. If you find that you need more hours of work or additional services, we can adjust your package to accommodate these changes.',
    },
    {
        question:'How are the 25 working days for each sprint structured?',
        answer:'Each 25-day sprint is carefully planned to maximize productivity and progress. We\'ll outline tasks and subtasks at the beginning, schedule regular check-ins to monitor progress, and adjust as needed to ensure we meet the sprint\'s objectives.',
    },
    {
        question:'What if I need more than 50 hours of work for my project?',
        answer:'If your project requires more than 50 hours of work, we can discuss additional sprints or a custom package tailored to your project\'s needs. Our goal is to provide flexible solutions that align with your project requirements.',
    },
    {
        question:'How will I be able to communicate with the team during the project?',
        answer:'Communication is key to successful project management. You will have access to a dedicated Slack channel for real-time communication with the team. Additionally, we will schedule regular Zoom meetings to discuss progress and any changes in scope or direction.',
    },
    {
        question:'What kind of support can I expect after the completion of a sprint?',
        answer:'After the completion of a sprint, we provide a period of support to address any immediate concerns or adjustments needed. The duration and terms of post-sprint support will be outlined in your package.',
    },
    {
        question:'What are the payment terms for the packages?',
        answer:'Payment terms vary by package. Typically, we require a percentage of the total fee upfront, with the remainder due upon completion of the sprint. Detailed payment terms will be provided when you choose your package.'
    },
    {
        question:'Do you offer refunds if I’m not satisfied with the work?',
        answer:'We strive for complete client satisfaction. If you\'re not satisfied with the progress or direction of the work, we encourage you to communicate your concerns as early as possible. We offer solutions such as project realignment or adjustments to the scope of work. Refund policies are detailed in our contract, based on the specifics of each case.'
    }
    // Add more FAQ objects here
  ];

  // State to track the currently active FAQ index with type annotation
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    // If the clicked FAQ is already active, close it, otherwise open the clicked FAQ
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section-bg">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>F.A.Q</h2>
        <h3>Frequently Asked <span>Questions</span></h3>
        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <ul className="faq-list">
      {faqs.map((faq, index) => (
        
        <li key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </li>
      ))}
      </ul>
      </div>
    </div>
    </div>
    </section>
  );
};

export default FAQ;
