import styled from 'styled-components';

import fundoTopUrl from '../../assets/images/bg-pattern-top-desktop.svg';
import fundoBottomUrl from '../../assets/images/bg-pattern-bottom-desktop.svg';

import fundoTopMobileUrl from '../../assets/images/bg-pattern-top-mobile.svg';
import fundoBottomMobileUrl from '../../assets/images/bg-pattern-bottom-mobile.svg';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: url(${fundoTopUrl}), url(${fundoBottomUrl});
    background-repeat: no-repeat, no-repeat;
    background-position: top left, bottom right;

    main{
        max-width: 1100px;
        overflow: hidden;
        margin: 20px auto 20px;

        .top{
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            margin-bottom: 60px;

            .apresentation{
                max-width: 400px;

                h1{
                    color: ${props => props.theme.veryDarkMagenta};
                    font-size: 50px;
                    margin-bottom: 10px;
                }
                p{
                    color: ${props => props.theme.veryDarkMagenta};
                    line-height: 25px;
                }
            }
            .grades{
                ul li{
                    color: ${props => props.theme.veryDarkMagenta};
                    font-weight: bold;
                    padding: 15px 20px;
                    background: ${props => props.theme.lightGrayishMagenta};
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    width: 430px;
                                        
                    & + li {
                        margin-top: 10px;
                    }

                    span{
                        margin-left: 30px;
                    }

                    img{
                        & + img{
                            margin-left: 10px;
                        }
                    }
                }

                ul li#grade1{
                        margin-left: 0;
                    }
                ul li#grade2{
                    margin-left: 40px;
                }
                ul li#grade3{
                    margin-left: 80px;
                }

            }
        }


        .cards{
            display: flex;

            .card{
                background: ${props => props.theme.veryDarkMagenta};
                padding: 30px;
                border-radius: 8px;
                height: 230px;
                width: 400px;

                & + .card{
                    margin-left: 20px; 
                }

                .card-header{
                    display: flex;
                    align-items: center;
                    margin-bottom: 25px;

                    img{
                        width: 50px;
                        border-radius: 50%;
                        margin-right: 15px;
                    }

                    p{
                        color: ${props => props.theme.lightGrayishMagenta};
                        margin-bottom: 3px;
                    }
                    span{
                        color: ${props => props.theme.softPink};
                        font-weight: 300;
                    }
                }

                .card-text{
                    p{
                        color: ${props => props.theme.lightGrayishMagenta};
                        line-height: 25px;
                    }
                }
            }

            #card1{
                margin-top: 0;
            }
            #card2{
                margin-top: 30px;
            }   
            #card3{
                margin-top: 60px;
            }
        }

    }

    @media only screen and (max-width: 1200px){

        height: 100%;

        main{
            .cards{
                display: grid;
                grid-template-columns: 1fr 1fr;

                .card{
                    
                    & + .card{
                        margin-left: 0; 
                    }
                }

                #card3{
                    margin-top: 30px;
                }
                
            }
        }
    }

    @media only screen and (max-width: 1000px){

        main{
            .top{
                display: grid;
                grid-template-columns: 1fr;
                text-align:center;
                .apresentation{
                    max-width: 90%;
                    margin: 0 auto 50px;
                }
                .grades{
                    ul li#grade1 {
                        margin: 8px auto;
                    }
                    ul li#grade2{
                        margin: 8px auto;
                    }
                    ul li#grade3{
                        margin: 8px auto;
                    }
                }
            }

            .cards{
                display: grid;
                grid-template-columns: 1fr;
                margin-bottom: 50px;
                .card{
                    margin: 0 auto;
                    & + .card{
                        margin: 0 auto;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 500px){
        background: url(${fundoTopMobileUrl}), url(${fundoBottomMobileUrl});
        background-repeat: no-repeat, no-repeat;
        background-position: top left, bottom right;

        main{
            .top{
                .apresentation{
                    h1{
                        font-size: 40px;
                    }
                }

                .grades ul{

                    li{
                        width: 340px;
                        display: block;

                        div{
                            margin-bottom: 10px;
                        }

                        span{
                            margin-left: 0;
                        }
                    }
                }
            }

            .cards{
                .card{
                    width: 340px;
                }
            }
        }
    }

    @media only screen and (max-width: 350px){
        main{
            .top .grades ul li{
                width: 300px;
            }
            .cards .card{
                width: 300px;
                height: 280px;
            }
        }
    }
    @media only screen and (max-width: 300px){
        main{
            .top .grades ul li{
                width: 250px;
            }
            .cards .card{
                width: 250px;
                height: 330px;
            }
        }
    }
`;