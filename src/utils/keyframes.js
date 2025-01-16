import { keyframes } from "@emotion/react";

export const pulsation = keyframes`
0%{
opacity: 0;
transform: scale(1);
}
80%{
  opacity: 1;
}
100%{
  transform: scale(1.5);
  opacity: 0;
}
`;

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(-20deg); 
  }
  30% {
    transform: rotate(20deg); 
  }
  45% {
    transform: rotate(0deg);
  }
`;
