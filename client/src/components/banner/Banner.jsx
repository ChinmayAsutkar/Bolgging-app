import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
    }
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1;
    transition: color 0.3s ease;

    ${Image}:hover & {
        color: #ff5722; /* Change color on hover */
    }
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 1;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOG</Heading>
            <SubHeading>what's on your mind</SubHeading>
        </Image>
    )
}

export default Banner;
