import React, { useEffect, useState } from 'react';
import './Service.css';

const Service = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building fast, modern websites.",
      icon: "🌐"
    },
    {
      title: "UI/UX Design",
      description: "Creating clean and intuitive designs.",
      icon: "🎨"
    },
    {
      title: "Mobile App Development",
      description: "Developing cross-platform mobile apps.",
      icon: "📱"
    }
  ];

  return (
    <section className="service-section">
      <h2 className="service-title">My Services</h2>
      <div className="tree">
        {services.map((service, index) => (
          <div key={index} className="tree-branch">
            <div className="leaf">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Customer Satisfaction Circle */}
      <div className="satisfaction-container">
        <SatisfactionCircle percentage={95} />
      </div>
    </section>
  );
};

const SatisfactionCircle = ({ percentage }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current >= percentage) {
        clearInterval(interval);
      } else {
        current += 1;
        setProgress(current);
      }
    }, 30); // Controls speed
  }, [percentage]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 108) * circumference;

  return (
    <div className="circle-wrap">
      <svg className="circle" width="120" height="120">
        <circle
          className="bg"
          cx="60"
          cy="60"
          r={radius}
        />
        <circle
          className="progress"
          cx="60"
          cy="60"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="circle-text">
        <strong>{progress}%</strong>
        {progress === percentage ? (
          <span>Trust My Service!</span>
        ) : (
          <span>Customer Satisfaction</span>
        )}
      </div>
    </div>
  );
};
export default Service;