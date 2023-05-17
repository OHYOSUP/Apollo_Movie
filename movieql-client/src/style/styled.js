import styled from "styled-components";

export const Wrapper = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#192a56, #487eb0);
  padding-bottom: 150px;
  h1 {
    padding-top: 100px;
    color: white;
    font-size: 37px;
    letter-spacing: 12px;
  }
`;

export const MovieListwrapper = styled.ul`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 200px;
  gap: 20px;
  li {
    list-style: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      width: 80%;
      position: absolute;
      color: white;
      text-decoration: none;
      opacity: 0;
      text-align: center;
      font-weight: bold;
      font-size: 24px;
      line-height: 25px;
    }
  }
  li:hover {
    img {
      opacity: 0.3;
      background-color: rgba(0, 0, 0, 0.3);
      transition: all 0.2s;
    }
    p {
      opacity: 1;
      transition: all 0.2s;
    }
  }
`;

export const MovieDertailWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(#fa6535, #c74888);
`;
export const Loading = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: white;
  transform: translate(0%, 50%);
`;

export const MovieDetail = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20vw;
`;
export const MovieDes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
export const MoiveImage = styled.img`
box-shadow: 10px 10px 20px #000;
`

export const MovieTitle = styled.p`
  font-size: 30px;
  color: white;
  font-weight: bold;
  letter-spacing: 3px;
`;
export const MovieRate = styled.p`
  font-size: 20px;
  color: white;
  font-weight: 400;
`;
