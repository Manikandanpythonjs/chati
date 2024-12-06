
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { loginRequest } from './auth/auth-config';
import Sidebar from './components/components/Sidebar';
import Navbar from './components/components/Navbar';
import ChatArea from './components/components/ChatArea';
function App() {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const HandleLoginRedirect = () => {
    instance
      .loginRedirect({
        ...loginRequest,
        prompt: 'create',
      })
      .catch((error) => console.log(error));
  };

  const HandleLogoutRedirect = () => {
    instance.logoutPopup({
      postLogoutRedirectUri: "/",

    });
    window.location.reload()
  }
  return (
    <>
      <AuthenticatedTemplate>
        {activeAccount ? (
          <>
            <div className="flex h-screen">

              <Sidebar />


              <div className="flex-grow flex flex-col">

                <Navbar HandleLogoutRedirect={HandleLogoutRedirect} />

                <ChatArea />
              </div>
            </div>
            {/* <button onClick={HandleLogoutRedirect}>Logout</button>
            <p>You are signed in!</p> */}
          </>
        ) : null}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <>
          <div style={{ backgroundColor: "white", height: "100vh" }}>
            <div className='flex items-center justify-center flex-col h-full'>
              <button className='text-2xl font-semibold border-2 px-3 py-2 bg-blue-500 rounded-md text-white' onClick={HandleLoginRedirect}>Login</button>
              <p className='text-black font-semibold text-3xl'>Please sign in for use</p>
            </div>
          </div>

        </>

      </UnauthenticatedTemplate>
    </>
  );
}

export default App
