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
            Start by submitting your complaint here. Our team will review it and get back to you as soon as possible.
          </p>
          </div>
        </a>
        <a href="/endsolver">
        <div className="option-card">
          <h2 className="option-title">Track Complaint Status</h2>
          <p className="option-text">
            Already submitted a complaint? Check its status here to see if there are any updates.
          </p>
        </div></a>
      </div>
    </div>
  );
};

export default Home;