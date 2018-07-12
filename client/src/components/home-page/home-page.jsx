import * as React from "react"
// import Navigation from "../navigation/navigation"
import Feed from "../feed"
import Login from "../login/login"
import "./home-page.css"
// import { diffQueryAgainstStore } from "apollo-cache-inmemory";

// const auth = {
//   isAuthenticated: false,
// }

class HomePage extends React.Component {
  render() {
    return (
      localStorage.getItem('token') ? (
        <div>
          {/* <Navigation /> */}
          <div className="body">
            <div className="sidebar">
              <div className="logo">
                <img src={require("../logo.png")} />
              </div>
              {/* <div className="current-user"/>
            <div className="logout"/> */}
            </div>
            <div className="feed"><Feed />
              <button onClick={() => {
                localStorage.removeItem('token')
                this.rerender()
              }}>
                log out
          </button>
            </div>
          </div>
        </div>
      ) : (
          <div>
            <div>
              <Login rerender={this.rerender} />
            </div >
          </div>
        )
    )
  }
}

export default HomePage
