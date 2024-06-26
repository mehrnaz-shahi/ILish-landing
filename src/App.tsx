import Navbar from "./components/Navbar";
import ProfileMockup from './assets/images/Profile-portrait.png';
import QuestionMockup from './assets/images/Multi choice-portrait.png';
import Feedback from "./assets/images/feedback.png";
import Gamification from "./assets/images/gamification.png";
import Chatgpt from "./assets/images/ChatGPT.png";
import Book from "./assets/images/book.png";
import Track from "./assets/images/track.png";

import ReactGA from 'react-ga4';
import { useEffect, useState } from "react";

ReactGA.initialize('G-K69DB6RWY6');

function App() {

  const [collapseStates, setCollapseStates] = useState<boolean[]>(Array(features.length).fill(true));

  const toggleCollapse = (index: number) => {
    setCollapseStates(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  }

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const handleClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked Download button'
    });

    alert("This app will be published soon.");
  };

  const handleItemClick = (title: string) => {
    ReactGA.event({
      category: 'Item Click',
      action: `Clicked on ${title}`
    });
  };

  return (
    <>
      <Navbar />

      <div className="md:mt-10 mt-6 md:px-8 px-4 py-2">
        <div className="bg-opacity-85 md:h-[26rem] h-[43rem] rounded-xl relative p-8 flex flex-col md:items-start items-center 
        md:text-xl text-sm" style={{ backgroundColor: "rgb(81 34 108)" }}>

          <div className="absolute md:bottom-8 flex md:right-10 bottom-10 max-md:w-full items-center justify-center">
            <img src={QuestionMockup} alt="question" className="lg:h-80 lg:w-40 h-72 w-32 -mr-10" />
            <img src={ProfileMockup} alt="profile" className="lg:h-80 lg:w-40 h-72 w-32 mt-6" />
          </div>

          <div className="lg:ml-16 mt-8">
            <h1 className="text-white font-bold xl:text-2xl lg:text-lg md:w-80 !leading-10">
              Your partner and tuition for learning and practicing IELTS
            </h1>
            <h3 className="text-neutral-300 mt-5">
              Using Chatgpt to improve your skills
            </h3>
            <button onClick={handleClick} style={{ backgroundColor: '#D7BAFF' }} className="md:px-24 px-16 w-full py-4 rounded-3xl mt-14 font-bold">
              Download app
            </button>
          </div>
        </div>

        {/* Carts */}
        <div className="md:py-14 lg:px-16 px-0 py-0 md:mb-0 mb-10">
          {features.map((item, index) => (
            <div key={index} className="bg-gray-200 rounded-lg p-6 py-8 my-10 shadow-xl flex justify-between md:flex-row flex-col md:gap-0 gap-6 items-center">
              <div className="flex flex-col">
                <h2 style={{ color: "#02A1C6" }} className="font-bold">{item.title}</h2>
                <ul className={`mt-4 ${collapseStates[index] && 'hidden'}`} style={{ listStyle: "inside", color: "rgb(52, 76, 82)" }}>
                  {item.items.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <img src={item.image} alt={item.title} className={`h-32 mx-4 ${collapseStates[index] && 'hidden'}`} />
              <svg onClick={() => { toggleCollapse(index); handleItemClick(item.title); }} className={`w-8 text-gray-600 animate-pulse ${!collapseStates[index] && 'rotate-180'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="down-arrow">
                <g>
                  <g>
                    <rect width="24" height="24" opacity="0"></rect>
                    <path d="M17.37 12.39L12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z"></path>
                    <path d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z"></path>
                  </g>
                </g>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

const features = [
  {
    title: 'Progress Tracking and Insights',
    items: [
      'Users can track their progress over time with detailed insights and analytics.',
      'This feature helps users identify their strengths and areas for improvement, allowing for a focused and efficient study plan.'
    ],
    image: Track,
  },
  {
    title: 'User Feedback and Improvement',
    items: [
      'Users can provide feedback on their learning experience and suggest improvements.',
      'The app uses this feedback to continuously enhance its features and content.'
    ],
    image: Feedback,
  },
  {
    title: 'Gamification for Enhanced Learning',
    items: [
      'To make the learning process more engaging, the app incorporates gamification elements such as rewards, levels, and challenges.',
      'This approach not only motivates users to practice regularly but also makes the learning process enjoyable.'
    ],
    image: Gamification,
  },
  {
    title: 'AI-Powered Evaluation',
    items: [
      'The app utilizes cutting-edge artificial intelligence models, including ChatGPT, for real-time assessment and feedback.',
      'Writing and Listening sections are evaluated with precision, offering personalized feedback to help users improve their skills.'
    ],
    image: Chatgpt,
  },
  {
    title: 'Comprehensive IELTS Preparation',
    items: [
      'Our app covers all sections of the IELTS exam: Listening, Reading, Writing, and Speaking.',
      'It is structured around high-quality content from reputable IELTS preparation books like "Mindset".'
    ],
    image: Book,
  },
];
