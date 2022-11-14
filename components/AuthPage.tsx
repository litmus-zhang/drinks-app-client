import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import LoginForm from "../components/Forms/LoginForm";
import RegisterForm from "../components/Forms/RegisterForm";

const AuthPage = () => {
  return (
    <div className="w-96 m-auto my-4 bg-white shadow-xl p-2">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Login</Tab>
          <Tab>Register</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <LoginForm />
          </TabPanel>
          <TabPanel>
            <RegisterForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default AuthPage;
