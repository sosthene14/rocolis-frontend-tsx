import { userIconImg } from "@/assets/images/Images";
import { chatBotTheme } from "@/common/ClassNames";
import { chatBotSteps } from "@/constants/variables";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

export const Bot = () => {
  return (
    <ThemeProvider theme={chatBotTheme}>
      <ChatBot
        bubbleOptionStyle={{ background: "#3b455e" }}
        bubbleStyle={{ background: "#10837f", width: "100%", color: "white" }}
        width="550px"
        headerTitle="ROCOLIS Assistant"
        floatingStyle={{ background: "#10837f", color: "white" }}
        floating={true}
        steps={chatBotSteps}
        footerStyle={{ display: "none" }}
        inputStyle={{ display: "none" }}
        submitButtonStyle={{ display: "none" }}
        userAvatar={userIconImg}
      />
    </ThemeProvider>
  );
};
