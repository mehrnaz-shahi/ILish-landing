import Navbar from "./components/Navbar";
import ProfileMockup from './assets/images/Profile-portrait.png';
import QuestionMockup from './assets/images/Multi choice-portrait.png';
import Feedback from "./assets/images/feedback.png";
import Gamification from "./assets/images/gamification.png";
import Chatgpt from "./assets/images/ChatGPT.png";
import Book from "./assets/images/book.png";
import Track from "./assets/images/track.png";

import ReactGA from 'react-ga';

ReactGA.initialize('G-K69DB6RWY6');

ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

  const handleClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked Download button'
    });
  };

  return (
    <>
      <Navbar />

      <div className="md:mt-10 mt-6 md:px-8 px-4 py-2">
        <div className="  bg-opacity-85  md:h-[26rem] h-[43rem] rounded-xl relative p-8 flex flex-col md:items-start items-center 
        md:text-xl text-sm" style={{backgroundColor: "rgb(81 34 108)"}}>

          <div className="absolute md:bottom-8 flex md:right-10 bottom-10 max-md:w-full items-center justify-center">
            <img src={QuestionMockup} alt="question" className="lg:h-80  lg:w-40   h-72 w-32 -mr-10
         " />
            <img src={ProfileMockup} alt="profile" className="lg:h-80  lg:w-40  h-72 w-32 mt-6
        " />
          </div>



          <div className="lg:ml-16 mt-8 ">

            <h1 className="text-white font-bold xl:text-2xl lg:text-lg md:w-80   !leading-10">
              Your partner and tuition for learning and practicing IELTS
            </h1>

            <h3 className="text-neutral-300 mt-5">
              Using Chatgpt to improve your skills
            </h3>

            <button onClick={handleClick}
            style={{ backgroundColor: '#D7BAFF' }} className="md:px-24 px-16 w-full  py-4 rounded-3xl mt-14 font-bold">Download app</button>

          </div>

        </div>


        {/* Carts */}
        <div className="md:py-14 lg:px-16 px-0 py-0 md:mb-0 mb-10">
          {features.map((item, index) => (
            <div key={index} className="bg-gray-200 rounded-lg p-6 py-8 my-10 shadow-xl flex justify-between md:flex-row flex-col md:gap-0 gap-6 items-center">

              <div className="flex flex-col">
                <h2 style={{ color: "#02A1C6" }} className="font-bold">{item.title}</h2>
                <ul className="mt-4 " style={{ listStyle: "inside", color: "rgb(52, 76, 82)" }}>
                  {item.items.map(
                    feature =>
                      <li key={index + 2 * index + 20}>
                        {feature}
                      </li>
                  )}

                </ul>
              </div>
              <img src={item.image} alt={item.title} className="h-32 mx-4" />
            </div>
          ))}

        </div>

      </div>

    </>
  )
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
    title: 'Progress Tracking and Insights',
    items: [
      'Users can track their progress over time with detailed insights and analytics.',
      'This feature helps users identify their strengths and areas for improvement, allowing for a focused and efficient study plan.'
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
]