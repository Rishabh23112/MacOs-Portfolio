export const WINDOW_TYPES = {
    txtfile: "txtfile",
};

const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
    ];

    const dockApps = [
    {
        id: "finder",
        name: "Portfolio", 
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", 
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", 
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", 
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", 
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", 
        icon: "trash.png",
        canOpen: false,
    },
    ];

    const blogPosts = [
    
    ];

    const techStack = [
    {
        category: "Languages",
        items: ["Java", "Python", "SQL"],
    },
    {
        category: "Artificial Inteligence",
        items: ["LangChain","PEFT (LoRA)", "PyTorch"],
    },
    {
        category: "Database",
        items: ["Vector DBs", "MongoDB", "PostgreSQL"],
    },
    {
        category: "Backend & Frontend",
        items: ["FastAPI", "Reactjs"],
    },
    
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/Rishabh23112",
    },
    {
        id: 2,
        text: "LeetCode",
        icon: "/icons/LeetCode.png",
        bg: "#4bcb63",
        link: "https://leetcode.com/u/R1sh_abh/",
    },
    
    {
        id: 3,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/r1shabh-kumar/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    // {
    //     id: 1,
    //     img: "",
    // },
    
];

export {
    blogPosts, dockApps, gallery, navIcons, navLinks, photosLinks, socials, techStack
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
        id: 5,
        name: "AutoForge",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-10 left-5", 
        windowPosition: "top-[5vh] left-5", 
        children: [
            {
            id: 1,
            name: "AutoForge.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
                "Empowering Developers with an Autonomous AI Software Engineer that Plans, Builds, Runs, and Self-Heals.",
                "AutoForge is more than a code generator; it is a fully autonomous development pipeline that bridges the gap between natural language prompts and stable, production-ready applications. By integrating a secure Docker sandbox and an iterative.",
                "Fix-and-Test loop, AutoForge ensures that the code it writes is not just syntactically correct, but fully functional.",
            ],
            },
            {
            id: 2,
            name: "autoforge.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://auto-forge-eosin.vercel.app/",
            position: "top-10 right-20",
            },
            {
            id: 4,
            name: "autoforge.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 right-80",
            imageUrl: "/images/AutoForge.png",
            },
            {
            id: 5,
            name: "Design.fig",
            icon: "/images/plain.png",
            kind: "file",
            fileType: "img",
            imageUrl:"/images/fig1.webp",
            position: "top-60 right-20",
            },
        ],
        },

        // ▶ Project 2
        {
        id: 6,
        name: "Mental Health RAG System",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-52 right-80",
        windowPosition: "top-[20vh] left-7",
        children: [
            {
            id: 1,
            name: "Mental Health API.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 right-10",
            description: [
                "Built a production-oriented mental health support platform using FastAPI, Qdrant, Gemini, Hugging Face embeddings, and MongoDB.",
                "The system leveraged a hybrid Retrieval-Augmented Generation (RAG) pipeline, combining local semantic search with LLM-based response generation to deliver context-aware assistance. To improve user safety, it incorporated a custom crisis-detection mechanism using a 15-word sliding window and vector similarity thresholds (>0.85) to identify high-risk conversations while minimizing false negatives.",
                "An asynchronous FastAPI architecture enabled sub-second response times and supported 50+ concurrent crisis alerts, making the system scalable and responsive.",
                
            ],
            },
            {
            id: 2,
            name: "mental-health-api.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://github.com/Rishabh23112/MentalHealth_API",
            position: "top-20 left-20",
            },
            {
            id: 4,
            name: "mental-health-api.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/mentalhealth.png",
            },
            
        ],
        },

        // ▶ Project 3
        {
        id: 7,
        name: "RepoChat ",
        icon: "/images/folder.png",
        kind: "folder",
        position: "top-10 left-80",
        windowPosition: "top-[33vh] left-7",
        children: [
            {
            id: 1,
            name: "RepoChat.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-5 left-10",
            description: [
                "Developed an AI-powered conversational assistant for GitHub repositories using FastAPI, LangChain, ChromaDB, and Gemini.",
                "The application indexed repository source code into a vector database and enabled developers to ask natural language questions about large codebases.",
                "It used recursive document chunking (800-token chunks with 100-token overlap) to preserve context and improve retrieval quality, while semantic top-k (k=4) vector search ensured accurate code-aware responses.",
                "The backend also managed repository ingestion, vector indexing, and multi-turn conversation history, providing an interactive and context-aware developer experience.",
            ],
            },
            {
            id: 2,
            name: "repochat.com",
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: "https://repo-chat-frontend.onrender.com/",
            position: "top-10 right-20",
            },
            {
            id: 4,
            name: "repochat.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 right-80",
            imageUrl: "/images/repochat.png",
            },
            
        ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
        id: 1,
        name: "OCI GenAI.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-10 left-5",
        imageUrl: "/images/OCI_GenAI.png",
        },
        {
        id: 2,
        name: "OCI AI Foundation.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-28 right-72",
        imageUrl: "/images/OCI_AI_Foundation.png",
        },
        
        {
        id: 4,
        name: "about-me.txt",
        icon: "/images/txt.png",
        kind: "file",
        fileType: "txt",
        position: "top-60 left-5",
        subtitle: "Meet the Developer Behind the Code",
        image: "/images/Rishabh.png",
        description: [
            "Hey! I’m Rishabh 👋, an AI developer who enjoys building agents, chatbots that actually work well.",
            "I specialize in Python, React, and —and I love making things feel smooth, fast, and just a little bit delightful.",
            "I’m big on developing AI agents, and writing code that doesn’t need a search party to debug.",
            "Outside of dev work, you'll find me tweaking codes at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
        ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
        id: 1,
        name: "Resume.pdf",
        icon: "/images/pdf.png",
        kind: "file",
        fileType: "pdf",
        
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
        id: 1,
        name: "trash1.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-10 left-10",
        imageUrl: "/images/trash1.png",
        },
        {
        id: 2,
        name: "trash2.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-40 left-80",
        imageUrl: "/images/trash2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
