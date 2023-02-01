import BigTextBlock from '../components/BigTextBlock';
import TicketsBlock from '../components/TicketsBlock';
import Navbar from '../components/Navbar';
import { SectionProps } from '../components/Section';
import TitleImage from '../components/Ticket/TitleImage';
import SBULogo from '../media/LogoSBU.png'
import CEASLogo from '../media/CEAS_logo.png'

export type ContentProps = {
    refs: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>;
    activeLink: number;
}

const ticketSections: SectionProps[] =
    [
        {
            id: 'edu',
            title: 'Take Off',
            subtitle: 'Education',
            tickets: [
                {
                    title: <TitleImage src={SBULogo} />,
                    subtitle: 'Computer Science BA',
                    text:
                        `
            *Relevant Coursework*
            *CS:* 
            Intro to Object Oriented Programming, Discrete Mathematics, Data Structures and Algorithm, Programming Abstraction
            *Math:* 
            Calculus II, Survey of Probability and Statistics, Applied Linear Algebra
            `,
                    range: {
                        start: new Date('2021/08/01'),
                        end: new Date('2025/05/01'),
                    },
                },
            ]
        },
        {
            id: 'work',
            title: 'Cruise',
            subtitle: 'Work experience',
            tickets: [
                {
                    title: 'Stony Brook Virtual Integrated Research Labs',
                    subtitle: 'Researcher/Software Engineering Intern',
                    text:
                        `
                        Designed and implemented a *virtual museum* where users can take a virtual tour of the artifacts using the web platform with the help of HTML, CSS and JavaScript.
                        Standardized and simplified digital data entry for archivists by implementing a relational *SQL database*.
            `,
                    range: {
                        start: new Date('2022/05/15'),
                        end: new Date(),
                    },
                    link: {
                        url: 'https://www3.cs.stonybrook.edu/~tony/JazzLoft/jazzloft_VR/',
                        displayText: 'Jazz Loft Museum',
                    }
                },
                {
                    title: <TitleImage src={CEASLogo} />,
                    subtitle: 'Undergraduate Teaching Assistant',
                    text:
                        `
                        Assisted professors in teaching *Calculus II* course by hosting 2 hours of office hours every week to support 200+ students with assignments and coursework.
                        Performed data entry task on students assignments and exam papers.

            `,
                    range: {
                        start: new Date('2022/08/01'),
                        end: new Date('2022/12/01'),
                    },
                    /*
                    link: {
                        url: 'http://www.amazon.com',
                        displayText: 'Amazon',
                    }
                    */
                },
               
            ],
        },
        {
            id: 'projects',
            title: 'In-Flight Entertainment',
            subtitle: 'Projects',
            tickets: [
                {
                    title: 'GESTURE-DRIVEN INTERACTIVE ILLUSTRATION INTERFACE',
        
                    text:
                        `
                        Developed an AI based hand tracking system and painter with *OpenCV* and *Mediapipe* which also has an UI based selection of brushes of different colors. It also recognizes the drawn characters with the help of *PyTesseract*.
                        Resulted in the identification of the landmarks of hands and instantly recognize the texts and numerical values with an accuaracy of 98%
            `,
            /*
                    range: {
                        start: new Date('2022/04/01'),
                        end: new Date('2022/12/01'),
                    },
                    */
                    link: {
                        url: 'https://github.com/mohamzamir/Gesture-Driven-Interactive-Illustration-Interface.git',
                        displayText: 'GDIII',
                    }
                },
                /*{
                    carouselImageSources: [
                        UncdfCountry,
                        UncdfMap,
                        UncdfMetric,
                    ]
                },
                */
                {
                    title: 'TRAFFIC CONGESTION MODELING TOOL',
                    text:
                        `
                        Built a Java Simulator to calculate the path a person takes from input of a list of cities, and a list of roads from various cities, with their carrying capacities in terms of car per minute.
                        Implemented *DFS* and *Ford-Fulkerson Algorithm* to find the maximum amount of flow between two cities.
                        It also implemented *Dijkstra’s Algorithm* to find the shortest path.
            `,
            /*
                    range: {
                        start: new Date('2022/03/01'),
                        end: new Date('2020/04/01'),
                    },
                    */
                    link: {
                        url: 'https://github.com/mohamzamir/Traffic-Congestion-Modeling-Tool.git',
                        displayText: 'Model',
                    }
                },
                /*
                {
                    carouselImageSources: [
                        ThreeToTwoDataPanelOpen,
                        LandingPage,
                        VariableChangeDemo
                    ]
                },
                */
                {
                    title: 'BEAT MAKER MACHINE',
                    text:
                        `
                        Created a webpage that allows the user to play Light and Sound Memory alike game through an intuitive user interface where the user must remember and follow the pattern of the lights of the buttons to finish a beat.
                        Implemented the randomized beats by using a built-in JavaScript library to generate sounds for buttons.
                        
            `,/*
                    range: {
                        start: new Date('2020/04/01'),
                        end: new Date('2020/06/01'),
                    },
                    */
                    link: {
                        url: 'https://beatmakermachine.onrender.com',
                        displayText: 'Demo',
                    }
                },
                /*
                {
                    carouselImageSources: [
                        OshKoshMe,
                        OshKoshClass,
                        OshKoshPlane
                    ]
                },
                */

            ],
        },
        {
            id: 'skills',
            title: 'Meal Service',
            subtitle: 'Skills',
            tickets: [
                {
                    title: 'Skills',
                    text:
                        `
            *Languages:* Java, Python, C, OCaml, SQL, HTML, CSS, JavaScript
            *Frameworks:* Bootstrap, React.js, MySQL
            *Utilities:* Git/Github, IntelliJ, PyCharm, Visual Studio Code
            `,
                }
            ]
        },
        {
            id: 'contact',
            title: 'Connecting Flights',
            subtitle: 'Connect with me',
            tickets: [
                {
                    email: 'mohamza@cs.stonybrook.edu',
                    placeholder: 'Your top secret message in the making...'
                }
            ]
        }
    ];

export const NUMBER_OF_SECTIONS = ticketSections.length;

const Content = (props: ContentProps) => {

    const navLinks = ticketSections.map(({ id, title }) => { return { url: id, displayText: title } });

    return [
        (
            <BigTextBlock
                text="Hi! I'm Amir Hamza"
            />
        ),
        (
            <Navbar
                links={navLinks}
                activeLink={props.activeLink}
            />
        ),
        (
            <TicketsBlock
                sections={ticketSections}
                refs={props.refs}
            />
        )
    ]
}

export default Content;