import {
    mobile,
    backend,
    creator,
    web,
    java,
    python,
    blender,
    vue,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    cmu,
    blue,
    srm,
    sail,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    mites,
    mliot,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "IoT Specialist",
      icon: mobile,
    },
    {
      title: "Machine Learning Engineer",
      icon: backend,
    },
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "3D Artist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vue",
      icon: vue,
    },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "blender",
      icon: blender,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Lead Researcher",
      company_name: "Carnegie Mellon University",
      icon: cmu,
      iconBg: "#E6DEDD",
      date: "March 2020 - April 2021",
      points: [
        "Designed and deployed Mites system for operating sensors in buildings.",
        "Administered the deployment of Mites system and 314 Mites devices in a fully occupied university building.",
        "Developed and evaluated MLIoT, an end-to-end ML system for IoT applications.",
        "Reduced labeling efforts in time series for IoT-based ML systems by up to 70%.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: " BlueBanyan Technologies",
      icon: blue,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Upgraded Android app to supervise state government hoardings and billboards.",
        "Developed real-time truck tracking app for a mining company.",
        "Supervised end-to-end development of NodeJS server and gym/fitness center app.",
        "Implemented unsupervised anomaly detection algorithms to monitor fuel transportation pipes.",
      ],
    },
    {
      title: "Lead Researcher",
      company_name: "SRM SDN Labs",
      icon: srm,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Created WiFi-based indoor localization system for real-time user tracking.",
        "Leveraged AoA and Trilateration techniques for high-accuracy location prediction.",
        "Presented the project on Advances In Positioning, Navigation And Communication (APNC) 2016.",
        "Evaluated ELM and SVM algorithms for location prediction.",
      ],
    },
    {
      title: "Industrial Trainee",
      company_name: "Steel Authority of India Limited",
      icon: sail,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Led the implementation of unsupervised anomaly detection algorithms to monitor sensor conditions.",
        "Utilized machine learning techniques to analyze large datasets and improve system reliability.",
        "Improved operational efficiency by 30% and system reliability by 50%.",
        "Monitored temperature and pressure sensors installed in fuel transportation pipes.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Working with Anurag on a project was an absolute pleasure. His experience with machine learning and IoT was evident in his work, and he always went above and beyond to deliver high-quality results. I highly recommend Anurag for any software development project.",
      name: "Yuvraj Agarwal",
      designation: "Professor/Advisor",
      company: "Synergy Labs, CMU",
      image: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=H4UeZ2MAAAAJ&citpid=2",
    },
    {
      testimonial:
        "Anurag's knowledge and expertise in software development helped us create a powerful and user-friendly application that exceeded our expectations. His attention to detail and ability to solve complex problems made him an invaluable part of our team.",
      name: "Mohit Sahu",
      designation: "Co-Founder",
      company: "BlueBanyan",
      image: "https://www.mohitsahu.in/images/mohitsahu.jpg",
    },
    {
      testimonial:
        "I had the privilege of being Anurag's supervisor during his time at SAIL. His work on unsupervised anomaly detection algorithms was innovative and highly effective, significantly improving our operational efficiency. I have no doubt that Anurag will continue to excel in his career.",
      name: "Mr. GP Tiwari",
      designation: "GM",
      company: "SAIL",
      image: "https://media.licdn.com/dms/image/C5103AQE1bKLcRhEw8w/profile-displayphoto-shrink_400_400/0/1538923547920?e=1688601600&v=beta&t=eRLm9aRi6SYk4mVT6TAWmbNjxvnmli8x4h2cE1BOtB4",
    },
  ];
  
  const projects = [
    {
      name: "Mites",
      description:
        "Scalable hardware-software system for managing distributed sensors in buildings. Robust primitives for privacy/security, data management, and machine learning. Deployed successfully with 314 Mites devices.",
      tags: [
        {
          name: "IoT",
          color: "blue-text-gradient",
        },
        {
          name: "distributedSystems",
          color: "green-text-gradient",
        },
        {
          name: "research",
          color: "pink-text-gradient",
        },
      ],
      image: mites,
      source_code_link: "https://github.com/",
    },
    {
      name: "MLIoT",
      description:
        "A large-scale machine learning system for IoT applications that significantly improves accuracy and reduces latency while handling multiple IoT tasks in a scalable manner.",
      tags: [
        {
          name: "machineLearning",
          color: "blue-text-gradient",
        },
        {
          name: "restApi",
          color: "green-text-gradient",
        },
        {
          name: "research",
          color: "pink-text-gradient",
        },
      ],
      image: mliot,
      source_code_link: "https://github.com/",
    },
    {
      name: "AbridgeML",
      description:
        "End-to-end, plug-and-play ML system that automatically featurizes and labels device data modalities, and uses Toeplitz Inverse Covariance-Based Clustering (TICC) for highly accurate local environment and event recognition.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "machineLearning",
          color: "green-text-gradient",
        },
        {
          name: "research",
          color: "pink-text-gradient",
        },
      ],
      image: mites,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };