import React,{Component} from 'react';
import searchIcon from "../imageAssets/Icons/General/search.png"
class therapists extends Component {
    render() {
        return(
            <div className="therapists">
                <p>Favourite Therapists</p>
                <form className="searchbar">
                  <img className = "seachIcon" src={searchIcon} />
                  <input type="text" id = "search" className="search"></input>
                </form>

                {/*Temporary filler until axios is implemented */}
            <div className="therapistGrid">
              <div className="therapist">
                <div className="qualification">
                  <h2>Dr</h2>
                </div>
                <p>Name</p>
              </div>

              <div className="therapist">
                <div className="qualification">
                  <h2>Dr</h2>
                </div>
                <p>Name</p>
              </div>

              <div className="therapist">
                <div className="qualification">
                  <h2>Dr</h2>
                </div>
                <p>Name</p>
              </div>

              <div className="therapist">
                <div className="qualification">
                  <h2>Dr</h2>
                </div>
                <p>Name</p>
              </div>

              <div className="therapist">
                <div className="qualification">
                  <h2>Dr</h2>
                </div>
                <p>Name</p>
              </div>

              <div className="therapist">
                <div className="qualification">
                  <h2>Dr</h2>
                </div>
                <p>Name</p>
              </div>
            </div>


            </div>
        )
    }
}

export default therapists;