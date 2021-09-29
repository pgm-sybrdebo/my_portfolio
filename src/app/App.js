import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';
import GlobalFonts from './fonts/font';
import GlobalStyle from './theme/globalStyles';
import Theme from './contexts/theme/Theme';
import * as Routes from './routes';
import { HomePage, ContactPage, ProjectsPage, ProjectPage, AboutPage } from './pages';


function App() {
  

  return (
    <Theme>
      <GlobalFonts />
      <GlobalStyle />
      <BrowserRouter basename={'/SybrenDeBoever'}>
        <Route render={({ location }) => {
          return (
            <PageTransition 
              preset="cubeToRight"
              transitionKey={location.pathname}
            >
               <Switch location={location}>
                  <Route exact path={Routes.LANDING} component={ HomePage }/>
                  <Route from={Routes.HOME} to={Routes.LANDING}/>
                  <Route exact path={Routes.PROJECTS} component={ProjectsPage}/>
                  <Route exact path={Routes.PROJECTS_DETAILS} component={ProjectPage}/>
                  <Route exact path={Routes.ABOUT} component={ AboutPage } />
                  <Route exact path={Routes.CONTACT} component={ ContactPage }/>
                </Switch>
            </PageTransition>
          );
        }}
       />
      </BrowserRouter>
    </Theme>
  );
}

export default App;
