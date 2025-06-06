import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const Profile = () => {
const [darkMode, setDarkMode] = useState(true);

const skills = [
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "MySQL",
    "AWS",
    "Git",
  ];

  return (
<div
className={`${
darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen px-4 md:px-20 py-10 transition duration-500 ease-in-out`}
>
<header className="flex flex-col md:flex-row items-center justify-between">
<div>
<div className="flex items-center">
<h1 className="text-4xl font-bold mb-2">Hi, I'm Abel</h1>
<motion.span
className="text-4xl ml-2"
              animate={{ rotate: [0, 20, -20, 10, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
>
👋
</motion.span>
</div>

<p className="text-lg max-w-xl mt-2">
            I’m a full stack developer (React.js&Node.js) focused on creating
            fast, accessible, and responsive digital experiences.
</p>

<div className="mt-4 text-sm">
<p>Adama, Ethiopia</p>
<p className="text-green-400">Available for new projects</p>
</div>

<div className="flex space-x-4 mt-4">
<a
href="https://linkedin.com"
              target="_blank"
rel="noopenernoreferrer"
>
<FaLinkedin size={24} className="hover:text-blue-400" />
</a>
<a
href="https://twitter.com"
              target="_blank"
rel="noopenernoreferrer"
>
<FaTwitter size={24} className="hover:text-blue-400" />
</a>
<a
href="https://github.com"
              target="_blank"
rel="noopenernoreferrer"
>
<FaGithub size={24} className="hover:text-gray-400" />
</a>
</div>

<div className="flex items-center mt-6 space-x-4">
<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-white">
              Download CV
</button>

<button
className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
onClick={() =>setDarkMode(!darkMode)}
              aria-label="Toggle Dark Mode"
>
              {darkMode ? (
<FaSun className="text-yellow-400" />
              ) : (
<FaMoon className="text-gray-800" />
              )}
</button>
</div>
</div>

<div className="mt-10 md:mt-0">
<img
src="/profile-avatar.png"
            alt="Abel Avatar"
className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-xl"
          />
</div>
</header>

<section className="mt-16">
<h2 className="text-2xl font-semibold mb-4">Skills</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
<div
              key={idx}
className="p-4 text-center text-sm font-medium bg-gray-800 rounded-xl"
>
              {skill}
</div>
          ))}
</div>
</section>
</div>
  );
};

export default Profile;
