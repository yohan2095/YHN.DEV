import "./Home.css";
import tline from "../Images/topline.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

function HomeComp() {
  return (
    <div className='home'>
      <div className='home_title'>
        <h5>Hello, I am</h5>
        <h1>Yohan Arejouane.</h1>
        <h1>
          A web developer<span className='blink'>_</span>
        </h1>
        <p>
          I develop web apps and web programs from scratch <br /> using the most
          advanced technologies. I am <br /> currently heading towards my first
          professional <br /> experience as a Full-Stack developer.
        </p>
      </div>


      {/* Social Media side menu */}
      <img src={tline} alt='line' className='home_tline' />
      <div className='home_socialMedia'>
        <Link
          target='_blank'
          to={{ pathname: "https://www.instagram.com/yhn.dev/" }}
        >
          <InstagramIcon className='home_instagram' />
        </Link>

        <Link target='_blank' to={{ pathname: "https://github.com/yohan2095" }}>
          <GitHubIcon className='home_github' />
        </Link>
        <Link
          target='_blank'
          to={{
            pathname: "https://www.linkedin.com/in/yohan-arejouane-62752b104/",
          }}
        >
          <LinkedInIcon className='home_linkedin' />
        </Link>
        <Link
          target='_blank'
          to={{ pathname: "https://twitter.com/YArejouane" }}
        >
          <TwitterIcon className='home_twitter' />
        </Link>
      </div>
    </div>
  );
}

export default HomeComp;
