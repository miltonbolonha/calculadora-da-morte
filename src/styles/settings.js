import { createGlobalStyle } from "styled-components"

import BG from "../../static/assets/images/bg.jpg"


const SettingStyles = createGlobalStyle`
  body {
    background-color: #000000;
    background-image: url(${BG});
    background-repeat: no-repeat;
    background-position: center right;
    background-attachment: fixed;
  }
`

export default SettingStyles