import React,{FC} from 'react'

type BoardBackgroundProps = {
  width:number,
  height:number
}

const BoardBackground:FC<BoardBackgroundProps> = ({width,height}) => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 800 800" opacity="1" width={width} height={height}><g stroke-width="5.25" stroke="hsla(0, 0%, 71%, 1.00)" fill="none"><circle r="6.5" cx="0" cy="0" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="66.66666666666667" cy="0" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="133.33333333333334" cy="0" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="200" cy="0" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="266.6666666666667" cy="0" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="333.33333333333337" cy="0" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="400.00000000000006" cy="0" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="466.66666666666674" cy="0" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="533.3333333333334" cy="0" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="600" cy="0" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="666.6666666666666" cy="0" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="733.3333333333333" cy="0" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="799.9999999999999" cy="0" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="0" cy="66.66666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="66.66666666666667" cy="66.66666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="133.33333333333334" cy="66.66666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="200" cy="66.66666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="266.6666666666667" cy="66.66666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="333.33333333333337" cy="66.66666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="400.00000000000006" cy="66.66666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="466.66666666666674" cy="66.66666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="533.3333333333334" cy="66.66666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="600" cy="66.66666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="666.6666666666666" cy="66.66666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="733.3333333333333" cy="66.66666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="799.9999999999999" cy="66.66666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="0" cy="133.33333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="66.66666666666667" cy="133.33333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="133.33333333333334" cy="133.33333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="200" cy="133.33333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="266.6666666666667" cy="133.33333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="333.33333333333337" cy="133.33333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="400.00000000000006" cy="133.33333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="466.66666666666674" cy="133.33333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="533.3333333333334" cy="133.33333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="600" cy="133.33333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="666.6666666666666" cy="133.33333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="733.3333333333333" cy="133.33333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="799.9999999999999" cy="133.33333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="0" cy="200" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="66.66666666666667" cy="200" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="133.33333333333334" cy="200" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="200" cy="200" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="266.6666666666667" cy="200" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="333.33333333333337" cy="200" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="400.00000000000006" cy="200" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="466.66666666666674" cy="200" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="533.3333333333334" cy="200" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="600" cy="200" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="666.6666666666666" cy="200" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="733.3333333333333" cy="200" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="799.9999999999999" cy="200" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="0" cy="266.6666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="66.66666666666667" cy="266.6666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="133.33333333333334" cy="266.6666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="200" cy="266.6666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="266.6666666666667" cy="266.6666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="333.33333333333337" cy="266.6666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="400.00000000000006" cy="266.6666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="466.66666666666674" cy="266.6666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="533.3333333333334" cy="266.6666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="600" cy="266.6666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="666.6666666666666" cy="266.6666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="733.3333333333333" cy="266.6666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="799.9999999999999" cy="266.6666666666667" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="0" cy="333.33333333333337" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="66.66666666666667" cy="333.33333333333337" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="133.33333333333334" cy="333.33333333333337" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="200" cy="333.33333333333337" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="266.6666666666667" cy="333.33333333333337" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="333.33333333333337" cy="333.33333333333337" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="400.00000000000006" cy="333.33333333333337" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="466.66666666666674" cy="333.33333333333337" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="533.3333333333334" cy="333.33333333333337" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="600" cy="333.33333333333337" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="666.6666666666666" cy="333.33333333333337" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="733.3333333333333" cy="333.33333333333337" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="799.9999999999999" cy="333.33333333333337" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="0" cy="400.00000000000006" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="66.66666666666667" cy="400.00000000000006" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="133.33333333333334" cy="400.00000000000006" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="200" cy="400.00000000000006" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="266.6666666666667" cy="400.00000000000006" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="333.33333333333337" cy="400.00000000000006" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="400.00000000000006" cy="400.00000000000006" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="466.66666666666674" cy="400.00000000000006" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="533.3333333333334" cy="400.00000000000006" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="600" cy="400.00000000000006" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="666.6666666666666" cy="400.00000000000006" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="733.3333333333333" cy="400.00000000000006" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="799.9999999999999" cy="400.00000000000006" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="0" cy="466.66666666666674" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="66.66666666666667" cy="466.66666666666674" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="133.33333333333334" cy="466.66666666666674" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="200" cy="466.66666666666674" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="266.6666666666667" cy="466.66666666666674" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="333.33333333333337" cy="466.66666666666674" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="400.00000000000006" cy="466.66666666666674" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="466.66666666666674" cy="466.66666666666674" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="533.3333333333334" cy="466.66666666666674" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="600" cy="466.66666666666674" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="666.6666666666666" cy="466.66666666666674" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="733.3333333333333" cy="466.66666666666674" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="799.9999999999999" cy="466.66666666666674" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="0" cy="533.3333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="66.66666666666667" cy="533.3333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="133.33333333333334" cy="533.3333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="200" cy="533.3333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="266.6666666666667" cy="533.3333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="333.33333333333337" cy="533.3333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="400.00000000000006" cy="533.3333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="466.66666666666674" cy="533.3333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="533.3333333333334" cy="533.3333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="600" cy="533.3333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="666.6666666666666" cy="533.3333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="733.3333333333333" cy="533.3333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="799.9999999999999" cy="533.3333333333334" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="0" cy="600" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="66.66666666666667" cy="600" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="133.33333333333334" cy="600" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="200" cy="600" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="266.6666666666667" cy="600" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="333.33333333333337" cy="600" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="400.00000000000006" cy="600" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="466.66666666666674" cy="600" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="533.3333333333334" cy="600" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="600" cy="600" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="666.6666666666666" cy="600" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="733.3333333333333" cy="600" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="799.9999999999999" cy="600" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="0" cy="666.6666666666666" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="66.66666666666667" cy="666.6666666666666" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="133.33333333333334" cy="666.6666666666666" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="200" cy="666.6666666666666" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="266.6666666666667" cy="666.6666666666666" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="333.33333333333337" cy="666.6666666666666" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="400.00000000000006" cy="666.6666666666666" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="466.66666666666674" cy="666.6666666666666" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="533.3333333333334" cy="666.6666666666666" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="600" cy="666.6666666666666" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="666.6666666666666" cy="666.6666666666666" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="733.3333333333333" cy="666.6666666666666" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="799.9999999999999" cy="666.6666666666666" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="0" cy="733.3333333333333" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="66.66666666666667" cy="733.3333333333333" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="133.33333333333334" cy="733.3333333333333" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="200" cy="733.3333333333333" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="266.6666666666667" cy="733.3333333333333" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="333.33333333333337" cy="733.3333333333333" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="400.00000000000006" cy="733.3333333333333" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="466.66666666666674" cy="733.3333333333333" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="533.3333333333334" cy="733.3333333333333" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="600" cy="733.3333333333333" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="666.6666666666666" cy="733.3333333333333" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="733.3333333333333" cy="733.3333333333333" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="799.9999999999999" cy="733.3333333333333" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="0" cy="799.9999999999999" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="66.66666666666667" cy="799.9999999999999" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="133.33333333333334" cy="799.9999999999999" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="200" cy="799.9999999999999" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="266.6666666666667" cy="799.9999999999999" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="333.33333333333337" cy="799.9999999999999" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="400.00000000000006" cy="799.9999999999999" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="466.66666666666674" cy="799.9999999999999" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="533.3333333333334" cy="799.9999999999999" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="600" cy="799.9999999999999" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="666.6666666666666" cy="799.9999999999999" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="733.3333333333333" cy="799.9999999999999" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle><circle r="6.5" cx="799.9999999999999" cy="799.9999999999999" fill="hsla(0, 0%, 71%, 1.00)" stroke="none"></circle></g></svg>
    </>
  )
}

export default BoardBackground