import React, { useContext, useState } from 'react';
import { AuthContext } from '../../authProvider.js';
// import { useDispatch } from 'react-redux';
// import { appLeague } from './leagueSlice';

import { PageHeader } from '../../pageHeader.js';

import YouTube from 'react-youtube';

import {
  useTheme,
  View,
  Heading,
  Card,
  Radio,
  RadioGroupField,
  Button,
} from '@aws-amplify/ui-react';

export default function Game({}) {
  let auth = useContext(AuthContext);

  const [t, setT] = useState();

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      rel: 0,
    },
  };

  const handleT = (e) => {
    t.seekTo(5, true);
  };

  const handleT2 = (e) => {
    t.seekTo(10, true);
  };

  const _onReady = (event) => {
    console.log(event.target);
    setT(event.target);
    event.target.pauseVideo();
    // event.target.seekTo(5, true)
  };

  const { tokens } = useTheme();
  return (
    <div>
      game
      <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={_onReady} />
      <button onClick={handleT}>handle T </button>
      <button onClick={handleT2}>handle T2 </button>
    </div>
  );
}
