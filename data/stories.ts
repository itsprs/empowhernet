export interface Story {
  id: string
  name: string
  title: string
  story: string
  image: string
  category: string
}

export const stories: Story[] = [
  {
    id: "1",
    name: "Dr. Ayesha Patel",
    title: "AI Researcher at MIT",
    story:
      "Raised in a small village in Gujarat, India, Ayesha faced limited access to technology and education. Yet, her fascination with logic and problem-solving led her to excel academically. After earning scholarships and breaking cultural barriers, she pursued computer science and later obtained her PhD from MIT. Today, she leads a research team at the forefront of ethical AI, mentoring young women globally and advocating for inclusive innovation.",
    image:
      "https://media.istockphoto.com/id/1987655119/photo/smiling-young-businesswoman-standing-in-the-corridor-of-an-office.jpg?s=612x612&w=0&k=20&c=5N_IVGYsXoyj-H9vEiZUCLqbmmineaemQsKt2NTXGms=",
    category: "STEM",
  },
  {
    id: "2",
    name: "Lina Rodriguez",
    title: "Mechanical Engineer at SpaceX",
    story:
      "Born in Bogotá, Colombia, Lina dreamt of building machines that could touch the stars. Despite discouragement from those around her, she pursued engineering with determination. After years of relentless work and internships, she landed a role at SpaceX, contributing to breakthrough innovations in rocket design. Lina now runs outreach programs encouraging Latina girls to embrace STEM fields.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWn4qtNZbAskJbjQ5Xv6Dkx1tWaFCM5Lzs8A&s",
    category: "Engineering",
  },
  {
    id: "3",
    name: "Zara Ahmed",
    title: "Founder, SheCodes Africa",
    story:
      "Zara’s passion for coding began at an internet café in Lagos, Nigeria. Self-taught and self-motivated, she quickly recognized the gap in opportunities for African women in tech. She founded SheCodes Africa to bridge this gap, offering free bootcamps, mentorship, and scholarships. Her work has transformed lives, creating a powerful ripple effect of tech-savvy women across the continent.",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQFb7Aa8i28xdA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1552054667971?e=2147483647&v=beta&t=ywr3yO8mHd32iAK1JQx1ki3sAzNvOBy3DcV5FNbjxTs",
    category: "Tech",
  },
  {
    id: "4",
    name: "Naomi Kim",
    title: "Cybersecurity Analyst at Google",
    story:
      "Growing up in Seoul with an interest in puzzles, Naomi discovered cybersecurity during a high school workshop. Overcoming imposter syndrome and language barriers, she carved her path through global hackathons and academic excellence. Now at Google, she leads high-impact security initiatives and mentors young Asian women in cyber careers.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPi3dTs3PjVD_kFLJN4ekCxK8R3rrDATscCg&s",
    category: "Cybersecurity",
  },
  {
    id: "5",
    name: "Anika Desai",
    title: "Robotics Engineer",
    story:
      "Anika’s fascination with robotics began with building toys from scrap electronics. After excelling at IIT and working with global tech firms, she focused her efforts on creating assistive robots for the elderly and disabled. Anika’s designs have revolutionized home healthcare, and she continues to champion accessibility in technology.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGe2zUk1KW8KGqC6nvuMeX7IOQxuasZHSfaQ&s",
    category: "Robotics",
  },
  {
    id: "6",
    name: "Sara Müller",
    title: "Climate Scientist & Activist",
    story:
      "Sara grew up in the Swiss Alps, witnessing the effects of climate change firsthand. After studying environmental science, she merged her love for research with activism. She’s now a prominent climate voice at global summits and runs educational programs across Europe, empowering girls to lead in sustainability efforts.",
    image:
      "https://media.licdn.com/dms/image/v2/C5603AQGtFfw1go5pLg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1625137116014?e=2147483647&v=beta&t=CFDOEFKEJvdVopi1RJXrChiyEUN4y610q4JEfsDMHh0",
    category: "Science",
  },
  {
    id: "7",
    name: "Maya Jackson",
    title: "Software Architect & Mentor",
    story:
      "Maya grew up coding in her local library in Atlanta. She rose through the tech ranks, becoming one of the youngest software architects at a major Silicon Valley firm. Alongside her career, Maya dedicates time to mentoring Black girls in tech through her nonprofit, ensuring they too find their space in innovation.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmk6TtzJLwia2rf1z0vGifVwF7ujThIp5Fw&s",
    category: "Software",
  },
  {
    id: "8",
    name: "Eun-Ji Park",
    title: "Professor of Quantum Physics",
    story:
      "Eun-Ji faced skepticism and underestimation throughout her academic journey in South Korea. Yet, she persisted, eventually gaining international acclaim for her work in quantum mechanics. As a professor, she’s not only known for her groundbreaking research but also her commitment to nurturing the next generation of women physicists.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7T2iprEUtBH_JEb6WYwJ8RBcGv_pUoPdOA&s",
    category: "Academia",
  },
  {
    id: "9",
    name: "Fatima Noor",
    title: "UN Women Program Leader",
    story:
      "Fatima’s work with refugees in Sudan sparked a lifelong mission to uplift women from marginalized communities. At the UN, she’s spearheaded global initiatives supporting economic empowerment and education for girls. Her leadership is rooted in empathy, and her voice resonates in boardrooms and rural villages alike.",
    image:
      "https://media.licdn.com/dms/image/v2/D4D22AQG8vXb4kVBEgQ/feedshare-shrink_800/feedshare-shrink_800/0/1723797973277?e=2147483647&v=beta&t=ao-KWDcFo7y47SAIu9bCMtv_A9PvFEj6EL8KW_Itwy0",
    category: "Leadership",
  },
  {
    id: "10",
    name: "Isabella Rossi",
    title: "EdTech Innovator",
    story:
      "Hailing from rural Italy, Isabella used a solar-powered tablet to teach herself coding. Inspired by her experience, she built an EdTech platform that now serves thousands of girls in under-resourced areas. Her vision: to ensure no child is denied education due to geography or gender.",
    image: "https://i.scdn.co/image/ab6775700000ee85032675b1ee5289f6d4ffb8f8",
    category: "Education",
  },
]
