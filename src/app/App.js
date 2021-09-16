
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import GlobalFonts from './fonts/font';
import GlobalStyle from './theme/globalStyles';
import Theme from './contexts/theme/Theme';
import * as Routes from './routes';
import { HomePage, ContactPage, ProjectsPage, ProjectPage } from './pages';


function App() {
  

  return (
    <Theme>
      <GlobalFonts />
      <GlobalStyle />
      <Router basename={'/SybrenDeBoever'}>
        <Switch>
        <Route exact path={Routes.LANDING} component={ HomePage }/>
        <Route from={Routes.HOME} to={Routes.LANDING}/>
        <Route exact path={Routes.PROJECTS} component={ProjectsPage}/>
        <Route exact path={Routes.PROJECTS_DETAILS} component={ProjectPage}/>
        <Route exact path={Routes.CONTACT} component={ ContactPage }/>
        </Switch>
      </Router>
        
    </Theme>
  );
}

export default App;
