import {
  Box,
  AppBar,
  Link,
  Toolbar,
  Container,
  Grid,
  Button,
  Avatar,
} from "@mui/material";
import React from "react";

type themeNav = {
  theme: string;
}

export const NavBar: React.FC<themeNav> = () => {
  const sxHover = {
    "&:hover": {
      color: "#000",
    },
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Link href="/">
                  <Avatar
                    src="../../public/medium-vector-logo.svg"
                    alt="medium-img"
                    sx={{ width: "200px", height: "100px" }}
                  />
                </Link>
              </Grid>
              <Grid
                item
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-around"}
                gap={3}
              >
                <Link href="/" sx={sxHover}>
                  Our story
                </Link>
                <Link href="/" sx={sxHover}>
                  Membership
                </Link>
                <Link href="/" sx={sxHover}>
                  Write
                </Link>
                <Link href="/" sx={sxHover}>
                  Sign In
                </Link>
                <Button href="" variant="outlined">Get started</Button>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
