import React from 'react';
import Contacts from "./src/component/Contacts";
import {Router, Scene, Stack} from "react-native-router-flux";
import Detail from "./src/component/Detail";

const AppRouter = () => (
  <Router>
    <Stack key="root">
      <Scene
        key="contacts"
        component={Contacts}
        title="通讯录"
        initial
      />
      <Scene
        key="detail"
        component={Detail}
        title="详情"
      />
    </Stack>
  </Router>
);

export default AppRouter;