import Layout from "../Components/Layout";
import heroImage from "../Images/heroImage.avif"
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <Layout>
      <div className="heroContainer">
        <span className="text">
          <h1>Create an <span style={{color:"white"}}>
            AI generated 
            </span>
            </h1>
          <h1> Resume for free</h1>
          <p>
            Create a professional resume in minutes with our AI-powered resume
            builder. Choose from a variety of templates and customize your
            content to stand out in the job market.
          </p>

            <Link to="/templates" className="createResumeButton">
          <button>
            Create Resume
          </button>
            </Link>
        </span>
        <span className="image">
          <img
            className="heroImage"
            src={heroImage}
            alt="Resume Illustration"
          />
        </span>
      </div>
    </Layout>
  );
};

export default Home;
