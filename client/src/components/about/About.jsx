import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: center;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    text-align: center;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const IconWrapper = styled(Box)`
    display: inline-block;
    margin-left: 5px;
`;

const About = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Hola !!! this is Chima's site</Typography>
                <Text variant="h5">
                    I'm a very good developer,
                    Blah... Blah... Blah... Blah...
                    <IconWrapper>
                        <Link href="https://github.com/ChinmayAsutkar" color="inherit" target="_blank">
                            <GitHub fontSize="large" />
                        </Link>
                    </IconWrapper>
                </Text>
                <Text variant="h5">
                    Follow me and increase my reach
                    <IconWrapper>
                        <Link href="https://www.instagram.com/chinma_404?igsh=bnU4b25seGpiaGdi" color="inherit" target="_blank">
                            <Instagram fontSize="large" />
                        </Link>
                    </IconWrapper>
                    <br />
                    Please don't send me an email
                    <IconWrapper>
                        <Link href="mailto:chinmayasutkar000@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email fontSize="large" />
                        </Link>
                    </IconWrapper>
                </Text>
            </Wrapper>
        </Box>
    );
}

export default About;
