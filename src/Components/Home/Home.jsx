import React from 'react'
import { useSelector } from 'react-redux';
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import './home.css'


const Home = () => {
   const userRepo = useSelector((storeData)=>{
    return storeData.userRepo
   })
  //  console.log(userRepo);
  return (
    <div className='homeContainer'>
      {userRepo && userRepo.map((ele)=>{
        return(
          <>
            <div className="container">
              <div className="left_container">
                <img src={ele.owner.avatar_url} alt="" />
              </div>
              <div className="right_container">
                <div className="details_container">
                  <h1>{ele.name}</h1>
                  <h3>{ele.description}</h3>
                  <div className="stars_container">
                    <div className="inner_star_container">
                      <Button variant="outline-primary">{ele.stargazers_count}<i class="fa-solid fa-star"></i></Button>
                      <Button variant="outline-primary">{ele.open_issues_count}</Button>
                    </div>
                    <div className="time_container">
                      <span>Last Pushed {ele.pushed_at} by {ele.owner.login}</span>
                    </div>
                  </div>
                </div>
                <div className="dropdown_container">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Dropdown button"
                  >
                    <Dropdown.Item href="#/action-1">
                      <Link to={`graph/${ele.owner.login}/${ele.name}`}>
                      Commit
                      </Link>
                      </Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>

            </div>
          </>
        )
      })}
    </div>
  )
}

export default Home