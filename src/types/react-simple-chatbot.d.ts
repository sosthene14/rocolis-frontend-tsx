// src/types/react-simple-chatbot.d.ts
declare module 'react-simple-chatbot' {
    import { ComponentType, ReactNode } from 'react';
  
    export interface Step {
      id: string | number;
      message?: string;
      trigger?: string | number;
      end?: boolean;
      options?: { value: string | number; label: string; trigger: string | number }[];
      user?: boolean;
      validator?: (value: string) => boolean | string;
      delay?: number;
      waitAction?: boolean;
      asMessage?: boolean;
      component?: ReactNode;
    }
  
    export interface ChatbotProps {
      steps: Step[];
      botAvatar?: string;
      botDelay?: number;
      botName?: string;
      bubbleStyle?: React.CSSProperties;
      bubbleOptionStyle?: React.CSSProperties;
      className?: string;
      contentStyle?: React.CSSProperties;
      customDelay?: number;
      customStyle?: React.CSSProperties;
      enableMobileAutoFocus?: boolean;
      footerStyle?: React.CSSProperties;
      headerComponent?: ReactNode;
      headerTitle?: string;
      hideBotAvatar?: boolean;
      hideUserAvatar?: boolean;
      hideHeader?: boolean;
      placeholder?: string;
      recognitionEnable?: boolean;
      recognitionLang?: string;
      recognitionPlaceholder?: string;
      speechSynthesis?: boolean;
      stepsOrder?: 'ascending' | 'descending';
      submitButtonStyle?: React.CSSProperties;
      userAvatar?: string;
      inputStyle?:React.CSSProperties;
      floatingStyle?: React.CSSProperties;
      floating?:boolean;
      userDelay?: number;
      userName?: string;
      width?: string | number;
      height?: string | number;
    }
  
    const Chatbot: ComponentType<ChatbotProps>;
  
    export default Chatbot;
  }
  