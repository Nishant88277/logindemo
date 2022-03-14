import { createGlobalStyle } from "styled-components";

export const PhotosStyle = createGlobalStyle`
    .mainContainer{
        display: flex;
        width: 100%;
        height: auto;
        flex-direction: column;
        padding: 20px;
        .photoContainer{
            width: 100%;
            display: flex;
            height: auto;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 10px 0px 10px 0px;
            .photoCon{
                width: 280px;
                margin: 10px;
                .photo{
                    width: 100%;
                }
            }
            
        }
        .buttonSection{
            display: flex;
            width: 100%;
            justify-content: center;
            height: auto;
            button{
                min-width: 100px;
                margin: 0px 10px 0px 10px;
                background-color: white;
                border: 2px solid;
                border-radius: 5px;
            }
        }
    }
`;
