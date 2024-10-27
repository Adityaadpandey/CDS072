import './index.scss';

const Home = () => {
  return (
    <div className="container">
      <h1 className="heading">Complaint Management System</h1>
      <div className="options">
        <a href="/enduser">
          <div className="option-card">
            <h2 className="option-title">File a Complaint</h2>
            <p className="option-text">
            Submit your complaint through our simple form. Our team will review it thoroughly and respond promptly to ensure your concerns are addressed.
            </p>
          </div>
        </a>
        <a href="/endsolver">
          <div className="option-card">
            <h2 className="option-title">Track Complaint Status</h2>
            <p className="option-text">
            Stay informed about your complaint's progress with our tracking system. Receive real-time updates to know the current status and any actions taken.
            </p>
          </div>
        </a>
        <a href="/faq">
          <div className="option-card">
            <h2 className="option-title">FAQs</h2>
            <p className="option-text">
            Find quick answers to common questions in our FAQs. This section is designed to provide clarity on our services and the complaint process.
            </p>
          </div>
        </a>
        <a href="/contact">
          <div className="option-card">
            <h2 className="option-title">Contact Us</h2>
            <p className="option-text">
            For further assistance or specific inquiries, reach out to our dedicated support team. We're here to help you navigate any challenges you may face.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;