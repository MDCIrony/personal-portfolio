import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import ImgContainer from "../../../common/ImgContainer";
import RewriteText from "../../../common/RewriteText";
import { topHomeInfo } from "../../../../constants/info";

export default function TopHome(): React.ReactElement {
  return (
    <TopHomeContainer>
      <div className="row align-items-center">
        <div className="col-md-5 px-4">
          <h1 className="covered-text">
            {topHomeInfo.title.top}
            <span className="txt-rotate">
              <RewriteText toRotate={topHomeInfo.title.rewrite} period={1000} />
            </span>
          </h1>
          <p className="home-text">{topHomeInfo.description.first}</p>
          <p className="home-text">{topHomeInfo.description.second}</p>
          <a
            href="https://www.linkedin.com/in/migueldiaz2023"
            target="_blank"
            rel="noreferrer"
            className="home"
          >
            Contáctame! <AiOutlineArrowRight />
          </a>
        </div>
        <div className="col-md-7 py-5">
          <ImgContainer
            src="/images/me.png"
            alt="Foto de Miguel Díaz Castillo, web developer"
          />
        </div>
      </div>
    </TopHomeContainer>
  );
}

const TopHomeContainer = styled.div`
  .covered-text {
    color: white;
    font-weight: 700;
    letter-spacing: 0.8px;
    padding: 8px 10px;
    background: linear-gradient(
      90.21deg,
      rgba(170, 54, 124, 0.5) -5.91%,
      rgba(74, 47, 189, 0.5) 111.58%
    );
    border: 1px solid rgba(255, 255, 255, 0.5);
    font-size: 20px;
    margin-bottom: 16px;
    display: inline-block;
  }

  .home-text {
    color: white;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.8px;
    line-height: 1.5em;
  }

  a.home {
    text-decoration: none;
    border: none;
    background: none;
    color: white;
    font-weight: 700;
    font-size: 20px;
    margin-top: 60px;
    letter-spacing: 0.8px;
    display: flex;
    align-items: center;
  }

  a.home svg {
    font-size: 25px;
    margin-left: 10px;
    transition: 0.3s ease-in-out;
    line-height: 1;
  }

  a.home:hover svg {
    margin-left: 25px;
  }
`;
