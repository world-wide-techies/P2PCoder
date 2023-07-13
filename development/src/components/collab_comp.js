import React from "react";
import CodingEditor from "./codingEditor";
import { useSessionContext } from "@/composables/sessionContext";
import { useEffect } from "react";
import WebCamRecorder from "./webcam_comp";
import { useStoreSession } from "@/composables/dbService";
import { appAuth } from "@/composables/firebaseConfig/config";

const Collab = ({ isCollabOn }) => {
  const { sessionData, setSessionData, storeSession, setStoreSession } =
    useSessionContext();

  const { sessionDetails, getStoreSessionDetails } = useStoreSession();
  const user = appAuth.currentUser;
  useEffect(() => {
    getStoreSessionDetails(sessionData.peerSessionId);
    console.log(storeSession);
    setStoreSession(storeSession);
    console.log("context", sessionData);
  }, [sessionData, storeSession]);

  return (
    <div className="w-full flex">
      <div className={isCollabOn ? "w-2/3 xl:w-3/4" : "w-[95vw]"}>
        <CodingEditor peerid={storeSession.peerId} />
        {console.log(sessionData)}
      </div>
      {isCollabOn && (
        <div className="w-1/3 xl:w-1/4 flex flex-col items-start justify-start p-6 space-y-12 h-full">
          <div>
            <p className="text-gray-400">Peer Session ID</p>
            <div className="flex space-x-3 items-center">
              <p className="text-2xl font-bold text-gray-400">
                {storeSession.peerId}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 hover:cursor-pointer hover:text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                />
              </svg>
            </div>
          </div>
          <div className="space-y-6">
            {/* <WebCamRecorder
              onBlobChanged={() => {}}
              peername={storeSession.collaboratorName}
              isUser={true}
            /> */}

            <WebCamRecorder
              onBlobChanged={() => {}}
              peerDetails={{
                codersName: storeSession.codersName,
                peerId: storeSession.peerId,
                collaboratorsName: storeSession.collaboratorsName,
              }}
              isUser={true}
            />
          </div>
          <div className="flex items-center w-full justify-center">
            <button
              onClick={() => {}}
              className="bg-gray-800 p-2 rounded-2xl hover:bg-gray-700"
            >
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="call">
                  <g id="vuesax/linear/call">
                    <g id="call_2">
                      <g id="call_3">
                        <path
                          id="Vector"
                          d="M6.83444 23.8374C6.52512 23.5492 6.27127 23.1842 6.09807 22.7499C5.92487 22.3156 5.80888 21.8544 5.76613 21.349C5.69448 20.4956 5.79175 19.7194 6.06535 18.9951C6.33095 18.2794 6.73968 17.6168 7.30014 17.0154C8.11682 16.139 9.19575 15.3946 10.5375 14.7989C11.8793 14.2031 13.3671 13.7435 14.993 13.4285C16.6355 13.113 18.3073 12.9211 20.025 12.8522C21.7432 12.7999 23.4244 12.8735 25.0684 13.0731C26.7045 13.2814 28.2124 13.627 29.5676 14.1194C30.9314 14.6197 32.0601 15.2862 32.9537 16.1189C33.538 16.6634 34.0004 17.2869 34.3237 17.9735C34.6557 18.6681 34.8326 19.443 34.8378 20.2987C34.8667 21.353 34.5726 22.2026 33.9801 22.8385C33.7559 23.079 33.4802 23.2716 33.1769 23.3903C32.8656 23.5176 32.5268 23.5711 32.1593 23.5176L27.4922 22.8928C27.1333 22.8473 26.8316 22.7748 26.5705 22.676C26.318 22.5852 26.0975 22.46 25.9343 22.3079C25.7281 22.1157 25.5779 21.8634 25.4924 21.559C25.3988 21.2631 25.3448 20.9077 25.3307 20.5094L25.2604 19.2238C25.254 19.0413 25.1823 18.8942 25.0449 18.7661C24.9761 18.702 24.908 18.6546 24.8232 18.6077C24.7305 18.5694 24.6549 18.5472 24.5873 18.5163C24.1597 18.4068 23.542 18.3288 22.7429 18.2905C21.9358 18.2608 21.0961 18.2489 20.2244 18.2713C19.3367 18.311 18.4993 18.3654 17.6883 18.4605C16.8939 18.555 16.2919 18.6843 15.865 18.8323C15.8078 18.8592 15.734 18.8868 15.6522 18.9229C15.5623 18.9676 15.4897 19.0283 15.4176 19.1057C15.2815 19.2517 15.229 19.4115 15.2354 19.594L15.2713 20.8475C15.286 21.2625 15.257 21.6208 15.176 21.9145C15.1121 22.2242 14.9881 22.4779 14.788 22.6927C14.6358 22.856 14.4413 22.9958 14.1879 23.1127C13.9344 23.2297 13.6385 23.3232 13.2923 23.4019L8.62298 24.3643C8.26015 24.4436 7.9356 24.4301 7.63272 24.3245C7.33786 24.2102 7.07501 24.0616 6.83444 23.8374Z"
                          fill="#EC6C6A"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collab;
