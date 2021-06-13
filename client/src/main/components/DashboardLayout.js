import {useState} from 'react';
import {styled} from "@material-ui/styles";
import Content from "./Content";
import Album from "./Album";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

const DashboardLayoutRoot = styled('div')(
    ({theme}) => ({
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    })
);

const DashboardLayoutWrapper = styled('div')(
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

const DashboardLayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
});

const DashboardLayoutContent = styled('div')({
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
});

const DashboardLayout = () => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <DashboardLayoutRoot>
            {/*<DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <DashboardSidebar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />*/}
            <Header/>
            <BrowserRouter>
                <Sidebar/>
                <DashboardLayoutWrapper>
                    <DashboardLayoutContainer>
                        <DashboardLayoutContent>
                            <Switch>
                                <Route path="/profiles">
                                    <Album/>
                                </Route>
                                <Route path="/profile/:id">
                                    <Profile/>
                                </Route>
                            </Switch>
                        </DashboardLayoutContent>
                    </DashboardLayoutContainer>
                </DashboardLayoutWrapper>
            </BrowserRouter>
        </DashboardLayoutRoot>
    );
};

export default DashboardLayout;