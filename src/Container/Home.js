import React from "react";
import PlayerService from "../Service/PlayerService";
import team from "../Component/TeamInformation";
import classes from "./HomePage.module.css";
import "../Container/TeamCart.css";
import TeamCard from "./TeamCard";
import Header from "../Component/Header";
import TeamSearchList from "./TeamSearchList";
import "../App.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      players: [],
      teamName: "",
      description: "",
    };

    this.onclickShowPlayer = this.onclickShowPlayer.bind(this);
    this.onclickAddPlayer = this.onclickAddPlayer.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.searchButton = this.searchButton.bind(this);
    this.searchTeam = this.searchTeam.bind(this);
  }

  searchTeam = (e) => {
    this.props.history.push(`/search-by-team/${e.target.value}`);
  };
  searchButton = (e) => {
    if (this.state.description) {
      this.props.history.push(
        `/search-by-description/${this.state.description}`
      );
    } else {
      this.props.history.push(`/search-by-team/${this.state.teamName}`);
    }
  };

  onChangeSearch = (e) => {
    if (
      e.target.value === "BATSMAN" ||
      e.target.value === "ALL_ROUNDER" ||
      e.target.value === "BOWLER"
    ) {
      this.setState({
        description: e.target.value,
      });
    } else {
      this.setState({
        teamName: e.target.value,
      });
    }
  };

  onclickAddPlayer = (e) => {
    this.props.history.push("/add-player");
  };
  onclickShowPlayer = (e) => {
    this.props.history.push("/playerInfo");
  };
  render() {
    return (
      <div>
        <Header
          addEvent={this.onclickAddPlayer}
          ShowEvent={this.onclickShowPlayer}
          search={this.onChangeSearch}
          searchButtonClick={this.searchButton}
        />
        <div className="row">
          {/* <TeamCard searchTeam={this.OnClicksearchTeam} /> */}
          {/* <HomePage /> */}

          <div className={classes.MainDiv}>
            {team.map((value) => {
              return (
                <>
                  <div className={classes.MainCard}>
                    <img className={classes.BanImg} src={value.src}></img>
                    <h2 className={classes.Title}>{value.title}</h2>
                    <button
                      className="b1"
                      onClick={this.searchTeam}
                      value={value.teamName}
                    >
                      {value.teamName}
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
