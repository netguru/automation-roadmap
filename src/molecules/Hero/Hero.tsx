import React, { Fragment, useState } from "react";

import {
  FullscreenContainer,
  HeroContainer,
  IllustrationWrapper,
  Legend,
  PanelHolder,
  StyledDialog,
  StyledPanel,
  StyledTransition,
  Title,
} from "./Hero.styled";
import { ReactComponent as HeroImage } from "assets/akol_beseder.svg";
import HowToUse from "molecules/HowToUse/HowToUse";
import Button from "atoms/Button/Button";
import { Dialog, Transition } from "@headlessui/react";

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  function closeModal() {
    setIsPopupOpen(false);
  }

  return (
    <HeroContainer>
      <IllustrationWrapper>
        <HeroImage />
      </IllustrationWrapper>
      <Title>Automation roadmap </Title>
      <Legend>From zero to automation hero</Legend>
      <Button onClick={() => setIsPopupOpen(true)}>How to use</Button>
      <Transition appear show={isPopupOpen} as={Fragment}>
        <Dialog as={StyledDialog} onClose={closeModal}>
          <Transition.Child
            as={StyledTransition}
            enter="enter"
            enterFrom="enterFrom"
            enterTo="enterTo"
            leave="leave"
            leaveFrom="leaveFrom"
            leaveTo="leaveTo"
          />
          <PanelHolder>
            <FullscreenContainer>
              <Dialog.Panel as={StyledPanel}>
                <Dialog.Title as="h3">How to use this roadmap?</Dialog.Title>
                <HowToUse />
                <Button onClick={closeModal}>Close</Button>
              </Dialog.Panel>
            </FullscreenContainer>
          </PanelHolder>
        </Dialog>
      </Transition>
      <HowToUse />
    </HeroContainer>
  );
};

export default Hero;
