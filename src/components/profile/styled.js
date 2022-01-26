import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  //background-color: #9acd32;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;
  //color: yellow;
  font-family:    'Ubuntu' ,  Roman, Times, Serif ;
  font-weight: bold;

  h1 {
    font-size: 32px;
    font-weight: bold;
    //color: blue;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    //color: white;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    //color: white;
  }
`;

/*
export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }`;
*/


export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    //color: yellow;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
  border: 1px solid;
`;
