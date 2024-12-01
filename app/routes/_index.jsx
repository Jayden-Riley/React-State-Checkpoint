import { Component } from "react";

// Meta function for SEO
export const meta = () => {
  return [
    { title: "Profile Toggle with Remix" },
    {
      name: "description",
      content: "A simple class-based component using Remix",
    },
  ];
};

// Class-based component
class Profile extends Component {
  state = {
    person: {
      fullName: "Jayden Riley",
      bio: "A passionate web developer.",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Web Developer",
    },
    shows: false,
    timeSinceMount: 0,
  };

  // Lifecycle method to set up the interval
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000); // Update every second
  }

  // Cleanup interval on unmount
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Toggle the profile visibility
  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    let { person, shows, timeSinceMount } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={this.toggleProfile} style={{ marginBottom: "20px" }}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div>
            <img
              src={person.imgSrc}
              alt="Profile"
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}

        <p>Time since component mounted: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

// The main function renders the Profile component
export default function Index() {
  return <Profile />;
}
