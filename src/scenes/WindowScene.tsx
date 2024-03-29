import React from 'react'
import Window from '../components/Window'
import SkyImage from '../media/computer.jpg'
import styled from 'styled-components';
import { Scene } from 'react-scrollmagic';
import color from '../constants/colors';
import Title from '../typography/Title';
import interpolate from '../utils/interpolate';
import format from '../constants/format';
import { Tween } from 'react-gsap';
import { Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const InteriorWall = styled(Stack)`
  background-color: ${color.BACKGROUND};
  width:calc(100vw + 1px);
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
`

const InsideSky = styled.div`
  width: 90%;
  height: 90%;
  background-image: url(${SkyImage});
  z-index:1;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top:0;
  border-radius:500px;
  background-size: cover;
  background-attachment: fixed;
  
  @media (max-width: ${format.MOBILE_BREAKPOINT_PIXELS}px) {
    background-image: none;
    background: ${color.SKY_IMAGE_COLOR};  
  }
`

const OutsideSky = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${SkyImage});
  z-index:-1;
  position: fixed;
  left: 0;
  top:0;
  background-size: cover;
  visibility: hidden;
  background-attachment: initial;
`

const Stacker = styled.div`
  position:relative;
`

const FadeOut = styled.div`
  position:absolute;
  top:0;
  left:0;
  width: calc(100vw + 1px);
  height:100vh;
  background-color:${color.BACKGROUND};
  z-index:2;
`

const RunwayLight = styled.div`
  width: 5px;
  height: 5px;
  background-color: ${color.BACKGROUND};
  border-radius: 50%;
`

const Ghost = styled.div`
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
`

const ScrollDown = () => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px',
    }}>
        <Stack gap={3} style={{ maxWidth: 'fit-content', alignItems: 'center' }}>
            <Tween to={{ transform: 'scale(1.2)', background: color.HIGHLIGHT }} duration={1} stagger={0.2} repeat={-1} ease="elastic.out(0.2, 0.1)">
                <RunwayLight />
                <RunwayLight />
            </Tween>
            <div>
                <Tween to={{ transform: 'scale(1.2)', color: color.HIGHLIGHT }} duration={1} stagger={0.2} repeat={-1} ease="elastic.out(0.2, 0.1)">
                    <Ghost />
                    <Ghost />
                    <div style={{ color: color.BACKGROUND }}><FontAwesomeIcon icon={faChevronDown} size="1x" /></div>
                </Tween>
            </div>
        </Stack>
    </div>
);

type CloudTitleProps = {
    children: React.ReactNode;
    opacity: number;
    offset: number;
}

const CloudTitle = (props: CloudTitleProps) => {
    return (
        <div style={{
            opacity: props.opacity,
            position: 'absolute',
            top: `calc(15% - ${props.offset}px)`,
            left: '15%',
        }}>
            <Title>
                {props.children}
            </Title>
        </div>
    )
}

const WindowScene = () => {
    return (
        <Scene
            triggerHook="onLeave"
            duration="3200vh"
            pin
        >
            {(progress: number) => (
                <div>
                    <InteriorWall
                        style={{
                            opacity:
                                interpolate({
                                    start: { x: 0.3, y: 1 },
                                    end: { x: 0.45, y: 0 },
                                }, progress)
                        }}
                    >
                        <Stacker
                            style={{
                                width: (
                                    (window.innerHeight < window.innerWidth)
                                        ? `${interpolate({
                                            start: { x: 0.15, y: 25 },
                                            end: { x: 0.3, y: 100 },
                                        }, progress)
                                        }%`
                                        : `${interpolate({
                                            start: { x: 0.15, y: 50 },
                                            end: { x: 0.3, y: 100 },
                                        }, progress)
                                        }%`),
                            }}
                        >
                            <Window
                                shadePercentage={
                                    interpolate({
                                        start: { x: 0, y: 60 },
                                        end: { x: 0.15, y: 20 },
                                    }, progress)
                                }
                            />
                            <InsideSky />
                        </Stacker>
                        <ScrollDown />
                    </InteriorWall>
                    <CloudTitle
                        opacity={
                            interpolate({
                                start: { x: 0.45, y: 0 },
                                end: { x: 0.6, y: 1 },
                            }, progress)
                        }
                        offset={
                            interpolate({
                                start: { x: 0.45, y: 50 },
                                end: { x: 0.6, y: 0 },
                            }, progress)
                        }
                    >
                        Welcome Aboard.
                    </CloudTitle>
                    <FadeOut style={{
                        opacity:
                            interpolate({
                                start: { x: 0.8, y: 0 },
                                end: { x: 1, y: 1 },
                            }, progress),
                    }} />
                    <OutsideSky style={{
                        visibility: progress < 1 ? 'visible' : 'hidden',
                    }} />
                </div>
            )}
        </Scene>
    )
}

export default WindowScene