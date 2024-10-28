# Railway Complaint Management System

### Available at: [Railway Complaint Management System](https://rail-cms-three.vercel.app/)

This Railway Complaint Management System is built using the MERN Stack (MongoDB, Express, React, Node) to offer a streamlined and efficient way for passengers to report issues encountered during their train journeys. Designed with simplicity and usability in mind, this platform provides a quick and reliable way to raise complaints and ensure timely resolution.

---

## Features

The system utilizes each passenger's PNR (Passenger Name Record) to authenticate and categorize complaints for streamlined processing. Passengers can select the problem type and subcategory, upload an image of the issue, and submit a report. An AI model verifies the complaint's authenticity and, if valid, prioritizes it for resolution, routing it to the relevant authority for prompt handling.

### Core Functionalities:

1. **/endsolver**: A dedicated access point for database personnel, responsible for managing the AI's activities. Once a complaint is resolved, it is removed from the database to maintain up-to-date records.
   
2. **/enduser**: A form where users can submit complaints, which pass through the Gemini API and a custom algorithm to prioritize high-importance issues, streamlining the pipeline for faster resolution.
   
3. **/manager**: This module collects high-priority issues—such as security concerns—and escalates them directly to the responsible in-train personnel via SMS or call, ensuring immediate attention.
   
4. **/user**: A portal for the team responsible for issue resolution, containing task assignments and relevant information to help them efficiently manage passenger complaints.

---

## Benefits

- **Time Efficiency**: Reduces resolution time by quickly identifying and verifying complaints and prioritizing critical issues.
- **AI Validation**: Ensures that only genuine issues are escalated, minimizing false complaints and optimizing resources.
- **Direct Reporting**: High-priority concerns go straight to the concerned authority, speeding up response times and ensuring safety and satisfaction for passengers.

---

## Technologies Used

- **Frontend**: ReactJS, SCSS
- **Backend**: NodeJS, ExpressJS
- **Database**: MongoDB
- **AI Integration**: Custom algorithm with Gemini API

---

## Local Setup

To run this project locally, follow these steps:

```bash
git clone https://github.com/Adityaadpandey/CDS072.git
cd CDS072
npm install
npm start
```

This streamlined and efficient complaint management system is here to ensure a safer and more satisfying journey for railway passengers.
