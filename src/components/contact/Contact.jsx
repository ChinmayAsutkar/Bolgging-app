import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
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

const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Getting in touch is easy!</Typography>
                <Text variant="h5">
                    Reach out to me on
                    <IconWrapper>
                        <Link href="https://www.instagram.com/chinma_404?igsh=bnU4b25seGpiaGdi" color="inherit" target="_blank">
                            <Instagram fontSize="large" />
                        </Link>
                    </IconWrapper>
                    <br />
                    or send me an Email
                    <IconWrapper>
                        <Link href="mailto:chinmayasutkar000@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email fontSize="large" />
                        </Link>
                    </IconWrapper>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;
