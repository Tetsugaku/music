import styled from 'styled-components'
import style from '@/assets/global-style'

export const Container = styled.div`
  position: fixed;
  top: 90px;
  bottom: 0;
  width: 100%;
  .offical, .global {
    margin: 10px 5px;
    padding-top: 15px;
    font-weight: 700;
    font-size: ${style["font-size-m"]};
    color: ${style["font-color-desc"]};
  }
`;

export const List = styled.ul`
  margin-top: 10px;
  padding: 0 5px;
  display: ${props => props.globalRank? "flex": ''}
  flex-direction: row;
   justify-content: space-between;
  flex-wrap: wrap;
  background: ${style["background-color"]}
    &::after{
    content:"";
    display:block;
    width: 32vw;
  }
`

export const ListItem = styled.li`
   display: ${props => props.tracks.length ? "flex" : ""};
   border-bottom: 1px solid ${style["border-color"]};
   padding: 3px 0;
   .img_wrapper {
     width: ${props => props.tracks.length? "27vw" : "32vw"};
     height: ${props => props.tracks.length? "27vw" : "32vw"};
     position: relative;
     img{
       width: 100%;
       height: 100%;
       border-radius: 3px;
     }
         .decorate {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,43%,.4));
    }
    .update_frequecy{
      position: absolute;
      left: 7px;
      bottom: 7px;
      font-size: ${style["font-size-ss"]};
      color: ${style["font-color-light"]};
    }
   }

`
export const SongList = styled.ul`
   display: flex;
   flex: 1;
   flex-direction: column;
   justify-content: space-around;
   padding: 10px;
   flex-wrap: wrap;
   >li{
    font-size: ${style["font-size-s"]};
    color: grey;
  }
`                                                                