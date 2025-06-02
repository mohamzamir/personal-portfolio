import BigTextBlock from '../components/BigTextBlock';
import TicketsBlock from '../components/TicketsBlock';
import Navbar from '../components/Navbar';
import { SectionProps } from '../components/Section';
import TitleImage from '../components/Ticket/TitleImage';
import SBULogo from '../media/LogoSBU.png'
import CEASLogo from '../media/CEAS_logo.png'
import AmazonLogo from '../media/amazon.png'

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
                    subtitle: 'Computer Science and Applied Mathematics & Statistics BA',
                    text:
                        `
            *Relevant Coursework*
            *CS:* 
            Intro to Object Oriented Programming, Discrete Mathematics, Data Structures and Algorithm, Programming Abstraction, System Fundamentals
            *Math:* 
            Calculus II, Survey of Probability and Statistics, Applied Linear Algebra, Calculus IV
            `,
                    range: {
                        start: new Date('2021/08/01'),
                        end: new Date('2026/05/01'),
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
                    title: <TitleImage src={AmazonLogo} />,
                    subtitle: 'Cloud Engineer Intern',
                    text:
                        `
                        • Collaborated on cloud migration and modernization projects focusing on **containerization (Docker, Kubernetes)** and serverless architectures (**Lambda, Fargate**) to optimize scalability and streamline development workflows. Provided technical expertise on CI/CD pipelines, and IaC principles with CloudFormation.
                        • Contributed to successful migration of **2 legacy applications** to the cloud using AWS CloudFormation, achieving **25% cost reduction** and **reduced technical debt** through automated deployment processes.
                        • **Developed and implemented** CloudFormation templates and modular architecture patterns to standardize and expedite the creation of secure and scalable cloud environments, **enhancing developer productivity by 40%**.
                        `,
                    range: {
                        start: new Date('2024/06/01'),
                        end: new Date('2024/08/31'),
                    },
                },
                {
                    title: 'Department of Computer Science',
                    subtitle: 'Undergraduate Research Assistant (Part-time)',
                    text:
                        `
                        Developed strategic collaboration with *Professor Amir Rahmati* and *IBM Research*, contributing significantly to numerous projects including the enhancement and optimization of the IBM Adversarial Robustness Toolbox (ART).
                        Leveraged advanced ML algorithms and security measures to boost IBM ART toolbox's performance by 35% and reduce computational latency by 20%.
                        Fortified security led to a 25% drop in data breaches, and improved anomaly detection decreased false positives by 15%, enhancing model defense and auditing efficiency.
            `,
                    range: {
                        start: new Date('2023/06/07'),
                        end: new Date(),
                    },
                    link: {
                        url: 'https://amir.rahmati.com',
                        displayText: 'Professor Amir Rahmati',
                    }
                },
                {
                    title: 'Stony Brook Virtual Integrated Research Labs',
                    subtitle: 'Researcher/Software Engineering Intern',
                    text:
                        `
                        Developed a fully immersive virtual *Jazz Loft Museum* using advanced web development technologies, creating an innovative platform for users to explore jazz artifacts.
                        Implemented a normalized relational SQL database that streamlined the digital data entry process, significantly reducing redundancy and improving the efficiency of the database management system.
                        Achieved an increase in user engagement and retention on the virtual museum platform and enhanced productivity in archival operations by 40% through the efficient data entry process enabled by the SQL database implementation.
                    
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
                    title: 'ScribbleSolver: Equation Solver Model',

                    text:
                        `
                        Collaborated to design and implement a Handwritten Equation Solver using a Convolutional Neural Network (CNN) and Optical Character Recognition (OCR) technology. The model is proficient in recognizing digits and mathematical symbols, facilitating accurate translation of written inputs into solvable equations.
                        Achieved a high model accuracy of 98.27% with a minimized loss function of 0.656%, demonstrating the effective application of machine learning methodologies in solving complex, real-world problems.

            `,
                    /*
                            range: {
                                start: new Date('2022/04/01'),
                                end: new Date('2022/12/01'),
                            },
                            */
                    link: {
                        url: 'https://github.com/mohamzamir/ScribbleSolver-Equation-Solver-Model.git',
                        displayText: 'X^2+2X-3=0',
                    }
                },

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
                        It also implemented *Dijkstra's Algorithm* to find the shortest path.
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
                        `                        Created a webpage that allows the user to play Light and Sound Memory alike game through an intuitive user interface where the user must remember and follow the pattern of the lights of the buttons to finish a beat.
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
            *Languages:* Java, Python, C, C++ , OCaml, SQL, HTML, CSS, JavaScript
            *Frameworks:* Bootstrap, MySQL, Tensorflow, React.js, Node.js, Express.js, Bootstrap, Django, MongoDB, FireBase
            *Utilities:* Git/Github, IntelliJ, PyCharm, Visual Studio Code, Jupyter Notebook, Google Colab
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

