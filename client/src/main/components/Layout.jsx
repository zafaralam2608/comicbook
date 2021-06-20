import {useState} from 'react';
import {styled} from "@material-ui/styles";
import Album from "./Album";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const LayoutRoot = styled('div')(
    ({theme}) => ({
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    })
);

const LayoutWrapper = styled('div')(
    ({theme}) => ({
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 75,
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 120
        }
    })
);

const LayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
});

const LayoutContent = styled('div')({
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
});

const Layout = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <LayoutRoot>
            {/*<Navbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <Sidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />*/}
            <Header/>
            <Sidebar
                onNavClose={() => setMobileNavOpen(false)}
                openNav={isMobileNavOpen}
            />
            <BrowserRouter>
                <LayoutWrapper>
                    <LayoutContainer>
                        <LayoutContent>
                            <Switch>
                                <Route path="/profiles">
                                    <Album/>
                                </Route>
                                <Route path="/profile/:id">
                                    <Profile/>
                                </Route>
                            </Switch>
                        </LayoutContent>
                    </LayoutContainer>
                </LayoutWrapper>
            </BrowserRouter>
        </LayoutRoot>
    );
};

export default Layout;
