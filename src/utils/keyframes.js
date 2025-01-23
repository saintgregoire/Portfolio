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

export const frame = keyframes`
  0% {
    border-radius: 69% 31% 68% 32% / 44% 64% 36% 56%;
  }
  25% {
    border-radius: 45% 55% 23% 77% / 85% 79% 21% 15%;
  }
  50% {
    border-radius: 66% 34% 50% 50% / 44% 34% 66% 56%;
    }
  75% {
    border-radius: 18% 82% 79% 21% / 76% 68% 32% 24%;
  }
  100% {
    border-radius: 69% 31% 68% 32% / 44% 64% 36% 56%;
  }
`;

export const cardFlip = keyframes`
0% {
    transform: scale(1) rotateX(0);
  }
  50% {
    transform: scale(1.2) rotateX(-90deg);
  }
  100% {
    transform: scale(1) rotateX(-180deg);
  }
`
